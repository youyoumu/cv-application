import ExperienceItem from './ExperienceItem'
import { useState } from 'react'

function Experience({ editMode }) {
  const [ExperienceItems, setExperienceItems] = useState([
    {
      id: 0
    }
  ])

  const renderExperienceItems = ExperienceItems.map((item) => {
    return <ExperienceItem key={item.id} editMode={editMode} />
  })

  const addNewExperienceItem = () => {
    const lastId = ExperienceItems[ExperienceItems.length - 1].id
    setExperienceItems([...ExperienceItems, { id: lastId + 1 }])
  }

  return (
    <div>
      <div className="text-3xl font-bold mb-2 underline">Experience</div>
      {renderExperienceItems}
      {editMode && (
        <div className="w-full flex justify-end">
          <button className="btn mt-4" onClick={addNewExperienceItem}>
            Add experience
          </button>
        </div>
      )}
    </div>
  )
}

export default Experience
