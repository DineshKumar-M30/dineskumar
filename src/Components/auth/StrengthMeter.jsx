import React from 'react'

function score(password) {
  let s = 0
  if (!password) return 0
  if (password.length >= 8) s += 1
  if (/[A-Z]/.test(password)) s += 1
  if (/[0-9]/.test(password)) s += 1
  if (/[^A-Za-z0-9]/.test(password)) s += 1
  return s
}

export default function StrengthMeter({ password = '' }) {
  const s = score(password)
  const pct = (s / 4) * 100
  const label = ['Very weak', 'Weak', 'Fair', 'Strong', 'Very strong'][s]
  return (
    <div className="strength">
      <div className="strength-bar"><div className="strength-fill" style={{ width: `${pct}%` }} /></div>
      <div className="strength-label">{label}</div>
    </div>
  )
}
