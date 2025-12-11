import React, { useRef, useEffect } from 'react'

export default function OTPInput({ length = 6, value = '', onChange }) {
  const inputs = useRef([])

  useEffect(() => {
    // try to auto-paste from clipboard (best effort)
    async function tryPaste() {
      try {
        const text = await navigator.clipboard.readText()
        if (text && text.trim().length === length) onChange(text.trim())
      } catch (_) {}
    }
    tryPaste()
  }, [])

  function handleKey(e, idx) {
    const k = e.key
    if (k === 'Backspace' && !e.currentTarget.value) {
      const prev = inputs.current[idx - 1]
      if (prev) {
        prev.focus()
      }
    }
  }

  function handleInput(e, idx) {
    const val = e.currentTarget.value.replace(/[^0-9]/g, '')
    const arr = (value || '').split('')
    arr[idx] = val ? val[val.length - 1] : ''
    onChange(arr.join(''))
    if (val) {
      const next = inputs.current[idx + 1]
      if (next) next.focus()
    }
  }

  const chars = Array.from({ length }, (_, i) => (value || '')[i] || '')
  return (
    <div className="otp-wrap" role="group" aria-label="One-time code">
      {chars.map((ch, i) => (
        <input
          key={i}
          ref={el => inputs.current[i] = el}
          className="otp-cell"
          inputMode="numeric"
          maxLength={1}
          value={ch}
          onChange={e => handleInput(e, i)}
          onKeyDown={e => handleKey(e, i)}
        />
      ))}
    </div>
  )
}
