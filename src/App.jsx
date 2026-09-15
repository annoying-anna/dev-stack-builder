import { useCallback, useEffect, useMemo, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'

import Navbar from './components/Navbar'
import Banner from './components/Banner'
import TechnologiesSection from './components/TechnologiesSection'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

/**
 * App owns every piece of shared state:
 *  - the technology catalogue that is loaded from the JSON file
 *  - the loading and error states of that request
 *  - the user's selected stack
 *
 * Child components receive data through props and report user actions back
 * through callback props, which keeps the data flow one-directional.
 */
const App = () => {
  const [technologies, setTechnologies] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [stack, setStack] = useState([])

  /* ---------------------------------------------------------------
     Load the technology data from the JSON file in /public.
     --------------------------------------------------------------- */
  const loadTechnologies = useCallback(async () => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch(
        `${import.meta.env.BASE_URL}technologies.json`,
      )

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`)
      }

      const data = await response.json()
      setTechnologies(data)
    } catch (err) {
      setError(err.message || 'Something went wrong while reading the data.')
      setTechnologies([])
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    loadTechnologies()
  }, [loadTechnologies])

  /* --------------------------- derived values --------------------------- */
  const selectedIds = useMemo(() => stack.map((item) => item.id), [stack])

  const categoryCount = useMemo(
    () => new Set(technologies.map((item) => item.category)).size,
    [technologies],
  )

  /* ----------------------------- stack actions ----------------------------- */
  const handleAddToStack = (technology) => {
    // the same technology can never be added twice
    if (stack.some((item) => item.id === technology.id)) {
      toast.warn(`${technology.name} is already in your stack.`, {
        toastId: `duplicate-${technology.id}`,
      })
      return
    }

    setStack((previousStack) => [...previousStack, technology])
    toast.success(`${technology.name} added to your stack.`)
  }

  const handleRemoveFromStack = (technology) => {
    setStack((previousStack) =>
      previousStack.filter((item) => item.id !== technology.id),
    )
    toast.info(`${technology.name} removed from your stack.`)
  }

  const handleRemoveAll = () => {
    if (stack.length === 0) {
      toast.warn('Your stack is already empty.', { toastId: 'stack-empty' })
      return
    }

    setStack([])
    toast.warn('All technologies removed from your stack.', {
      toastId: 'stack-cleared',
    })
  }

  /* ------------------------------ nav actions ------------------------------ */
  const handleSignIn = () => {
    toast.info('Sign in is a visual placeholder — the stack builder is open to everyone.', {
      toastId: 'sign-in',
    })
  }

  const handleSignUp = () => {
    toast.info('Account creation is not part of this demo. Jump in and start building your stack.', {
      toastId: 'sign-up',
    })
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar onSignIn={handleSignIn} onSignUp={handleSignUp} />

      <main>
        <Banner
          technologyCount={technologies.length}
          categoryCount={categoryCount}
        />

        <TechnologiesSection
          technologies={technologies}
          isLoading={isLoading}
          error={error}
          stack={stack}
          selectedIds={selectedIds}
          onAdd={handleAddToStack}
          onRemove={handleRemoveFromStack}
          onRemoveAll={handleRemoveAll}
          onRetry={loadTechnologies}
        />

        <Projects />

        <About
          technologyCount={technologies.length}
          categoryCount={categoryCount}
        />

        <Contact />
      </main>

      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={2600}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
      />
    </div>
  )
}

export default App
