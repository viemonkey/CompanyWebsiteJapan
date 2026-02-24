"use client";
import React, { createContext, useContext, useState, ReactNode, useEffect, useRef } from 'react';

export const translations: Record<string, Record<string, any>> = {
  en: {
    nav: { home: "Home", about: "About Us", services: "Services", team: "Team" },
    hero: {
      brand: "Vien Chi Bao Global LLC",
      title: "Crafting the Soul of",
      titleHighlight: "Timeless Radiance",
      button: "EXPLORE COLLECTIONS",
    },
    story: {
      items: [
        { part: "Part 1 of 3", title: "The Genesis", description: ["Vien Chi Bao specializes in premium jewelry—crafted from S925 silver, gold, gemstones, and natural agarwood.", "Beyond mere adornment, each piece serves as a personal 'amulet,' bringing luck and positive energy."] },
        { part: "Part 2 of 3", title: "Masterful Craftsmanship", description: ["Every design is meticulously handcrafted by master artisans with decades of experience.", "We blend ancient metallurgy with modern precision to ensure flawless quality."] },
        { part: "Part 3 of 3", title: "Global Vision", description: ["Established in Vietnam, we are now expanding to bring Oriental wisdom to the modern world.", "Our mission is to share timeless elegance through every handcrafted detail."] },
      ],
    },
    values: {
      heading: "Our Core Values",
      items: [
        { title: "INTEGRITY", desc: "Certified materials and total transparency." },
        { title: "SAFETY", desc: "Hypoallergenic and skin-safe premium metals." },
        { title: "ARTISTRY", desc: "Handcrafted souls in every single detail." },
      ],
    },
    cta: { heading: "Bring Home Your Amulet", subheading: "Discover jewelry that resonates with your energy and elevates your spirit.", button: "BOOK A PRIVATE CONSULTATION" },
    footer: {
      tagline: "High-end handcrafted jewelry, deeply imbued with soul and Vietnamese identity.",
      contactTitle: "Contact Information",
      companyLabel: "Company", addressLabel: "Address", emailLabel: "Email",
      navTitle: "Explore",
      navLinks: [
        { label: "Home", href: "/" },
        { label: "About Us", href: "/about" },
        { label: "Services", href: "/products" },
        { label: "Team", href: "/team" },
      ],
    },
    about: {
      heroLabel: "Master Artisan Vien Chi Bao",
      heroTitle: "The Hands That",
      heroTitleHighlight: "Shape the Soul",
      heroQuote: '"Each masterpiece tells a unique story, embedding faith and profound spiritual values for our cherished customers."',
      missionLabel: "Artisan HuyK",
      missionTitle: "Our Mission",
      missionP1: "HuyK is a master goldsmith with over a decade of experience, driven by a profound passion for handcrafted jewelry. My journey began with an obsession for the finest details.",
      missionP2: 'Trained by Japanese masters, I inherited the "Shokunin" spirit — the relentless pursuit of perfection and unwavering dedication to the craft. This philosophy has become the cornerstone of my atelier in Vietnam.',
      philosophyLabel: "Our Philosophy",
      philosophyTitle: "The Pillars of Master Craftsmanship",
      pillars: [
        { title: "Integrity", desc: "Absolute transparency regarding the quality and weight of gold and silver." },
        { title: "Safety", desc: "Utilizing clean, nickel-free materials that are safe for all skin types." },
        { title: "Artistry", desc: "Each piece is a handcrafted masterpiece, meticulously forged with precision." },
        { title: "Spirit", desc: "Infusing soul and positive energy into every single design." },
      ],
      footer: "© 2026 VIEN CHI BAO GLOBAL LLC. THE ARTISAN JOURNEY.",
    },
    team: {
      heroLabel: "Crafting Excellence",
      heroTitle: "The Souls Behind",
      heroTitleHighlight: "Every Creation",
      gridLabel: "The Master Hands",
      gridTitle: "The souls behind every creation",
      seeMore: "See more",
      expertiseLabel: "Areas of Expertise",
      footer: "© 2026 VIEN CHI BAO GLOBAL LLC. THE ARTISAN ARCHIVE.",
      members: [
        { name: "Huy K", position: "Founder & Master Craftsman", bio: "A goldsmith with over 10 years of experience. Mastering the Japanese artisan spirit, he established a unique style blending Vietnamese tradition with modern precision. He believes that every piece of jewelry carries a story and a soul, meticulously crafted to last for generations.", expertise: ["Goldsmithing", "Gemstone Processing"] },
        { name: "Linh Thi", position: "Design Director", bio: "With a delicate aesthetic sensibility, she creates designs that give form to deepest emotions, prioritizing harmony between heritage and contemporary beauty. Her work is inspired by the organic shapes of nature and the timeless elegance of spiritual symbols.", expertise: ["Jewelry Design", "Creative Direction"] },
        { name: "Thanh Minh", position: "Senior Craftsman", bio: "Specializing in high-precision processing. His dedication to detail and pursuit of perfection ensure every work meets the highest quality standards. Having spent years at the workbench, he understands the subtle language of metals.", expertise: ["Stone Setting", "Finishing"] },
        { name: "Quoc Anh", position: "Senior Craftsman", bio: "Specializing in high-precision processing. His dedication to detail and pursuit of perfection ensure every work meets the highest quality standards. He is a master of intricate engravings.", expertise: ["Stone Setting", "Finishing"] },
        { name: "Minh Tu", position: "Senior Craftsman", bio: "Specializing in high-precision processing. His dedication to detail and pursuit of perfection ensure every work meets the highest quality standards. Expertise in restoring heritage pieces.", expertise: ["Stone Setting", "Finishing"] },
        { name: "Hoang Nam", position: "Senior Craftsman", bio: "Specializing in high-precision processing. His dedication to detail and pursuit of perfection ensure every work meets the highest quality standards. Focuses on the energetic purity of gemstones.", expertise: ["Stone Setting", "Finishing"] },
      ],
    },
    products: {
      heroLabel: "Logistics & Global Delivery",
      heroTitle: "Shipping",
      heroTitleHighlight: "Policy",
      intro: '"At VienChiBao, we understand that every piece of jewelry carries profound meaning and sentiment. Our team is committed to ensuring your pieces are delivered swiftly, safely, and in pristine condition."',
      deliveryLabel: "Delivery",
      deliveryTitle: "Complimentary Shipping",
      deliveryDesc: "We are pleased to offer complimentary shipping services for all domestic and international orders.",
      timelineLabel: "Timeline",
      timelineTitle: "Crafting & Handling",
      timelineP1: "Estimated processing time:",
      timelineHighlight: "1 to 3 weeks",
      timelineP2: "Cancellations or adjustments are possible before the final crafting process begins.",
      securityLabel: "Security",
      securityTitle: "Order Tracking & Security",
      securityP1: "Once shipped, you will receive a tracking number via email. Please ensure your shipping address and contact details are accurate.",
      securityList: ["Check building management or secure mailboxes.", "Confirm with neighbors or household members.", "Contact local courier for signature verification."],
    },
  },

  vi: {
    nav: { home: "Trang Chủ", about: "Về Chúng Tôi", services: "Dịch Vụ", team: "Đội Ngũ" },
    hero: { brand: "Vien Chi Bao Global LLC", title: "Kiến Tạo Nên Linh Hồn Của", titleHighlight: "Vẻ Đẹp Rạng Rỡ Vượt Thời Gian", button: "KHÁM PHÁ BỘ SƯU TẬP" },
    story: {
      items: [
        { part: "Phần 1 / 3", title: "Khởi Nguồn", description: ["Viên Chi Bảo chuyên về trang sức cao cấp — được chế tác từ bạc S925, vàng, đá quý và trầm hương tự nhiên.", "Hơn cả sự trang trí, mỗi sản phẩm là một 'bùa hộ mệnh' cá nhân, mang lại may mắn và năng lượng tích cực."] },
        { part: "Phần 2 / 3", title: "Tinh Hoa Chế Tác", description: ["Mỗi thiết kế đều được chế tác thủ công tỉ mỉ bởi các nghệ nhân bậc thầy với hàng thập kỷ kinh nghiệm.", "Chúng tôi kết hợp luyện kim cổ đại với sự chính xác hiện đại để đảm bảo chất lượng hoàn hảo."] },
        { part: "Phần 3 / 3", title: "Tầm Nhìn Toàn Cầu", description: ["Được thành lập tại Việt Nam, chúng tôi đang mở rộng để mang trí tuệ phương Đông đến thế giới hiện đại.", "Sứ mệnh của chúng tôi là chia sẻ vẻ đẹp vượt thời gian qua từng chi tiết thủ công."] },
      ],
    },
    values: { heading: "Giá Trị Cốt Lõi", items: [{ title: "CHÍNH TRỰC", desc: "Nguyên liệu được chứng nhận và minh bạch hoàn toàn." }, { title: "AN TOÀN", desc: "Kim loại cao cấp không gây dị ứng, an toàn cho da." }, { title: "NGHỆ THUẬT", desc: "Linh hồn được chế tác thủ công trong từng chi tiết." }] },
    cta: { heading: "Mang Bùa Hộ Mệnh Về Nhà", subheading: "Khám phá trang sức cộng hưởng với năng lượng của bạn và nâng cao tinh thần.", button: "ĐẶT LỊCH TƯ VẤN RIÊNG" },
    footer: {
      tagline: "Trang sức thủ công cao cấp, đậm chất tâm hồn và bản sắc Việt Nam.",
      contactTitle: "Thông Tin Liên Hệ",
      companyLabel: "Công Ty", addressLabel: "Địa Chỉ", emailLabel: "Email",
      navTitle: "Khám Phá",
      navLinks: [
        { label: "Trang Chủ", href: "/" },
        { label: "Về Chúng Tôi", href: "/about" },
        { label: "Dịch Vụ", href: "/products" },
        { label: "Đội Ngũ", href: "/team" },
      ],
    },
    about: {
      heroLabel: "Nghệ Nhân Bậc Thầy Viên Chi Bảo", heroTitle: "Đôi Bàn Tay", heroTitleHighlight: "Chạm Đến Linh Hồn",
      heroQuote: '"Mỗi kiệt tác kể một câu chuyện độc đáo, gửi gắm niềm tin và những giá trị tâm linh sâu sắc cho khách hàng quý mến."',
      missionLabel: "Nghệ Nhân HuyK", missionTitle: "Sứ Mệnh Của Chúng Tôi",
      missionP1: "HuyK là một thợ kim hoàn bậc thầy với hơn một thập kỷ kinh nghiệm, được thúc đẩy bởi niềm đam mê sâu sắc với trang sức thủ công. Hành trình của tôi bắt đầu với sự ám ảnh về những chi tiết tinh xảo nhất.",
      missionP2: 'Được đào tạo bởi các bậc thầy Nhật Bản, tôi kế thừa tinh thần "Shokunin" — sự theo đuổi hoàn hảo không ngừng nghỉ và cống hiến tuyệt đối cho nghề. Triết lý này đã trở thành nền tảng của xưởng thủ công của tôi tại Việt Nam.',
      philosophyLabel: "Triết Lý Của Chúng Tôi", philosophyTitle: "Những Trụ Cột Của Nghề Thủ Công Bậc Thầy",
      pillars: [
        { title: "Chính Trực", desc: "Hoàn toàn minh bạch về chất lượng và trọng lượng vàng bạc." },
        { title: "An Toàn", desc: "Sử dụng vật liệu sạch, không niken, an toàn cho mọi loại da." },
        { title: "Nghệ Thuật", desc: "Mỗi sản phẩm là một kiệt tác thủ công, được rèn giũa tỉ mỉ với độ chính xác cao." },
        { title: "Tâm Hồn", desc: "Truyền tải linh hồn và năng lượng tích cực vào từng thiết kế." },
      ],
      footer: "© 2026 VIÊN CHI BẢO GLOBAL LLC. HÀNH TRÌNH NGHỆ NHÂN.",
    },
    team: {
      heroLabel: "Tinh Hoa Chế Tác", heroTitle: "Những Tâm Hồn Đằng Sau", heroTitleHighlight: "Mỗi Sáng Tạo",
      gridLabel: "Đôi Bàn Tay Bậc Thầy", gridTitle: "Những tâm hồn đằng sau mỗi sáng tạo",
      seeMore: "Xem thêm", expertiseLabel: "Lĩnh Vực Chuyên Môn",
      footer: "© 2026 VIÊN CHI BẢO GLOBAL LLC. KHO LƯU TRỮ NGHỆ NHÂN.",
      members: [
        { name: "Huy K", position: "Nhà Sáng Lập & Thợ Kim Hoàn Bậc Thầy", bio: "Thợ kim hoàn với hơn 10 năm kinh nghiệm. Thấm nhuần tinh thần nghệ nhân Nhật Bản, anh tạo dựng phong cách độc đáo kết hợp truyền thống Việt Nam với sự chính xác hiện đại.", expertise: ["Kim Hoàn", "Chế Tác Đá Quý"] },
        { name: "Linh Thi", position: "Giám Đốc Thiết Kế", bio: "Với cảm quan thẩm mỹ tinh tế, cô tạo ra những thiết kế thổi hồn vào cảm xúc sâu thẳm nhất, ưu tiên sự hài hòa giữa di sản và vẻ đẹp đương đại.", expertise: ["Thiết Kế Trang Sức", "Định Hướng Sáng Tạo"] },
        { name: "Thanh Minh", position: "Nghệ Nhân Cao Cấp", bio: "Chuyên về gia công chính xác cao. Sự tận tâm với từng chi tiết và theo đuổi sự hoàn hảo đảm bảo mỗi tác phẩm đạt tiêu chuẩn chất lượng cao nhất.", expertise: ["Gắn Đá", "Hoàn Thiện"] },
        { name: "Quoc Anh", position: "Nghệ Nhân Cao Cấp", bio: "Chuyên về gia công chính xác cao. Sự tận tâm với từng chi tiết và theo đuổi sự hoàn hảo đảm bảo mỗi tác phẩm đạt tiêu chuẩn chất lượng cao nhất. Bậc thầy về chạm khắc tinh xảo.", expertise: ["Gắn Đá", "Hoàn Thiện"] },
        { name: "Minh Tu", position: "Nghệ Nhân Cao Cấp", bio: "Chuyên về gia công chính xác cao. Sự tận tâm với từng chi tiết và theo đuổi sự hoàn hảo đảm bảo mỗi tác phẩm đạt tiêu chuẩn chất lượng cao nhất. Chuyên gia phục hồi tác phẩm cổ.", expertise: ["Gắn Đá", "Hoàn Thiện"] },
        { name: "Hoang Nam", position: "Nghệ Nhân Cao Cấp", bio: "Chuyên về gia công chính xác cao. Sự tận tâm với từng chi tiết và theo đuổi sự hoàn hảo đảm bảo mỗi tác phẩm đạt tiêu chuẩn chất lượng cao nhất. Tập trung vào sự thuần khiết năng lượng của đá quý.", expertise: ["Gắn Đá", "Hoàn Thiện"] },
      ],
    },
    products: {
      heroLabel: "Hậu Cần & Giao Hàng Toàn Cầu", heroTitle: "Chính Sách", heroTitleHighlight: "Vận Chuyển",
      intro: '"Tại VienChiBao, chúng tôi hiểu rằng mỗi món trang sức mang ý nghĩa và tình cảm sâu sắc. Đội ngũ của chúng tôi cam kết đảm bảo món hàng của bạn được giao nhanh chóng, an toàn và trong tình trạng hoàn hảo."',
      deliveryLabel: "Giao Hàng", deliveryTitle: "Miễn Phí Vận Chuyển",
      deliveryDesc: "Chúng tôi vui lòng cung cấp dịch vụ vận chuyển miễn phí cho tất cả đơn hàng trong nước và quốc tế.",
      timelineLabel: "Thời Gian", timelineTitle: "Chế Tác & Xử Lý",
      timelineP1: "Thời gian xử lý ước tính:", timelineHighlight: "1 đến 3 tuần",
      timelineP2: "Có thể hủy hoặc điều chỉnh trước khi bắt đầu quá trình chế tác cuối cùng.",
      securityLabel: "Bảo Mật", securityTitle: "Theo Dõi Đơn Hàng & Bảo Mật",
      securityP1: "Sau khi giao hàng, bạn sẽ nhận được mã theo dõi qua email. Vui lòng đảm bảo địa chỉ giao hàng và thông tin liên hệ chính xác.",
      securityList: ["Kiểm tra ban quản lý tòa nhà hoặc hộp thư an toàn.", "Xác nhận với hàng xóm hoặc thành viên trong gia đình.", "Liên hệ với đơn vị vận chuyển địa phương để xác minh chữ ký."],
    },
  },

  ja: {
    nav: { home: "家", about: "私たちについて", services: "サービス", team: "チーム" },
    hero: { brand: "Vien Chi Bao Global LLC", title: "永遠の輝きの魂を", titleHighlight: "創り上げる", button: "コレクションを見る" },
    story: {
      items: [
        { part: "第1部 / 全3部", title: "起源", description: ["Vien Chi BaoはS925シルバー、ゴールド、宝石、天然沈香木から作られたプレミアムジュエリーを専門としています。", "単なる装飾品を超え、各作品は個人の「お守り」として幸運とポジティブなエネルギーをもたらします。"] },
        { part: "第2部 / 全3部", title: "匠の技", description: ["すべてのデザインは数十年の経験を持つ職人の匠によって丁寧に手作りされています。", "古代の冶金術と現代の精密さを融合させ、完璧な品質を保証します。"] },
        { part: "第3部 / 全3部", title: "グローバルビジョン", description: ["ベトナムで設立され、現在は東洋の知恵を現代世界にお届けするために拡大しています。", "私たちの使命はすべての手作りの細部を通じて時代を超えたエレガンスを共有することです。"] },
      ],
    },
    values: { heading: "私たちの核心的価値観", items: [{ title: "誠実さ", desc: "認定された素材と完全な透明性。" }, { title: "安全性", desc: "低刺激性で肌に優しいプレミアムメタル。" }, { title: "芸術性", desc: "すべての細部に魂を込めた手作り。" }] },
    cta: { heading: "お守りをお持ち帰りください", subheading: "あなたのエネルギーと共鳴し精神を高めるジュエリーをご覧ください。", button: "プライベートコンサルテーションを予約" },
    footer: {
      tagline: "魂とベトナムのアイデンティティを深く宿した高級手作りジュエリー。",
      contactTitle: "お問い合わせ情報",
      companyLabel: "会社名", addressLabel: "住所", emailLabel: "メール",
      navTitle: "探索",
      navLinks: [
        { label: "ホーム", href: "/" },
        { label: "私たちについて", href: "/about" },
        { label: "サービス", href: "/products" },
        { label: "チーム", href: "/team" },
      ],
    },
    about: {
      heroLabel: "マスター職人 Vien Chi Bao", heroTitle: "魂を形にする", heroTitleHighlight: "匠の手",
      heroQuote: '「各傑作はユニークな物語を語り、大切なお客様への信仰と深い精神的価値を込めています。」',
      missionLabel: "職人 HuyK", missionTitle: "私たちの使命",
      missionP1: "HuyKは10年以上の経験を持つ金細工師で、手作りジュエリーへの深い情熱に突き動かされています。私の旅は最も繊細な細部へのこだわりから始まりました。",
      missionP2: '日本の匠に師事し、「職人」精神――完璧への絶え間ない追求と工芸への揺るぎない献身を受け継ぎました。この哲学はベトナムの私のアトリエの礎となっています。',
      philosophyLabel: "私たちの哲学", philosophyTitle: "マスター工芸の柱",
      pillars: [
        { title: "誠実さ", desc: "金銀の品質と重量に関する完全な透明性。" },
        { title: "安全性", desc: "あらゆる肌タイプに安全なニッケルフリーの清潔な素材を使用。" },
        { title: "芸術性", desc: "各作品は精密に鍛造された手作りの傑作。" },
        { title: "精神性", desc: "すべてのデザインに魂とポジティブなエネルギーを注入。" },
      ],
      footer: "© 2026 VIEN CHI BAO GLOBAL LLC. 職人の旅。",
    },
    team: {
      heroLabel: "卓越した工芸", heroTitle: "すべての創造の背後にある", heroTitleHighlight: "魂",
      gridLabel: "匠の手", gridTitle: "すべての創造の背後にある魂",
      seeMore: "もっと見る", expertiseLabel: "専門分野",
      footer: "© 2026 VIEN CHI BAO GLOBAL LLC. 職人アーカイブ。",
      members: [
        { name: "Huy K", position: "創設者 & マスター職人", bio: "10年以上の経験を持つ金細工師。日本の職人精神を習得し、ベトナムの伝統と現代の精密さを融合させた独自のスタイルを確立しました。", expertise: ["金細工", "宝石加工"] },
        { name: "Linh Thi", position: "デザインディレクター", bio: "繊細な美的感覚で、最も深い感情を形にするデザインを生み出し、遺産と現代の美しさの調和を優先します。", expertise: ["ジュエリーデザイン", "クリエイティブディレクション"] },
        { name: "Thanh Minh", position: "シニア職人", bio: "高精度加工を専門とし、細部へのこだわりと完璧さの追求が最高品質基準を保証します。", expertise: ["石留め", "仕上げ"] },
        { name: "Quoc Anh", position: "シニア職人", bio: "高精度加工を専門とし、精緻な彫刻の達人です。", expertise: ["石留め", "仕上げ"] },
        { name: "Minh Tu", position: "シニア職人", bio: "高精度加工を専門とし、ヘリテージ作品の修復を得意とします。", expertise: ["石留め", "仕上げ"] },
        { name: "Hoang Nam", position: "シニア職人", bio: "高精度加工を専門とし、宝石のエネルギーの純粋さに焦点を当てています。", expertise: ["石留め", "仕上げ"] },
      ],
    },
    products: {
      heroLabel: "物流 & グローバル配送", heroTitle: "配送", heroTitleHighlight: "ポリシー",
      intro: '「VienChiBaoでは、すべてのジュエリーが深い意味と感情を持つことを理解しています。私たちのチームは、お客様のお品物を迅速、安全、完璧な状態でお届けすることをお約束します。」',
      deliveryLabel: "配送", deliveryTitle: "送料無料",
      deliveryDesc: "国内外すべてのご注文に無料配送サービスを提供しています。",
      timelineLabel: "タイムライン", timelineTitle: "制作 & 取り扱い",
      timelineP1: "推定処理時間：", timelineHighlight: "1〜3週間",
      timelineP2: "最終制作プロセス開始前はキャンセルや調整が可能です。",
      securityLabel: "セキュリティ", securityTitle: "注文追跡 & セキュリティ",
      securityP1: "発送後、追跡番号をメールでお知らせします。配送先住所と連絡先情報が正確であることをご確認ください。",
      securityList: ["建物管理または安全な郵便受けを確認してください。", "隣人や家族に確認してください。", "署名確認のため地元の配送業者に連絡してください。"],
    },
  },

  fr: {
    nav: { home: "Accueil", about: "À Propos", services: "Services", team: "Équipe" },
    hero: { brand: "Vien Chi Bao Global LLC", title: "Créer l'Âme d'un", titleHighlight: "Éclat Intemporel", button: "EXPLORER LES COLLECTIONS" },
    story: {
      items: [
        { part: "Partie 1 / 3", title: "La Genèse", description: ["Vien Chi Bao est spécialisé dans les bijoux de luxe fabriqués à partir d'argent S925, d'or, de pierres précieuses et de bois d'agar naturel.", "Au-delà du simple ornement, chaque pièce sert d'amulette personnelle apportant chance et énergie positive."] },
        { part: "Partie 2 / 3", title: "Savoir-Faire Magistral", description: ["Chaque design est méticuleusement fabriqué à la main par des artisans maîtres avec des décennies d'expérience.", "Nous fusionnons la métallurgie ancienne avec la précision moderne pour garantir une qualité irréprochable."] },
        { part: "Partie 3 / 3", title: "Vision Mondiale", description: ["Fondé au Vietnam, nous nous développons maintenant pour apporter la sagesse orientale au monde moderne.", "Notre mission est de partager une élégance intemporelle à travers chaque détail artisanal."] },
      ],
    },
    values: { heading: "Nos Valeurs Fondamentales", items: [{ title: "INTÉGRITÉ", desc: "Matériaux certifiés et transparence totale." }, { title: "SÉCURITÉ", desc: "Métaux premium hypoallergéniques et sans danger pour la peau." }, { title: "ARTISANAT", desc: "Des âmes fabriquées à la main dans chaque détail." }] },
    cta: { heading: "Ramenez Votre Amulette Chez Vous", subheading: "Découvrez des bijoux qui résonnent avec votre énergie et élèvent votre esprit.", button: "RÉSERVER UNE CONSULTATION PRIVÉE" },
    footer: {
      tagline: "Bijoux artisanaux haut de gamme, profondément imprégnés d'âme et d'identité vietnamienne.",
      contactTitle: "Informations de Contact",
      companyLabel: "Société", addressLabel: "Adresse", emailLabel: "Email",
      navTitle: "Explorer",
      navLinks: [
        { label: "Accueil", href: "/" },
        { label: "À Propos", href: "/about" },
        { label: "Services", href: "/products" },
        { label: "Équipe", href: "/team" },
      ],
    },
    about: {
      heroLabel: "Maître Artisan Vien Chi Bao", heroTitle: "Les Mains Qui", heroTitleHighlight: "Façonnent l'Âme",
      heroQuote: '"Chaque chef-d\'œuvre raconte une histoire unique, incarnant la foi et de profondes valeurs spirituelles pour nos précieux clients."',
      missionLabel: "Artisan HuyK", missionTitle: "Notre Mission",
      missionP1: "HuyK est un maître orfèvre avec plus d'une décennie d'expérience, animé par une profonde passion pour la bijouterie artisanale. Mon voyage a commencé avec une obsession pour les détails les plus fins.",
      missionP2: 'Formé par des maîtres japonais, j\'ai hérité de l\'esprit "Shokunin" — la poursuite incessante de la perfection et un dévouement indéfectible au métier. Cette philosophie est devenue la pierre angulaire de mon atelier au Vietnam.',
      philosophyLabel: "Notre Philosophie", philosophyTitle: "Les Piliers de la Maîtrise Artisanale",
      pillars: [
        { title: "Intégrité", desc: "Transparence absolue concernant la qualité et le poids de l'or et de l'argent." },
        { title: "Sécurité", desc: "Utilisation de matériaux propres, sans nickel, sûrs pour tous les types de peau." },
        { title: "Artisanat", desc: "Chaque pièce est un chef-d'œuvre artisanal, forgé méticuleusement avec précision." },
        { title: "Esprit", desc: "Infuser l'âme et l'énergie positive dans chaque design." },
      ],
      footer: "© 2026 VIEN CHI BAO GLOBAL LLC. LE VOYAGE ARTISANAL.",
    },
    team: {
      heroLabel: "Excellence Artisanale", heroTitle: "Les Âmes Derrière", heroTitleHighlight: "Chaque Création",
      gridLabel: "Les Mains Maîtresses", gridTitle: "Les âmes derrière chaque création",
      seeMore: "Voir plus", expertiseLabel: "Domaines d'Expertise",
      footer: "© 2026 VIEN CHI BAO GLOBAL LLC. LES ARCHIVES ARTISANALES.",
      members: [
        { name: "Huy K", position: "Fondateur & Maître Artisan", bio: "Orfèvre avec plus de 10 ans d'expérience. Maîtrisant l'esprit artisan japonais, il a établi un style unique mêlant tradition vietnamienne et précision moderne.", expertise: ["Orfèvrerie", "Traitement des Gemmes"] },
        { name: "Linh Thi", position: "Directrice Artistique", bio: "Avec une sensibilité esthétique délicate, elle crée des designs qui donnent forme aux émotions les plus profondes, privilégiant l'harmonie entre patrimoine et beauté contemporaine.", expertise: ["Design de Bijoux", "Direction Créative"] },
        { name: "Thanh Minh", position: "Artisan Senior", bio: "Spécialisé dans la transformation de haute précision. Son dévouement aux détails garantit que chaque œuvre répond aux plus hauts standards de qualité.", expertise: ["Sertissage", "Finition"] },
        { name: "Quoc Anh", position: "Artisan Senior", bio: "Spécialisé dans la transformation de haute précision. Maître des gravures complexes.", expertise: ["Sertissage", "Finition"] },
        { name: "Minh Tu", position: "Artisan Senior", bio: "Spécialisé dans la transformation de haute précision. Expert en restauration de pièces patrimoniales.", expertise: ["Sertissage", "Finition"] },
        { name: "Hoang Nam", position: "Artisan Senior", bio: "Spécialisé dans la transformation de haute précision. Se concentre sur la pureté énergétique des pierres précieuses.", expertise: ["Sertissage", "Finition"] },
      ],
    },
    products: {
      heroLabel: "Logistique & Livraison Mondiale", heroTitle: "Politique de", heroTitleHighlight: "Livraison",
      intro: '"Chez VienChiBao, nous comprenons que chaque bijou porte une signification et un sentiment profonds. Notre équipe s\'engage à livrer vos pièces rapidement, en toute sécurité et en parfait état."',
      deliveryLabel: "Livraison", deliveryTitle: "Livraison Gratuite",
      deliveryDesc: "Nous sommes heureux d'offrir des services d'expédition gratuits pour toutes les commandes nationales et internationales.",
      timelineLabel: "Délais", timelineTitle: "Fabrication & Traitement",
      timelineP1: "Délai de traitement estimé :", timelineHighlight: "1 à 3 semaines",
      timelineP2: "Les annulations ou ajustements sont possibles avant le début du processus de fabrication final.",
      securityLabel: "Sécurité", securityTitle: "Suivi de Commande & Sécurité",
      securityP1: "Une fois expédié, vous recevrez un numéro de suivi par email. Veuillez vous assurer que votre adresse et vos coordonnées sont exactes.",
      securityList: ["Vérifiez la gestion de l'immeuble ou les boîtes aux lettres sécurisées.", "Confirmez avec les voisins ou les membres du foyer.", "Contactez le transporteur local pour vérification de signature."],
    },
  },

  de: {
    nav: { home: "Startseite", about: "Über Uns", services: "Dienstleistungen", team: "Team" },
    hero: { brand: "Vien Chi Bao Global LLC", title: "Die Seele des", titleHighlight: "Zeitlosen Glanzes Erschaffen", button: "KOLLEKTIONEN ENTDECKEN" },
    story: {
      items: [
        { part: "Teil 1 / 3", title: "Die Entstehung", description: ["Vien Chi Bao ist spezialisiert auf Premium-Schmuck gefertigt aus S925-Silber, Gold, Edelsteinen und natürlichem Adlerholz.", "Über die bloße Zierde hinaus dient jedes Stück als persönliches Amulett das Glück und positive Energie bringt."] },
        { part: "Teil 2 / 3", title: "Meisterhafte Handwerkskunst", description: ["Jedes Design wird von Meisterhandwerkern mit jahrzehntelanger Erfahrung sorgfältig von Hand gefertigt.", "Wir verbinden antike Metallurgie mit moderner Präzision um makellose Qualität zu gewährleisten."] },
        { part: "Teil 3 / 3", title: "Globale Vision", description: ["In Vietnam gegründet expandieren wir nun um östliche Weisheit in die moderne Welt zu bringen.", "Unsere Mission ist es zeitlose Eleganz durch jedes handgefertigte Detail zu teilen."] },
      ],
    },
    values: { heading: "Unsere Grundwerte", items: [{ title: "INTEGRITÄT", desc: "Zertifizierte Materialien und vollständige Transparenz." }, { title: "SICHERHEIT", desc: "Hypoallergene und hautverträgliche Edelmetalle." }, { title: "KUNSTFERTIGKEIT", desc: "Von Hand gefertigte Seelen in jedem einzelnen Detail." }] },
    cta: { heading: "Bringen Sie Ihr Amulett Nach Hause", subheading: "Entdecken Sie Schmuck der mit Ihrer Energie resoniert und Ihren Geist erhebt.", button: "PRIVATE BERATUNG BUCHEN" },
    footer: {
      tagline: "Hochwertiger handgefertigter Schmuck, tief durchdrungen von Seele und vietnamesischer Identität.",
      contactTitle: "Kontaktinformationen",
      companyLabel: "Unternehmen", addressLabel: "Adresse", emailLabel: "E-Mail",
      navTitle: "Entdecken",
      navLinks: [
        { label: "Startseite", href: "/" },
        { label: "Über Uns", href: "/about" },
        { label: "Dienstleistungen", href: "/products" },
        { label: "Team", href: "/team" },
      ],
    },
    about: {
      heroLabel: "Meister-Handwerker Vien Chi Bao", heroTitle: "Die Hände, die", heroTitleHighlight: "die Seele formen",
      heroQuote: '"Jedes Meisterwerk erzählt eine einzigartige Geschichte und verkörpert Glauben und tiefe spirituelle Werte für unsere geschätzten Kunden."',
      missionLabel: "Handwerker HuyK", missionTitle: "Unsere Mission",
      missionP1: "HuyK ist ein Meister-Goldschmied mit über einem Jahrzehnt Erfahrung, getrieben von einer tiefen Leidenschaft für handgefertigten Schmuck.",
      missionP2: 'Von japanischen Meistern ausgebildet, erbte ich den „Shokunin"-Geist — das unermüdliche Streben nach Perfektion und unerschütterliche Hingabe an das Handwerk.',
      philosophyLabel: "Unsere Philosophie", philosophyTitle: "Die Säulen des Meister-Handwerks",
      pillars: [
        { title: "Integrität", desc: "Absolute Transparenz hinsichtlich Qualität und Gewicht von Gold und Silber." },
        { title: "Sicherheit", desc: "Verwendung sauberer, nickelfreier Materialien, die für alle Hauttypen sicher sind." },
        { title: "Kunstfertigkeit", desc: "Jedes Stück ist ein handgefertigtes Meisterwerk, sorgfältig mit Präzision geschmiedet." },
        { title: "Geist", desc: "Einbringen von Seele und positiver Energie in jedes Design." },
      ],
      footer: "© 2026 VIEN CHI BAO GLOBAL LLC. DIE HANDWERKER-REISE.",
    },
    team: {
      heroLabel: "Handwerkliche Exzellenz", heroTitle: "Die Seelen hinter", heroTitleHighlight: "jeder Schöpfung",
      gridLabel: "Die Meisterhände", gridTitle: "Die Seelen hinter jeder Schöpfung",
      seeMore: "Mehr sehen", expertiseLabel: "Fachgebiete",
      footer: "© 2026 VIEN CHI BAO GLOBAL LLC. DAS HANDWERKER-ARCHIV.",
      members: [
        { name: "Huy K", position: "Gründer & Meister-Handwerker", bio: "Goldschmied mit über 10 Jahren Erfahrung. Er beherrschte den japanischen Handwerkergeist und etablierte einen einzigartigen Stil.", expertise: ["Goldschmiedekunst", "Edelsteinverarbeitung"] },
        { name: "Linh Thi", position: "Kreativdirektorin", bio: "Mit feinem ästhetischem Gespür schafft sie Designs, die tiefsten Emotionen Form geben.", expertise: ["Schmuckdesign", "Kreative Leitung"] },
        { name: "Thanh Minh", position: "Senior-Handwerker", bio: "Spezialisiert auf hochpräzise Verarbeitung. Seine Liebe zum Detail gewährleistet höchste Qualitätsstandards.", expertise: ["Steinfassung", "Finishing"] },
        { name: "Quoc Anh", position: "Senior-Handwerker", bio: "Spezialisiert auf hochpräzise Verarbeitung. Meister komplizierter Gravuren.", expertise: ["Steinfassung", "Finishing"] },
        { name: "Minh Tu", position: "Senior-Handwerker", bio: "Spezialisiert auf hochpräzise Verarbeitung. Experte für die Restaurierung von Erbstücken.", expertise: ["Steinfassung", "Finishing"] },
        { name: "Hoang Nam", position: "Senior-Handwerker", bio: "Spezialisiert auf hochpräzise Verarbeitung. Fokus auf die energetische Reinheit von Edelsteinen.", expertise: ["Steinfassung", "Finishing"] },
      ],
    },
    products: {
      heroLabel: "Logistik & Globale Lieferung", heroTitle: "Versand-", heroTitleHighlight: "Richtlinie",
      intro: '"Bei VienChiBao verstehen wir, dass jedes Schmuckstück tiefe Bedeutung trägt. Unser Team verpflichtet sich, Ihre Stücke schnell, sicher und in einwandfreiem Zustand zu liefern."',
      deliveryLabel: "Lieferung", deliveryTitle: "Kostenloser Versand",
      deliveryDesc: "Wir bieten kostenlose Versanddienste für alle nationalen und internationalen Bestellungen an.",
      timelineLabel: "Zeitplan", timelineTitle: "Fertigung & Bearbeitung",
      timelineP1: "Geschätzte Bearbeitungszeit:", timelineHighlight: "1 bis 3 Wochen",
      timelineP2: "Stornierungen oder Anpassungen sind vor Beginn des endgültigen Fertigungsprozesses möglich.",
      securityLabel: "Sicherheit", securityTitle: "Bestellverfolgung & Sicherheit",
      securityP1: "Nach dem Versand erhalten Sie eine Sendungsverfolgungsnummer per E-Mail. Bitte stellen Sie sicher, dass Ihre Lieferadresse korrekt ist.",
      securityList: ["Prüfen Sie die Gebäudeverwaltung oder sichere Briefkästen.", "Bestätigen Sie mit Nachbarn oder Haushaltsmitgliedern.", "Kontaktieren Sie den lokalen Kurier zur Signaturverifizierung."],
    },
  },

  es: {
    nav: { home: "Inicio", about: "Sobre Nosotros", services: "Servicios", team: "Equipo" },
    hero: { brand: "Vien Chi Bao Global LLC", title: "Creando el Alma del", titleHighlight: "Resplandor Eterno", button: "EXPLORAR COLECCIONES" },
    story: {
      items: [
        { part: "Parte 1 / 3", title: "La Génesis", description: ["Vien Chi Bao se especializa en joyería premium elaborada con plata S925, oro, piedras preciosas y madera de agar natural.", "Más allá del simple adorno, cada pieza sirve como un amuleto personal trayendo suerte y energía positiva."] },
        { part: "Parte 2 / 3", title: "Artesanía Magistral", description: ["Cada diseño es meticulosamente elaborado a mano por maestros artesanos con décadas de experiencia.", "Combinamos la metalurgia antigua con la precisión moderna para garantizar una calidad impecable."] },
        { part: "Parte 3 / 3", title: "Visión Global", description: ["Fundada en Vietnam ahora nos expandimos para llevar la sabiduría oriental al mundo moderno.", "Nuestra misión es compartir la elegancia atemporal a través de cada detalle artesanal."] },
      ],
    },
    values: { heading: "Nuestros Valores Fundamentales", items: [{ title: "INTEGRIDAD", desc: "Materiales certificados y transparencia total." }, { title: "SEGURIDAD", desc: "Metales premium hipoalergénicos y seguros para la piel." }, { title: "ARTESANÍA", desc: "Almas hechas a mano en cada detalle." }] },
    cta: { heading: "Lleva Tu Amuleto a Casa", subheading: "Descubre joyas que resuenan con tu energía y elevan tu espíritu.", button: "RESERVAR UNA CONSULTA PRIVADA" },
    footer: {
      tagline: "Joyería artesanal de alta gama, profundamente imbuida de alma e identidad vietnamita.",
      contactTitle: "Información de Contacto",
      companyLabel: "Empresa", addressLabel: "Dirección", emailLabel: "Email",
      navTitle: "Explorar",
      navLinks: [
        { label: "Inicio", href: "/" },
        { label: "Sobre Nosotros", href: "/about" },
        { label: "Servicios", href: "/products" },
        { label: "Equipo", href: "/team" },
      ],
    },
    about: {
      heroLabel: "Maestro Artesano Vien Chi Bao", heroTitle: "Las Manos Que", heroTitleHighlight: "Moldean el Alma",
      heroQuote: '"Cada obra maestra cuenta una historia única, incorporando fe y profundos valores espirituales para nuestros queridos clientes."',
      missionLabel: "Artesano HuyK", missionTitle: "Nuestra Misión",
      missionP1: "HuyK es un maestro orfebre con más de una década de experiencia, impulsado por una profunda pasión por la joyería artesanal.",
      missionP2: 'Formado por maestros japoneses, heredé el espíritu "Shokunin" — la búsqueda incesante de la perfección y la dedicación inquebrantable al oficio.',
      philosophyLabel: "Nuestra Filosofía", philosophyTitle: "Los Pilares de la Maestría Artesanal",
      pillars: [
        { title: "Integridad", desc: "Transparencia absoluta sobre la calidad y el peso del oro y la plata." },
        { title: "Seguridad", desc: "Uso de materiales limpios, sin níquel, seguros para todo tipo de piel." },
        { title: "Artesanía", desc: "Cada pieza es una obra maestra artesanal, forjada meticulosamente con precisión." },
        { title: "Espíritu", desc: "Infundir alma y energía positiva en cada diseño." },
      ],
      footer: "© 2026 VIEN CHI BAO GLOBAL LLC. EL VIAJE ARTESANAL.",
    },
    team: {
      heroLabel: "Excelencia Artesanal", heroTitle: "Las Almas Detrás de", heroTitleHighlight: "Cada Creación",
      gridLabel: "Las Manos Maestras", gridTitle: "Las almas detrás de cada creación",
      seeMore: "Ver más", expertiseLabel: "Áreas de Expertise",
      footer: "© 2026 VIEN CHI BAO GLOBAL LLC. EL ARCHIVO ARTESANAL.",
      members: [
        { name: "Huy K", position: "Fundador & Maestro Artesano", bio: "Orfebre con más de 10 años de experiencia. Dominando el espíritu artesano japonés, estableció un estilo único.", expertise: ["Orfebrería", "Procesamiento de Gemas"] },
        { name: "Linh Thi", position: "Directora de Diseño", bio: "Con delicada sensibilidad estética, crea diseños que dan forma a las emociones más profundas.", expertise: ["Diseño de Joyería", "Dirección Creativa"] },
        { name: "Thanh Minh", position: "Artesano Senior", bio: "Especializado en procesamiento de alta precisión. Su dedicación al detalle garantiza los más altos estándares de calidad.", expertise: ["Engaste", "Acabado"] },
        { name: "Quoc Anh", position: "Artesano Senior", bio: "Especializado en procesamiento de alta precisión. Maestro de grabados intrincados.", expertise: ["Engaste", "Acabado"] },
        { name: "Minh Tu", position: "Artesano Senior", bio: "Especializado en procesamiento de alta precisión. Experto en restauración de piezas patrimoniales.", expertise: ["Engaste", "Acabado"] },
        { name: "Hoang Nam", position: "Artesano Senior", bio: "Especializado en procesamiento de alta precisión. Se centra en la pureza energética de las piedras preciosas.", expertise: ["Engaste", "Acabado"] },
      ],
    },
    products: {
      heroLabel: "Logística & Entrega Global", heroTitle: "Política de", heroTitleHighlight: "Envío",
      intro: '"En VienChiBao, entendemos que cada joya lleva un significado y sentimiento profundo. Nuestro equipo se compromete a entregar sus piezas rápidamente, de forma segura y en perfecto estado."',
      deliveryLabel: "Entrega", deliveryTitle: "Envío Gratuito",
      deliveryDesc: "Nos complace ofrecer servicios de envío gratuito para todos los pedidos nacionales e internacionales.",
      timelineLabel: "Plazos", timelineTitle: "Fabricación & Manejo",
      timelineP1: "Tiempo de procesamiento estimado:", timelineHighlight: "1 a 3 semanas",
      timelineP2: "Las cancelaciones o ajustes son posibles antes de que comience el proceso de fabricación final.",
      securityLabel: "Seguridad", securityTitle: "Seguimiento de Pedidos & Seguridad",
      securityP1: "Una vez enviado, recibirá un número de seguimiento por email. Asegúrese de que su dirección de envío sea correcta.",
      securityList: ["Verifique la administración del edificio o buzones seguros.", "Confirme con vecinos o miembros del hogar.", "Contacte al mensajero local para verificación de firma."],
    },
  },

  ko: {
    nav: { home: "홈", about: "회사 소개", services: "서비스", team: "팀" },
    hero: { brand: "Vien Chi Bao Global LLC", title: "영원한 빛의 영혼을", titleHighlight: "창조하다", button: "컬렉션 둘러보기" },
    story: {
      items: [
        { part: "1부 / 전 3부", title: "시작", description: ["Vien Chi Bao는 S925 실버, 금, 보석, 천연 침향목으로 제작된 프리미엄 주얼리를 전문으로 합니다.", "단순한 장식을 넘어 각 작품은 행운과 긍정적인 에너지를 가져다주는 개인 부적 역할을 합니다."] },
        { part: "2부 / 전 3부", title: "장인의 솜씨", description: ["모든 디자인은 수십 년의 경험을 가진 장인들이 정교하게 손으로 제작합니다.", "고대 야금술과 현대적 정밀함을 결합하여 완벽한 품질을 보장합니다."] },
        { part: "3부 / 전 3부", title: "글로벌 비전", description: ["베트남에서 설립되어 이제 동양의 지혜를 현대 세계에 전하기 위해 확장하고 있습니다.", "우리의 사명은 모든 수공예 디테일을 통해 시대를 초월한 우아함을 나누는 것입니다."] },
      ],
    },
    values: { heading: "핵심 가치", items: [{ title: "진실성", desc: "인증된 소재와 완전한 투명성." }, { title: "안전성", desc: "저자극성 피부 안전 프리미엄 금속." }, { title: "예술성", desc: "모든 세부 사항에 담긴 수작업의 혼." }] },
    cta: { heading: "나만의 부적을 집으로", subheading: "당신의 에너지와 공명하고 정신을 고양시키는 주얼리를 만나보세요.", button: "프라이빗 상담 예약" },
    footer: {
      tagline: "영혼과 베트남의 정체성이 깊이 담긴 고급 수공예 주얼리.",
      contactTitle: "연락처 정보",
      companyLabel: "회사", addressLabel: "주소", emailLabel: "이메일",
      navTitle: "탐색",
      navLinks: [
        { label: "홈", href: "/" },
        { label: "회사 소개", href: "/about" },
        { label: "서비스", href: "/products" },
        { label: "팀", href: "/team" },
      ],
    },
    about: {
      heroLabel: "마스터 장인 Vien Chi Bao", heroTitle: "영혼을 빚는", heroTitleHighlight: "장인의 손",
      heroQuote: '"각 걸작은 소중한 고객을 위한 믿음과 깊은 영적 가치를 담아 독특한 이야기를 전합니다."',
      missionLabel: "장인 HuyK", missionTitle: "우리의 사명",
      missionP1: "HuyK는 10년 이상의 경험을 가진 마스터 금세공사로 수공예 주얼리에 대한 깊은 열정으로 움직입니다.",
      missionP2: '일본 장인들에게 사사하여 "쇼쿠닌" 정신 — 완벽에 대한 끊임없는 추구와 공예에 대한 흔들리지 않는 헌신을 이어받았습니다.',
      philosophyLabel: "우리의 철학", philosophyTitle: "마스터 공예의 기둥",
      pillars: [
        { title: "진실성", desc: "금은의 품질과 무게에 관한 완전한 투명성." },
        { title: "안전성", desc: "모든 피부 타입에 안전한 니켈 프리 소재 사용." },
        { title: "예술성", desc: "각 작품은 정밀하게 단조된 수공예 걸작." },
        { title: "정신성", desc: "모든 디자인에 영혼과 긍정적인 에너지 주입." },
      ],
      footer: "© 2026 VIEN CHI BAO GLOBAL LLC. 장인의 여정.",
    },
    team: {
      heroLabel: "탁월한 공예", heroTitle: "모든 창조 뒤에 있는", heroTitleHighlight: "영혼들",
      gridLabel: "마스터의 손", gridTitle: "모든 창조 뒤에 있는 영혼들",
      seeMore: "더 보기", expertiseLabel: "전문 분야",
      footer: "© 2026 VIEN CHI BAO GLOBAL LLC. 장인 아카이브.",
      members: [
        { name: "Huy K", position: "창립자 & 마스터 장인", bio: "10년 이상의 경험을 가진 금세공사. 일본 장인 정신을 터득하여 베트남 전통과 현대적 정밀함을 결합한 독특한 스타일을 확립했습니다.", expertise: ["금세공", "보석 가공"] },
        { name: "Linh Thi", position: "디자인 디렉터", bio: "섬세한 미적 감각으로 가장 깊은 감정에 형태를 부여하는 디자인을 창조합니다.", expertise: ["주얼리 디자인", "크리에이티브 디렉션"] },
        { name: "Thanh Minh", position: "시니어 장인", bio: "고정밀 가공 전문. 세부 사항에 대한 헌신과 완벽 추구가 최고 품질 기준을 보장합니다.", expertise: ["세팅", "피니싱"] },
        { name: "Quoc Anh", position: "시니어 장인", bio: "고정밀 가공 전문. 정교한 조각의 달인입니다.", expertise: ["세팅", "피니싱"] },
        { name: "Minh Tu", position: "시니어 장인", bio: "고정밀 가공 전문. 유산 작품 복원 전문가.", expertise: ["세팅", "피니싱"] },
        { name: "Hoang Nam", position: "시니어 장인", bio: "고정밀 가공 전문. 보석의 에너지 순수성에 집중합니다.", expertise: ["세팅", "피니싱"] },
      ],
    },
    products: {
      heroLabel: "물류 & 글로벌 배송", heroTitle: "배송", heroTitleHighlight: "정책",
      intro: '"VienChiBao에서는 모든 주얼리가 깊은 의미를 담고 있음을 이해합니다. 우리 팀은 귀하의 제품을 신속하고 안전하게 완벽한 상태로 배송할 것을 약속합니다."',
      deliveryLabel: "배송", deliveryTitle: "무료 배송",
      deliveryDesc: "국내외 모든 주문에 무료 배송 서비스를 제공합니다.",
      timelineLabel: "일정", timelineTitle: "제작 & 처리",
      timelineP1: "예상 처리 시간:", timelineHighlight: "1~3주",
      timelineP2: "최종 제작 프로세스 시작 전 취소 또는 조정이 가능합니다.",
      securityLabel: "보안", securityTitle: "주문 추적 & 보안",
      securityP1: "발송 후 이메일로 추적 번호를 받게 됩니다. 배송 주소와 연락처 정보가 정확한지 확인해 주세요.",
      securityList: ["건물 관리실 또는 안전한 우편함을 확인하세요.", "이웃이나 가족에게 확인하세요.", "서명 확인을 위해 지역 배송업체에 연락하세요."],
    },
  },

  th: {
    nav: { home: "หน้าแรก", about: "เกี่ยวกับเรา", services: "บริการ", team: "ทีมงาน" },
    hero: { brand: "Vien Chi Bao Global LLC", title: "สร้างสรรค์จิตวิญญาณแห่ง", titleHighlight: "ความงามนิรันดร์", button: "สำรวจคอลเลกชัน" },
    story: {
      items: [
        { part: "ตอนที่ 1 / 3", title: "จุดเริ่มต้น", description: ["Vien Chi Bao เชี่ยวชาญด้านเครื่องประดับพรีเมียม ผลิตจากเงิน S925 ทอง อัญมณี และไม้กฤษณาธรรมชาติ", "เกินกว่าการตกแต่งธรรมดา แต่ละชิ้นทำหน้าที่เป็นเครื่องรางส่วนตัว นำโชคลาภและพลังงานบวกมาให้"] },
        { part: "ตอนที่ 2 / 3", title: "งานฝีมืออันเชี่ยวชาญ", description: ["ทุกการออกแบบถูกสร้างขึ้นด้วยมืออย่างพิถีพิถันโดยช่างฝีมือผู้เชี่ยวชาญที่มีประสบการณ์หลายสิบปี", "เราผสมผสานโลหะวิทยาโบราณกับความแม่นยำสมัยใหม่เพื่อรับประกันคุณภาพที่สมบูรณ์แบบ"] },
        { part: "ตอนที่ 3 / 3", title: "วิสัยทัศน์ระดับโลก", description: ["ก่อตั้งในเวียดนาม เราขยายตัวเพื่อนำภูมิปัญญาตะวันออกสู่โลกสมัยใหม่", "พันธกิจของเราคือการแบ่งปันความงามอันเหนือกาลเวลาผ่านรายละเอียดงานฝีมือทุกชิ้น"] },
      ],
    },
    values: { heading: "ค่านิยมหลักของเรา", items: [{ title: "ความซื่อสัตย์", desc: "วัสดุที่ผ่านการรับรองและความโปร่งใสสมบูรณ์" }, { title: "ความปลอดภัย", desc: "โลหะพรีเมียมที่ไม่ก่อให้เกิดอาการแพ้และปลอดภัยสำหรับผิว" }, { title: "ศิลปะ", desc: "จิตวิญญาณที่ถ่ายทอดด้วยมือในทุกรายละเอียด" }] },
    cta: { heading: "นำเครื่องรางกลับบ้าน", subheading: "ค้นพบเครื่องประดับที่สอดคล้องกับพลังงานของคุณและยกระดับจิตใจ", button: "จองการปรึกษาส่วนตัว" },
    footer: {
      tagline: "เครื่องประดับทำมือระดับสูง อัดแน่นด้วยจิตวิญญาณและอัตลักษณ์เวียดนาม",
      contactTitle: "ข้อมูลการติดต่อ",
      companyLabel: "บริษัท", addressLabel: "ที่อยู่", emailLabel: "อีเมล",
      navTitle: "สำรวจ",
      navLinks: [
        { label: "หน้าแรก", href: "/" },
        { label: "เกี่ยวกับเรา", href: "/about" },
        { label: "บริการ", href: "/products" },
        { label: "ทีมงาน", href: "/team" },
      ],
    },
    about: {
      heroLabel: "ช่างฝีมือบรมครู Vien Chi Bao", heroTitle: "มือที่", heroTitleHighlight: "สัมผัสจิตวิญญาณ",
      heroQuote: '"ผลงานชิ้นเอกแต่ละชิ้นเล่าเรื่องราวอันเป็นเอกลักษณ์ ฝังความเชื่อและคุณค่าทางจิตวิญญาณอันลึกซึ้งให้กับลูกค้าผู้เป็นที่รักของเรา"',
      missionLabel: "ช่างฝีมือ HuyK", missionTitle: "พันธกิจของเรา",
      missionP1: "HuyK เป็นช่างทองบรมครูที่มีประสบการณ์มากกว่าทศวรรษ ขับเคลื่อนด้วยความหลงใหลอย่างลึกซึ้งในเครื่องประดับทำมือ",
      missionP2: 'ได้รับการฝึกฝนจากบรมครูชาวญี่ปุ่น สืบทอดจิตวิญญาณ "โชคุนิน" — การแสวงหาความสมบูรณ์แบบอย่างไม่หยุดยั้ง',
      philosophyLabel: "ปรัชญาของเรา", philosophyTitle: "เสาหลักของงานฝีมือบรมครู",
      pillars: [
        { title: "ความซื่อสัตย์", desc: "ความโปร่งใสอย่างแท้จริงเกี่ยวกับคุณภาพและน้ำหนักของทองและเงิน" },
        { title: "ความปลอดภัย", desc: "ใช้วัสดุสะอาดปราศจากนิกเกิล ปลอดภัยสำหรับทุกสภาพผิว" },
        { title: "ศิลปะ", desc: "แต่ละชิ้นเป็นผลงานชิ้นเอกทำมือที่ถูกหลอมขึ้นอย่างพิถีพิถัน" },
        { title: "จิตวิญญาณ", desc: "ใส่จิตวิญญาณและพลังงานบวกลงในทุกการออกแบบ" },
      ],
      footer: "© 2026 VIEN CHI BAO GLOBAL LLC. การเดินทางของช่างฝีมือ",
    },
    team: {
      heroLabel: "ความเป็นเลิศทางงานฝีมือ", heroTitle: "จิตวิญญาณเบื้องหลัง", heroTitleHighlight: "ทุกการสร้างสรรค์",
      gridLabel: "มือบรมครู", gridTitle: "จิตวิญญาณเบื้องหลังทุกการสร้างสรรค์",
      seeMore: "ดูเพิ่มเติม", expertiseLabel: "ด้านความเชี่ยวชาญ",
      footer: "© 2026 VIEN CHI BAO GLOBAL LLC. คลังเก็บของช่างฝีมือ",
      members: [
        { name: "Huy K", position: "ผู้ก่อตั้ง & ช่างฝีมือบรมครู", bio: "ช่างทองที่มีประสบการณ์มากกว่า 10 ปี เชี่ยวชาญจิตวิญญาณช่างญี่ปุ่น สร้างสไตล์เฉพาะตัวผสมผสานประเพณีเวียดนามกับความแม่นยำสมัยใหม่", expertise: ["งานทอง", "การแปรรูปอัญมณี"] },
        { name: "Linh Thi", position: "ผู้อำนวยการฝ่ายออกแบบ", bio: "ด้วยความละเอียดอ่อนทางสุนทรียศาสตร์ เธอสร้างการออกแบบที่ให้รูปร่างแก่ความรู้สึกลึกที่สุด", expertise: ["การออกแบบเครื่องประดับ", "การกำกับสร้างสรรค์"] },
        { name: "Thanh Minh", position: "ช่างฝีมือซีเนียร์", bio: "เชี่ยวชาญการแปรรูปความแม่นยำสูง การอุทิศตนต่อรายละเอียดรับประกันมาตรฐานคุณภาพสูงสุด", expertise: ["การฝังหิน", "การตกแต่ง"] },
        { name: "Quoc Anh", position: "ช่างฝีมือซีเนียร์", bio: "เชี่ยวชาญการแปรรูปความแม่นยำสูง เป็นบรมครูด้านการแกะสลักอันประณีต", expertise: ["การฝังหิน", "การตกแต่ง"] },
        { name: "Minh Tu", position: "ช่างฝีมือซีเนียร์", bio: "เชี่ยวชาญการแปรรูปความแม่นยำสูง ผู้เชี่ยวชาญในการบูรณะชิ้นงานมรดก", expertise: ["การฝังหิน", "การตกแต่ง"] },
        { name: "Hoang Nam", position: "ช่างฝีมือซีเนียร์", bio: "เชี่ยวชาญการแปรรูปความแม่นยำสูง มุ่งเน้นความบริสุทธิ์ของพลังงานอัญมณี", expertise: ["การฝังหิน", "การตกแต่ง"] },
      ],
    },
    products: {
      heroLabel: "โลจิสติกส์ & การจัดส่งทั่วโลก", heroTitle: "นโยบาย", heroTitleHighlight: "การจัดส่ง",
      intro: '"ที่ VienChiBao เราเข้าใจว่าเครื่องประดับแต่ละชิ้นมีความหมายและความรู้สึกลึกซึ้ง ทีมของเราให้คำมั่นว่าจะจัดส่งชิ้นงานของคุณอย่างรวดเร็ว ปลอดภัย และในสภาพที่สมบูรณ์แบบ"',
      deliveryLabel: "การจัดส่ง", deliveryTitle: "จัดส่งฟรี",
      deliveryDesc: "เรายินดีให้บริการจัดส่งฟรีสำหรับคำสั่งซื้อทั้งในประเทศและต่างประเทศ",
      timelineLabel: "ระยะเวลา", timelineTitle: "การผลิต & การจัดการ",
      timelineP1: "เวลาดำเนินการโดยประมาณ:", timelineHighlight: "1 ถึง 3 สัปดาห์",
      timelineP2: "สามารถยกเลิกหรือปรับเปลี่ยนได้ก่อนเริ่มกระบวนการผลิตขั้นสุดท้าย",
      securityLabel: "ความปลอดภัย", securityTitle: "การติดตามคำสั่งซื้อ & ความปลอดภัย",
      securityP1: "เมื่อจัดส่งแล้ว คุณจะได้รับหมายเลขติดตามทางอีเมล โปรดตรวจสอบให้แน่ใจว่าที่อยู่จัดส่งและข้อมูลติดต่อถูกต้อง",
      securityList: ["ตรวจสอบการจัดการอาคารหรือตู้ไปรษณีย์ที่ปลอดภัย", "ยืนยันกับเพื่อนบ้านหรือสมาชิกในครัวเรือน", "ติดต่อผู้ส่งสินค้าในพื้นที่เพื่อยืนยันลายเซ็น"],
    },
  },
};

