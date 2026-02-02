export default function About() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <p className="text-sm tracking-[0.3em] text-sakura-500 mb-6">About Us</p>
          <h1 className="font-display text-5xl md:text-6xl font-medium text-indigo-900 mb-8">
            私たちについて
          </h1>
          <div className="divider-line mb-12"></div>
          <p className="text-xl text-indigo-700 leading-relaxed max-w-3xl mx-auto font-light">
            日本の美意識とモダンテクノロジーを融合させ、
            <br />
            心を込めた最高のソリューションを創造します。
          </p>
        </div>
      </section>

      {/* Mission - Japanese Style */}
      <section className="section-padding bg-gradient-to-b from-white to-cream-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <p className="text-sm tracking-[0.3em] text-sakura-500 mb-4">Mission</p>
                <h2 className="font-display text-4xl font-medium text-indigo-900 mb-6">
                  使命
                </h2>
                <div className="divider-line mx-0 mb-8"></div>
              </div>
              <p className="text-indigo-700 leading-relaxed font-light">
                私たちは、日本の伝統的な美学である「簡素」「調和」「心」を大切にしながら、
                最先端のテクノロジーを提供することで、お客様のビジネスに新たな価値を創造します。
              </p>
              <p className="text-indigo-700 leading-relaxed font-light">
                一つひとつのプロジェクトに真摯に向き合い、
                お客様と共に成長し続けることが私たちの使命です。
              </p>
            </div>

            <div className="relative">
              <div className="washi-card p-12 space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-sakura-500 rounded-full"></div>
                    <h3 className="font-display text-xl font-medium text-indigo-900">誠実さ</h3>
                  </div>
                  <p className="text-indigo-700 leading-relaxed font-light pl-6">
                    すべての仕事において、誠実さを第一に考えます。
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-sakura-500 rounded-full"></div>
                    <h3 className="font-display text-xl font-medium text-indigo-900">革新</h3>
                  </div>
                  <p className="text-indigo-700 leading-relaxed font-light pl-6">
                    常に新しい技術を探求し、革新的なソリューションを提供します。
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-sakura-500 rounded-full"></div>
                    <h3 className="font-display text-xl font-medium text-indigo-900">共創</h3>
                  </div>
                  <p className="text-indigo-700 leading-relaxed font-light pl-6">
                    お客様と共に考え、共に創り上げることを大切にします。
                  </p>
                </div>
              </div>
              <div className="enso -bottom-10 -right-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values - Minimalist Grid */}
      <section className="section-padding">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-20">
            <p className="text-sm tracking-[0.3em] text-sakura-500 mb-4">Values</p>
            <h2 className="font-display text-4xl font-medium text-indigo-900 mb-6">
              大切にしていること
            </h2>
            <div className="divider-line"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center space-y-6">
              <div className="w-24 h-24 mx-auto border border-sakura-200 rounded-sm flex items-center justify-center">
                <span className="font-display text-3xl text-sakura-500">簡</span>
              </div>
              <h3 className="font-display text-2xl font-medium text-indigo-900">簡素</h3>
              <p className="text-indigo-700 leading-relaxed font-light">
                本質を見極め、無駄を省く。
                シンプルさの中に美しさがあります。
              </p>
            </div>

            <div className="text-center space-y-6">
              <div className="w-24 h-24 mx-auto border border-sakura-200 rounded-sm flex items-center justify-center">
                <span className="font-display text-3xl text-sakura-500">和</span>
              </div>
              <h3 className="font-display text-2xl font-medium text-indigo-900">調和</h3>
              <p className="text-indigo-700 leading-relaxed font-light">
                技術と人、伝統と革新。
                すべてがバランスよく共存します。
              </p>
            </div>

            <div className="text-center space-y-6">
              <div className="w-24 h-24 mx-auto border border-sakura-200 rounded-sm flex items-center justify-center">
                <span className="font-display text-3xl text-sakura-500">心</span>
              </div>
              <h3 className="font-display text-2xl font-medium text-indigo-900">心</h3>
              <p className="text-indigo-700 leading-relaxed font-light">
                一つひとつの仕事に心を込めて。
                真摯な姿勢が信頼を生みます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History - Timeline */}
      <section className="section-padding bg-gradient-to-b from-cream-50 to-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-20">
            <p className="text-sm tracking-[0.3em] text-sakura-500 mb-4">History</p>
            <h2 className="font-display text-4xl font-medium text-indigo-900 mb-6">
              歩み
            </h2>
            <div className="divider-line"></div>
          </div>

          <div className="space-y-16">
            <div className="flex gap-12 items-start">
              <div className="flex-shrink-0 w-32 text-right">
                <span className="font-display text-3xl font-medium text-sakura-500">2015</span>
              </div>
              <div className="flex-1 pt-2 border-l-2 border-sakura-100 pl-8">
                <h3 className="font-display text-xl font-medium text-indigo-900 mb-3">創業</h3>
                <p className="text-indigo-700 leading-relaxed font-light">
                  日本の美学とテクノロジーの融合を目指し、東京で創業しました。
                </p>
              </div>
            </div>

            <div className="flex gap-12 items-start">
              <div className="flex-shrink-0 w-32 text-right">
                <span className="font-display text-3xl font-medium text-sakura-500">2018</span>
              </div>
              <div className="flex-1 pt-2 border-l-2 border-sakura-100 pl-8">
                <h3 className="font-display text-xl font-medium text-indigo-900 mb-3">事業拡大</h3>
                <p className="text-indigo-700 leading-relaxed font-light">
                  100社以上のクライアントと共に、多様なプロジェクトを実現しました。
                </p>
              </div>
            </div>

            <div className="flex gap-12 items-start">
              <div className="flex-shrink-0 w-32 text-right">
                <span className="font-display text-3xl font-medium text-sakura-500">2021</span>
              </div>
              <div className="flex-1 pt-2 border-l-2 border-sakura-100 pl-8">
                <h3 className="font-display text-xl font-medium text-indigo-900 mb-3">AI事業開始</h3>
                <p className="text-indigo-700 leading-relaxed font-light">
                  最先端のAI技術を取り入れ、新たなサービスを展開しました。
                </p>
              </div>
            </div>

            <div className="flex gap-12 items-start">
              <div className="flex-shrink-0 w-32 text-right">
                <span className="font-display text-3xl font-medium text-sakura-500">現在</span>
              </div>
              <div className="flex-1 pt-2 pl-8">
                <h3 className="font-display text-xl font-medium text-indigo-900 mb-3">未来へ</h3>
                <p className="text-indigo-700 leading-relaxed font-light">
                  お客様と共に、より良い未来を創造し続けています。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Quote */}
      <section className="section-padding">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <div className="washi-card p-16 space-y-8">
            <p className="font-display text-3xl md:text-4xl text-indigo-900 leading-relaxed">
              「一期一会」
            </p>
            <div className="divider-line"></div>
            <p className="text-indigo-700 leading-relaxed font-light">
              一つひとつの出会いを大切に、
              <br />
              すべてのプロジェクトに全力で取り組みます。
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
