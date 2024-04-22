import TextForm from './TextForm'
import { useState } from 'react'

function ExperienceItem({ editMode }) {
  const [title, setTitle] = useState('Title')
  const [company, setCompany] = useState('Company')
  const [date, setDate] = useState('Date')
  const [description, setDescription] = useState('Description')

  if (editMode) {
    return (
      <div>
        <TextForm
          text={title}
          className="text-2xl"
          onChangeCallback={setTitle}
        />
        <TextForm
          text={company}
          className="text-slate-500"
          onChangeCallback={setCompany}
        />
        <TextForm text={date} onChangeCallback={setDate} />
        <TextForm text={description} onChangeCallback={setDescription} />
      </div>
    )
  } else {
    return (
      <div>
        <div className="text-2xl">{title}</div>
        <div className="text-slate-500">{company}</div>
        <div>{date}</div>
        <div>{description}</div>
      </div>
    )
  }
}

export default ExperienceItem
