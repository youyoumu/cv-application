import General from './General'
import { useState } from 'react'

function Cv() {
  const [editMode, setEditMode] = useState(false)

  return (
    <div className="bg-base-100 max-w-screen-md mx-auto p-16">
      <div>
        <General editMode={editMode} />
      </div>
      <input
        type="checkbox"
        className="toggle"
        checked={editMode}
        onChange={() => setEditMode(!editMode)}
      />
    </div>
  )
}
export default Cv
