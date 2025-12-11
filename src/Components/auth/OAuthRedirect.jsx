import React, { useEffect, useState } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import Loader from './Loader'
import { oauthCallback } from '../../utils/mockAuth'

export default function OAuthRedirect() {
  const [params] = useSearchParams()
  const navigate = useNavigate()
  const [err, setErr] = useState('')

  useEffect(() => {
    async function finalize() {
      try {
        // simulate exchange
        await oauthCallback(Object.fromEntries(params.entries()))
        // small animation delay
        setTimeout(() => navigate('/'), 800)
      } catch (e) { setErr('OAuth failed') }
    }
    finalize()
  }, [])

  return (
    <div className="auth-page">
      <div className="center">
        <Loader size={48} />
        <div className="muted">Completing sign-in...</div>
        {err && <div className="error">{err}</div>}
      </div>
    </div>
  )
}
