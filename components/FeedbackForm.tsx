'use client'
import { useState } from 'react'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xeepkrpy'

const FEATURE_OPTIONS = [
  'Multiplayer / co-op farming',
  'More crop types & varieties',
  'Mobile app release',
  'Story / campaign mode',
  'Better graphics & animations',
  'Mod support',
]

export default function FeedbackForm() {
  const [selected, setSelected] = useState<string[]>([])
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  function toggle(option: string) {
    setSelected(prev =>
      prev.includes(option) ? prev.filter(o => o !== option) : [...prev, option]
    )
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('submitting')
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ features: selected.join(', '), message }),
      })
      setStatus(res.ok ? 'success' : 'error')
      if (res.ok) { setSelected([]); setMessage('') }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-farm-green/10 border border-farm-green rounded p-8 text-center">
        <p className="font-serif text-xl text-farm-brown mb-2">Thanks for the feedback!</p>
        <p className="text-farm-tan">Your input helps shape what gets built next.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <h2 className="font-serif text-xl text-farm-brown mb-4">What would you like to see next?</h2>
        <div className="space-y-3">
          {FEATURE_OPTIONS.map(option => (
            <label key={option} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={selected.includes(option)}
                onChange={() => toggle(option)}
                className="w-4 h-4 accent-farm-green"
              />
              <span className="text-farm-brown-light group-hover:text-farm-brown transition-colors">
                {option}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block font-serif text-farm-brown mb-2" htmlFor="message">
          Anything else?
        </label>
        <textarea
          id="message"
          value={message}
          onChange={e => setMessage(e.target.value)}
          placeholder="Share your thoughts, ideas, or anything..."
          rows={4}
          className="w-full border border-farm-border rounded p-3 bg-farm-cream text-farm-brown placeholder:text-farm-tan focus:outline-none focus:border-farm-green resize-none"
        />
      </div>

      {status === 'error' && (
        <p className="text-red-600 text-sm">Something went wrong. Please try again.</p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="bg-farm-green text-white px-8 py-3 rounded hover:bg-farm-green/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? 'Sending...' : 'Submit Feedback'}
      </button>
    </form>
  )
}
