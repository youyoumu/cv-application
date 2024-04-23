import General from './General'
import Experience from './Experience'
import { useState } from 'react'
import Education from './Education'

function Cv() {
  const [editMode, setEditMode] = useState(false)

  return (
    <div className="bg-base-100 max-w-screen-md mx-auto p-16 shadow-md">
      <div className="w-full flex justify-end gap-2">
        <div>Edit mode</div>
        <input
          type="checkbox"
          className="toggle"
          checked={editMode}
          onChange={() => setEditMode(!editMode)}
        />
      </div>
      <div>
        <General editMode={editMode} />
        <Experience editMode={editMode} />
        <Education editMode={editMode} />
      </div>
    </div>
  )
}
export default Cv
