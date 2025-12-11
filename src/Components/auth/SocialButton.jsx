import React from 'react'

export default function SocialButton({ provider = 'Google', onClick }) {
  return (
    <button className="social-btn" onClick={onClick} type="button">
      <span className="social-icon">{provider[0]}</span>
      <span className="social-label">Continue with {provider}</span>
    </button>
  )
}
