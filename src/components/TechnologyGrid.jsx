import TechnologyCard from './TechnologyCard'

/**
 * Responsive grid of technology cards.
 * 1 column on mobile, 2 on tablet, 3 on desktop.
 */
const TechnologyGrid = ({ technologies, selectedIds, onAdd }) => {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {technologies.map((technology) => (
        <TechnologyCard
          key={technology.id}
          technology={technology}
          isAdded={selectedIds.includes(technology.id)}
          onAdd={onAdd}
        />
      ))}
    </div>
  )
}

export default TechnologyGrid