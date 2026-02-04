export default function Team() {
  const members = [
    {
      id: 1,
      nameJp: 'フイ・ケー',
      nameEn: 'HuyK',
      position: '創業者・マスタークラフトマン',
      positionEn: 'Founder & Master Craftsman',
      bio: '10年以上の経験を持つ金細工師。日本の職人精神を学び、ベトナムの伝統美と融合させた独自のスタイルを確立。一つひとつの作品に魂を込めて制作しています。',
      expertise: ['金細工', '宝石加工', 'デザイン'],
    },
    {
      id: 2,
      nameJp: 'リン・チー',
      nameEn: 'Linh Thi',
      position: 'デザイン責任者',
      positionEn: 'Design Director',
      bio: '繊細な感性で、お客様の想いを形にするデザインを創造します。伝統的な技法と現代的な美意識を調和させることを大切にしています。',
      expertise: ['ジュエリーデザイン', 'CAD設計', '企画提案'],
    },
    {
      id: 3,
      nameJp: 'タン・ミン',
      nameEn: 'Thanh Minh',
      position: '職人',
      positionEn: 'Craftsman',
      bio: '熟練の技術で、精密な加工を担当。細部へのこだわりと、完璧を追求する姿勢で、高品質な作品を生み出しています。',
      expertise: ['研磨', '石留め', '仕上げ'],
    },
    {
      id: 4,
      nameJp: 'ホア・マイ',
      nameEn: 'Hoa Mai',
      position: '品質管理責任者',
      positionEn: 'Quality Control Manager',
      bio: '厳しい目で一つひとつの作品を検品し、最高の品質をお届けすることに全力を尽くしています。お客様の信頼に応えることを使命としています。',
      expertise: ['品質検査', '工程管理', '顧客対応'],
    },
    {
      id: 5,
      nameJp: 'クアン・トゥアン',
      nameEn: 'Quang Tuan',
      position: '宝石鑑定士',
      positionEn: 'Gemologist',
      bio: '宝石の選定と鑑定を担当。素材の美しさを見極め、それぞれの作品に最適な宝石をご提案します。',
      expertise: ['宝石鑑定', '素材選定', '品質評価'],
    },
    {
      id: 6,
      nameJp: 'トゥイ・アン',
      nameEn: 'Thuy An',
      position: 'カスタマーサポート',
      positionEn: 'Customer Support',
      bio: 'お客様との対話を通じて、想いをお伺いし、最適なご提案をいたします。心を込めたサービスで、特別な体験をお届けします。',
      expertise: ['顧客対応', 'オーダーメイド相談', 'アフターサービス'],
    },
  ]

  return (
    <div className="pt-20 bg-[#1a1a00]">
      {/* Hero */}
      <section className="section-padding">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <p className="text-sm tracking-[0.3em] text-amber-600 mb-6">Team</p>
          <h1 className="font-display text-5xl md:text-6xl font-medium text-amber-950 mb-8">
            チーム
          </h1>
          <div className="divider-line mb-12 bg-amber-200"></div>
          <p className="text-xl text-amber-900 leading-relaxed max-w-3xl mx-auto font-light">
            情熱と専門性を持つメンバーが、
            <br />
            お客様の成功のために力を尽くします。
          </p>
        </div>
      </section>

      {/* Team Members */}
      <section className="section-padding bg-gradient-to-b from-white to-amber-50/30">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {members.map((member, index) => (
              <div 
                key={member.id}
                className="washi-card hover-lift-subtle overflow-hidden bg-white/60 border border-amber-200/40 rounded-sm shadow-lg hover:shadow-xl hover:shadow-amber-200/30 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Avatar Area */}
                <div className="h-72 bg-gradient-to-br from-amber-50 to-yellow-50 flex items-center justify-center border-b border-amber-200">
                  <div className="w-32 h-32 border-2 border-amber-400 rounded-sm flex items-center justify-center">
                    <span className="font-display text-5xl text-amber-600">
                      {member.nameJp.charAt(0)}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-8 space-y-4">
                  <div>
                    <p className="text-xs tracking-[0.2em] text-amber-600 uppercase mb-1">
                      {member.positionEn}
                    </p>
                    <h3 className="font-display text-2xl font-medium text-amber-950 mb-1">
                      {member.nameJp}
                    </h3>
                    <p className="text-sm text-amber-700 font-light">{member.nameEn}</p>
                  </div>

                  <p className="text-sm text-amber-900 leading-relaxed font-light">
                    {member.bio}
                  </p>

                  <div className="pt-2">
                    <p className="text-xs text-amber-700 mb-2 font-light">専門分野</p>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, idx) => (
                        <span 
                          key={idx}
                          className="px-2 py-1 text-xs bg-amber-50 text-amber-800 border border-amber-200 rounded-sm"
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
      <section className="section-padding">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.3em] text-amber-600 mb-4">Culture</p>
            <h2 className="font-display text-4xl font-medium text-amber-950 mb-6">
              働く環境
            </h2>
            <div className="divider-line bg-amber-200"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center space-y-6">
              <div className="w-20 h-20 mx-auto border border-amber-300 rounded-sm flex items-center justify-center">
                <svg className="w-10 h-10 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-medium text-amber-950">学びの文化</h3>
              <p className="text-amber-800 leading-relaxed font-light text-sm">
                新しい技術や知識を常に学び、
                成長し続ける環境があります。
                職人として技を磨き続けます。
              </p>
            </div>

            <div className="text-center space-y-6">
              <div className="w-20 h-20 mx-auto border border-amber-300 rounded-sm flex items-center justify-center">
                <svg className="w-10 h-10 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-medium text-amber-950">チームワーク</h3>
              <p className="text-amber-800 leading-relaxed font-light text-sm">
                お互いを尊重し、協力し合う
                チーム文化を大切にしています。
                一体感のある職場です。
              </p>
            </div>

            <div className="text-center space-y-6">
              <div className="w-20 h-20 mx-auto border border-amber-300 rounded-sm flex items-center justify-center">
                <svg className="w-10 h-10 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-medium text-amber-950">ワークライフバランス</h3>
              <p className="text-amber-800 leading-relaxed font-light text-sm">
                仕事とプライベートの調和を重視し、
                健やかな働き方を推進しています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="section-padding bg-gradient-to-b from-amber-50/30 to-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.3em] text-amber-600 mb-4">Values</p>
            <h2 className="font-display text-4xl font-medium text-amber-950 mb-6">
              私たちの価値観
            </h2>
            <div className="divider-line bg-amber-200"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="washi-card p-8 space-y-4 bg-white/60 border border-amber-200/40 rounded-sm">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-amber-600 rounded-full"></div>
                <h3 className="font-display text-xl font-medium text-amber-950">職人精神</h3>
              </div>
              <p className="text-amber-800 leading-relaxed font-light pl-6">
                日本の「職人（shokunin）」の精神を受け継ぎ、完璧を追求し続けています。妥協のない品質へのこだわりが、私たちの誇りです。
              </p>
            </div>

            <div className="washi-card p-8 space-y-4 bg-white/60 border border-amber-200/40 rounded-sm">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-amber-600 rounded-full"></div>
                <h3 className="font-display text-xl font-medium text-amber-950">お客様第一</h3>
              </div>
              <p className="text-amber-800 leading-relaxed font-light pl-6">
                お客様の想いを大切に、一人ひとりに寄り添ったサービスを提供します。信頼関係を何より大切にしています。
              </p>
            </div>

            <div className="washi-card p-8 space-y-4 bg-white/60 border border-amber-200/40 rounded-sm">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-amber-600 rounded-full"></div>
                <h3 className="font-display text-xl font-medium text-amber-950">継続的な改善</h3>
              </div>
              <p className="text-amber-800 leading-relaxed font-light pl-6">
                常により良い方法を模索し、技術と知識を磨き続けます。昨日より今日、今日より明日を目指して成長します。
              </p>
            </div>

            <div className="washi-card p-8 space-y-4 bg-white/60 border border-amber-200/40 rounded-sm">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-amber-600 rounded-full"></div>
                <h3 className="font-display text-xl font-medium text-amber-950">チームの調和</h3>
              </div>
              <p className="text-amber-800 leading-relaxed font-light pl-6">
                互いを尊重し、協力し合うことで、より良い作品を生み出します。一人の力ではなく、チーム全体で創造します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="section-padding">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <div className="washi-card p-16 space-y-8 bg-white/60 border border-amber-200/40 rounded-sm shadow-lg">
            <h2 className="font-display text-3xl md:text-4xl font-medium text-amber-950">
              一緒に働きませんか
            </h2>
            <div className="divider-line bg-amber-200"></div>
            <p className="text-amber-800 leading-relaxed font-light">
              私たちのチームに参加し、
              <br />
              共に未来を創りましょう。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <button className="btn-minimal px-10 py-3 bg-amber-600 text-white font-medium rounded-sm hover:bg-amber-700 transition-colors relative z-10 shadow-lg shadow-amber-600/30">
                採用情報
              </button>
              <button className="btn-minimal px-10 py-3 border-2 border-amber-700 text-amber-900 font-medium rounded-sm hover:bg-amber-50 transition-colors relative z-10">
                カジュアル面談
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}