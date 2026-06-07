'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Script from 'next/script'

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

const GoogleG = () => (
  <svg width="20" height="20" viewBox="0 0 48 48" aria-hidden="true" className="flex-shrink-0">
    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.33 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.67 14.62 48 24 48z"/>
  </svg>
)

const SmallGoogleLogo = () => (
  <svg width="12" height="12" viewBox="0 0 18 18" aria-hidden="true" className="flex-shrink-0">
    <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4"/>
    <path d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.258c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z" fill="#34A853"/>
    <path d="M3.964 10.707A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.707V4.961H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.039l3.007-2.332z" fill="#FBBC05"/>
    <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.961L3.964 7.293C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335"/>
  </svg>
)

const FormReviewBar = () => (
  <div className="border-t border-gray-100 mt-6 pt-4 flex flex-col items-center gap-1">
    <div className="text-amber-400 text-lg leading-none">★★★★★</div>
    <p className="text-gray-500 text-xs text-center">
      Rated <span className="font-bold text-gray-800">5.0/5</span> by <span className="font-bold text-gray-800">57+</span> roofing businesses
    </p>
  </div>
)

export default function OptInPage() {
  const [step, setStep] = useState(1)
  const [showDisqualify, setShowDisqualify] = useState(false)
  const [isSearching, setIsSearching] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    city: '',
  })

  function handleFieldChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleQualification(qualified: boolean) {
    if (qualified) {
      setShowDisqualify(false)
      setStep(2)
    } else {
      setShowDisqualify(true)
    }
  }

  function handleStep2Submit() {
    const { name, company, city } = formData
    if (!name || !company || !city) return
    setIsSearching(true)
    setTimeout(() => {
      setIsSearching(false)
      setStep(3)
    }, 2500)
  }

  async function handleStep3Submit() {
    const { phone, email } = formData
    if (!phone || !email) return
    setIsSubmitting(true)
    try {
      await fetch(
        'https://services.leadconnectorhq.com/hooks/MWTJgFgGeot9Z3Ok9tyb/webhook-trigger/28a2e0ab-2846-406b-aaed-9c913701bfd8',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        }
      )
    } catch (_) {
      // Silently continue — don't block the user if the webhook fails
    }
    setIsSubmitting(false)
    setStep(4)
  }

  useEffect(() => {
    function handleBookingMessage(event: MessageEvent) {
      if (Array.isArray(event.data) && event.data[0] === 'msgsndr-booking-complete') {
        ;(window as any).fbq?.('track', 'Schedule')
      }
    }
    window.addEventListener('message', handleBookingMessage)
    return () => window.removeEventListener('message', handleBookingMessage)
  }, [])

  const progressWidth = step === 1 ? '25%' : step === 2 ? '50%' : step === 3 ? '75%' : '100%'

  return (
    <div
      className="min-h-screen text-white"
      style={{
        background: 'linear-gradient(to bottom, #0c1a28 0%, #060e18 30%, #000000 60%)',
      }}
    >

      {/* ── HEADER: Logo left (nudged in), Google badge right ── */}
      <header className="pt-4 pb-4">
        <div className="max-w-4xl mx-auto px-4 flex items-center justify-between">
          <a href="https://corecutdigital.co.uk" target="_blank" rel="noopener noreferrer" className="ml-6">
            <Image
              src="/Logo.jpg"
              alt="CoreCut Digital"
              width={160}
              height={40}
              className="h-10 w-auto object-contain"
              style={{ mixBlendMode: 'screen' }}
            />
          </a>

          {/* Google Rating Badge */}
          <div className="bg-[#111111] border border-white/10 rounded-2xl px-4 py-2 flex items-center gap-3">
            <GoogleG />
            <div className="flex flex-col">
              <span className="text-xs text-gray-400 leading-tight">Google Rating</span>
              <div className="flex items-center gap-1">
                <span className="text-xl font-black text-white leading-tight">5.0</span>
                <span className="text-yellow-400 text-sm leading-none">★★★★★</span>
              </div>
              <span className="text-xs text-gray-500 leading-tight">Based on 57+ reviews</span>
            </div>
          </div>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="max-w-4xl mx-auto px-4 pt-5 pb-2 text-center">

        {/* Pill label */}
        <div className="flex justify-center mb-5">
          <span
            className="pill-animate inline-flex items-center gap-2 text-xs font-semibold tracking-[0.15em] uppercase px-4 py-2 rounded-full"
            style={{
              background: 'rgba(125, 212, 212, 0.1)',
              border: '1px solid rgba(125, 212, 212, 0.35)',
              color: '#7DD4D4',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#7DD4D4' }} />
            For Roofing Companies
          </span>
        </div>

        {/* Headline */}
        <h1
          className="uppercase text-center"
          style={{
            fontFamily: 'var(--font-barlow)',
            fontWeight: 900,
            fontSize: 'clamp(19px, 7vw, 58px)',
            lineHeight: 1.25,
          }}
        >
          SECURE 15–30 <span style={{ color: '#7DD4D4' }}>EXCLUSIVE</span>
          <br />
          <span style={{ color: '#7DD4D4' }}>QUALIFIED</span> ROOFING APPOINTMENTS
          <br />
          <span style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 700 }}>IN THE NEXT 30 DAYS</span>
        </h1>

        {/* Urgency subheading */}
        <p className="text-xs text-center mt-3 font-semibold tracking-wide" style={{ color: '#7DD4D4' }}>
          ⚡ Only 1 spot remaining in most UK areas
        </p>

      </section>

      {/* ── 4-STEP FORM ── */}
      <section className="max-w-4xl mx-auto px-4 pt-0 pb-12">
        <div className="max-w-md mx-auto mt-3">
          <div className="bg-white rounded-2xl p-6 shadow-xl">

            {/* Progress bar */}
            <p className="text-xs text-gray-400 text-right mb-2">Step {step} of 4</p>
            <div className="h-1.5 rounded-full bg-gray-100 mb-6 overflow-hidden">
              <div
                className="h-full rounded-full bg-[#7DD4D4] transition-all duration-300"
                style={{ width: progressWidth }}
              />
            </div>

            {/* ── STEP 1: Qualification ── */}
            {step === 1 && (
              <div>
                <p className="font-bold text-gray-900 text-lg text-center mb-6">
                  Do you own a roofing business?
                </p>

                <div className="flex flex-col gap-3">
                  <button
                    onClick={() => handleQualification(true)}
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-4 text-gray-900 text-left flex items-center gap-3 hover:border-[#7DD4D4] transition cursor-pointer shadow-sm"
                  >
                    <span>✅</span>
                    <span>Yes — I have a team of staff or subbies</span>
                  </button>

                  <button
                    onClick={() => handleQualification(true)}
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-4 text-gray-900 text-left flex items-center gap-3 hover:border-[#7DD4D4] transition cursor-pointer shadow-sm"
                  >
                    <span>✅</span>
                    <span>Yes — but it&apos;s just me at the moment</span>
                  </button>

                  <button
                    onClick={() => handleQualification(false)}
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-4 text-gray-900 text-left flex items-center gap-3 hover:border-[#7DD4D4] transition cursor-pointer shadow-sm"
                  >
                    <span>❌</span>
                    <span>No — I don&apos;t own a roofing business</span>
                  </button>
                </div>

                {showDisqualify && (
                  <div className="bg-red-50 border border-red-200 rounded-xl p-4 mt-4 text-center">
                    <p className="text-sm text-red-600">
                      You may not be a good fit for CoreCut at this stage.
                      <br />
                      Our system works best for roofing business owners.
                    </p>
                  </div>
                )}

                <FormReviewBar />
              </div>
            )}

            {/* ── STEP 2: Name, Company, City ── */}
            {step === 2 && !isSearching && (
              <div>
                <button
                  onClick={() => setStep(1)}
                  className="text-sm text-gray-400 mb-4 block hover:text-gray-600 transition"
                >
                  ← Back
                </button>

                <p className="font-bold text-gray-900 text-lg text-center mb-6">
                  Tell us about your business
                </p>

                <div className="flex flex-col">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleFieldChange}
                    placeholder="Your full name"
                    className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 w-full mb-3 focus:outline-none focus:border-[#7DD4D4] transition placeholder:text-gray-400"
                  />
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleFieldChange}
                    placeholder="Your roofing company"
                    className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 w-full mb-3 focus:outline-none focus:border-[#7DD4D4] transition placeholder:text-gray-400"
                  />
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleFieldChange}
                    placeholder="Your city / area"
                    className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 w-full mb-3 focus:outline-none focus:border-[#7DD4D4] transition placeholder:text-gray-400"
                  />

                  <button
                    onClick={handleStep2Submit}
                    className="bg-[#7DD4D4] text-black font-bold rounded-xl py-4 w-full mt-2 text-base hover:bg-[#6ac4c4] transition-colors duration-200"
                  >
                    Check Availability →
                  </button>
                </div>

                <FormReviewBar />
              </div>
            )}

            {/* ── SEARCHING LOADER ── */}
            {step === 2 && isSearching && (
              <div className="flex flex-col items-center justify-center py-10 gap-5">
                <div className="relative w-14 h-14">
                  <div className="absolute inset-0 rounded-full border-4 border-gray-100" />
                  <div className="absolute inset-0 rounded-full border-4 border-[#7DD4D4] border-t-transparent animate-spin" />
                </div>
                <div className="text-center">
                  <p className="font-bold text-gray-900 text-base">Searching for availability</p>
                  <p className="text-gray-400 text-sm mt-1">in {formData.city || 'your'} area…</p>
                </div>
              </div>
            )}

            {/* ── STEP 3: Contact Info ── */}
            {step === 3 && (
              <div>
                <button
                  onClick={() => setStep(2)}
                  className="text-sm text-gray-400 mb-4 block hover:text-gray-600 transition"
                >
                  ← Back
                </button>

                <p className="font-bold text-gray-900 text-lg text-center mb-6">
                  How can we reach you?
                </p>

                <div className="flex flex-col">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleFieldChange}
                    placeholder="Your phone number"
                    className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 w-full mb-3 focus:outline-none focus:border-[#7DD4D4] transition placeholder:text-gray-400"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFieldChange}
                    placeholder="Your email address"
                    className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 w-full mb-3 focus:outline-none focus:border-[#7DD4D4] transition placeholder:text-gray-400"
                  />

                  <button
                    onClick={handleStep3Submit}
                    disabled={isSubmitting}
                    className="bg-[#7DD4D4] text-black font-bold rounded-xl py-4 w-full mt-2 text-base hover:bg-[#6ac4c4] transition-colors duration-200 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                        Sending…
                      </>
                    ) : (
                      'Continue →'
                    )}
                  </button>

                  <p className="text-xs text-gray-400 text-center mt-2">
                    No obligation. Takes less than 60 seconds.
                  </p>
                </div>

                <FormReviewBar />
              </div>
            )}

            {/* ── STEP 4: Calendar Booking ── */}
            {step === 4 && (
              <div>
                <div className="flex justify-center mb-3">
                  <span className="bg-green-50 border border-green-300 rounded-full px-3 py-1.5 text-green-700 text-xs font-semibold">
                    🟢 1 spot available in {formData.city || 'your'} area
                  </span>
                </div>

                <h2 className="font-bold text-gray-900 text-xl text-center mb-1">
                  Book Your Free Strategy Call
                </h2>
                <p className="text-gray-400 text-sm text-center mb-4">
                  10 minutes. No pitch. Just a clear plan for your area.
                </p>

                <iframe
                  src="https://api.leadconnectorhq.com/widget/booking/miBViE5m9echq1eNJLud"
                  style={{ width: '100%', border: 'none', overflow: 'hidden', minHeight: '550px' }}
                  scrolling="no"
                  id="miBViE5m9echq1eNJLud_1780870286085"
                />
                <Script
                  src="https://link.msgsndr.com/js/form_embed.js"
                  strategy="lazyOnload"
                />

                <FormReviewBar />
              </div>
            )}

          </div>
        </div>
      </section>

      {/* ── SOCIAL PROOF ── */}
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
                    <SmallGoogleLogo />
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

      {/* ── FOOTER ── */}
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
