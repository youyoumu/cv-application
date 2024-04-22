import TextForm from './TextForm'
import { useState } from 'react'

function ExperienceItem({ editMode }) {
  const [title, setTitle] = useState('Experience title')
  const [company, setCompany] = useState('Company name')
  const [date, setDate] = useState('1998 - 1999')
  const [location, setLocation] = useState('Location')
  const [description, setDescription] = useState('Description')

  if (editMode) {
    return (
      <div>
        <TextForm
          text={title}
          className="text-2xl"
          onChangeCallback={setTitle}
        />
        <div className="flex">
          <TextForm
            text={company}
            className="text-slate-500"
            onChangeCallback={setCompany}
          />
          <TextForm text={location} onChangeCallback={setLocation} />
        </div>
        <TextForm text={date} onChangeCallback={setDate} />
        <TextForm
          text={description}
          onChangeCallback={setDescription}
          className="text-sm"
        />
      </div>
    )
  } else {
    return (
      <div>
        <div className="text-2xl">{title}</div>
        <div className="flex gap-3">
          <div className="text-slate-500">{company}</div>
          <div>{location}</div>
        </div>
        <div>{date}</div>
        <div className="text-sm">{description}</div>
      </div>
    )
  }
}

export default ExperienceItem
