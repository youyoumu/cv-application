import { useState } from 'react'

function TextForm({ text, onChangeCallback }) {
  const [value, setValue] = useState(text)

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value)
          onChangeCallback(e.target.value)
        }}
      />
    </div>
  )
}
export default TextForm
