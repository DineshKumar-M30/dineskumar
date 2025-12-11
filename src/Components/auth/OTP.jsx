import React, { useState, useEffect } from 'react'
import OTPInput from './OTPInput'
import { verifyOtp, sendForgot } from '../../utils/mockAuth'
import Toast from './Toast'

export default function OTP() {
  const [code, setCode] = useState('')
  const [timer, setTimer] = useState(50)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    if (timer <= 0) return
    const t = setTimeout(() => setTimer(s => s - 1), 1000)
    return () => clearTimeout(t)
  }, [timer])

  async function handleVerify(e) {
    e && e.preventDefault()
    setLoading(true)
    setError('')
    try {
      await verifyOtp({ code })
      setSuccess(true)
    } catch (err) { setError(err.message || 'Invalid code') }
    finally { setLoading(false) }
  }

  async function handleResend() {
    setError('')
    setTimer(50)
    try { await sendForgot({ email: 'demo@example.com' }) } catch (_) {}
  }

  return (
    <div className="auth-page">
      <h2 className="title">Enter verification code</h2>
      <form className="auth-form" onSubmit={handleVerify}>
        <OTPInput length={6} value={code} onChange={setCode} />
        <div className="row between">
          <div className="muted">Time left: {timer}s</div>
          <button type="button" className="link" onClick={handleResend} disabled={timer > 0}>Resend</button>
        </div>
        <button className="btn primary" type="submit" disabled={loading || code.length < 6}>{loading ? 'Verifying...' : 'Verify'}</button>
      </form>
      {success && <div className="success-block">Code accepted — redirecting...</div>}
      <Toast message={error} type="error" />
    </div>
  )
}
