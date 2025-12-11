import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import FormInput from './FormInput'
import PasswordInput from './PasswordInput'
import StrengthMeter from './StrengthMeter'
import Toast from './Toast'
import { signup } from '../../utils/mockAuth'

export default function Signup() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()
    if (password !== confirm) return setError('Passwords do not match')
    setError('')
    setLoading(true)
    try {
      await signup({ name, email, password })
      navigate('/auth/otp')
    } catch (err) {
      setError(err.message || 'Signup failed')
    } finally { setLoading(false) }
  }

  return (
    <div className="auth-page">
      <h2 className="title">Create account</h2>
      <form className="auth-form" onSubmit={handleSubmit}>
        <FormInput label="Full name" id="name" value={name} onChange={e => setName(e.target.value)} placeholder="Your name" required />
        <FormInput label="Email" id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@example.com" required />
        <PasswordInput id="signup-password" value={password} onChange={e => setPassword(e.target.value)} />
        <StrengthMeter password={password} />
        <PasswordInput id="signup-confirm" value={confirm} onChange={e => setConfirm(e.target.value)} placeholder="Confirm password" />

        <button className="btn primary" type="submit" disabled={loading}>{loading ? 'Creating...' : 'Create account'}</button>
      </form>
      <Toast message={error} type="error" />
    </div>
  )
}
