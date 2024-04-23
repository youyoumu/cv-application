import TextForm from './TextForm'
import { useState } from 'react'

function General({ editMode }) {
  const [name, setName] = useState('Full name')
  const [phoneNumber, setPhoneNumber] = useState('1234 567 890')
  const [email, setEmail] = useState('example@ex.com')
  const [address, setAddress] = useState('Main Street 123')

  const PhoneIcon = () => {
    return <span className="material-symbols-outlined mr-2">call</span>
  }

  const LocationIcon = () => {
    return <span className="material-symbols-outlined mr-2">location_on</span>
  }

  const EmailIcon = () => {
    return <span className="material-symbols-outlined mr-2">mail</span>
  }

  if (editMode) {
    return (
      <div className="mb-8">
        <div className="text-5xl font-bold mb-2">
          <TextForm text={name} onChangeCallback={setName} />
        </div>
        <div className="grid grid-cols-2 justify-between">
          <TextForm
            text={phoneNumber}
            onChangeCallback={setPhoneNumber}
            Icon={PhoneIcon}
            parentClassName="mb-2"
          />
          <TextForm
            className="text-end"
            text={email}
            onChangeCallback={setEmail}
            Icon={EmailIcon}
            parentClassName="mb-2"
          />
          <TextForm
            text={address}
            onChangeCallback={setAddress}
            Icon={LocationIcon}
            parentClassName="mb-2"
          />
        </div>
      </div>
    )
  }
  return (
    <div className="mb-8">
      <div className="text-5xl font-bold mb-2 py-2">{name}</div>
      <div className="grid grid-cols-2 justify-between gap-2">
        <div className="flex justify-items-center">
          <PhoneIcon />
          {phoneNumber}
        </div>
        <div className="flex justify-end justify-items-center">
          <EmailIcon />
          {email}
        </div>
        <div className="flex justify-items-center">
          <LocationIcon />
          {address}
        </div>
      </div>
    </div>
  )
}

export default General
