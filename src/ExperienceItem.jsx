import TextForm from './TextForm'
import { useState } from 'react'

function ExperienceItem({ editMode, isLastItem }) {
  const [title, setTitle] = useState('Experience title')
  const [company, setCompany] = useState('Company name')
  const [date, setDate] = useState('1998 - 1999')
  const [location, setLocation] = useState('Location')
  const [description, setDescription] = useState('Description')
  const addBorder = isLastItem
    ? ''
    : 'border-b-2 border-dashed border-slate-300'

  const LocationIcon = () => {
    return <span className="material-symbols-outlined">location_on</span>
  }

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
          text={company}
          className="text-slate-500"
          onChangeCallback={setCompany}
        />
        <div className="flex text-sm mb-2">
          <TextForm text={date} onChangeCallback={setDate} Icon={DateIcon} />
          <TextForm
            text={location}
            onChangeCallback={setLocation}
            Icon={LocationIcon}
          />
        </div>
        <TextForm
          text={description}
          onChangeCallback={setDescription}
          className="text-xs"
        />
      </div>
    )
  } else {
    return (
      <div className={`${addBorder} mb-4 pb-2`}>
        <div className="text-2xl">{title}</div>
        <div className="text-slate-500">{company}</div>
        <div className="flex gap-3 text-sm mb-2">
          <div className="flex items-center">
            <DateIcon />
            {date}
          </div>
          <div className="flex items-center">
            <LocationIcon />
            {location}
          </div>
        </div>
        <div className="text-xs">{description}</div>
      </div>
    )
  }
}

export default ExperienceItem
