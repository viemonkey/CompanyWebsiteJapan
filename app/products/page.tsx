export default function Products() {
  const services = [
    {
      id: 1,
      nameJp: 'AIソリューション',
      nameEn: 'AI Solutions',
      description: '最先端の人工知能技術で、ビジネスの可能性を広げます。機械学習、自然言語処理、画像認識など、幅広いAI技術を提供します。',
      features: ['機械学習', '自然言語処理', '画像認識', '予測分析'],
    },
    {
      id: 2,
      nameJp: 'クラウドサービス',
      nameEn: 'Cloud Services',
      description: '安全で効率的なクラウドインフラを構築します。スケーラブルで信頼性の高いシステムを提供します。',
      features: ['インフラ構築', 'データ管理', 'セキュリティ', 'モニタリング'],
    },
    {
      id: 3,
      nameJp: 'セキュリティ',
      nameEn: 'Security',
      description: '企業の大切な情報を守る、堅牢なシステムを提供します。最新のセキュリティ技術で、安心・安全を実現します。',
      features: ['脅威検知', '暗号化', 'アクセス管理', '監査'],
    },
    {
      id: 4,
      nameJp: 'データ分析',
      nameEn: 'Data Analytics',
      description: 'ビッグデータを活用し、ビジネスの意思決定を支援します。データから価値ある洞察を引き出します。',
      features: ['ビジュアライゼーション', '統計分析', 'レポート', 'ダッシュボード'],
    },
    {
      id: 5,
      nameJp: 'アプリ開発',
      nameEn: 'App Development',
      description: 'Web、モバイル、デスクトップアプリケーションを開発します。ユーザー体験を重視した設計を心がけています。',
      features: ['Web開発', 'モバイルアプリ', 'UI/UXデザイン', '保守運用'],
    },
    {
      id: 6,
      nameJp: 'コンサルティング',
      nameEn: 'Consulting',
      description: '技術戦略から実装まで、包括的にサポートします。お客様のビジネスゴールを実現するお手伝いをします。',
      features: ['戦略立案', '技術選定', 'プロジェクト管理', '人材育成'],
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section-padding">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <p className="text-sm tracking-[0.3em] text-sakura-500 mb-6">Services</p>
          <h1 className="font-display text-5xl md:text-6xl font-medium text-indigo-900 mb-8">
            サービス
          </h1>
          <div className="divider-line mb-12"></div>
          <p className="text-xl text-indigo-700 leading-relaxed max-w-3xl mx-auto font-light">
            お客様のビジネスを成功に導く、
            <br />
            最適なソリューションを提供します。
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-gradient-to-b from-white to-cream-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.id}
                className="washi-card p-10 hover-lift-subtle space-y-6"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-2">
                  <p className="text-xs tracking-[0.2em] text-sakura-500 uppercase">
                    {service.nameEn}
                  </p>
                  <h3 className="font-display text-2xl md:text-3xl font-medium text-indigo-900">
                    {service.nameJp}
                  </h3>
                </div>

                <p className="text-indigo-700 leading-relaxed font-light">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {service.features.map((feature, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 text-xs bg-sakura-50 text-sakura-700 border border-sakura-100 rounded-sm"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="pt-4">
                  <button className="text-sakura-500 hover:text-sakura-600 transition-colors text-sm font-light inline-flex items-center gap-2">
                    詳しく見る
                    <span>→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="section-padding">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.3em] text-sakura-500 mb-4">Technology</p>
            <h2 className="font-display text-4xl font-medium text-indigo-900 mb-6">
              使用技術
            </h2>
            <div className="divider-line"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              'React', 'Next.js', 'TypeScript', 'Node.js', 
              'Python', 'Go', 'AWS', 'Azure',
              'Docker', 'Kubernetes', 'PostgreSQL', 'MongoDB'
            ].map((tech, index) => (
              <div 
                key={tech}
                className="washi-card p-6 text-center hover-lift-subtle"
              >
                <span className="text-indigo-800 font-light">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-gradient-to-b from-cream-50 to-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.3em] text-sakura-500 mb-4">Process</p>
            <h2 className="font-display text-4xl font-medium text-indigo-900 mb-6">
              プロセス
            </h2>
            <div className="divider-line"></div>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto border-2 border-sakura-300 rounded-sm flex items-center justify-center">
                <span className="font-display text-2xl text-sakura-500">1</span>
              </div>
              <h3 className="font-display text-xl font-medium text-indigo-900">ヒアリング</h3>
              <p className="text-indigo-700 font-light text-sm leading-relaxed">
                お客様のニーズを丁寧にお伺いします
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto border-2 border-sakura-300 rounded-sm flex items-center justify-center">
                <span className="font-display text-2xl text-sakura-500">2</span>
              </div>
              <h3 className="font-display text-xl font-medium text-indigo-900">企画・設計</h3>
              <p className="text-indigo-700 font-light text-sm leading-relaxed">
                最適なソリューションを提案します
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto border-2 border-sakura-300 rounded-sm flex items-center justify-center">
                <span className="font-display text-2xl text-sakura-500">3</span>
              </div>
              <h3 className="font-display text-xl font-medium text-indigo-900">開発</h3>
              <p className="text-indigo-700 font-light text-sm leading-relaxed">
                高品質な実装を心がけます
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto border-2 border-sakura-300 rounded-sm flex items-center justify-center">
                <span className="font-display text-2xl text-sakura-500">4</span>
              </div>
              <h3 className="font-display text-xl font-medium text-indigo-900">運用・保守</h3>
              <p className="text-indigo-700 font-light text-sm leading-relaxed">
                継続的にサポートします
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <div className="washi-card p-16 space-y-8">
            <h2 className="font-display text-3xl md:text-4xl font-medium text-indigo-900">
              お気軽にご相談ください
            </h2>
            <div className="divider-line"></div>
            <p className="text-indigo-700 leading-relaxed font-light">
              お客様のビジネスに最適なソリューションを
              <br />
              一緒に考えさせていただきます
            </p>
            <button className="btn-minimal px-12 py-4 bg-sakura-500 text-white font-medium rounded-sm hover:bg-sakura-600 transition-colors relative z-10">
              お問い合わせ
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
