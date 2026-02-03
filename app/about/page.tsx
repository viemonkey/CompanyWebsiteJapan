import { Card } from "@heroui/card";

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <p className="text-sm tracking-[0.3em] text-sakura-500 mb-6">私たちについて</p>
          <h1 className="font-display text-5xl md:text-6xl font-medium text-indigo-900 mb-8">
            私たちについて
          </h1>
          <div className="w-full max-w-[1000px] mx-auto">
            <Card >
              <img src="/images/huyk.jpg" alt="" className="w-full mb-8" />
            </Card>

            <div className="divider-line mb-12"></div>
            {/* Thẻ p chiếm 100% chiều rộng của container, xóa bỏ max-w-3xl */}
            <p className="text-xl text-indigo-700 leading-relaxed font-light text-justify [text-justify:inter-ideograph] break-all w-full">
              HuyK、10年以上の経験を持つ金細工師で、手作りジュエリーの制作に情熱を注いできました。私の旅路は、小さなディテールに対する愛情から始まり、金属、宝石、そして感情が融合して、命を吹き込んだ作品が生まれています。
              日本の職人から学ぶ機会を得て、その中で 「職人（shokunin)」の精神を受け継ぎました。完璧を目指して粘り強く追求する姿勢です。この精神こそが、私がベトナムに工房を構える基盤となり、すべての作品が職人の手、心、誇りを込めて作られているのです。そして、ベトナムの手作りジュエリーを世界に広めるという夢を実現するために努力しています。
              私にとって、ジュエリーはただの装飾品ではなく、個人的な物語です。それは、作り手と所有者の間の感情の旅であり、各指輪、ネックレス、ブレスレットにはそれぞれの意味が込められ、記憶、愛、夢が反映されています。
              現在、私の作る作品はHuyKという名前のもと、VIENCHIBAO global.渡り、手作りジュエリーを世界的に広めるという夢を実現しつつあります
            </p>
          </div>
        </div>
      </section>


      {/* Mission - Japanese Style */}
      <section className="section-padding bg-gradient-to-b from-white to-cream-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <p className="text-sm tracking-[0.3em] text-sakura-500 mb-4">理念</p>
                <h2 className="font-display text-4xl font-medium text-indigo-900 mb-6">
                  使命
                </h2>
                <div className="divider-line mx-0 mb-8"></div>
              </div>
              <p className="text-indigo-700 leading-relaxed font-light">
                HuyKは、日本の「職人精神」を礎に、洗練された技術と情熱を融合させ、お客様一人ひとりの想いを形にするハンドメイドジュエリーを創造します。私たちは、細部へのこだわりと、作り手と使い手の心のつながりを大切にしています。
              </p>
              <p className="text-indigo-700 leading-relaxed font-light">
                私たちの使命は、ジュエリーという形を通じてお客様の物語を紡ぎ、ベトナムの熟練した手仕事の美しさを世界へ広めていくことです。
              </p>
            </div>


            <div className="relative">
              <div className="washi-card p-12 space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-sakura-500 rounded-full"></div>
                    <h3 className="font-display text-xl font-medium text-indigo-900">誠実</h3>
                  </div>
                  <p className="text-indigo-700 leading-relaxed font-light pl-6">
                    私たちは、素材選びから制作工程に至るまで、一切の妥協を許さず、誠実に向き合うことを第一としています。
                  </p>
                </div>


                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-sakura-500 rounded-full"></div>
                    <h3 className="font-display text-xl font-medium text-indigo-900">研鑽</h3>
                  </div>
                  <p className="text-indigo-700 leading-relaxed font-light pl-6">
                    「職人」として常に完璧を追求し、伝統的な技法と感性を磨き続けることで、魂の宿る唯一無二の作品を生み出します。
                  </p>
                </div>


                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-sakura-500 rounded-full"></div>
                    <h3 className="font-display text-xl font-medium text-indigo-900">共創</h3>
                  </div>
                  <p className="text-indigo-700 leading-relaxed font-light pl-6">
                    ジュエリーは単なる装飾品ではなく、お客様の記憶や愛、夢を映し出す鏡です。対話を通じて、共に最高の物語を作り上げます。
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
            <p className="text-sm tracking-[0.3em] text-sakura-500 mb-4">理念</p>
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
              <h3 className="font-display text-2xl font-medium text-indigo-900">洗練された簡潔さ</h3>
              <p className="text-indigo-700 leading-relaxed font-light">
                美しさは、本質の中にこそ宿ります。素材の持ち味を最大限に引き出すため、余計な装飾を削ぎ落とし、純粋な美の形を追求しています。
              </p>
            </div>


            <div className="text-center space-y-6">
              <div className="w-24 h-24 mx-auto border border-sakura-200 rounded-sm flex items-center justify-center">
                <span className="font-display text-3xl text-sakura-500">和</span>
              </div>
              <h3 className="font-display text-2xl font-medium text-indigo-900">伝統と革新の調和</h3>
              <p className="text-indigo-700 leading-relaxed font-light">
                日本の「職人精神」と現代的な感性を融合させます。伝統技術を守りながらも、新しい価値を創造し、完璧なバランスを目指しています。
              </p>
            </div>


            <div className="text-center space-y-6">
              <div className="w-24 h-24 mx-auto border border-sakura-200 rounded-sm flex items-center justify-center">
                <span className="font-display text-3xl text-sakura-500">心</span>
              </div>
              <h3 className="font-display text-2xl font-medium text-indigo-900">真心を込めた手仕事</h3>
              <p className="text-indigo-700 leading-relaxed font-light">
                ジュエリーの一つひとつに魂を吹き込みます。真摯な姿勢で制作に向き合い、お客様の大切な想いや記憶を形にするパートナーでありたいと考えています。
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* History - Timeline */}
      <section className="section-padding bg-gradient-to-b from-cream-50 to-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-20">
            <p className="text-sm tracking-[0.3em] text-sakura-500 mb-4">歩み</p>
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
                <h3 className="font-display text-xl font-medium text-indigo-900 mb-3">修業の始まり</h3>
                <p className="text-indigo-700 leading-relaxed font-light">
                  日本のジュエリー製作技術に魅了され、熟練職人のもとで本格的な修行を開始しました。
                </p>
              </div>
            </div>


            <div className="flex gap-12 items-start">
              <div className="flex-shrink-0 w-32 text-right">
                <span className="font-display text-3xl font-medium text-sakura-500">2018</span>
              </div>
              <div className="flex-1 pt-2 border-l-2 border-sakura-100 pl-8">
                <h3 className="font-display text-xl font-medium text-indigo-900 mb-3">独自スタイルの確立</h3>
                <p className="text-indigo-700 leading-relaxed font-light">
                  「職人精神」を基盤に、ベトナムの伝統美と現代的な感性を融合させた独自のスタイルを確立しました。
                </p>
              </div>
            </div>


            <div className="flex gap-12 items-start">
              <div className="flex-shrink-0 w-32 text-right">
                <span className="font-display text-3xl font-medium text-sakura-500">2021</span>
              </div>
              <div className="flex-1 pt-2 border-l-2 border-sakura-100 pl-8">
                <h3 className="font-display text-xl font-medium text-indigo-900 mb-3">HuyK Jewelry 工房設立</h3>
                <p className="text-indigo-700 leading-relaxed font-light">
                  ベトナムにて自社工房を設立。世界へ向けたハンドメイドジュエリーの展開を開始しました。
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
                  VIENCHIBAO globalを通じて、世界中のお客様へ想いを込めた作品を届け続けています。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Philosophy Quote */}
      {/* <section className="section-padding">
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
      </section> */}
    </div>
  )
}
