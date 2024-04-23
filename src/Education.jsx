import EducationItem from './EducationItem'
import { useState } from 'react'

function Education({ editMode }) {
  const [EducationItems, setEducationItems] = useState([
    {
      id: 0
    }
  ])

  const deleteCallback = (id) => {
    const NewEducationItems = [...EducationItems]
    setEducationItems(NewEducationItems.filter((item) => item.id !== id))
  }

  const renderEducationItems = EducationItems.map((item) => {
    const isLastItem = item === EducationItems[EducationItems.length - 1]
    const isSingleItem = EducationItems.length === 1

    return (
      <EducationItem
        key={item.id}
        editMode={editMode}
        isLastItem={isLastItem}
        deleteCallback={deleteCallback}
        id={item.id}
        isSingleItem={isSingleItem}
      />
    )
  })

  const addNewEducationItem = () => {
    const lastId = EducationItems[EducationItems.length - 1].id
    setEducationItems([...EducationItems, { id: lastId + 1 }])
  }

  return (
    <div>
      <div className="text-3xl font-bold mb-2 border-b-2 border-black">
        Education
      </div>
      <div className="pl-4">{renderEducationItems}</div>
      {editMode && (
        <div className="w-full flex justify-center">
          <button className="btn mt-4" onClick={addNewEducationItem}>
            Add education
          </button>
        </div>
      )}
    </div>
  )
}

export default Education
