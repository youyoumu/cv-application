import General from './General'
import { useState } from 'react'

function Cv() {
  const [editMode, setEditMode] = useState(false)

  return (
    <div>
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
