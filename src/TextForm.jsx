import { useState } from 'react'

function TextForm({ text, onChangeCallback, className = '' }) {
  const [value, setValue] = useState(text)

  return (
    <input
      className={`hover:bg-base-200 focus:outline-none w-full ${className}`}
      type="text"
      value={value}
      onChange={(e) => {
        setValue(e.target.value)
        onChangeCallback(e.target.value)
      }}
    />
  )
}
export default TextForm
