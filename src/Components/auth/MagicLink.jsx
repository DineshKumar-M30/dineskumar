import React, { useState } from 'react'
import FormInput from './FormInput'
import Toast from './Toast'
import { sendMagicLink } from '../../utils/mockAuth'

export default function MagicLink() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  async function handleSend(e) {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      await sendMagicLink({ email })
      setSent(true)
    } catch (err) { setError(err.message || 'Failed') }
    finally { setLoading(false) }
  }

  return (
    <div className="auth-page">
      <h2 className="title">Magic link</h2>
      {!sent ? (
        <form className="auth-form" onSubmit={handleSend}>
          <FormInput label="Email" id="magic-email" type="email" value={email} onChange={e => setEmail(e.target.value)} required />
          <button className="btn primary" type="submit" disabled={!email || loading}>{loading ? 'Sending...' : 'Send magic link'}</button>
        </form>
      ) : (
        <div className="success-block">Check your email for a sign-in link.</div>
      )}
      <Toast message={error} type="error" />
    </div>
  )
}
