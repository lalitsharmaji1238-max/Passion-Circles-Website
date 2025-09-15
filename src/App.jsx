/*
Passion Circles - Single-file React component (Tailwind CSS)
Instructions:
- This is a single-file React component (JSX). Add it into your React app (e.g., pages/index.jsx for Next.js or App.jsx for CRA/Vite).
- Tailwind CSS must be configured in your project.
- Replace GOOGLE_FORM_URL, PDF_LINKS, and CONTACT_EMAIL placeholders with real links.
- Deploy on Vercel / Netlify for fast hosting.

Features included:
- Hero with CTA
- How it works + Volunteer section
- Signup form (opens Google Form) and inline quick signup (optional)
- Downloadable PDFs area
- FAQ and Footer
- Credits (Founder: Lalit Sharma)
*/

import React, { useState } from "react";

const GOOGLE_FORM_URL = "https://forms.gle/your-google-form"; // <-- replace
const PDF_ATTACTIVE = "/Passion_Circles_Attractive.pdf"; // <-- replace with hosted PDF link
const PDF_FULL = "/Passion_Circles_Program.pdf"; // <-- replace
const CONTACT_EMAIL = "hello@passioncircles.example"; // <-- replace

export default function PassionCirclesWebsite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [passion, setPassion] = useState("");
  const [msg, setMsg] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleQuickSignup(e) {
    e.preventDefault();
    if (!name || !phone || !passion) {
      setMsg("कृपया नाम, फोन और passion डालें।");
      return;
    }
    setMsg("धन्यवाद! हमने आपकी request दर्ज कर ली है — आपसे जल्द संपर्क करेंगे।");
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white text-gray-900">
      <header className="max-w-6xl mx-auto p-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-indigo-500 to-amber-400 flex items-center justify-center text-white font-bold shadow-lg">PC</div>
          <div>
            <h1 className="text-xl font-extrabold">Passion Circles</h1>
            <p className="text-sm text-gray-600">Volunteering-powered learning circles for kids & youth — Free</p>
          </div>
        </div>
        <nav className="hidden md:flex gap-6 items-center">
          <a href="#how" className="hover:underline">How it works</a>
          <a href="#groups" className="hover:underline">Groups</a>
          <a href="#signup" className="hover:underline">Sign up</a>
          <a href="#volunteer" className="px-3 py-2 rounded-lg bg-indigo-600 text-white">Volunteer</a>
        </nav>
        <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="menu">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M4 6h16M4 12h16M4 18h16" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
      </header>

      {menuOpen && (
        <div className="md:hidden px-6 pb-6">
          <a className="block py-2" href="#how">How it works</a>
          <a className="block py-2" href="#groups">Groups</a>
          <a className="block py-2" href="#signup">Sign up</a>
          <a className="block py-2" href="#volunteer">Volunteer</a>
        </div>
      )}

      <main className="max-w-6xl mx-auto px-6 py-8">
        {/* HERO */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">Join Passion Circles — Free learning groups built around what students love.</h2>
            <p className="mt-4 text-gray-700">We connect kids and youth in small WhatsApp groups (10–20) with volunteer mentors, weekly mini-projects and AI-assisted resources. Completely free.</p>

            <div className="mt-6 flex gap-3">
              <a className="inline-flex items-center gap-2 px-4 py-3 bg-indigo-600 text-white rounded-lg font-semibold shadow" href={GOOGLE_FORM_URL} target="_blank" rel="noreferrer">Join a Group</a>
              <a className="inline-flex items-center gap-2 px-4 py-3 border rounded-lg" href="#learn-more">Learn More</a>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3 text-sm">
              <div className="p-3 bg-amber-50 rounded-lg">🎯 10–20 per group</div>
              <div className="p-3 bg-indigo-50 rounded-lg">👩‍🏫 Volunteer mentors</div>
              <div className="p-3 bg-green-50 rounded-lg">🤖 AI-supported lessons</div>
            </div>
          </div>

          <div className="bg-gradient-to-tr from-indigo-50 to-amber-50 rounded-2xl p-6 shadow-lg">
            <h3 className="font-bold">Quick Signup (optional)</h3>
            <p className="text-sm text-gray-600">Use Google Form for full signup. Quick signup below is a simple way to express interest.</p>

            {!submitted ? (
              <form onSubmit={handleQuickSignup} className="mt-4 space-y-3">
                <input className="w-full p-3 rounded-lg border" placeholder="Full name" value={name} onChange={(e) => setName(e.target.value)} />
                <input className="w-full p-3 rounded-lg border" placeholder="Phone (WhatsApp)" value={phone} onChange={(e) => setPhone(e.target.value)} />
                <input className="w-full p-3 rounded-lg border" placeholder="Your passion (e.g., Coding, Art)" value={passion} onChange={(e) => setPassion(e.target.value)} />
                <div className="flex gap-2">
                  <button className="px-4 py-2 bg-amber-400 rounded-lg font-semibold">Express Interest</button>
                  <a className="px-4 py-2 border rounded-lg" href={GOOGLE_FORM_URL} target="_blank" rel="noreferrer">Full Sign-up</a>
                </div>
                {msg && <p className="text-sm text-red-600">{msg}</p>}
              </form>
            ) : (
              <div className="p-4 bg-green-50 rounded-lg">
                <p className="font-medium">{msg}</p>
                <p className="text-sm text-gray-600 mt-2">हम जल्द ही WhatsApp group invite भेज देंगे।</p>
              </div>
            )}
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how" className="mt-12 bg-white rounded-2xl p-6 shadow-sm">
          <h3 className="text-2xl font-bold">How it works</h3>
          <div className="mt-4 grid md:grid-cols-3 gap-4">
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold">1. Signup</h4>
              <p className="text-sm text-gray-600 mt-2">Fill the sign-up form. We place members in small groups based on passion & level.</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold">2. Mentor & AI</h4>
              <p className="text-sm text-gray-600 mt-2">Volunteer mentors guide weekly. AI (ChatGPT) provides worksheets & ideas — mentors review before sharing.</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold">3. Weekly Projects</h4>
              <p className="text-sm text-gray-600 mt-2">Each week has a mini project, show-and-tell and feedback — practical learning beats theory.</p>
            </div>
          </div>
        </section>

        {/* GROUPS */}
        <section id="groups" className="mt-10">
          <h3 className="text-2xl font-bold">Group Types</h3>
          <div className="mt-4 grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-indigo-50 rounded-lg">
              <h4 className="font-semibold">Beginner</h4>
              <p className="text-sm text-gray-700 mt-2">Basics + simple hands-on tasks.</p>
            </div>
            <div className="p-4 bg-amber-50 rounded-lg">
              <h4 className="font-semibold">Intermediate</h4>
              <p className="text-sm text-gray-700 mt-2">Guided mini projects & collaboration.</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h4 className="font-semibold">Advanced</h4>
              <p className="text-sm text-gray-700 mt-2">Project-based, mentor reviews, optional showcases.</p>
            </div>
          </div>
        </section>

        {/* DOWNLOADS */}
        <section className="mt-10 bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold">Printable PDF & Program Sheet</h3>
            <div className="flex gap-2">
              <a className="px-3 py-2 rounded-lg border" href={PDF_ATTACTIVE} target="_blank" rel="noreferrer">Download Attractive PDF</a>
              <a className="px-3 py-2 rounded-lg border" href={PDF_FULL} target="_blank" rel="noreferrer">Download Full PDF</a>
            </div>
          </div>

          <p className="text-sm text-gray-600 mt-3">Print these and distribute in schools / community centers. PDF contains onboarding flow, mentor SOP and weekly plan.</p>
        </section>

        {/* VOLUNTEER */}
        <section id="volunteer" className="mt-10">
          <div className="bg-amber-50 rounded-2xl p-6">
            <h3 className="text-2xl font-bold">Volunteer as a Mentor</h3>
            <p className="mt-2 text-gray-700">We welcome volunteers who can spare small weekly time (1–2 hours). Mentors help guide, check AI outputs and run show-and-tell sessions.</p>
            <div className="mt-4 flex gap-3">
              <a className="px-4 py-2 bg-indigo-600 text-white rounded-lg" href={`mailto:${CONTACT_EMAIL}`}>Email to Volunteer</a>
              <a className="px-4 py-2 border rounded-lg" href={GOOGLE_FORM_URL} target="_blank" rel="noreferrer">Volunteer Signup Form</a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-10">
          <h3 className="text-2xl font-bold">FAQs</h3>
          <div className="mt-4 space-y-3">
            <details className="p-4 border rounded-lg">
              <summary className="font-semibold">क्या यह बिलकुल free है?</summary>
              <p className="text-sm text-gray-600 mt-2">हाँ — यह volunteering की बदौलत चलता है। कोई fees नहीं है।</p>
            </details>
            <details className="p-4 border rounded-lg">
              <summary className="font-semibold">क्या बच्चे सुरक्षित रहेंगे?</summary>
              <p className="text-sm text-gray-600 mt-2">हां — parental consent लिया जाता है और mentors को moderation SOP दिया जाता है।</p>
            </details>
            <details className="p-4 border rounded-lg">
              <summary className="font-semibold">AI का उपयोग कैसे होगा?</summary>
              <p className="text-sm text-gray-600 mt-2">AI से resources बनेंगे पर mentors हर output को validate करेंगे।</p>
            </details>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-12 border-t pt-6 pb-12 text-center text-sm text-gray-600">
          <p>Made with ❤️ by Passion Circles volunteers • For queries: <a href={`mailto:${CONTACT_EMAIL}`} className="underline">{CONTACT_EMAIL}</a></p>
          <p className="mt-2">Founder & Creator: <b>Lalit Sharma</b></p>
          <p className="mt-2">Tip: Host PDFs and Google Form links on a stable hosting (Google Drive / GitHub Pages) and replace links above.</p>
        </footer>
      </main>
    </div>
  );
}