import TextForm from './TextForm'
import { useState } from 'react'

function EducationItem({ editMode, isLastItem }) {
  const [title, setTitle] = useState('Title of Study')
  const [schoolName, setSchoolName] = useState('School Name')
  const [date, setDate] = useState('1998 - 1999')
  const addBorder = isLastItem
    ? ''
    : 'border-b-2 border-dashed border-slate-300'

  if (editMode) {
    return (
      <div className={`${addBorder} mb-4 pb-2`}>
        <TextForm
          text={title}
          className="text-2xl"
          onChangeCallback={setTitle}
        />
        <TextForm
          text={schoolName}
          className="text-slate-500"
          onChangeCallback={setSchoolName}
        />
        <TextForm text={date} onChangeCallback={setDate} />
      </div>
    )
  } else {
    return (
      <div className={`${addBorder} mb-4 pb-2`}>
        <div className="text-2xl">{title}</div>
        <div className="text-slate-500">{schoolName}</div>
        <div>{date}</div>
      </div>
    )
  }
}

export default EducationItem
