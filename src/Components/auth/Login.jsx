import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import FormInput from './FormInput'
import PasswordInput from './PasswordInput'
import SocialButton from './SocialButton'
import Toast from './Toast'
import Loader from './Loader'
import { login } from '../../utils/mockAuth'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      const res = await login({ email, password })
      if (res.requires2FA) {
        navigate('/auth/2fa')
      } else {
        // demo: redirect to dashboard
        navigate('/')
      }
    } catch (err) {
      setError(err.message || 'Login failed')
    } finally { setLoading(false) }
  }

  return (
    <div className="auth-page">
      <h2 className="title">Sign in</h2>
      <form className="auth-form" onSubmit={handleSubmit}>
        <FormInput label="Email" id="login-email" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@example.com" required />
        <PasswordInput id="login-password" value={password} onChange={e => setPassword(e.target.value)} />

        <label className="row">
          <label className="checkbox">
            <input type="checkbox" checked={remember} onChange={e => setRemember(e.target.checked)} /> Remember me
          </label>
          <Link to="/auth/forgot" className="link">Forgot?</Link>
        </label>

        <button className="btn primary" type="submit" disabled={loading}>
          {loading ? <><Loader size={16}/> Signing in</> : 'Sign in'}
        </button>

        <div className="divider">Or continue with</div>
        <div className="socials">
          <SocialButton provider="Google" onClick={() => window.location.href = '/auth/redirect?provider=google'} />
          <SocialButton provider="GitHub" onClick={() => window.location.href = '/auth/redirect?provider=github'} />
        </div>

        <div className="muted">Don't have an account? <Link to="/auth/signup">Sign up</Link></div>
      </form>
      <Toast message={error} type="error" />
    </div>
  )
}