const COUNTRY_TO_LANG: Record<string, string> = {
  VN: "vi", JP: "ja", FR: "fr", DE: "de", ES: "es", KR: "ko", TH: "th",
};

type LanguageContextType = {
  locale: string;
  setLocale: (locale: string) => void;
  t: (path: string) => any;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocaleState] = useState('en');
  const isInitialized = useRef(false);

  const t = (path: string): any => {
    const keys = path.split('.');
    return keys.reduce((obj, key) => (obj ? obj[key] : undefined), translations[locale] as any);
  };

  const setLocale = (lang: string) => {
    if (!translations[lang]) return;
    setLocaleState(lang);
    localStorage.setItem('user_lang', lang);
    document.documentElement.lang = lang;
  };

  useEffect(() => {
    if (isInitialized.current) return;
    isInitialized.current = true;
    const init = async () => {
      const saved = localStorage.getItem('user_lang');
      if (saved && translations[saved]) { setLocale(saved); return; }
      try {
        const res = await fetch('https://www.cloudflare.com/cdn-cgi/trace');
        const text = await res.text();
        const data: Record<string, string> = {};
        text.split('\n').forEach(line => { const [k, v] = line.split('='); if (k) data[k.trim()] = (v || '').trim(); });
        setLocale(COUNTRY_TO_LANG[data.loc] || 'en');
      } catch { setLocale('en'); }
    };
    init();
  }, []);

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
