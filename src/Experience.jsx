import ExperienceItem from './ExperienceItem'
import { useState } from 'react'

function Experience({ editMode }) {
  const [ExperienceItems, setExperienceItems] = useState([
    {
      id: 0
    }
  ])

  const deleteCallback = (id) => {
    const NewExperienceItems = [...ExperienceItems]
    setExperienceItems(NewExperienceItems.filter((item) => item.id !== id))
  }

  const renderExperienceItems = ExperienceItems.map((item) => {
    const isLastItem = item === ExperienceItems[ExperienceItems.length - 1]
    const isSingleItem = ExperienceItems.length === 1
    return (
      <ExperienceItem
        key={item.id}
        editMode={editMode}
        isLastItem={isLastItem}
        deleteCallback={deleteCallback}
        id={item.id}
        isSingleItem={isSingleItem}
      />
    )
  })

  const addNewExperienceItem = () => {
    const lastId = ExperienceItems[ExperienceItems.length - 1].id
    setExperienceItems([...ExperienceItems, { id: lastId + 1 }])
  }

  return (
    <div className="mb-8">
      <div className="text-3xl font-bold mb-2 border-b-2 border-black">
        Experience
      </div>
      <div className="pl-4">{renderExperienceItems}</div>
      {editMode && (
        <div className="w-full flex justify-center">
          <button className="btn mt-4" onClick={addNewExperienceItem}>
            Add experience
          </button>
        </div>
      )}
    </div>
  )
}

export default Experience
