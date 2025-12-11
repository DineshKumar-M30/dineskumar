import React, { useState, useEffect } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import PasswordInput from './PasswordInput'
import StrengthMeter from './StrengthMeter'
import { resetPassword } from '../../utils/mockAuth'
import Toast from './Toast'

export default function Reset() {
  const [params] = useSearchParams()
  const token = params.get('token')
  const navigate = useNavigate()
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (!token) setError('Invalid or missing token')
  }, [token])

  async function handleSubmit(e) {
    e.preventDefault()
    if (password !== confirm) return setError('Passwords do not match')
    setLoading(true)
    try {
      await resetPassword({ token, password })
      navigate('/auth/login')
    } catch (err) {
      setError(err.message || 'Failed')
    } finally { setLoading(false) }
  }

  return (
    <div className="auth-page">
      <h2 className="title">Set a new password</h2>
      <form className="auth-form" onSubmit={handleSubmit}>
        <PasswordInput id="reset-password" value={password} onChange={e => setPassword(e.target.value)} />
        <StrengthMeter password={password} />
        <PasswordInput id="reset-confirm" value={confirm} onChange={e => setConfirm(e.target.value)} placeholder="Confirm password" />
        <button className="btn primary" type="submit" disabled={loading}>{loading ? 'Saving...' : 'Save new password'}</button>
      </form>
      <Toast message={error} type="error" />
    </div>
  )
}
