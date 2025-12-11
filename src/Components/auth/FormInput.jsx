import React from 'react'

export default function FormInput({ label, id, type = 'text', value, onChange, placeholder, ...rest }) {
  return (
    <label className="field">
      <span className="field-label" htmlFor={id}>{label}</span>
      <input id={id} className="input" type={type} value={value} onChange={onChange} placeholder={placeholder} {...rest} />
    </label>
  )
}
