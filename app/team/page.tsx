export default function Team() {
  const members = [
    {
      id: 1,
      nameJp: '田中 太郎',
      nameEn: 'Taro Tanaka',
      position: '代表取締役',
      positionEn: 'CEO',
      bio: 'テクノロジーと伝統の融合を信じ、Sakura Techを創業。15年以上の業界経験を持ち、お客様と共に成長することを大切にしています。',
      expertise: ['経営戦略', 'DX推進', 'コンサルティング'],
    },
    {
      id: 2,
      nameJp: '佐藤 花子',
      nameEn: 'Hanako Sato',
      position: '技術統括責任者',
      positionEn: 'CTO',
      bio: 'AI・機械学習のエキスパート。最先端技術を日本の美学と融合させ、革新的なソリューションを生み出しています。',
      expertise: ['AI/ML', 'クラウド', 'アーキテクチャ'],
    },
    {
      id: 3,
      nameJp: '鈴木 健',
      nameEn: 'Ken Suzuki',
      position: '開発部長',
      positionEn: 'Lead Developer',
      bio: 'フルスタック開発者として、多数のプロジェクトを成功に導いてきました。シンプルで美しいコードを書くことを心がけています。',
      expertise: ['Web開発', 'モバイル', 'DevOps'],
    },
    {
      id: 4,
      nameJp: '山田 美咲',
      nameEn: 'Misaki Yamada',
      position: 'デザイン責任者',
      positionEn: 'Design Director',
      bio: '日本の美意識を現代のデザインに取り入れ、使いやすく美しいインターフェースを創造しています。',
      expertise: ['UI/UX', 'ビジュアルデザイン', 'ブランディング'],
    },
    {
      id: 5,
      nameJp: '中村 誠',
      nameEn: 'Makoto Nakamura',
      position: 'データサイエンティスト',
      positionEn: 'Data Scientist',
      bio: 'データから価値ある洞察を引き出し、お客様の意思決定をサポートします。統計学とAIの専門家です。',
      expertise: ['データ分析', '機械学習', '可視化'],
    },
    {
      id: 6,
      nameJp: '小林 優子',
      nameEn: 'Yuko Kobayashi',
      position: 'プロジェクトマネージャー',
      positionEn: 'Project Manager',
      bio: 'お客様とチームの架け橋として、プロジェクトを円滑に進行します。誠実なコミュニケーションを大切にしています。',
      expertise: ['PM', 'アジャイル', 'チームビルディング'],
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section-padding">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <p className="text-sm tracking-[0.3em] text-sakura-500 mb-6">Team</p>
          <h1 className="font-display text-5xl md:text-6xl font-medium text-indigo-900 mb-8">
            チーム
          </h1>
          <div className="divider-line mb-12"></div>
          <p className="text-xl text-indigo-700 leading-relaxed max-w-3xl mx-auto font-light">
            情熱と専門性を持つメンバーが、
            <br />
            お客様の成功のために力を尽くします。
          </p>
        </div>
      </section>

      {/* Team Members */}
      <section className="section-padding bg-gradient-to-b from-white to-cream-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {members.map((member, index) => (
              <div 
                key={member.id}
                className="washi-card hover-lift-subtle overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Avatar Area */}
                <div className="h-72 bg-gradient-to-br from-sakura-50 to-cream-50 flex items-center justify-center border-b border-sakura-100">
                  <div className="w-32 h-32 border-2 border-sakura-300 rounded-sm flex items-center justify-center">
                    <span className="font-display text-5xl text-sakura-400">
                      {member.nameJp.charAt(0)}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-8 space-y-4">
                  <div>
                    <p className="text-xs tracking-[0.2em] text-sakura-500 uppercase mb-1">
                      {member.positionEn}
                    </p>
                    <h3 className="font-display text-2xl font-medium text-indigo-900 mb-1">
                      {member.nameJp}
                    </h3>
                    <p className="text-sm text-indigo-600 font-light">{member.nameEn}</p>
                  </div>

                  <p className="text-sm text-indigo-700 leading-relaxed font-light">
                    {member.bio}
                  </p>

                  <div className="pt-2">
                    <p className="text-xs text-indigo-600 mb-2 font-light">専門分野</p>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, idx) => (
                        <span 
                          key={idx}
                          className="px-2 py-1 text-xs bg-sakura-50 text-sakura-700 border border-sakura-100 rounded-sm"
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

      {/* Culture */}
      <section className="section-padding">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.3em] text-sakura-500 mb-4">Culture</p>
            <h2 className="font-display text-4xl font-medium text-indigo-900 mb-6">
              働く環境
            </h2>
            <div className="divider-line"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center space-y-6">
              <div className="w-20 h-20 mx-auto border border-sakura-200 rounded-sm flex items-center justify-center">
                <svg className="w-10 h-10 text-sakura-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-medium text-indigo-900">学びの文化</h3>
              <p className="text-indigo-700 leading-relaxed font-light text-sm">
                新しい技術や知識を常に学び、
                成長し続ける環境があります。
              </p>
            </div>

            <div className="text-center space-y-6">
              <div className="w-20 h-20 mx-auto border border-sakura-200 rounded-sm flex items-center justify-center">
                <svg className="w-10 h-10 text-sakura-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-medium text-indigo-900">チームワーク</h3>
              <p className="text-indigo-700 leading-relaxed font-light text-sm">
                お互いを尊重し、協力し合う
                チーム文化を大切にしています。
              </p>
            </div>

            <div className="text-center space-y-6">
              <div className="w-20 h-20 mx-auto border border-sakura-200 rounded-sm flex items-center justify-center">
                <svg className="w-10 h-10 text-sakura-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-medium text-indigo-900">ワークライフバランス</h3>
              <p className="text-indigo-700 leading-relaxed font-light text-sm">
                仕事とプライベートの調和を重視し、
                健やかな働き方を推進しています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join CTA */}
      {/* <section className="section-padding bg-gradient-to-b from-cream-50 to-white">
        <div className="container mx-auto px-6 max-w-3xl text-center"> */}
          {/* <div className="washi-card p-16 space-y-8">
            <h2 className="font-display text-3xl md:text-4xl font-medium text-indigo-900">
              一緒に働きませんか
            </h2>
            <div className="divider-line"></div>
            <p className="text-indigo-700 leading-relaxed font-light">
              私たちのチームに参加し、
              <br />
              共に未来を創りましょう。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <button className="btn-minimal px-10 py-3 bg-sakura-500 text-white font-medium rounded-sm hover:bg-sakura-600 transition-colors relative z-10">
                採用情報
              </button>
              <button className="btn-minimal px-10 py-3 border-2 border-indigo-800 text-indigo-800 font-medium rounded-sm hover:bg-indigo-50 transition-colors relative z-10">
                カジュアル面談
              </button>
            </div>
          </div> */}
        {/* </div>
      </section> */}
    </div>
  )
}
