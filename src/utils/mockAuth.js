// Minimal mock auth functions for demo flows
export function login({ email, password }) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (email === '2fa@example.com') return res({ requires2FA: true })
      if (email === 'user@example.com' && password === 'password') return res({ ok: true, token: 'demo-token' })
      return rej({ message: 'Invalid credentials' })
    }, 800)
  })
}

export function signup({ name, email, password }) {
  return new Promise((res) => setTimeout(() => res({ ok: true }), 900))
}

export function sendForgot({ email }) {
  return new Promise(res => setTimeout(() => res({ ok: true }), 700))
}

export function resetPassword({ token, password }) {
  return new Promise(res => setTimeout(() => res({ ok: true }), 700))
}

export function verifyOtp({ code }) {
  return new Promise((res, rej) => setTimeout(() => {
    if (code === '123456') res({ ok: true, token: 'otp-token' })
    else rej({ message: 'Invalid code' })
  }, 600))
}

export function sendMagicLink({ email }) {
  return new Promise(res => setTimeout(() => res({ ok: true }), 700))
}

export function oauthCallback(params) {
  return new Promise(res => setTimeout(() => res({ ok: true, token: 'oauth-token' }), 900))
}
