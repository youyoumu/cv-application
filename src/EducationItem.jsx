import TextForm from './TextForm'
import { useState } from 'react'

function EducationItem({ editMode, isLastItem }) {
  const [title, setTitle] = useState('Title of Study')
  const [schoolName, setSchoolName] = useState('School Name')
  const [date, setDate] = useState('1998 - 1999')
  const addBorder = isLastItem
    ? ''
    : 'border-b-2 border-dashed border-slate-300'

  const DateIcon = () => {
    return <span className="material-symbols-outlined">calendar_month</span>
  }

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
        <TextForm text={date} onChangeCallback={setDate} Icon={DateIcon} />
      </div>
    )
  } else {
    return (
      <div className={`${addBorder} mb-4 pb-2`}>
        <div className="text-2xl">{title}</div>
        <div className="text-slate-500">{schoolName}</div>
        <div className="text-sm flex items-center">
          <DateIcon />
          {date}
        </div>
      </div>
    )
  }
}

export default EducationItem
