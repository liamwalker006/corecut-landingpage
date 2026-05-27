'use client'

import { useState } from 'react'
import Image from 'next/image'

const reviews = [
  {
    initials: 'JS',
    name: 'Jakes Stevens',
    date: '2 weeks ago',
    body: 'Working with Liam and Owen from Corecut has been a massive help for growing the business and bringing in more work. Would highly recommend',
  },
  {
    initials: 'LA',
    name: 'Louen Allsop',
    date: '2 weeks ago',
    body: 'Amazing team would highly recommend',
  },
  {
    initials: 'AS',
    name: 'Alex Smith',
    date: '2 weeks ago',
    body: "Owen has been looking after my social media for the past five months and completely transformed my business. Don't know what I would do without all this help. Keep up the good work 👍👍👍👍👍👍",
  },
]

export default function OptInPage() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    phone: '',
    postcode: '',
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div
      className="min-h-screen text-white"
      style={{
        background: 'linear-gradient(to bottom, #0c1a28 0%, #060e18 30%, #000000 60%)',
      }}
    >

      {/* ── SECTION 1: Header ── */}
      <header className="pt-6 pb-2 flex justify-center">
        <a href="https://corecutdigital.co.uk" target="_blank" rel="noopener noreferrer">
          <Image
            src="/Logo.jpg"
            alt="CoreCut Digital"
            width={160}
            height={50}
            className="h-[50px] w-auto object-contain"
            style={{ mixBlendMode: 'screen' }}
          />
        </a>
      </header>

      {/* ── SECTION 2: Hero ── */}
      <section className="max-w-4xl mx-auto px-4 pt-5 pb-4 text-center">

        {/* Pill label */}
        <div className="flex justify-center mb-5">
          <span
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.15em] uppercase px-4 py-2 rounded-full"
            style={{
              background: 'rgba(125, 212, 212, 0.1)',
              border: '1px solid rgba(125, 212, 212, 0.35)',
              color: '#7DD4D4',
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ background: '#7DD4D4' }}
            />
            For Roofing Companies
          </span>
        </div>

        {/* Headline — Barlow Condensed Black, ALL CAPS, two-tone */}
        <h1
          className="uppercase text-center leading-tight"
          style={{
            fontFamily: 'var(--font-barlow)',
            fontWeight: 900,
            fontSize: 'clamp(32px, 8vw, 52px)',
          }}
        >
          SECURE <span style={{ color: '#7DD4D4' }}>25–30 EXCLUSIVE,</span>{' '}
          ROOFING JOBS <span style={{ textDecoration: 'underline' }}>WITHOUT</span>{' '}
          <span style={{ color: '#7DD4D4' }}>DEALING WITH TYRE KICKERS</span>
        </h1>

        {/* Subheadline */}
        <p className="text-sm text-gray-400 text-center max-w-lg mx-auto mt-4 leading-relaxed">
          Our typical roofing partner generates £30,000–£90,000 in new revenue within their first 30 days
        </p>

        {/* Google review badge */}
        <div className="flex justify-center mt-4">
          <div className="inline-flex items-center gap-3 bg-white/[0.06] border border-white/10 rounded-xl px-5 py-3">
            {/* Google G logo */}
            <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
              <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4"/>
              <path d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.258c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z" fill="#34A853"/>
              <path d="M3.964 10.707A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.707V4.961H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.039l3.007-2.332z" fill="#FBBC05"/>
              <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.961L3.964 7.293C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335"/>
            </svg>
            <span className="text-amber-400 text-base leading-none tracking-tight">★★★★★</span>
            <span className="text-gray-400 text-sm">Google Reviews</span>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: VSL Placeholder ── */}
      <section className="max-w-4xl mx-auto px-4 pb-4">
        <div
          className="max-w-2xl mx-auto w-full aspect-video bg-[#111111] rounded-2xl border border-white/10 flex flex-col items-center justify-center gap-4"
          style={{
            boxShadow: '0 0 60px rgba(125, 212, 212, 0.12), 0 0 120px rgba(125, 212, 212, 0.05)',
          }}
        >
          {/* VSL VIDEO — ADD EMBED HERE */}
          <div className="w-16 h-16 rounded-full bg-[#7DD4D4] flex items-center justify-center flex-shrink-0">
            <svg
              className="w-6 h-6 text-black ml-1"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
          <p className="text-white/50 text-sm text-center max-w-xs px-4 leading-relaxed">
            Watch: The Exact System We Use To Get Roofers 25–30 Exclusive Jobs/Month
          </p>
        </div>

        {/* Scroll indicator — matches BiffBosh "CHECK AVAILABILITY! ↓" */}
        <div className="flex flex-col items-center gap-2 mt-6 mb-2">
          <p className="text-xs tracking-[0.25em] uppercase text-gray-400 font-medium">
            Check Availability!
          </p>
          <svg
            className="w-5 h-5 text-[#7DD4D4] animate-bounce"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ── SECTION 4: Opt-in Form ── */}
      <section className="max-w-4xl mx-auto px-4 pt-2 pb-12" id="form">
        <div className="max-w-md mx-auto">
          <h2
            className="uppercase text-center leading-tight mb-2"
            style={{
              fontFamily: 'var(--font-barlow)',
              fontWeight: 900,
              fontSize: 'clamp(32px, 8vw, 52px)',
            }}
          >
            Check Availability<br />
            <span style={{ color: '#7DD4D4' }}>In Your Area</span>
          </h2>
          {submitted ? (
            <div className="bg-[#111] border border-white/10 rounded-2xl p-8 text-center">
              <p className="text-white text-lg font-semibold leading-relaxed">
                ✅ Thanks {formData.fullName} — we&apos;ll be in touch within 1 business day to confirm your area.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white w-full placeholder-gray-600 focus:outline-none focus:border-[#7DD4D4]/50 transition-colors"
              />
              <input
                type="text"
                name="businessName"
                value={formData.businessName}
                onChange={handleChange}
                placeholder="Your roofing company"
                required
                className="bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white w-full placeholder-gray-600 focus:outline-none focus:border-[#7DD4D4]/50 transition-colors"
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your phone number"
                required
                className="bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white w-full placeholder-gray-600 focus:outline-none focus:border-[#7DD4D4]/50 transition-colors"
              />
              <input
                type="text"
                name="postcode"
                value={formData.postcode}
                onChange={handleChange}
                placeholder="Your area postcode"
                required
                className="bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white w-full placeholder-gray-600 focus:outline-none focus:border-[#7DD4D4]/50 transition-colors"
              />
              <button
                type="submit"
                className="w-full bg-[#7DD4D4] text-black font-bold rounded-xl py-4 mt-1 hover:bg-[#6ac4c4] transition-colors duration-200 text-base"
              >
                Check My Area Is Available
              </button>
            </form>
          )}
        </div>
      </section>

      {/* ── SECTION 5: Social Proof ── */}
      <section className="max-w-4xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="bg-[#141414] border border-white/10 rounded-xl p-6 flex flex-col"
            >
              {/* Name + Google label */}
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-[#7DD4D4] flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-black">{review.initials}</span>
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-white text-sm leading-tight">{review.name}</p>
                  <div className="flex items-center gap-1 mt-0.5">
                    <span className="text-gray-500 text-xs">Review from</span>
                    <svg width="12" height="12" viewBox="0 0 18 18" aria-hidden="true" className="flex-shrink-0">
                      <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4"/>
                      <path d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.258c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z" fill="#34A853"/>
                      <path d="M3.964 10.707A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.707V4.961H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.039l3.007-2.332z" fill="#FBBC05"/>
                      <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.961L3.964 7.293C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335"/>
                    </svg>
                    <span className="text-[#4285F4] text-xs font-medium">Google</span>
                  </div>
                </div>
              </div>

              {/* Stars + date */}
              <div className="flex items-center gap-2 mb-3">
                <span className="text-amber-400 text-sm leading-none">★★★★★</span>
                <span className="text-gray-500 text-xs">· {review.date}</span>
              </div>

              {/* Body */}
              <p className="text-gray-400 text-sm leading-relaxed flex-1">{review.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTION 6: Footer ── */}
      <footer className="border-t border-white/[0.06] py-10">
        <div className="max-w-4xl mx-auto px-4 flex flex-col items-center gap-4">
          <a href="https://corecutdigital.co.uk" target="_blank" rel="noopener noreferrer">
            <Image
              src="/Logo.jpg"
              alt="CoreCut Digital"
              width={120}
              height={38}
              className="h-[38px] w-auto object-contain"
              style={{ mixBlendMode: 'screen' }}
            />
          </a>
          <p className="text-xs text-gray-600 text-center leading-relaxed max-w-sm">
            © {new Date().getFullYear()} CoreCut Digital. All rights reserved.
          </p>
          <p className="text-xs text-gray-600 text-center leading-relaxed max-w-md">
            This site is not a part of Facebook™ or Facebook Inc. This site is not endorsed by Facebook™ in any way.
          </p>
        </div>
      </footer>

    </div>
  )
}
