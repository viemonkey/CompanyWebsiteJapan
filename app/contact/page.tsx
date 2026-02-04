'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('お問い合わせありがとうございます。担当者より折り返しご連絡いたします。')
    setFormData({ name: '', company: '', email: '', phone: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="pt-20 bg-[#1a1a00]">
      {/* Hero */}
      <section className="section-padding">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <p className="text-sm tracking-[0.3em] text-sakura-500 mb-6">Contact</p>
          <h1 className="font-display text-5xl md:text-6xl font-medium text-indigo-900 mb-8">
            お問い合わせ
          </h1>
          <div className="divider-line mb-12"></div>
          <p className="text-xl text-indigo-700 leading-relaxed max-w-3xl mx-auto font-light">
            ご質問やご相談など、
            <br />
            お気軽にお問い合わせください。
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-gradient-to-b from-white to-cream-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="font-display text-2xl font-medium text-indigo-900 mb-8">
                  お問い合わせ先
                </h2>
                
                <div className="space-y-8">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 border border-sakura-200 rounded-sm flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-sakura-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <h3 className="font-medium text-indigo-900">所在地</h3>
                    </div>
                    <p className="text-indigo-700 font-light leading-relaxed pl-11">
                      〒100-0001
                      <br />
                      東京都千代田区千代田1-1-1
                      <br />
                      Sakuraビル 5F
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 border border-sakura-200 rounded-sm flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-sakura-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <h3 className="font-medium text-indigo-900">メール</h3>
                    </div>
                    <p className="text-indigo-700 font-light pl-11">
                      info@sakuratech.jp
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 border border-sakura-200 rounded-sm flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-sakura-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <h3 className="font-medium text-indigo-900">電話</h3>
                    </div>
                    <p className="text-indigo-700 font-light pl-11">
                      03-1234-5678
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 border border-sakura-200 rounded-sm flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-sakura-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="font-medium text-indigo-900">営業時間</h3>
                    </div>
                    <p className="text-indigo-700 font-light pl-11">
                      平日 9:00 - 18:00
                      <br />
                      土日祝休み
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="font-medium text-indigo-900 mb-4">SNS</h3>
                <div className="flex space-x-3">
                  <a href="#" className="w-10 h-10 border border-sakura-200 rounded-sm flex items-center justify-center hover:bg-sakura-50 hover:border-sakura-300 transition-colors">
                    <svg className="w-5 h-5 text-indigo-700" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 border border-sakura-200 rounded-sm flex items-center justify-center hover:bg-sakura-50 hover:border-sakura-300 transition-colors">
                    <svg className="w-5 h-5 text-indigo-700" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 border border-sakura-200 rounded-sm flex items-center justify-center hover:bg-sakura-50 hover:border-sakura-300 transition-colors">
                    <svg className="w-5 h-5 text-indigo-700" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="washi-card p-10">
                <h2 className="font-display text-2xl font-medium text-indigo-900 mb-8">
                  お問い合わせフォーム
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-indigo-900 mb-2">
                      お名前 <span className="text-sakura-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-sakura-200 rounded-sm focus:border-sakura-500 focus:outline-none transition-colors text-indigo-900 font-light"
                      placeholder="山田 太郎"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-indigo-900 mb-2">
                      会社名
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-sakura-200 rounded-sm focus:border-sakura-500 focus:outline-none transition-colors text-indigo-900 font-light"
                      placeholder="株式会社〇〇"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-indigo-900 mb-2">
                      メールアドレス <span className="text-sakura-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-sakura-200 rounded-sm focus:border-sakura-500 focus:outline-none transition-colors text-indigo-900 font-light"
                      placeholder="example@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-indigo-900 mb-2">
                      電話番号
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-sakura-200 rounded-sm focus:border-sakura-500 focus:outline-none transition-colors text-indigo-900 font-light"
                      placeholder="03-1234-5678"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-indigo-900 mb-2">
                      お問い合わせ内容 <span className="text-sakura-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-white border border-sakura-200 rounded-sm focus:border-sakura-500 focus:outline-none transition-colors resize-none text-indigo-900 font-light"
                      placeholder="お問い合わせ内容をご記入ください"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-minimal py-4 bg-sakura-500 text-white font-medium rounded-sm hover:bg-sakura-600 transition-colors relative z-10"
                  >
                    送信する
                  </button>

                  <p className="text-xs text-indigo-600 text-center font-light">
                    お問い合わせいただいた内容は、2営業日以内にご返信いたします。
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="washi-card h-96 flex items-center justify-center">
            <div className="text-center space-y-4">
              <svg className="w-16 h-16 text-sakura-300 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="text-indigo-700 font-light">アクセスマップ</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
