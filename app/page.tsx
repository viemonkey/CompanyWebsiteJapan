import Link from 'next/link'

export default function Home() {
  return (
    <>
      {/* Lớp ảnh nền (Background Image) - MỚI THÊM */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: "url('/images/img-background.jpeg')" }}
      ></div>

      {/* Lớp phủ mờ (Overlay) - MỚI THÊM */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-white/20 via-transparent to-white"></div>
      {/* Hero Section - Minimalist Japanese Style */}
      <section className="section-padding relative overflow-hidden">
        {/* Subtle decorative elements */}
        <div className="enso -top-20 -right-20"></div>
        <div className="enso -bottom-20 -left-20"></div>

        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center space-y-12">
            {/* Main heading with Japanese aesthetic */}
            <div className="space-y-6 animate-fade-in">
              <p className="text-sm tracking-[0.3em] text-indigo-600 font-light uppercase">
                VIENCHIBAO
              </p>
              <h1 className="font-display text-6xl md:text-6xl lg:text-7xl font-medium text-indigo-900 leading-tight">
                心で綴る、唯一無二の輝き
              </h1>
              <div className="divider-line mx-auto my-8"></div>
              <p className="text-xl md:text-2xl text-indigo-700 font-light max-w-3xl mx-auto haiku-spacing">
                職人の創造性と情熱が込められた、
                <br />
                手作りのジュエリー。
              </p>
            </div>

            {/* CTA Buttons - Minimal style */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up pt-8">
              <Link
                href="/products"
                className="btn-minimal px-12 py-4 bg-sakura-500 text-white font-medium rounded-sm hover:bg-sakura-600 transition-colors relative z-10"
              >
                サービス案内
              </Link>
              <Link
                href="/about"
                className="btn-minimal px-12 py-4 border-2 border-indigo-800 text-indigo-800 font-medium rounded-sm hover:bg-indigo-50 transition-colors relative z-10"
              >
                私たちについて
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative petals */}
        <div className="petal" style={{ left: '10%', animationDuration: '12s', animationDelay: '0s' }}></div>
        <div className="petal" style={{ left: '30%', animationDuration: '15s', animationDelay: '2s' }}></div>
        <div className="petal" style={{ left: '50%', animationDuration: '10s', animationDelay: '4s' }}></div>
        <div className="petal" style={{ left: '70%', animationDuration: '13s', animationDelay: '1s' }}></div>
        <div className="petal" style={{ left: '90%', animationDuration: '14s', animationDelay: '3s' }}></div>
      </section>

      {/* Philosophy Section - 哲学 */}
      <section className="section-padding bg-gradient-to-b from-cream-50 to-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-20">
            <p className="text-sm tracking-[0.3em] text-sakura-500 mb-4">Philosophy</p>
            <h2 className="font-display text-4xl md:text-5xl font-medium text-indigo-900 mb-6">
              私たちの哲学
            </h2>
            <div className="divider-line"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-12 md:gap-16">
            {/* 簡素 - Simplicity */}
            <div className="text-center space-y-6 reveal">
              <div className="w-20 h-20 mx-auto">
                <svg viewBox="0 0 100 100" className="text-sakura-400" fill="currentColor">
                  <circle cx="50" cy="50" r="45" opacity="0.1" />
                  <path d="M50 20 L50 80 M20 50 L80 50" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.4" />
                </svg>
              </div>
              <h3 className="font-display text-2xl font-medium text-indigo-900">簡素</h3>
              <p className="text-indigo-700 leading-relaxed">
                本質を見極め、無駄を削ぎ落とす。
                <br />
                シンプルさの中に真の価値がある。
              </p>
            </div>

            {/* 調和 - Harmony */}
            <div className="text-center space-y-6 reveal" style={{ animationDelay: '0.2s' }}>
              <div className="w-20 h-20 mx-auto">
                <svg viewBox="0 0 100 100" className="text-sakura-400" fill="currentColor">
                  <circle cx="30" cy="50" r="20" opacity="0.15" />
                  <circle cx="70" cy="50" r="20" opacity="0.15" />
                  <circle cx="50" cy="50" r="15" opacity="0.3" />
                </svg>
              </div>
              <h3 className="font-display text-2xl font-medium text-indigo-900">調和</h3>
              <p className="text-indigo-700 leading-relaxed">
                技術と人、伝統と革新。
                <br />
                すべてがバランスよく共存する。
              </p>
            </div>

            {/* 心 - Heart */}
            <div className="text-center space-y-6 reveal" style={{ animationDelay: '0.4s' }}>
              <div className="w-20 h-20 mx-auto">
                <svg viewBox="0 0 100 100" className="text-sakura-400" fill="currentColor">
                  <path d="M50 80 C50 80, 20 55, 20 35 C20 20, 30 15, 40 20 C45 23, 48 28, 50 30 C52 28, 55 23, 60 20 C70 15, 80 20, 80 35 C80 55, 50 80, 50 80 Z" opacity="0.2" />
                </svg>
              </div>
              <h3 className="font-display text-2xl font-medium text-indigo-900">心</h3>
              <p className="text-indigo-700 leading-relaxed">
                一つひとつの仕事に心を込めて。
                <br />
                誠実さが信頼を生む。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview - Minimal Cards */}
      <section className="section-padding">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-20">
            <p className="text-sm tracking-[0.3em] text-sakura-500 mb-4">Services</p>
            <h2 className="font-display text-4xl md:text-5xl font-medium text-indigo-900 mb-6">
              提供サービス
            </h2>
            <div className="divider-line"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="washi-card p-10 hover-lift-subtle soft-shadow">
              <h3 className="font-display text-2xl font-medium text-indigo-900 mb-4">
                AI ソリューション
              </h3>
              <p className="text-indigo-700 leading-relaxed mb-6">
                最先端の人工知能技術で、ビジネスの可能性を広げます。
              </p>
              <Link href="/products" className="text-sakura-500 hover:text-sakura-600 transition-colors inline-flex items-center gap-2">
                詳しく見る
                <span>→</span>
              </Link>
            </div>

            <div className="washi-card p-10 hover-lift-subtle soft-shadow">
              <h3 className="font-display text-2xl font-medium text-indigo-900 mb-4">
                クラウドサービス
              </h3>
              <p className="text-indigo-700 leading-relaxed mb-6">
                安全で効率的なクラウドインフラを構築します。
              </p>
              <Link href="/products" className="text-sakura-500 hover:text-sakura-600 transition-colors inline-flex items-center gap-2">
                詳しく見る
                <span>→</span>
              </Link>
            </div>

            <div className="washi-card p-10 hover-lift-subtle soft-shadow">
              <h3 className="font-display text-2xl font-medium text-indigo-900 mb-4">
                セキュリティ
              </h3>
              <p className="text-indigo-700 leading-relaxed mb-6">
                企業の大切な情報を守る、堅牢なシステムを提供します。
              </p>
              <Link href="/products" className="text-sakura-500 hover:text-sakura-600 transition-colors inline-flex items-center gap-2">
                詳しく見る
                <span>→</span>
              </Link>
            </div>

            <div className="washi-card p-10 hover-lift-subtle soft-shadow">
              <h3 className="font-display text-2xl font-medium text-indigo-900 mb-4">
                コンサルティング
              </h3>
              <p className="text-indigo-700 leading-relaxed mb-6">
                技術戦略から実装まで、包括的にサポートします。
              </p>
              <Link href="/products" className="text-sakura-500 hover:text-sakura-600 transition-colors inline-flex items-center gap-2">
                詳しく見る
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats - Minimal Design */}
      <section className="section-padding bg-gradient-to-b from-white to-cream-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid md:grid-cols-4 gap-12 text-center">
            <div className="space-y-3">
              <div className="font-display text-5xl font-medium text-sakura-500">500+</div>
              <div className="text-indigo-700 text-sm tracking-wider">プロジェクト</div>
            </div>
            <div className="space-y-3">
              <div className="font-display text-5xl font-medium text-sakura-500">98%</div>
              <div className="text-indigo-700 text-sm tracking-wider">顧客満足度</div>
            </div>
            <div className="space-y-3">
              <div className="font-display text-5xl font-medium text-sakura-500">50+</div>
              <div className="text-indigo-700 text-sm tracking-wider">エキスパート</div>
            </div>
            <div className="space-y-3">
              <div className="font-display text-5xl font-medium text-sakura-500">10年</div>
              <div className="text-indigo-700 text-sm tracking-wider">実績</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Zen Style */}
      <section className="section-padding">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <div className="space-y-8">
            <h2 className="font-display text-4xl md:text-5xl font-medium text-indigo-900">
              共に未来を創りましょう
            </h2>
            <div className="divider-line"></div>
            <p className="text-xl text-indigo-700 leading-relaxed">
              あなたのビジョンを実現するために
              <br />
              私たちは全力でサポートいたします
            </p>
            <Link
              href="/contact"
              className="btn-minimal inline-block px-12 py-4 bg-indigo-800 text-white font-medium rounded-sm hover:bg-indigo-900 transition-colors relative z-10 mt-8"
            >
              お問い合わせ
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
