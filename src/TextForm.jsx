import { useState } from 'react'

function TextForm({
  text,
  onChangeCallback,
  className = '',
  height = 'h-4',
  alignt = 'text-left'
}) {
  const [value, setValue] = useState(text)

  return (
    <div className={className}>
      <input
        className={`hover:bg-base-200 ${height} w-full ${alignt}`}
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
