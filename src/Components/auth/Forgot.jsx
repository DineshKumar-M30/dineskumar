import React, { useState } from 'react'
import { sendForgot } from '../../utils/mockAuth'
import FormInput from './FormInput'
import Toast from './Toast'

export default function Forgot() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      await sendForgot({ email })
      setSent(true)
    } catch (err) {
      setError(err.message || 'Failed')
    } finally { setLoading(false) }
  }

  return (
    <div className="auth-page">
      <h2 className="title">Reset password</h2>
      {!sent ? (
        <form className="auth-form" onSubmit={handleSubmit}>
          <FormInput label="Email" id="forgot-email" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@example.com" required />
          <button className="btn primary" type="submit" disabled={loading || !email}>{loading ? 'Sending...' : 'Send reset link'}</button>
        </form>
      ) : (
        <div className="success-block">Check your email for a reset link. If you don't see it, check spam.</div>
      )}
      <Toast message={error} type="error" />
    </div>
  )
}
