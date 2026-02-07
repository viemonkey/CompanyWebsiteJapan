export default function Team() {
  const members = [
    {
      id: 1,
      nameJp: 'Huy K',
      nameEn: 'Huy K',
      position: 'Founder & Master Craftsman',
      positionEn: 'Founder & Master Craftsman',
      bio: 'A goldsmith with over 10 years of experience. Having mastered the Japanese artisan spirit, he established a unique style that blends Vietnamese traditional beauty with modern precision. Every piece is crafted with his heart and soul.',
      expertise: ['Goldsmithing', 'Gemstone Processing', 'Artistic Design'],
    },
    {
      id: 2,
      nameJp: 'Linh Thi',
      nameEn: 'Linh Thi',
      position: 'Design Director',
      positionEn: 'Design Director',
      bio: 'With a delicate aesthetic sensibility, she creates designs that give form to our clients’ deepest emotions. She prioritizes the harmony between traditional techniques and contemporary beauty.',
      expertise: ['Jewelry Design', 'CAD Modeling', 'Creative Direction'],
    },
    {
      id: 3,
      nameJp: 'Thanh Minh',
      nameEn: 'Thanh Minh',
      position: 'Senior Craftsman',
      positionEn: 'Senior Craftsman',
      bio: 'Specializing in high-precision processing through years of mastery. His dedication to detail and pursuit of perfection ensure that every work meets the highest quality standards.',
      expertise: ['Polishing', 'Stone Setting', 'Finishing'],
    },
    {
      id: 4,
      nameJp: 'Hoa Mai',
      nameEn: 'Hoa Mai',
      position: 'Quality Control Manager',
      positionEn: 'Quality Control Manager',
      bio: 'Dedicated to delivering excellence by inspecting every single piece with a rigorous eye. Her mission is to ensure that the trust our customers place in us is always honored.',
      expertise: ['Quality Inspection', 'Process Management', 'Client Relations'],
    },
    {
      id: 5,
      nameJp: 'Quang Tuan',
      nameEn: 'Quang Tuan',
      position: 'Certified Gemologist',
      positionEn: 'Certified Gemologist',
      bio: 'Responsible for gemstone selection and appraisal. He identifies the innate beauty of materials and proposes the perfect stones for each unique creation.',
      expertise: ['Gem Appraisal', 'Material Sourcing', 'Quality Evaluation'],
    },
    {
      id: 6,
      nameJp: 'Thuy An',
      nameEn: 'Thuy An',
      position: 'Customer Experience',
      positionEn: 'Customer Experience',
      bio: 'Listening to your stories to provide the most personalized guidance. She is dedicated to ensuring a meaningful and special experience for every client through heartfelt service.',
      expertise: ['Client Relations', 'Bespoke Consultation', 'After-sales Care'],
    },
  ]

  return (
    <div className="pt-20 bg-[#1a1a00]">
      {/* Hero */}
      <section className="section-padding py-24">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <p className="text-sm tracking-[0.3em] text-amber-500 mb-6 uppercase">Our Team</p>
          <h1 className="font-display text-5xl md:text-6xl font-light text-amber-50 mb-8">
            The Artisans
          </h1>
          <div className="divider-line mb-12 bg-amber-900/30 h-[1px] w-24 mx-auto"></div>
          <p className="text-xl text-amber-100/70 leading-relaxed max-w-3xl mx-auto font-light">
            A collective of passionate experts dedicated to 
            <br />
            crafting excellence for our cherished clients.
          </p>
        </div>
      </section>

      {/* Team Members */}
      <section className="section-padding py-20 bg-gradient-to-b from-[#1a1a00] to-[#262600]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {members.map((member, index) => (
              <div 
                key={member.id}
                className="group overflow-hidden bg-amber-950/20 border border-amber-900/30 rounded-sm hover:border-amber-500/40 transition-all duration-500"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Avatar Area */}
                <div className="h-72 bg-amber-900/10 flex items-center justify-center border-b border-amber-900/20">
                  <div className="w-32 h-32 border border-amber-500/30 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-700">
                    <span className="font-display text-5xl text-amber-500/80">
                      {member.nameEn.charAt(0)}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-8 space-y-4">
                  <div>
                    <p className="text-[10px] tracking-[0.2em] text-amber-500 uppercase mb-1">
                      {member.positionEn}
                    </p>
                    <h3 className="font-display text-2xl font-light text-amber-50 mb-1">
                      {member.nameEn}
                    </h3>
                  </div>

                  <p className="text-sm text-amber-100/60 leading-relaxed font-light min-h-[80px]">
                    {member.bio}
                  </p>

                  <div className="pt-4">
                    <p className="text-[10px] text-amber-500/50 mb-3 uppercase tracking-widest font-medium">Expertise</p>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 text-[10px] bg-amber-500/5 text-amber-200/70 border border-amber-500/20 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture - Working Environment */}
      <section className="section-padding py-32 border-t border-amber-900/20">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.3em] text-amber-500 mb-4 uppercase">Culture</p>
            <h2 className="font-display text-4xl font-light text-amber-50 mb-6">
              Our Environment
            </h2>
            <div className="divider-line bg-amber-900/30 h-[1px] w-16 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-12 text-amber-50">
            <div className="text-center space-y-6">
              <div className="w-20 h-20 mx-auto border border-amber-500/20 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-amber-500/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-light tracking-wide">Continuous Learning</h3>
              <p className="text-amber-100/50 leading-relaxed font-light text-sm">
                We foster an environment of constant growth, constantly mastering new techniques and refining our craft.
              </p>
            </div>

            <div className="text-center space-y-6">
              <div className="w-20 h-20 mx-auto border border-amber-500/20 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-amber-500/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-light tracking-wide">Harmonious Teamwork</h3>
              <p className="text-amber-100/50 leading-relaxed font-light text-sm">
                Mutual respect and seamless collaboration define our culture. We believe in the power of collective creativity.
              </p>
            </div>

            <div className="text-center space-y-6">
              <div className="w-20 h-20 mx-auto border border-amber-500/20 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-amber-500/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-light tracking-wide">Work-Life Balance</h3>
              <p className="text-amber-100/50 leading-relaxed font-light text-sm">
                We prioritize the harmony between work and private life, promoting a sustainable and healthy way of working.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="section-padding py-32 bg-[#1d1d00]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.3em] text-amber-500 mb-4 uppercase">Values</p>
            <h2 className="font-display text-4xl font-light text-amber-50 mb-6">
              Our Core Values
            </h2>
            <div className="divider-line bg-amber-900/30 h-[1px] w-16 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-8 space-y-4 bg-amber-950/10 border border-amber-900/20 rounded-sm hover:bg-amber-950/20 transition-colors">
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-amber-500 rounded-full shadow-[0_0_8px_rgba(245,158,11,0.6)]"></div>
                <h3 className="font-display text-xl font-light text-amber-200 tracking-wide">Artisan Spirit</h3>
              </div>
              <p className="text-amber-100/50 leading-relaxed font-light text-sm pl-6">
                Inheriting the Japanese "Shokunin" spirit, we pursue perfection without compromise. Quality is our ultimate pride.
              </p>
            </div>

            <div className="p-8 space-y-4 bg-amber-950/10 border border-amber-900/20 rounded-sm hover:bg-amber-950/20 transition-colors">
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-amber-500 rounded-full shadow-[0_0_8px_rgba(245,158,11,0.6)]"></div>
                <h3 className="font-display text-xl font-light text-amber-200 tracking-wide">Client Centricity</h3>
              </div>
              <p className="text-amber-100/50 leading-relaxed font-light text-sm pl-6">
                We cherish our clients' stories and provide personalized service, valuing the relationship of trust above all else.
              </p>
            </div>

            <div className="p-8 space-y-4 bg-amber-950/10 border border-amber-900/20 rounded-sm hover:bg-amber-950/20 transition-colors">
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-amber-500 rounded-full shadow-[0_0_8px_rgba(245,158,11,0.6)]"></div>
                <h3 className="font-display text-xl font-light text-amber-200 tracking-wide">Kaizen (Improvement)</h3>
              </div>
              <p className="text-amber-100/50 leading-relaxed font-light text-sm pl-6">
                Always seeking better ways, we continuously hone our skills and knowledge to grow day by day.
              </p>
            </div>

            <div className="p-8 space-y-4 bg-amber-950/10 border border-amber-900/20 rounded-sm hover:bg-amber-950/20 transition-colors">
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-amber-500 rounded-full shadow-[0_0_8px_rgba(245,158,11,0.6)]"></div>
                <h3 className="font-display text-xl font-light text-amber-200 tracking-wide">Team Harmony</h3>
              </div>
              <p className="text-amber-100/50 leading-relaxed font-light text-sm pl-6">
                By respecting and supporting one another, we create works that are greater than the sum of our individual parts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="section-padding py-32 bg-gradient-to-t from-[#141400] to-[#1a1a00]">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <div className="p-16 space-y-8 bg-amber-950/10 border border-amber-900/20 rounded-sm">
            <h2 className="font-display text-3xl md:text-4xl font-light text-amber-50">
              Join Our Vision
            </h2>
            <div className="divider-line bg-amber-900/30 h-[1px] w-16 mx-auto"></div>
            <p className="text-amber-100/50 leading-relaxed font-light">
              We are always looking for passionate souls to join our journey 
              <br />
              and shape the future of handcrafted elegance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <button className="px-10 py-3 bg-amber-600 text-amber-50 text-xs tracking-widest uppercase hover:bg-amber-500 transition-colors rounded-sm shadow-lg shadow-amber-950/50">
                View Openings
              </button>
              <button className="px-10 py-3 border border-amber-600/50 text-amber-500 text-xs tracking-widest uppercase hover:bg-amber-600/10 transition-colors rounded-sm">
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}