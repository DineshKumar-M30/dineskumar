import React, { useState } from 'react'
import OTPInput from './OTPInput'
import Toast from './Toast'

export default function TwoFA() {
  const [mode, setMode] = useState('authenticator')
  const [code, setCode] = useState('')
  const [error, setError] = useState('')

  function handleEnable() {
    // In a real app, enable after verifying code
    if (code === '123456') alert('2FA enabled (demo)')
    else setError('Invalid code')
  }

  return (
    <div className="auth-page">
      <h2 className="title">Two-Factor Authentication</h2>
      <div className="auth-form">
        <div className="row">
          <button className={`seg ${mode==='authenticator'?'active':''}`} onClick={() => setMode('authenticator')}>Authenticator app</button>
          <button className={`seg ${mode==='email'?'active':''}`} onClick={() => setMode('email')}>Email code</button>
        </div>

        {mode === 'authenticator' ? (
          <div>
            <div className="qr-box">[QR code placeholder]</div>
            <div className="muted">Scan the QR with your authenticator app and enter the code.</div>
            <OTPInput value={code} onChange={setCode} length={6} />
            <button className="btn primary" onClick={handleEnable}>Verify & enable</button>
          </div>
        ) : (
          <div>
            <div className="muted">We'll email a code to you.</div>
            <OTPInput value={code} onChange={setCode} length={6} />
            <button className="btn primary" onClick={() => alert('Email code sent (demo)')}>Send email code</button>
          </div>
        )}
      </div>
      <Toast message={error} type="error" />
    </div>
  )
}
