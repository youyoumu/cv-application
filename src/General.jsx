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
        <div>
          <TextForm text={name} onChangeCallback={setName} />
        </div>
        <div>
          <TextForm text={phoneNumber} onChangeCallback={setPhoneNumber} />
          <TextForm text={email} onChangeCallback={setEmail} />
          <TextForm text={address} onChangeCallback={setAddress} />
        </div>
      </div>
    )
  }
  return (
    <div>
      <div>{name}</div>
      <div>
        <div>{phoneNumber}</div>
        <div>{email}</div>
        <div>{address}</div>
      </div>
    </div>
  )
}

export default General
