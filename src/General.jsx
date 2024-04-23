import TextForm from './TextForm'
import { useState } from 'react'

function General({ editMode }) {
  const [name, setName] = useState('Full name')
  const [phoneNumber, setPhoneNumber] = useState('1234 567 890')
  const [email, setEmail] = useState('example@ex.com')
  const [address, setAddress] = useState('Main Street 123')

  if (editMode) {
    return (
      <div className="mb-8">
        <div className="text-5xl font-bold mb-2">
          <TextForm text={name} onChangeCallback={setName} />
        </div>
        <div className="grid grid-cols-2 justify-between">
          <TextForm text={phoneNumber} onChangeCallback={setPhoneNumber} />
          <TextForm
            className="text-end"
            text={email}
            onChangeCallback={setEmail}
          />
          <TextForm text={address} onChangeCallback={setAddress} />
        </div>
      </div>
    )
  }
  return (
    <div className="mb-8">
      <div className="text-5xl font-bold mb-2 py-2">{name}</div>
      <div className="grid grid-cols-2 justify-between">
        <div>{phoneNumber}</div>
        <div className="text-end">{email}</div>
        <div>{address}</div>
      </div>
    </div>
  )
}

export default General
