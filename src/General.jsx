import TextForm from './TextForm'
import { useState } from 'react'

function General({ editMode }) {
  const [name, setName] = useState('Full name')
  const [phoneNumber, setPhoneNumber] = useState('1234 567 890')
  const [email, setEmail] = useState('example@ex.com')
  const [address, setAddress] = useState('Main Street 123')

  if (editMode) {
    return (
      <div>
        <div className="text-5xl font-bold mb-2">
          <TextForm text={name} onChangeCallback={setName} height="h-12" />
        </div>
        <div className="grid grid-cols-2 justify-between">
          <TextForm text={phoneNumber} onChangeCallback={setPhoneNumber} />
          <TextForm
            className="text-end"
            text={email}
            onChangeCallback={setEmail}
            alignt="text-end"
          />
          <TextForm text={address} onChangeCallback={setAddress} />
        </div>
      </div>
    )
  }
  return (
    <div>
      <div className="text-5xl font-bold mb-2">{name}</div>
      <div className="grid grid-cols-2 justify-between">
        <div>{phoneNumber}</div>
        <div className="text-end">{email}</div>
        <div>{address}</div>
      </div>
    </div>
  )
}

export default General
