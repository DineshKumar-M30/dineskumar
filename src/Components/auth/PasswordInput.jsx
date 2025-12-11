import React, { useState } from 'react'

export default function PasswordInput({ id, value, onChange, placeholder = 'Password' }) {
  const [show, setShow] = useState(false)
  return (
    <label className="field">
      <span className="field-label" htmlFor={id}>Password</span>
      <div className="password-wrap">
        <input id={id} className="input" type={show ? 'text' : 'password'} value={value} onChange={onChange} placeholder={placeholder} />
        <button type="button" className="icon-btn" onClick={() => setShow(s => !s)} aria-label={show ? 'Hide password' : 'Show password'}>
          {show ? 'Hide' : 'Show'}
        </button>
      </div>
    </label>
  )
}
