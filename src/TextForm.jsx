import { useState } from 'react'

function TextForm({
  text,
  onChangeCallback,
  className = '',
  Icon = null,
  parentClassName = ''
}) {
  const [value, setValue] = useState(text)

  return (
    <div className={`flex justify-items-center ${parentClassName}`}>
      {Icon && <Icon />}
      <input
        className={`hover:bg-base-200 focus:outline-none w-full ${className}`}
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
