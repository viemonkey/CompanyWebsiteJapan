export default function Products() {
  return (
    <div className="pt-20 bg-[#1a1a00]">
      {/* Hero */}
      <section className="section-padding">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <p className="text-sm tracking-[0.3em] text-amber-600 mb-6">配送ポリシー</p>
          <h1 className="font-display text-5xl md:text-6xl font-medium text-amber-950 mb-8">
            配送ポリシー
          </h1>
          <div className="divider-line mb-12 bg-amber-200"></div>
          <p className="text-xl text-amber-900 leading-relaxed max-w-3xl mx-auto font-light italic">
            VIENCHIBAO – HuyK Jewelry の公式ポリシー
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-gradient-to-b from-white to-amber-50/30">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="washi-card p-12 space-y-12 bg-white/60 border border-amber-200/40 rounded-sm shadow-lg">
            
            {/* Introduction */}
            <div className="space-y-4">
              <p className="text-amber-900 leading-relaxed font-light">
                HuyKでは、すべてのジュエリーが受傷や圧迫を持っていることを理解しています。そのため、私たちのチームは、製品を迅速かつ安全に、そして完全な状態でお届けできるよう努めています。
              </p>
            </div>

            {/* Section 1: 配送ポリシー */}
            <div className="space-y-4">
              <h2 className="font-display text-3xl font-medium text-amber-950 mb-4">
                配送ポリシー
              </h2>
              <div className="w-20 h-1 bg-amber-600"></div>
              <p className="text-amber-900 leading-relaxed font-light">
                すべての注文に対して、送料無料サービスを提供しています。
              </p>
            </div>

            {/* Section 2: 注文確認および処理 */}
            <div className="space-y-4">
              <h2 className="font-display text-3xl font-medium text-amber-950 mb-4">
                注文確認および処理
              </h2>
              <div className="w-20 h-1 bg-amber-600"></div>
              <div className="space-y-3">
                <p className="text-amber-900 leading-relaxed font-light">
                  ご注文が完了すると、確認メールが送信されます。確認後、工場へ通知を発信します。
                </p>
                <p className="text-amber-900 leading-relaxed font-light">
                  この段階では、工場が窯の予算や、キャンセルが可能です。
                </p>
                <p className="text-amber-900 leading-relaxed font-light">
                  処理時間の目安: 1〜3週番号（進歩および以段を除く）
                </p>
              </div>
            </div>

            {/* Section 3: 送料および配送時間 */}
            <div className="space-y-4">
              <h2 className="font-display text-3xl font-medium text-amber-950 mb-4">
                送料および配送時間
              </h2>
              <div className="w-20 h-1 bg-amber-600"></div>
              <div className="space-y-3">
                <p className="text-amber-900 leading-relaxed font-light">
                  すべての注文に対して、送料無料サービスを提供しています。
                </p>
                <p className="text-amber-900 leading-relaxed font-light">
                  配送時間: 実際の都/市/進捗により、配送時番が早くなったり遅くなったりすることがあります。
                </p>
                <p className="text-amber-900 leading-relaxed font-light">
                  在庫がある商品: 1〜3週間
                </p>
                <p className="text-amber-900 leading-relaxed font-light">
                  配送に関するすべての情報は、ご注文確認のGmailでお送りいたします。
                </p>
              </div>
            </div>

            {/* Section 4: 注文追跡 */}
            <div className="space-y-4">
              <h2 className="font-display text-3xl font-medium text-amber-950 mb-4">
                注文追跡
              </h2>
              <div className="w-20 h-1 bg-amber-600"></div>
              <div className="space-y-3">
                <p className="text-amber-900 leading-relaxed font-light">
                  注文が発送されると、配送状況を確認するための追跡番号がメールで送信されます。
                </p>
                <p className="text-amber-900 leading-relaxed font-light">
                  ご注文前に住所や連絡先情報が正確であることを確認してください。配送情報に誤りがあった場合、HuyKは正式が却した場合の責任を負いません。
                </p>
                <p className="text-amber-900 leading-relaxed font-light font-medium">
                  「配送完了」と表示されている場合でも商品を受け取っていない場合は、以下の確認をお願いいたします。
                </p>
                <ul className="list-none space-y-2 pl-6">
                  <li className="text-amber-900 leading-relaxed font-light flex items-start">
                    <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>隣付取りポックスまたはビルの受付を確認する。</span>
                  </li>
                  <li className="text-amber-900 leading-relaxed font-light flex items-start">
                    <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>隣人や同居人に確認する。</span>
                  </li>
                  <li className="text-amber-900 leading-relaxed font-light flex items-start">
                    <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>運許メージを有押し、配送任務を守る。</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 5: サポート窓口 */}
            <div className="space-y-4">
              <h2 className="font-display text-3xl font-medium text-amber-950 mb-4">
                サポート窓口
              </h2>
              <div className="w-20 h-1 bg-amber-600"></div>
              <div className="space-y-3">
                <p className="text-amber-900 leading-relaxed font-light">
                  HuyKチームは、配送および芸氏に関する質問にいつでも対応いたします。サポートが必要な場合は、以下の方法でご連絡ください：
                </p>
                <p className="text-amber-900 leading-relaxed font-light">
                  メール: <a href="mailto:ads.vienchibao@gmail.com" className="text-amber-700 hover:text-amber-900 underline">ads.vienchibao@gmail.com</a>
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      {/* <section className="section-padding">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <div className="washi-card p-16 space-y-8 bg-white/60 border border-amber-200/40 rounded-sm shadow-lg">
            <h2 className="font-display text-3xl md:text-4xl font-medium text-amber-950">
              お気軽にご相談ください
            </h2>
            <div className="divider-line bg-amber-200"></div>
            <p className="text-amber-800 leading-relaxed font-light">
              配送に関するご質問やご不明な点がございましたら
              <br />
              お気軽にお問い合わせください
            </p>
            <button className="btn-minimal px-12 py-4 bg-amber-600 text-white font-medium rounded-sm hover:bg-amber-700 transition-colors relative z-10 shadow-lg shadow-amber-600/30">
              お問い合わせ
            </button>
          </div>
        </div>
      </section> */}
    </div>
  )
}