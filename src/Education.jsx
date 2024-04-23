import EducationItem from './EducationItem'
import { useState } from 'react'

function Education({ editMode }) {
  const [EducationItems, setEducationItems] = useState([
    {
      id: 0
    }
  ])

  const renderEducationItems = EducationItems.map((item) => {
    return <EducationItem key={item.id} editMode={editMode} />
  })

  const addNewEducationItem = () => {
    const lastId = EducationItems[EducationItems.length - 1].id
    setEducationItems([...EducationItems, { id: lastId + 1 }])
  }

  return (
    <div>
      <div className="text-3xl font-bold mb-2 underline">Education</div>
      {renderEducationItems}
      {editMode && (
        <div className="w-full flex justify-end">
          <button className="btn mt-4" onClick={addNewEducationItem}>
            Add education
          </button>
        </div>
      )}
    </div>
  )
}

export default Education
