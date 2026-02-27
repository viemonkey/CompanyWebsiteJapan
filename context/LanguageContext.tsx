"use client";
import React, { createContext, useContext, useState, ReactNode, useEffect, useRef } from 'react';

export const translations: Record<string, Record<string, any>> = {
  en: {
    nav: { home: "Home", about: "About Us", services: "Services", team: "Team" },
    hero: { brand: "Vien Chi Bao Global LLC", title: "Crafting the Soul of", titleHighlight: "Timeless Radiance", button: "EXPLORE COLLECTIONS" },
    story: { items: [
      { part: "Part 1 of 3", title: "The Genesis", description: ["Vien Chi Bao specializes in premium jewelry—crafted from S925 silver, gold, gemstones, and natural agarwood.", "Beyond mere adornment, each piece serves as a personal 'amulet,' bringing luck and positive energy."] },
      { part: "Part 2 of 3", title: "Masterful Craftsmanship", description: ["Every design is meticulously handcrafted by master artisans with decades of experience.", "We blend ancient metallurgy with modern precision to ensure flawless quality."] },
      { part: "Part 3 of 3", title: "Global Vision", description: ["Established in Vietnam, we are now expanding to bring Oriental wisdom to the modern world.", "Our mission is to share timeless elegance through every handcrafted detail."] },
    ]},
    videoSection: { years: "Years of Craftsmanship", highlight: "Soul & Heritage", desc: "Every Vien Chi Bao creation is forged from thousands of hours of practice, imbued with the Shokunin spirit — the relentless pursuit of perfection." },
    stats: { years: "Years of Experience", pieces: "Masterpieces", languages: "Languages Served", handmade: "Handcrafted" },
    featuredProducts: { heading: "Signature Collections" },
    products: {
      silver: { label: "S925 Silver", title: "Pi Xiu Bracelet", desc: "Crafted from pure S925 silver, carrying protective energy and prosperity." },
      gold: { label: "18K Gold", title: "Sculpted Gold Ring", desc: "Cast from refined 18K gold, every detail hand-engraved with precision." },
      gemstone: { label: "Gemstones", title: "Natural Gemstones", desc: "Curated from nature, each stone carries its own unique energy." },
    },
    spirit: { label: "PHILOSOPHY", title: "The Spirit of", highlight: "Shokunin", p1: 'Shokunin — Japanese for "craftsman" — is not merely a profession. It is a philosophy of life: dedicating one\'s entire heart to every creation, ceaselessly refining, never compromising on quality.', p2: "At Vien Chi Bao, this spirit was brought back from Japan by HuyK and passed on to every team member. Every thread, every engraving is an expression of that philosophy.", quote: '"No work is ever perfect, but one must act as though each piece is the last masterpiece of their life."', quoteRole: "Founder & Master Craftsman" },
    teamPreview: { heading: "The Hands That Create Miracles", button: "MEET THE FULL TEAM" },
    values: { heading: "Our Core Values", items: [{ title: "INTEGRITY", desc: "Certified materials and total transparency." }, { title: "SAFETY", desc: "Hypoallergenic and skin-safe premium metals." }, { title: "ARTISTRY", desc: "Handcrafted souls in every single detail." }] },
    cta: { heading: "Bring Home Your Amulet", subheading: "Discover jewelry that resonates with your energy and elevates your spirit.", button: "BOOK A PRIVATE CONSULTATION" },
    timeline: {
      label: "OUR JOURNEY",
      title: "The Story So Far",
      items: [
        { year: "2014", title: "The Beginning", desc: "HuyK founded his first artisan workshop in Hanoi, fueled by a passion for gold and silver craftsmanship rooted in the Shokunin philosophy." },
        { year: "2018", title: "Expansion", desc: "Introduced the feng shui and spiritual jewelry lines, serving customers across Vietnam with meaningful, handcrafted symbols." },
        { year: "2022", title: "Going International", desc: "Launched multilingual services for Japanese and global clients. The brand\'s story began reaching beyond Vietnam\'s borders." },
        { year: "2024", title: "Vien Chi Bao Global", desc: "Vien Chi Bao Global LLC officially established — bringing the soul of Vietnamese artisan craftsmanship to the world." },
      ],
    },
    trust: { cert: "Quality Certified", handmade: "100% Handcrafted", material: "Certified Materials", warranty: "10-Year Warranty" },
    contact: { label: "CONTACT", title: "Come Visit Us", desc: "We are always ready to consult and share the story behind every creation.", showroomLabel: "Showroom", hqLabel: "Headquarters", phoneLabel: "Hotline", emailLabel: "Email", hoursLabel: "Livestream", hoursValue: "Daily 10:30–13:30 (TikTok)", channelsLabel: "SHOPPING CHANNELS" },
    footer: { tagline: "High-end handcrafted jewelry, deeply imbued with soul and Vietnamese identity.", contactTitle: "Contact Information", companyLabel: "Company", addressLabel: "Address", emailLabel: "Email", navTitle: "Explore", navLinks: [{ label: "Home", href: "/" }, { label: "About Us", href: "/about" }, { label: "Services", href: "/products" }, { label: "Team", href: "/team" }] },
    about: { heroLabel: "Pioneer in Gold & Silver Craftsmanship", heroTitle: "Where Faith Meets", heroTitleHighlight: "Fine Craftsmanship", heroDesc: "Vien Chi Bao is a pioneer in providing gifts, jewelry, and handcrafted items from gold and silver in Vietnam, guided by the values of religion and feng shui.", stat1: "Years of Experience", stat2: "Product Lines", stat3: "Handcrafted", pioneerlabel: "Who We Are", pioneerTitle: "More Than Jewelry — A Symbol of Faith", pioneerP1: "Vien Chi Bao leads the way in providing premium gifts, jewelry, and gold & silver artifacts in Vietnam with a spiritual and feng shui orientation. Our products focus on meaning and symbolism.", pioneerP2: "Vien Chi Bao products are not merely ordinary jewelry or gold & silver items — they carry meaning that reflects faith, respect, blessing, and passion within each symbol they represent.", tag1: "Feng Shui", tag2: "Religion", tag3: "Fine Craftsmanship", imageBadge: "Handcrafted in Vietnam", productLinesLabel: "Our Collections", productLinesTitle: "Product Lines", productLinesDesc: "Each product line is designed with deep meaning, representing distinct values and purposes for the bearer.", productLines: [{ title: "Premium Gold & Silver Gifts", desc: "Exclusive gift sets crafted from gold and silver — perfect for special occasions, conveying respect and blessing." }, { title: "Thai Feng Shui Silver Jewelry", desc: "Silver jewelry inspired by feng shui principles, bringing luck, protection, and positive energy to the wearer." }, { title: "Feng Shui Gold", desc: "Pure gold pieces imbued with feng shui significance — symbols of prosperity, fortune, and spiritual protection." }, { title: "Premium Handmade Items", desc: "Unique handcrafted pieces from gold, silver, and gemstones: silver watches, engraved silver Zippos, silver pens, and more." }], meaningLabel: "Our Purpose", meaningQuote: "Each product is not just an ornament — it is a vessel of faith, respect, blessing, and passion.", meaningDesc: "Vien Chi Bao is steadily becoming the trusted choice for customers near and far when seeking premium gifts or meaningful gold and silver jewelry that carries deep cultural and spiritual value.", missionLabel: "Artisan HuyK", missionTitle: "Our Mission", missionP1: "HuyK is a master goldsmith with over a decade of experience, driven by a profound passion for handcrafted jewelry. My journey began with an obsession for the finest details.", missionP2: 'Trained by Japanese masters, I inherited the "Shokunin" spirit — the relentless pursuit of perfection and unwavering dedication to the craft. This philosophy has become the cornerstone of my atelier in Vietnam.', philosophyLabel: "Our Philosophy", philosophyTitle: "The Pillars of Master Craftsmanship", pillars: [{ title: "Integrity", desc: "Absolute transparency regarding the quality and weight of gold and silver." }, { title: "Safety", desc: "Utilizing clean, nickel-free materials that are safe for all skin types." }, { title: "Artistry", desc: "Each piece is a handcrafted masterpiece, meticulously forged with precision." }, { title: "Spirit", desc: "Infusing soul and positive energy into every single design." }], footer: "© 2026 VIEN CHI BAO GLOBAL LLC. THE ARTISAN JOURNEY." },
    team: { heroLabel: "Crafting Excellence", heroTitle: "The Souls Behind", heroTitleHighlight: "Every Creation", gridLabel: "The Master Hands", gridTitle: "The souls behind every creation", seeMore: "See more", expertiseLabel: "Areas of Expertise", footer: "© 2026 VIEN CHI BAO GLOBAL LLC. THE ARTISAN ARCHIVE.", members: [
      { name: "Huy K", position: "Founder & Master Craftsman", bio: "A goldsmith with over 10 years of experience. Mastering the Japanese artisan spirit, he established a unique style blending Vietnamese tradition with modern precision.", expertise: ["Goldsmithing", "Gemstone Processing"] },
      { name: "Linh Thi", position: "Design Director", bio: "With a delicate aesthetic sensibility, she creates designs that give form to deepest emotions, prioritizing harmony between heritage and contemporary beauty.", expertise: ["Jewelry Design", "Creative Direction"] },
      { name: "Thanh Minh", position: "Senior Craftsman", bio: "Specializing in high-precision processing. His dedication to detail and pursuit of perfection ensure every work meets the highest quality standards.", expertise: ["Stone Setting", "Finishing"] },
      { name: "Quoc Anh", position: "Senior Craftsman", bio: "Specializing in high-precision processing. He is a master of intricate engravings.", expertise: ["Stone Setting", "Finishing"] },
      { name: "Minh Tu", position: "Senior Craftsman", bio: "Specializing in high-precision processing. Expertise in restoring heritage pieces.", expertise: ["Stone Setting", "Finishing"] },
      { name: "Hoang Nam", position: "Senior Craftsman", bio: "Specializing in high-precision processing. Focuses on the energetic purity of gemstones.", expertise: ["Stone Setting", "Finishing"] },
    ]},
    productPage: { heroLabel: "Logistics & Global Delivery", heroTitle: "Shipping", heroTitleHighlight: "Policy", intro: '"At VienChiBao, we understand that every piece of jewelry carries profound meaning and sentiment. Our team is committed to ensuring your pieces are delivered swiftly, safely, and in pristine condition."', deliveryLabel: "Delivery", deliveryTitle: "Complimentary Shipping", deliveryDesc: "We are pleased to offer complimentary shipping services for all domestic and international orders.", timelineLabel: "Timeline", timelineTitle: "Crafting & Handling", timelineP1: "Estimated processing time:", timelineHighlight: "1 to 3 weeks", timelineP2: "Cancellations or adjustments are possible before the final crafting process begins.", securityLabel: "Security", securityTitle: "Order Tracking & Security", securityP1: "Once shipped, you will receive a tracking number via email. Please ensure your shipping address and contact details are accurate.", securityList: ["Check building management or secure mailboxes.", "Confirm with neighbors or household members.", "Contact local courier for signature verification."] },
  },

  vi: {
    nav: { home: "Trang Chủ", about: "Về Chúng Tôi", services: "Dịch Vụ", team: "Đội Ngũ" },
    hero: { brand: "Vien Chi Bao Global LLC", title: "Kiến Tạo Nên Linh Hồn Của", titleHighlight: "Vẻ Đẹp Rạng Rỡ Vượt Thời Gian", button: "KHÁM PHÁ BỘ SƯU TẬP" },
    story: { items: [
      { part: "Phần 1 / 3", title: "Khởi Nguồn", description: ["Viên Chi Bảo chuyên về trang sức cao cấp — được chế tác từ bạc S925, vàng, đá quý và trầm hương tự nhiên.", "Hơn cả sự trang trí, mỗi sản phẩm là một 'bùa hộ mệnh' cá nhân, mang lại may mắn và năng lượng tích cực."] },
      { part: "Phần 2 / 3", title: "Tinh Hoa Chế Tác", description: ["Mỗi thiết kế đều được chế tác thủ công tỉ mỉ bởi các nghệ nhân bậc thầy với hàng thập kỷ kinh nghiệm.", "Chúng tôi kết hợp luyện kim cổ đại với sự chính xác hiện đại để đảm bảo chất lượng hoàn hảo."] },
      { part: "Phần 3 / 3", title: "Tầm Nhìn Toàn Cầu", description: ["Được thành lập tại Việt Nam, chúng tôi đang mở rộng để mang trí tuệ phương Đông đến thế giới hiện đại.", "Sứ mệnh của chúng tôi là chia sẻ vẻ đẹp vượt thời gian qua từng chi tiết thủ công."] },
    ]},
    videoSection: { years: "Năm Chế Tác", highlight: "Tâm Hồn & Di Sản", desc: "Mỗi tác phẩm của Viên Chi Bảo được đúc kết từ hàng nghìn giờ luyện tập, thấm đẫm tinh thần Shokunin — sự theo đuổi hoàn hảo không ngừng nghỉ." },
    stats: { years: "Năm kinh nghiệm", pieces: "Tác phẩm", languages: "Ngôn ngữ phục vụ", handmade: "Thủ công thuần túy" },
    featuredProducts: { heading: "Dòng Sản Phẩm Tinh Hoa" },
    products: {
      silver: { label: "Bạc S925", title: "Vòng Tay Tỳ Hưu", desc: "Chế tác từ bạc S925 nguyên chất, mang năng lượng bảo hộ và tài lộc." },
      gold: { label: "Vàng 18K", title: "Nhẫn Vàng Điêu Khắc", desc: "Đúc từ vàng 18K tinh luyện, từng đường nét được điêu khắc thủ công." },
      gemstone: { label: "Đá Quý", title: "Đá Quý Tự Nhiên", desc: "Tuyển chọn từ thiên nhiên, mỗi viên đá mang một năng lượng riêng biệt." },
    },
    spirit: { label: "TRIẾT LÝ", title: "Tinh Thần", highlight: "Shokunin", p1: 'Shokunin — tiếng Nhật có nghĩa là "người thợ thủ công" — không chỉ là một nghề nghiệp. Đó là triết lý sống: cống hiến toàn bộ tâm huyết vào từng tác phẩm, không ngừng hoàn thiện, không bao giờ thỏa hiệp với chất lượng.', p2: "Tại Viên Chi Bảo, tinh thần này được HuyK mang về từ Nhật Bản và truyền lại cho từng thành viên. Mỗi đường chỉ, mỗi nét khắc đều là sự thể hiện của triết lý đó.", quote: '"Không có tác phẩm nào là hoàn hảo, nhưng ta phải hành động như thể mỗi tác phẩm là kiệt tác cuối cùng của đời mình."', quoteRole: "Nhà Sáng Lập & Thợ Kim Hoàn Bậc Thầy" },
    teamPreview: { heading: "Những Bàn Tay Tạo Nên Kỳ Tích", button: "XEM TOÀN BỘ ĐỘI NGŨ" },
    values: { heading: "Giá Trị Cốt Lõi", items: [{ title: "CHÍNH TRỰC", desc: "Nguyên liệu được chứng nhận và minh bạch hoàn toàn." }, { title: "AN TOÀN", desc: "Kim loại cao cấp không gây dị ứng, an toàn cho da." }, { title: "NGHỆ THUẬT", desc: "Linh hồn được chế tác thủ công trong từng chi tiết." }] },
    cta: { heading: "Mang Bùa Hộ Mệnh Về Nhà", subheading: "Khám phá trang sức cộng hưởng với năng lượng của bạn và nâng cao tinh thần.", button: "ĐẶT LỊCH TƯ VẤN RIÊNG" },
    timeline: {
      label: "HÀNH TRÌNH",
      title: "Câu Chuyện Của Chúng Tôi",
      items: [
        { year: "2014", title: "Khởi Đầu", desc: "HuyK thành lập xưởng thủ công đầu tiên tại Hà Nội, với niềm đam mê chế tác trang sức vàng bạc theo tinh thần Shokunin." },
        { year: "2018", title: "Mở Rộng", desc: "Ra mắt dòng sản phẩm trang sức phong thuỷ và tâm linh, phục vụ khách hàng trên toàn quốc với những biểu tượng có ý nghĩa." },
        { year: "2022", title: "Quốc Tế Hoá", desc: "Bắt đầu phục vụ khách hàng Nhật Bản và quốc tế. Website đa ngôn ngữ ra đời, câu chuyện thương hiệu vượt ra khỏi biên giới Việt Nam." },
        { year: "2024", title: "Viễn Chí Bảo Global", desc: "Viễn Chí Bảo Global LLC chính thức thành lập — mang tinh hoa thủ công Việt Nam ra với thế giới." },
      ],
    },
    trust: { cert: "Chứng Nhận Chất Lượng", handmade: "100% Thủ Công", material: "Nguyên Liệu Chuẩn", warranty: "Bảo Hành 10 Năm" },
    contact: { label: "THÔNG TIN LIÊN HỆ", title: "Hãy Đến Gặp Chúng Tôi", desc: "Chúng tôi luôn sẵn sàng tư vấn và chia sẻ câu chuyện đằng sau từng tác phẩm.", showroomLabel: "Showroom", hqLabel: "Trụ sở", phoneLabel: "Hotline", emailLabel: "Email", hoursLabel: "Livestream", hoursValue: "Hàng ngày 10:30–13:30 (TikTok)", channelsLabel: "KÊNH MUA SẮM" },
    footer: { tagline: "Trang sức thủ công cao cấp, đậm chất tâm hồn và bản sắc Việt Nam.", contactTitle: "Thông Tin Liên Hệ", companyLabel: "Công Ty", addressLabel: "Địa Chỉ", emailLabel: "Email", navTitle: "Khám Phá", navLinks: [{ label: "Trang Chủ", href: "/" }, { label: "Về Chúng Tôi", href: "/about" }, { label: "Dịch Vụ", href: "/products" }, { label: "Đội Ngũ", href: "/team" }] },
    about: { heroLabel: "Tiên Phong Chế Tác Vàng Bạc", heroTitle: "Nơi Đức Tin Gặp Gỡ", heroTitleHighlight: "Nghệ Thuật Tinh Hoa", heroDesc: "Viễn Chí Bảo là công ty tiên phong trong cung cấp quà tặng, trang sức và vật phẩm chế tác từ vàng bạc tại Việt Nam theo hướng tôn giáo và phong thuỷ.", stat1: "Năm kinh nghiệm", stat2: "Dòng sản phẩm", stat3: "Thủ công", pioneerlabel: "Về Chúng Tôi", pioneerTitle: "Hơn Cả Trang Sức — Biểu Tượng Của Đức Tin", pioneerP1: "Viễn Chí Bảo đi tiên phong trong cung cấp quà tặng cao cấp, trang sức và vật phẩm vàng bạc tại Việt Nam theo hướng tôn giáo và phong thuỷ. Các sản phẩm tập trung vào ý nghĩa và biểu tượng mà chúng mang lại.", pioneerP2: "Sản phẩm của Viễn Chí Bảo không chỉ là các món đồ trang sức hay vật phẩm vàng bạc thông thường mà nó mang ý nghĩa thể hiện đức tin, sự kính trọng, sự chúc phúc hay niềm say mê trong mỗi biểu tượng mà nó đại diện.", tag1: "Phong Thuỷ", tag2: "Tâm Linh", tag3: "Thủ Công Tinh Hoa", imageBadge: "Chế Tác Tại Việt Nam", productLinesLabel: "Các Dòng Sản Phẩm", productLinesTitle: "Bộ Sưu Tập Tinh Hoa", productLinesDesc: "Mỗi dòng sản phẩm được thiết kế với ý nghĩa sâu sắc, đại diện cho những giá trị và mục đích khác nhau dành cho người sở hữu.", productLines: [{ title: "Quà Tặng Cao Cấp Từ Vàng Bạc", desc: "Bộ quà tặng độc quyền chế tác từ vàng bạc — hoàn hảo cho những dịp đặc biệt, truyền tải sự kính trọng và chúc phúc." }, { title: "Trang Sức Bạc Thái Phong Thủy", desc: "Trang sức bạc lấy cảm hứng từ nguyên lý phong thuỷ, mang lại may mắn, bảo hộ và năng lượng tích cực cho người đeo." }, { title: "Vàng Phong Thủy", desc: "Sản phẩm vàng nguyên chất mang ý nghĩa phong thuỷ — biểu tượng của thịnh vượng, tài lộc và bảo hộ tâm linh." }, { title: "Vật Phẩm Handmade Cao Cấp", desc: "Các tác phẩm thủ công độc đáo từ vàng bạc đá quý: Đồng Hồ bạc, Zipo bạc điêu khắc, bút ký bạc và nhiều hơn nữa." }], meaningLabel: "Mục Đích Của Chúng Tôi", meaningQuote: "Mỗi sản phẩm không chỉ là đồ trang sức — đó là biểu tượng của đức tin, sự kính trọng, chúc phúc và niềm đam mê.", meaningDesc: "Viễn Chí Bảo ngày càng trở thành lựa chọn quen thuộc đối với quý khách hàng gần xa mỗi khi muốn mua quà tặng cao cấp hay những món đồ trang sức vật phẩm vàng bạc cao cấp ý nghĩa.", missionLabel: "Nghệ Nhân HuyK", missionTitle: "Sứ Mệnh Của Chúng Tôi", missionP1: "HuyK là một thợ kim hoàn bậc thầy với hơn một thập kỷ kinh nghiệm.", missionP2: 'Được đào tạo bởi các bậc thầy Nhật Bản, tôi kế thừa tinh thần "Shokunin".', philosophyLabel: "Triết Lý Của Chúng Tôi", philosophyTitle: "Những Trụ Cột Của Nghề Thủ Công Bậc Thầy", pillars: [{ title: "Chính Trực", desc: "Hoàn toàn minh bạch về chất lượng và trọng lượng vàng bạc." }, { title: "An Toàn", desc: "Sử dụng vật liệu sạch, không niken, an toàn cho mọi loại da." }, { title: "Nghệ Thuật", desc: "Mỗi sản phẩm là một kiệt tác thủ công." }, { title: "Tâm Hồn", desc: "Truyền tải linh hồn và năng lượng tích cực vào từng thiết kế." }], footer: "© 2026 VIÊN CHI BẢO GLOBAL LLC. HÀNH TRÌNH NGHỆ NHÂN." },
    team: { heroLabel: "Tinh Hoa Chế Tác", heroTitle: "Những Tâm Hồn Đằng Sau", heroTitleHighlight: "Mỗi Sáng Tạo", gridLabel: "Đôi Bàn Tay Bậc Thầy", gridTitle: "Những tâm hồn đằng sau mỗi sáng tạo", seeMore: "Xem thêm", expertiseLabel: "Lĩnh Vực Chuyên Môn", footer: "© 2026 VIÊN CHI BẢO GLOBAL LLC. KHO LƯU TRỮ NGHỆ NHÂN.", members: [
      { name: "Huy K", position: "Nhà Sáng Lập & Thợ Kim Hoàn Bậc Thầy", bio: "Thợ kim hoàn với hơn 10 năm kinh nghiệm. Thấm nhuần tinh thần nghệ nhân Nhật Bản.", expertise: ["Kim Hoàn", "Chế Tác Đá Quý"] },
      { name: "Linh Thi", position: "Giám Đốc Thiết Kế", bio: "Với cảm quan thẩm mỹ tinh tế, cô tạo ra những thiết kế thổi hồn vào cảm xúc sâu thẳm nhất.", expertise: ["Thiết Kế Trang Sức", "Định Hướng Sáng Tạo"] },
      { name: "Thanh Minh", position: "Nghệ Nhân Cao Cấp", bio: "Chuyên về gia công chính xác cao.", expertise: ["Gắn Đá", "Hoàn Thiện"] },
      { name: "Quoc Anh", position: "Nghệ Nhân Cao Cấp", bio: "Bậc thầy về chạm khắc tinh xảo.", expertise: ["Gắn Đá", "Hoàn Thiện"] },
      { name: "Minh Tu", position: "Nghệ Nhân Cao Cấp", bio: "Chuyên gia phục hồi tác phẩm cổ.", expertise: ["Gắn Đá", "Hoàn Thiện"] },
      { name: "Hoang Nam", position: "Nghệ Nhân Cao Cấp", bio: "Tập trung vào sự thuần khiết năng lượng của đá quý.", expertise: ["Gắn Đá", "Hoàn Thiện"] },
    ]},
    productPage: { heroLabel: "Hậu Cần & Giao Hàng Toàn Cầu", heroTitle: "Chính Sách", heroTitleHighlight: "Vận Chuyển", intro: '"Tại VienChiBao, chúng tôi hiểu rằng mỗi món trang sức mang ý nghĩa và tình cảm sâu sắc."', deliveryLabel: "Giao Hàng", deliveryTitle: "Miễn Phí Vận Chuyển", deliveryDesc: "Chúng tôi vui lòng cung cấp dịch vụ vận chuyển miễn phí cho tất cả đơn hàng.", timelineLabel: "Thời Gian", timelineTitle: "Chế Tác & Xử Lý", timelineP1: "Thời gian xử lý ước tính:", timelineHighlight: "1 đến 3 tuần", timelineP2: "Có thể hủy hoặc điều chỉnh trước khi bắt đầu quá trình chế tác cuối cùng.", securityLabel: "Bảo Mật", securityTitle: "Theo Dõi Đơn Hàng & Bảo Mật", securityP1: "Sau khi giao hàng, bạn sẽ nhận được mã theo dõi qua email.", securityList: ["Kiểm tra ban quản lý tòa nhà hoặc hộp thư an toàn.", "Xác nhận với hàng xóm hoặc thành viên trong gia đình.", "Liên hệ với đơn vị vận chuyển địa phương để xác minh chữ ký."] },
  },

  ja: {
    nav: { home: "家", about: "私たちについて", services: "サービス", team: "チーム" },
    hero: { brand: "Vien Chi Bao Global LLC", title: "永遠の輝きの魂を", titleHighlight: "創り上げる", button: "コレクションを見る" },
    story: { items: [
      { part: "第1部 / 全3部", title: "起源", description: ["Vien Chi BaoはS925シルバー、ゴールド、宝石、天然沈香木から作られたプレミアムジュエリーを専門としています。", "単なる装飾品を超え、各作品は個人の「お守り」として幸運とポジティブなエネルギーをもたらします。"] },
      { part: "第2部 / 全3部", title: "匠の技", description: ["すべてのデザインは数十年の経験を持つ職人の匠によって丁寧に手作りされています。", "古代の冶金術と現代の精密さを融合させ、完璧な品質を保証します。"] },
      { part: "第3部 / 全3部", title: "グローバルビジョン", description: ["ベトナムで設立され、現在は東洋の知恵を現代世界にお届けするために拡大しています。", "私たちの使命はすべての手作りの細部を通じて時代を超えたエレガンスを共有することです。"] },
    ]},
    videoSection: { years: "年の職人技", highlight: "魂と遺産", desc: "Vien Chi Baoのすべての作品は何千時間もの練習から生まれ、職人精神に満ちています — 完璧への絶え間ない追求。" },
    stats: { years: "年の経験", pieces: "作品数", languages: "対応言語", handmade: "完全手作り" },
    featuredProducts: { heading: "シグネチャーコレクション" },
    products: {
      silver: { label: "S925シルバー", title: "ピシュウブレスレット", desc: "純粋なS925シルバーで作られ、保護エネルギーと繁栄をもたらします。" },
      gold: { label: "18Kゴールド", title: "彫刻ゴールドリング", desc: "精製された18Kゴールドから鋳造され、すべての細部が手彫りされています。" },
      gemstone: { label: "宝石", title: "天然宝石", desc: "自然から厳選され、各石は独自のエネルギーを持っています。" },
    },
    spirit: { label: "哲学", title: "職人の精神", highlight: "職人", p1: "職人 — 「クラフトマン」を意味する日本語 — は単なる職業ではありません。それは人生の哲学です：すべての創造に全身全霊を捧げ、絶えず洗練し、品質に妥協しない。", p2: "Vien Chi Baoでは、この精神がHuyKによって日本から持ち帰られ、すべてのチームメンバーに受け継がれています。", quote: '"完璧な作品はないが、毎作品が人生最後の傑作であるかのように行動しなければならない。"', quoteRole: "創設者 & マスター職人" },
    teamPreview: { heading: "奇跡を創る手", button: "チーム全員を見る" },
    values: { heading: "私たちの核心的価値観", items: [{ title: "誠実さ", desc: "認定された素材と完全な透明性。" }, { title: "安全性", desc: "低刺激性で肌に優しいプレミアムメタル。" }, { title: "芸術性", desc: "すべての細部に魂を込めた手作り。" }] },
    cta: { heading: "お守りをお持ち帰りください", subheading: "あなたのエネルギーと共鳴し精神を高めるジュエリーをご覧ください。", button: "プライベートコンサルテーションを予約" },
    timeline: {
      label: "私たちの旅",
      title: "これまでのストーリー",
      items: [
        { year: "2014", title: "始まり", desc: "HuyKが河内に最初のアトリエを設立。職人精神への情熱から生まれた。" },
        { year: "2018", title: "拡張", desc: "風水・精神的ジュエリーラインを導入、全国の顧客にサービスを提供。" },
        { year: "2022", title: "国際化", desc: "日本語・多言語サービス開始。ブランドがベトナム国外へ。" },
        { year: "2024", title: "グローバル設立", desc: "Vien Chi Bao Global LLC正式設立 — ベトナムの職人技を世界へ。" },
      ],
    },
    trust: { cert: "品質認定", handmade: "100%手作り", material: "認定素材", warranty: "10年保証" },
    contact: { label: "お問い合わせ", title: "ぜひお越しください", desc: "私たちはいつでもご相談を承り、作品の裏にある物語をお伝えします。", showroomLabel: "ショールーム", hqLabel: "本社", phoneLabel: "ホットライン", emailLabel: "メール", hoursLabel: "ライブ配信", hoursValue: "毎日10:30–13:30（TikTok）", channelsLabel: "購入チャンネル" },
    footer: { tagline: "魂とベトナムのアイデンティティを深く宿した高級手作りジュエリー。", contactTitle: "お問い合わせ情報", companyLabel: "会社名", addressLabel: "住所", emailLabel: "メール", navTitle: "探索", navLinks: [{ label: "ホーム", href: "/" }, { label: "私たちについて", href: "/about" }, { label: "サービス", href: "/products" }, { label: "チーム", href: "/team" }] },
    about: { heroLabel: "金銀工芸のパイオニア", heroTitle: "信仰と出会う場所", heroTitleHighlight: "精巧な工芸", heroDesc: "Vien Chi Baoはベトナムで宗教と風水の観点から贈り物、ジュエリー、金銀の手工芸品を提供するパイオニアです。", stat1: "年の経験", stat2: "製品ライン", stat3: "手作り", pioneerlabel: "私たちについて", pioneerTitle: "ジュエリー以上 — 信仰のシンボル", pioneerP1: "Vien Chi Baoは宗教と風水の方向性でベトナムにおける高級ギフト、ジュエリー、金銀工芸品の提供をリードしています。製品は意味と象徴性に焦点を当てています。", pioneerP2: "Vien Chi Baoの製品は単なるジュエリーや金銀アイテムではなく、各シンボルが代表する信仰、尊敬、祝福、情熱を意味するものです。", tag1: "風水", tag2: "宗教", tag3: "精巧な工芸", imageBadge: "ベトナム製手作り", productLinesLabel: "コレクション", productLinesTitle: "製品ライン", productLinesDesc: "各製品ラインは深い意味を持って設計されており、所有者に異なる価値と目的を象徴しています。", productLines: [{ title: "高級金銀ギフト", desc: "金銀で作られた独占ギフトセット — 特別な機会に最適で、尊敬と祝福を伝えます。" }, { title: "タイ風水シルバージュエリー", desc: "風水の原則に触発されたシルバージュエリー、着用者に幸運、保護、ポジティブなエネルギーをもたらします。" }, { title: "風水ゴールド", desc: "風水の意味が込められた純金製品 — 繁栄、財運、霊的保護のシンボル。" }, { title: "高級ハンドメイドアイテム", desc: "金銀宝石からのユニークな手作り品：シルバーウォッチ、彫刻シルバーZippo、シルバーペンなど。" }], meaningLabel: "私たちの目的", meaningQuote: "各製品は単なる装飾品ではなく — 信仰、尊敬、祝福、情熱の器です。", meaningDesc: "Vien Chi Baoは高級ギフトや深い文化的・霊的価値を持つ意味のある金銀ジュエリーを求める際の信頼できる選択肢として成長しています。", missionLabel: "職人 HuyK", missionTitle: "私たちの使命", missionP1: "HuyKは10年以上の経験を持つ金細工師です。", missionP2: '日本の匠に師事し、「職人」精神を受け継ぎました。', philosophyLabel: "私たちの哲学", philosophyTitle: "マスター工芸の柱", pillars: [{ title: "誠実さ", desc: "金銀の品質と重量に関する完全な透明性。" }, { title: "安全性", desc: "あらゆる肌タイプに安全なニッケルフリーの清潔な素材を使用。" }, { title: "芸術性", desc: "各作品は精密に鍛造された手作りの傑作。" }, { title: "精神性", desc: "すべてのデザインに魂とポジティブなエネルギーを注入。" }], footer: "© 2026 VIEN CHI BAO GLOBAL LLC. 職人の旅。" },
    team: { heroLabel: "卓越した工芸", heroTitle: "すべての創造の背後にある", heroTitleHighlight: "魂", gridLabel: "匠の手", gridTitle: "すべての創造の背後にある魂", seeMore: "もっと見る", expertiseLabel: "専門分野", footer: "© 2026 VIEN CHI BAO GLOBAL LLC. 職人アーカイブ。", members: [
      { name: "Huy K", position: "創設者 & マスター職人", bio: "10年以上の経験を持つ金細工師。", expertise: ["金細工", "宝石加工"] },
      { name: "Linh Thi", position: "デザインディレクター", bio: "繊細な美的感覚でデザインを生み出します。", expertise: ["ジュエリーデザイン", "クリエイティブディレクション"] },
      { name: "Thanh Minh", position: "シニア職人", bio: "高精度加工を専門とします。", expertise: ["石留め", "仕上げ"] },
      { name: "Quoc Anh", position: "シニア職人", bio: "精緻な彫刻の達人です。", expertise: ["石留め", "仕上げ"] },
      { name: "Minh Tu", position: "シニア職人", bio: "ヘリテージ作品の修復を得意とします。", expertise: ["石留め", "仕上げ"] },
      { name: "Hoang Nam", position: "シニア職人", bio: "宝石のエネルギーの純粋さに焦点を当てています。", expertise: ["石留め", "仕上げ"] },
    ]},
    productPage: { heroLabel: "物流 & グローバル配送", heroTitle: "配送", heroTitleHighlight: "ポリシー", intro: '「VienChiBaoでは、すべてのジュエリーが深い意味と感情を持つことを理解しています。」', deliveryLabel: "配送", deliveryTitle: "送料無料", deliveryDesc: "国内外すべてのご注文に無料配送サービスを提供しています。", timelineLabel: "タイムライン", timelineTitle: "制作 & 取り扱い", timelineP1: "推定処理時間：", timelineHighlight: "1〜3週間", timelineP2: "最終制作プロセス開始前はキャンセルや調整が可能です。", securityLabel: "セキュリティ", securityTitle: "注文追跡 & セキュリティ", securityP1: "発送後、追跡番号をメールでお知らせします。", securityList: ["建物管理または安全な郵便受けを確認してください。", "隣人や家族に確認してください。", "署名確認のため地元の配送業者に連絡してください。"] },
  },

  fr: {
    nav: { home: "Accueil", about: "À Propos", services: "Services", team: "Équipe" },
    hero: { brand: "Vien Chi Bao Global LLC", title: "Créer l'Âme d'un", titleHighlight: "Éclat Intemporel", button: "EXPLORER LES COLLECTIONS" },
    story: { items: [
      { part: "Partie 1 / 3", title: "La Genèse", description: ["Vien Chi Bao est spécialisé dans les bijoux de luxe fabriqués à partir d'argent S925, d'or, de pierres précieuses et de bois d'agar naturel.", "Au-delà du simple ornement, chaque pièce sert d'amulette personnelle apportant chance et énergie positive."] },
      { part: "Partie 2 / 3", title: "Savoir-Faire Magistral", description: ["Chaque design est méticuleusement fabriqué à la main par des artisans maîtres avec des décennies d'expérience.", "Nous fusionnons la métallurgie ancienne avec la précision moderne pour garantir une qualité irréprochable."] },
      { part: "Partie 3 / 3", title: "Vision Mondiale", description: ["Fondé au Vietnam, nous nous développons maintenant pour apporter la sagesse orientale au monde moderne.", "Notre mission est de partager une élégance intemporelle à travers chaque détail artisanal."] },
    ]},
    videoSection: { years: "Ans de Savoir-Faire", highlight: "Âme & Héritage", desc: "Chaque création de Vien Chi Bao est forgée à partir de milliers d'heures de pratique, imprégnée de l'esprit Shokunin — la poursuite incessante de la perfection." },
    stats: { years: "Ans d'expérience", pieces: "Chefs-d'œuvre", languages: "Langues servies", handmade: "Artisanat pur" },
    featuredProducts: { heading: "Collections Signatures" },
    products: {
      silver: { label: "Argent S925", title: "Bracelet Pi Xiu", desc: "Fabriqué en argent S925 pur, portant énergie protectrice et prospérité." },
      gold: { label: "Or 18K", title: "Bague Or Sculptée", desc: "Coulée en or 18K raffiné, chaque détail gravé à la main avec précision." },
      gemstone: { label: "Pierres Précieuses", title: "Pierres Naturelles", desc: "Sélectionnées dans la nature, chaque pierre porte sa propre énergie unique." },
    },
    spirit: { label: "PHILOSOPHIE", title: "L'Esprit", highlight: "Shokunin", p1: "Shokunin — japonais pour « artisan » — n'est pas seulement une profession. C'est une philosophie de vie : consacrer tout son cœur à chaque création, se raffiner sans cesse, ne jamais compromettre la qualité.", p2: "Chez Vien Chi Bao, cet esprit a été rapporté du Japon par HuyK et transmis à chaque membre de l'équipe.", quote: '"Aucune œuvre n\'est parfaite, mais il faut agir comme si chaque pièce était le dernier chef-d\'œuvre de sa vie."', quoteRole: "Fondateur & Maître Artisan" },
    teamPreview: { heading: "Les Mains Qui Créent des Miracles", button: "VOIR TOUTE L'ÉQUIPE" },
    values: { heading: "Nos Valeurs Fondamentales", items: [{ title: "INTÉGRITÉ", desc: "Matériaux certifiés et transparence totale." }, { title: "SÉCURITÉ", desc: "Métaux premium hypoallergéniques et sans danger pour la peau." }, { title: "ARTISANAT", desc: "Des âmes fabriquées à la main dans chaque détail." }] },
    cta: { heading: "Ramenez Votre Amulette Chez Vous", subheading: "Découvrez des bijoux qui résonnent avec votre énergie et élèvent votre esprit.", button: "RÉSERVER UNE CONSULTATION PRIVÉE" },
    timeline: {
      label: "NOTRE VOYAGE",
      title: "L'Histoire Jusqu'ici",
      items: [
        { year: "2014", title: "Les Débuts", desc: "HuyK fonde son premier atelier artisanal à Hanoi, animé par une passion pour l'orfèvrerie." },
        { year: "2018", title: "Expansion", desc: "Introduction des lignes de bijoux feng shui et spirituels, servant des clients à travers le Vietnam." },
        { year: "2022", title: "Internationalisation", desc: "Lancement de services multilingues pour les clients japonais et internationaux." },
        { year: "2024", title: "Vien Chi Bao Global", desc: "Vien Chi Bao Global LLC officiellement établie — portant l'artisanat vietnamien au monde." },
      ],
    },
    trust: { cert: "Certifié Qualité", handmade: "100% Artisanal", material: "Matériaux Certifiés", warranty: "Garantie 10 Ans" },
    contact: { label: "CONTACT", title: "Venez Nous Rendre Visite", desc: "Nous sommes toujours prêts à conseiller et partager l'histoire derrière chaque création.", showroomLabel: "Showroom", hqLabel: "Siège Social", phoneLabel: "Hotline", emailLabel: "Email", hoursLabel: "Livestream", hoursValue: "Quotidien 10h30–13h30 (TikTok)", channelsLabel: "CANAUX D'ACHAT" },
    footer: { tagline: "Bijoux artisanaux haut de gamme, profondément imprégnés d'âme et d'identité vietnamienne.", contactTitle: "Informations de Contact", companyLabel: "Société", addressLabel: "Adresse", emailLabel: "Email", navTitle: "Explorer", navLinks: [{ label: "Accueil", href: "/" }, { label: "À Propos", href: "/about" }, { label: "Services", href: "/products" }, { label: "Équipe", href: "/team" }] },
    about: { heroLabel: "Pionnier en Orfèvrerie", heroTitle: "Là où la Foi Rencontre", heroTitleHighlight: "le Savoir-Faire", heroDesc: "Vien Chi Bao est un pionnier dans la fourniture de cadeaux, bijoux et objets artisanaux en or et argent au Vietnam, guidé par les valeurs de la religion et du feng shui.", stat1: "Ans d'expérience", stat2: "Gammes de produits", stat3: "Artisanat", pioneerlabel: "Qui Nous Sommes", pioneerTitle: "Plus que des Bijoux — Un Symbole de Foi", pioneerP1: "Vien Chi Bao est à l'avant-garde de la fourniture de cadeaux premium, bijoux et objets en or et argent au Vietnam avec une orientation spirituelle et feng shui. Nos produits se concentrent sur la signification et le symbolisme.", pioneerP2: "Les produits Vien Chi Bao ne sont pas de simples bijoux ordinaires — ils portent une signification reflétant la foi, le respect, la bénédiction et la passion dans chaque symbole qu'ils représentent.", tag1: "Feng Shui", tag2: "Religion", tag3: "Artisanat Raffiné", imageBadge: "Fabriqué à la Main au Vietnam", productLinesLabel: "Nos Collections", productLinesTitle: "Gammes de Produits", productLinesDesc: "Chaque gamme est conçue avec une signification profonde, représentant des valeurs et des objectifs distincts pour le porteur.", productLines: [{ title: "Cadeaux Premium en Or et Argent", desc: "Coffrets cadeaux exclusifs en or et argent — parfaits pour les occasions spéciales, transmettant respect et bénédiction." }, { title: "Bijoux Argent Feng Shui Thai", desc: "Bijoux en argent inspirés des principes du feng shui, apportant chance, protection et énergie positive." }, { title: "Or Feng Shui", desc: "Pièces en or pur imprégnées de signification feng shui — symboles de prospérité, fortune et protection spirituelle." }, { title: "Articles Artisanaux Premium", desc: "Pièces artisanales uniques en or, argent et gemmes: montres en argent, Zippos gravés, stylos en argent et plus encore." }], meaningLabel: "Notre Objectif", meaningQuote: "Chaque produit n'est pas seulement un ornement — c'est un vase de foi, respect, bénédiction et passion.", meaningDesc: "Vien Chi Bao devient de plus en plus le choix de confiance pour les clients souhaitant acheter des cadeaux premium ou des bijoux en or et argent porteurs de valeur culturelle et spirituelle.", missionLabel: "Artisan HuyK", missionTitle: "Notre Mission", missionP1: "HuyK est un maître orfèvre avec plus d'une décennie d'expérience.", missionP2: 'Formé par des maîtres japonais, j\'ai hérité de l\'esprit "Shokunin".', philosophyLabel: "Notre Philosophie", philosophyTitle: "Les Piliers de la Maîtrise Artisanale", pillars: [{ title: "Intégrité", desc: "Transparence absolue concernant la qualité et le poids de l'or et de l'argent." }, { title: "Sécurité", desc: "Utilisation de matériaux propres, sans nickel, sûrs pour tous les types de peau." }, { title: "Artisanat", desc: "Chaque pièce est un chef-d'œuvre artisanal." }, { title: "Esprit", desc: "Infuser l'âme et l'énergie positive dans chaque design." }], footer: "© 2026 VIEN CHI BAO GLOBAL LLC. LE VOYAGE ARTISANAL." },
    team: { heroLabel: "Excellence Artisanale", heroTitle: "Les Âmes Derrière", heroTitleHighlight: "Chaque Création", gridLabel: "Les Mains Maîtresses", gridTitle: "Les âmes derrière chaque création", seeMore: "Voir plus", expertiseLabel: "Domaines d'Expertise", footer: "© 2026 VIEN CHI BAO GLOBAL LLC. LES ARCHIVES ARTISANALES.", members: [
      { name: "Huy K", position: "Fondateur & Maître Artisan", bio: "Orfèvre avec plus de 10 ans d'expérience.", expertise: ["Orfèvrerie", "Traitement des Gemmes"] },
      { name: "Linh Thi", position: "Directrice Artistique", bio: "Avec une sensibilité esthétique délicate.", expertise: ["Design de Bijoux", "Direction Créative"] },
      { name: "Thanh Minh", position: "Artisan Senior", bio: "Spécialisé dans la transformation de haute précision.", expertise: ["Sertissage", "Finition"] },
      { name: "Quoc Anh", position: "Artisan Senior", bio: "Maître des gravures complexes.", expertise: ["Sertissage", "Finition"] },
      { name: "Minh Tu", position: "Artisan Senior", bio: "Expert en restauration de pièces patrimoniales.", expertise: ["Sertissage", "Finition"] },
      { name: "Hoang Nam", position: "Artisan Senior", bio: "Se concentre sur la pureté énergétique des pierres précieuses.", expertise: ["Sertissage", "Finition"] },
    ]},
    productPage: { heroLabel: "Logistique & Livraison Mondiale", heroTitle: "Politique de", heroTitleHighlight: "Livraison", intro: '"Chez VienChiBao, nous comprenons que chaque bijou porte une signification profonde."', deliveryLabel: "Livraison", deliveryTitle: "Livraison Gratuite", deliveryDesc: "Nous offrons des services d'expédition gratuits pour toutes les commandes.", timelineLabel: "Délais", timelineTitle: "Fabrication & Traitement", timelineP1: "Délai de traitement estimé :", timelineHighlight: "1 à 3 semaines", timelineP2: "Les annulations sont possibles avant le début de la fabrication finale.", securityLabel: "Sécurité", securityTitle: "Suivi de Commande & Sécurité", securityP1: "Une fois expédié, vous recevrez un numéro de suivi par email.", securityList: ["Vérifiez les boîtes aux lettres sécurisées.", "Confirmez avec les voisins.", "Contactez le transporteur local."] },
  },

  de: {
    nav: { home: "Startseite", about: "Über Uns", services: "Dienstleistungen", team: "Team" },
    hero: { brand: "Vien Chi Bao Global LLC", title: "Die Seele des", titleHighlight: "Zeitlosen Glanzes Erschaffen", button: "KOLLEKTIONEN ENTDECKEN" },
    story: { items: [
      { part: "Teil 1 / 3", title: "Die Entstehung", description: ["Vien Chi Bao ist spezialisiert auf Premium-Schmuck aus S925-Silber, Gold, Edelsteinen und natürlichem Adlerholz.", "Über die bloße Zierde hinaus dient jedes Stück als persönliches Amulett."] },
      { part: "Teil 2 / 3", title: "Meisterhafte Handwerkskunst", description: ["Jedes Design wird von Meisterhandwerkern sorgfältig von Hand gefertigt.", "Wir verbinden antike Metallurgie mit moderner Präzision."] },
      { part: "Teil 3 / 3", title: "Globale Vision", description: ["In Vietnam gegründet, expandieren wir nun weltweit.", "Unsere Mission ist zeitlose Eleganz durch handgefertigte Details zu teilen."] },
    ]},
    videoSection: { years: "Jahre Handwerkskunst", highlight: "Seele & Erbe", desc: "Jede Schöpfung von Vien Chi Bao wird aus tausenden Stunden Übung geschmiedet, durchdrungen vom Shokunin-Geist — dem unermüdlichen Streben nach Perfektion." },
    stats: { years: "Jahre Erfahrung", pieces: "Meisterwerke", languages: "Sprachen", handmade: "Handgefertigt" },
    featuredProducts: { heading: "Signature-Kollektionen" },
    products: {
      silver: { label: "S925 Silber", title: "Pi Xiu Armband", desc: "Aus reinem S925 Silber gefertigt, trägt Schutzenergie und Wohlstand." },
      gold: { label: "18K Gold", title: "Gravierter Goldring", desc: "Aus raffiniertem 18K Gold gegossen, jedes Detail handgraviert." },
      gemstone: { label: "Edelsteine", title: "Natürliche Edelsteine", desc: "Aus der Natur ausgewählt, jeder Stein trägt seine eigene einzigartige Energie." },
    },
    spirit: { label: "PHILOSOPHIE", title: "Der Geist des", highlight: "Shokunin", p1: "Shokunin — japanisch fuer 'Handwerker' — ist nicht nur ein Beruf. Es ist eine Lebensphilosophie: sein ganzes Herz in jede Schoepfung zu stecken.", p2: "Bei Vien Chi Bao wurde dieser Geist von HuyK aus Japan mitgebracht und an jedes Teammitglied weitergegeben.", quote: '"Kein Werk ist je perfekt, aber man muss handeln, als waere jedes Stueck das letzte Meisterwerk seines Lebens."', quoteRole: "Gruender & Meister-Handwerker" },
    teamPreview: { heading: "Die Hände, die Wunder schaffen", button: "GANZES TEAM ANSEHEN" },
    values: { heading: "Unsere Grundwerte", items: [{ title: "INTEGRITÄT", desc: "Zertifizierte Materialien und vollständige Transparenz." }, { title: "SICHERHEIT", desc: "Hypoallergene und hautverträgliche Edelmetalle." }, { title: "KUNSTFERTIGKEIT", desc: "Von Hand gefertigte Seelen in jedem Detail." }] },
    cta: { heading: "Bringen Sie Ihr Amulett Nach Hause", subheading: "Entdecken Sie Schmuck der mit Ihrer Energie resoniert.", button: "PRIVATE BERATUNG BUCHEN" },
    timeline: {
      label: "UNSERE REISE",
      title: "Die Geschichte Bisher",
      items: [
        { year: "2014", title: "Der Anfang", desc: "HuyK gründete sein erstes Handwerksatelier in Hanoi, angetrieben von der Leidenschaft für Gold- und Silberschmiedekunst." },
        { year: "2018", title: "Expansion", desc: "Einführung von Feng-Shui- und spirituellen Schmucklinien, die Kunden in ganz Vietnam bedienen." },
        { year: "2022", title: "Internationalisierung", desc: "Mehrsprachige Dienste für japanische und internationale Kunden gestartet." },
        { year: "2024", title: "Vien Chi Bao Global", desc: "Vien Chi Bao Global LLC offiziell gegründet — vietnamesisches Handwerk in die Welt gebracht." },
      ],
    },
    trust: { cert: "Qualitätszertifiziert", handmade: "100% Handgefertigt", material: "Zertifizierte Materialien", warranty: "10 Jahre Garantie" },
    contact: { label: "KONTAKT", title: "Besuchen Sie Uns", desc: "Wir stehen jederzeit für Beratung bereit und teilen die Geschichte hinter jeder Schöpfung.", showroomLabel: "Showroom", hqLabel: "Hauptsitz", phoneLabel: "Hotline", emailLabel: "E-Mail", hoursLabel: "Livestream", hoursValue: "Täglich 10:30–13:30 (TikTok)", channelsLabel: "EINKAUFSKANÄLE" },
    footer: { tagline: "Hochwertiger handgefertigter Schmuck, tief durchdrungen von Seele und vietnamesischer Identität.", contactTitle: "Kontaktinformationen", companyLabel: "Unternehmen", addressLabel: "Adresse", emailLabel: "E-Mail", navTitle: "Entdecken", navLinks: [{ label: "Startseite", href: "/" }, { label: "Über Uns", href: "/about" }, { label: "Dienstleistungen", href: "/products" }, { label: "Team", href: "/team" }] },
    about: { heroLabel: "Pionier in Gold & Silber Handwerk", heroTitle: "Wo Glaube auf", heroTitleHighlight: "Handwerkskunst trifft", heroDesc: "Vien Chi Bao ist Pionier in der Bereitstellung von Geschenken, Schmuck und handgefertigten Artikeln aus Gold und Silber in Vietnam, geleitet von Religion und Feng Shui.", stat1: "Jahre Erfahrung", stat2: "Produktlinien", stat3: "Handgefertigt", pioneerlabel: "Wer Wir Sind", pioneerTitle: "Mehr als Schmuck — Ein Symbol des Glaubens", pioneerP1: "Vien Chi Bao fuehrt den Weg bei Premium-Geschenken, Schmuck und Gold-Silber-Artefakten in Vietnam mit spiritueller und Feng-Shui-Ausrichtung. Unsere Produkte konzentrieren sich auf Bedeutung und Symbolik.", pioneerP2: "Vien Chi Bao Produkte sind nicht nur gewoehnliche Schmuck- oder Gold-Silber-Artikel, sondern tragen Bedeutung, die Glauben, Respekt, Segen und Leidenschaft in jedem Symbol widerspiegelt.", tag1: "Feng Shui", tag2: "Religion", tag3: "Feine Handwerkskunst", imageBadge: "Handgefertigt in Vietnam", productLinesLabel: "Unsere Kollektionen", productLinesTitle: "Produktlinien", productLinesDesc: "Jede Produktlinie ist mit tiefer Bedeutung gestaltet und repraesentiert unterschiedliche Werte fuer den Traeger.", productLines: [{ title: "Premium Gold & Silber Geschenke", desc: "Exklusive Geschenksets aus Gold und Silber fuer besondere Anlaesse, die Respekt und Segen vermitteln." }, { title: "Thai Feng Shui Silberschmuck", desc: "Silberschmuck nach Feng-Shui-Prinzipien fuer Glueck, Schutz und positive Energie." }, { title: "Feng Shui Gold", desc: "Reingoldstucke mit Feng-Shui-Bedeutung als Symbole fuer Wohlstand und geistigen Schutz." }, { title: "Premium Handmade Artikel", desc: "Einzigartige handgefertigte Stuecke aus Gold, Silber und Edelsteinen: Silberuhren, gravierte Zippos, Silberstifte und mehr." }], meaningLabel: "Unser Zweck", meaningQuote: "Jedes Produkt ist nicht nur ein Schmuckstueck, sondern ein Gefaess fuer Glauben, Respekt, Segen und Leidenschaft.", meaningDesc: "Vien Chi Bao wird immer mehr zur vertrauenswuerdigen Wahl fuer Kunden, die Premium-Geschenke oder bedeutungsvolles Gold- und Silberschmuck suchen.", missionLabel: "Handwerker HuyK", missionTitle: "Unsere Mission", missionP1: "HuyK ist ein Meister-Goldschmied mit über einem Jahrzehnt Erfahrung.", missionP2: "Von japanischen Meistern ausgebildet, erbte ich den Shokunin-Geist.", philosophyLabel: "Unsere Philosophie", philosophyTitle: "Die Säulen des Meister-Handwerks", pillars: [{ title: "Integrität", desc: "Absolute Transparenz hinsichtlich Qualität und Gewicht." }, { title: "Sicherheit", desc: "Nickelfreie Materialien, die für alle Hauttypen sicher sind." }, { title: "Kunstfertigkeit", desc: "Jedes Stück ist ein handgefertigtes Meisterwerk." }, { title: "Geist", desc: "Einbringen von Seele und positiver Energie in jedes Design." }], footer: "© 2026 VIEN CHI BAO GLOBAL LLC. DIE HANDWERKER-REISE." },
    team: { heroLabel: "Handwerkliche Exzellenz", heroTitle: "Die Seelen hinter", heroTitleHighlight: "jeder Schöpfung", gridLabel: "Die Meisterhände", gridTitle: "Die Seelen hinter jeder Schöpfung", seeMore: "Mehr sehen", expertiseLabel: "Fachgebiete", footer: "© 2026 VIEN CHI BAO GLOBAL LLC. DAS HANDWERKER-ARCHIV.", members: [
      { name: "Huy K", position: "Gründer & Meister-Handwerker", bio: "Goldschmied mit über 10 Jahren Erfahrung.", expertise: ["Goldschmiedekunst", "Edelsteinverarbeitung"] },
      { name: "Linh Thi", position: "Kreativdirektorin", bio: "Mit feinem ästhetischem Gespür.", expertise: ["Schmuckdesign", "Kreative Leitung"] },
      { name: "Thanh Minh", position: "Senior-Handwerker", bio: "Spezialisiert auf hochpräzise Verarbeitung.", expertise: ["Steinfassung", "Finishing"] },
      { name: "Quoc Anh", position: "Senior-Handwerker", bio: "Meister komplizierter Gravuren.", expertise: ["Steinfassung", "Finishing"] },
      { name: "Minh Tu", position: "Senior-Handwerker", bio: "Experte für die Restaurierung von Erbstücken.", expertise: ["Steinfassung", "Finishing"] },
      { name: "Hoang Nam", position: "Senior-Handwerker", bio: "Fokus auf die energetische Reinheit von Edelsteinen.", expertise: ["Steinfassung", "Finishing"] },
    ]},
    productPage: { heroLabel: "Logistik & Globale Lieferung", heroTitle: "Versand-", heroTitleHighlight: "Richtlinie", intro: '"Bei VienChiBao verstehen wir, dass jedes Schmuckstück tiefe Bedeutung trägt."', deliveryLabel: "Lieferung", deliveryTitle: "Kostenloser Versand", deliveryDesc: "Wir bieten kostenlose Versanddienste für alle Bestellungen an.", timelineLabel: "Zeitplan", timelineTitle: "Fertigung & Bearbeitung", timelineP1: "Geschätzte Bearbeitungszeit:", timelineHighlight: "1 bis 3 Wochen", timelineP2: "Stornierungen sind vor Beginn des endgültigen Fertigungsprozesses möglich.", securityLabel: "Sicherheit", securityTitle: "Bestellverfolgung & Sicherheit", securityP1: "Nach dem Versand erhalten Sie eine Sendungsverfolgungsnummer.", securityList: ["Prüfen Sie sichere Briefkästen.", "Bestätigen Sie mit Nachbarn.", "Kontaktieren Sie den lokalen Kurier."] },
  },

  es: {
    nav: { home: "Inicio", about: "Sobre Nosotros", services: "Servicios", team: "Equipo" },
    hero: { brand: "Vien Chi Bao Global LLC", title: "Creando el Alma del", titleHighlight: "Resplandor Eterno", button: "EXPLORAR COLECCIONES" },
    story: { items: [
      { part: "Parte 1 / 3", title: "La Génesis", description: ["Vien Chi Bao se especializa en joyería premium elaborada con plata S925, oro, piedras preciosas y madera de agar natural.", "Más allá del simple adorno, cada pieza sirve como un amuleto personal."] },
      { part: "Parte 2 / 3", title: "Artesanía Magistral", description: ["Cada diseño es meticulosamente elaborado a mano por maestros artesanos.", "Combinamos la metalurgia antigua con la precisión moderna."] },
      { part: "Parte 3 / 3", title: "Visión Global", description: ["Fundada en Vietnam, ahora nos expandimos para llevar la sabiduría oriental al mundo moderno.", "Nuestra misión es compartir la elegancia atemporal."] },
    ]},
    videoSection: { years: "Años de Artesanía", highlight: "Alma y Herencia", desc: "Cada creación de Vien Chi Bao se forja de miles de horas de práctica, imbuida del espíritu Shokunin — la búsqueda incesante de la perfección." },
    stats: { years: "Años de experiencia", pieces: "Obras maestras", languages: "Idiomas", handmade: "Artesanía pura" },
    featuredProducts: { heading: "Colecciones Insignia" },
    products: {
      silver: { label: "Plata S925", title: "Pulsera Pi Xiu", desc: "Elaborada en plata S925 pura, portando energía protectora y prosperidad." },
      gold: { label: "Oro 18K", title: "Anillo Grabado", desc: "Fundido en oro 18K refinado, cada detalle grabado a mano con precisión." },
      gemstone: { label: "Piedras Preciosas", title: "Piedras Naturales", desc: "Seleccionadas de la naturaleza, cada piedra lleva su propia energía única." },
    },
    spirit: { label: "FILOSOFÍA", title: "El Espíritu", highlight: "Shokunin", p1: 'Shokunin — japonés para "artesano" — no es solo una profesión. Es una filosofía de vida: dedicar todo el corazón a cada creación, refinarse constantemente.', p2: "En Vien Chi Bao, este espíritu fue traído de Japón por HuyK y transmitido a cada miembro del equipo.", quote: '"Ninguna obra es perfecta, pero hay que actuar como si cada pieza fuera la última obra maestra de la vida."', quoteRole: "Fundador & Maestro Artesano" },
    teamPreview: { heading: "Las Manos Que Crean Milagros", button: "VER TODO EL EQUIPO" },
    values: { heading: "Nuestros Valores Fundamentales", items: [{ title: "INTEGRIDAD", desc: "Materiales certificados y transparencia total." }, { title: "SEGURIDAD", desc: "Metales premium hipoalergénicos y seguros para la piel." }, { title: "ARTESANÍA", desc: "Almas hechas a mano en cada detalle." }] },
    cta: { heading: "Lleva Tu Amuleto a Casa", subheading: "Descubre joyas que resuenan con tu energía y elevan tu espíritu.", button: "RESERVAR UNA CONSULTA PRIVADA" },
    timeline: {
      label: "NUESTRO VIAJE",
      title: "La Historia Hasta Ahora",
      items: [
        { year: "2014", title: "Los Comienzos", desc: "HuyK fundó su primer taller artesanal en Hanói, impulsado por su pasión por la orfebrería." },
        { year: "2018", title: "Expansión", desc: "Introducción de líneas de joyería feng shui y espiritual, sirviendo a clientes en todo Vietnam." },
        { year: "2022", title: "Internacionalización", desc: "Lanzamiento de servicios multilingüe para clientes japoneses e internacionales." },
        { year: "2024", title: "Vien Chi Bao Global", desc: "Vien Chi Bao Global LLC oficialmente establecida — llevando la artesanía vietnamita al mundo." },
      ],
    },
    trust: { cert: "Certificado de Calidad", handmade: "100% Artesanal", material: "Materiales Certificados", warranty: "Garantía 10 Años" },
    contact: { label: "CONTACTO", title: "Venga a Visitarnos", desc: "Siempre estamos listos para asesorar y compartir la historia detrás de cada creación.", showroomLabel: "Showroom", hqLabel: "Sede Central", phoneLabel: "Hotline", emailLabel: "Email", hoursLabel: "Livestream", hoursValue: "Diario 10:30–13:30 (TikTok)", channelsLabel: "CANALES DE COMPRA" },
    footer: { tagline: "Joyería artesanal de alta gama, profundamente imbuida de alma e identidad vietnamita.", contactTitle: "Información de Contacto", companyLabel: "Empresa", addressLabel: "Dirección", emailLabel: "Email", navTitle: "Explorar", navLinks: [{ label: "Inicio", href: "/" }, { label: "Sobre Nosotros", href: "/about" }, { label: "Servicios", href: "/products" }, { label: "Equipo", href: "/team" }] },
    about: { heroLabel: "Pionero en Orfebrería", heroTitle: "Donde la Fe Encuentra", heroTitleHighlight: "el Arte", heroDesc: "Vien Chi Bao es pionero en la provisión de regalos, joyería y artículos artesanales de oro y plata en Vietnam, guiados por valores religiosos y de feng shui.", stat1: "Años de experiencia", stat2: "Líneas de productos", stat3: "Artesanía", pioneerlabel: "Quiénes Somos", pioneerTitle: "Más que Joyería — Un Símbolo de Fe", pioneerP1: "Vien Chi Bao lidera el camino en regalos premium, joyería y artefactos de oro y plata en Vietnam con orientación espiritual y feng shui. Nuestros productos se centran en el significado y el simbolismo.", pioneerP2: "Los productos de Vien Chi Bao no son simples joyas ordinarias — llevan un significado que refleja fe, respeto, bendición y pasión en cada símbolo que representan.", tag1: "Feng Shui", tag2: "Religión", tag3: "Artesanía Fina", imageBadge: "Hecho a Mano en Vietnam", productLinesLabel: "Nuestras Colecciones", productLinesTitle: "Líneas de Productos", productLinesDesc: "Cada línea está diseñada con profundo significado, representando valores y propósitos distintos para quien la posee.", productLines: [{ title: "Regalos Premium de Oro y Plata", desc: "Cofres de regalo exclusivos en oro y plata para ocasiones especiales, transmitiendo respeto y bendición." }, { title: "Joyería de Plata Feng Shui Thai", desc: "Joyería de plata inspirada en principios feng shui, trayendo suerte, protección y energía positiva." }, { title: "Oro Feng Shui", desc: "Piezas de oro puro con significado feng shui, símbolos de prosperidad, fortuna y protección espiritual." }, { title: "Artículos Handmade Premium", desc: "Piezas artesanales únicas en oro, plata y gemas: relojes de plata, Zippos grabados, plumas de plata y más." }], meaningLabel: "Nuestro Propósito", meaningQuote: "Cada producto no es solo un adorno — es un recipiente de fe, respeto, bendición y pasión.", meaningDesc: "Vien Chi Bao se convierte cada vez más en la elección de confianza para quienes buscan regalos premium o joyas de oro y plata con profundo valor cultural y espiritual.", missionLabel: "Artesano HuyK", missionTitle: "Nuestra Misión", missionP1: "HuyK es un maestro orfebre con más de una década de experiencia.", missionP2: 'Formado por maestros japoneses, heredé el espíritu "Shokunin".', philosophyLabel: "Nuestra Filosofía", philosophyTitle: "Los Pilares de la Maestría Artesanal", pillars: [{ title: "Integridad", desc: "Transparencia absoluta sobre la calidad del oro y la plata." }, { title: "Seguridad", desc: "Materiales sin níquel, seguros para todo tipo de piel." }, { title: "Artesanía", desc: "Cada pieza es una obra maestra artesanal." }, { title: "Espíritu", desc: "Infundir alma y energía positiva en cada diseño." }], footer: "© 2026 VIEN CHI BAO GLOBAL LLC. EL VIAJE ARTESANAL." },
    team: { heroLabel: "Excelencia Artesanal", heroTitle: "Las Almas Detrás de", heroTitleHighlight: "Cada Creación", gridLabel: "Las Manos Maestras", gridTitle: "Las almas detrás de cada creación", seeMore: "Ver más", expertiseLabel: "Áreas de Expertise", footer: "© 2026 VIEN CHI BAO GLOBAL LLC. EL ARCHIVO ARTESANAL.", members: [
      { name: "Huy K", position: "Fundador & Maestro Artesano", bio: "Orfebre con más de 10 años de experiencia.", expertise: ["Orfebrería", "Procesamiento de Gemas"] },
      { name: "Linh Thi", position: "Directora de Diseño", bio: "Con delicada sensibilidad estética.", expertise: ["Diseño de Joyería", "Dirección Creativa"] },
      { name: "Thanh Minh", position: "Artesano Senior", bio: "Especializado en procesamiento de alta precisión.", expertise: ["Engaste", "Acabado"] },
      { name: "Quoc Anh", position: "Artesano Senior", bio: "Maestro de grabados intrincados.", expertise: ["Engaste", "Acabado"] },
      { name: "Minh Tu", position: "Artesano Senior", bio: "Experto en restauración de piezas patrimoniales.", expertise: ["Engaste", "Acabado"] },
      { name: "Hoang Nam", position: "Artesano Senior", bio: "Se centra en la pureza energética de las piedras preciosas.", expertise: ["Engaste", "Acabado"] },
    ]},
    productPage: { heroLabel: "Logística & Entrega Global", heroTitle: "Política de", heroTitleHighlight: "Envío", intro: '"En VienChiBao, entendemos que cada joya lleva un significado profundo."', deliveryLabel: "Entrega", deliveryTitle: "Envío Gratuito", deliveryDesc: "Ofrecemos envío gratuito para todos los pedidos.", timelineLabel: "Plazos", timelineTitle: "Fabricación & Manejo", timelineP1: "Tiempo de procesamiento estimado:", timelineHighlight: "1 a 3 semanas", timelineP2: "Las cancelaciones son posibles antes del proceso final.", securityLabel: "Seguridad", securityTitle: "Seguimiento & Seguridad", securityP1: "Una vez enviado, recibirá un número de seguimiento.", securityList: ["Verifique buzones seguros.", "Confirme con vecinos.", "Contacte al mensajero local."] },
  },

  ko: {
    nav: { home: "홈", about: "회사 소개", services: "서비스", team: "팀" },
    hero: { brand: "Vien Chi Bao Global LLC", title: "영원한 빛의 영혼을", titleHighlight: "창조하다", button: "컬렉션 둘러보기" },
    story: { items: [
      { part: "1부 / 전 3부", title: "시작", description: ["Vien Chi Bao는 S925 실버, 금, 보석, 천연 침향목으로 제작된 프리미엄 주얼리를 전문으로 합니다.", "단순한 장식을 넘어 각 작품은 개인 부적 역할을 합니다."] },
      { part: "2부 / 전 3부", title: "장인의 솜씨", description: ["모든 디자인은 수십 년의 경험을 가진 장인들이 정교하게 손으로 제작합니다.", "고대 야금술과 현대적 정밀함을 결합하여 완벽한 품질을 보장합니다."] },
      { part: "3부 / 전 3부", title: "글로벌 비전", description: ["베트남에서 설립되어 이제 동양의 지혜를 현대 세계에 전하기 위해 확장하고 있습니다.", "우리의 사명은 시대를 초월한 우아함을 나누는 것입니다."] },
    ]},
    videoSection: { years: "년의 장인 기술", highlight: "영혼과 유산", desc: "Vien Chi Bao의 모든 창작물은 수천 시간의 연습에서 단련되어 쇼쿠닌 정신으로 가득합니다 — 완벽을 향한 끊임없는 추구." },
    stats: { years: "년 경험", pieces: "작품", languages: "지원 언어", handmade: "순수 수공예" },
    featuredProducts: { heading: "시그니처 컬렉션" },
    products: {
      silver: { label: "S925 실버", title: "피슈 팔찌", desc: "순수 S925 실버로 제작되어 보호 에너지와 번영을 담고 있습니다." },
      gold: { label: "18K 골드", title: "조각 골드 링", desc: "정제된 18K 골드로 주조되어 모든 디테일이 손으로 새겨져 있습니다." },
      gemstone: { label: "보석", title: "천연 보석", desc: "자연에서 선별되어 각 돌은 고유한 에너지를 지니고 있습니다." },
    },
    spirit: { label: "철학", title: "장인의 정신", highlight: "쇼쿠닌", p1: '쇼쿠닌 — 일본어로 "장인" — 은 단순한 직업이 아닙니다. 그것은 삶의 철학입니다: 모든 창조물에 온 마음을 바치고, 끊임없이 정제하며, 품질에 타협하지 않는 것.', p2: "Vien Chi Bao에서 이 정신은 HuyK가 일본에서 가져와 모든 팀원에게 전달되었습니다.", quote: '"어떤 작품도 완벽하지 않지만, 매 작품이 인생 마지막 걸작인 것처럼 행동해야 한다."', quoteRole: "창립자 & 마스터 장인" },
    teamPreview: { heading: "기적을 만드는 손", button: "전체 팀 보기" },
    values: { heading: "핵심 가치", items: [{ title: "진실성", desc: "인증된 소재와 완전한 투명성." }, { title: "안전성", desc: "저자극성 피부 안전 프리미엄 금속." }, { title: "예술성", desc: "모든 세부 사항에 담긴 수작업의 혼." }] },
    cta: { heading: "나만의 부적을 집으로", subheading: "당신의 에너지와 공명하는 주얼리를 만나보세요.", button: "프라이빗 상담 예약" },
    timeline: {
      label: "우리의 여정",
      title: "지금까지의 이야기",
      items: [
        { year: "2014", title: "시작", desc: "HuyK가 하노이에 첫 번째 공방을 설립. 쇼쿠닌 철학에 뿌리를 둔 금은 공예에 대한 열정으로." },
        { year: "2018", title: "확장", desc: "풍수 및 영적 주얼리 라인 도입, 전국 고객에게 의미 있는 수공예 상징을 제공." },
        { year: "2022", title: "국제화", desc: "일본 및 글로벌 고객을 위한 다국어 서비스 시작. 브랜드가 베트남 국경을 넘어." },
        { year: "2024", title: "Vien Chi Bao Global", desc: "Vien Chi Bao Global LLC 공식 설립 — 베트남 장인 정신을 세계로." },
      ],
    },
    trust: { cert: "품질 인증", handmade: "100% 수공예", material: "인증 소재", warranty: "10년 보증" },
    contact: { label: "연락처", title: "방문해 주세요", desc: "우리는 항상 상담과 각 작품 뒤의 이야기를 공유할 준비가 되어 있습니다.", showroomLabel: "쇼룸", hqLabel: "본사", phoneLabel: "핫라인", emailLabel: "이메일", hoursLabel: "라이브스트림", hoursValue: "매일 10:30–13:30 (TikTok)", channelsLabel: "구매 채널" },
    footer: { tagline: "영혼과 베트남의 정체성이 깊이 담긴 고급 수공예 주얼리.", contactTitle: "연락처 정보", companyLabel: "회사", addressLabel: "주소", emailLabel: "이메일", navTitle: "탐색", navLinks: [{ label: "홈", href: "/" }, { label: "회사 소개", href: "/about" }, { label: "서비스", href: "/products" }, { label: "팀", href: "/team" }] },
    about: { heroLabel: "금은 공예의 선구자", heroTitle: "믿음이 만나는 곳", heroTitleHighlight: "정교한 공예", heroDesc: "Vien Chi Bao는 종교와 풍수 가치를 바탕으로 베트남에서 선물, 주얼리, 금은 수공예품을 제공하는 선구자입니다.", stat1: "년 경험", stat2: "제품 라인", stat3: "수공예", pioneerlabel: "우리 소개", pioneerTitle: "단순한 주얼리 이상 — 믿음의 상징", pioneerP1: "Vien Chi Bao는 영적·풍수 지향으로 베트남에서 프리미엄 선물, 주얼리, 금은 공예품 제공을 선도합니다. 제품은 의미와 상징성에 초점을 맞춥니다.", pioneerP2: "Vien Chi Bao 제품은 단순한 주얼리나 금은 아이템이 아니라 각 상징이 대표하는 믿음, 존경, 축복, 열정을 담고 있습니다.", tag1: "풍수", tag2: "종교", tag3: "정교한 공예", imageBadge: "베트남 수공예", productLinesLabel: "컬렉션", productLinesTitle: "제품 라인", productLinesDesc: "각 제품 라인은 소유자를 위한 독특한 가치와 목적을 상징하며 깊은 의미로 설계되었습니다.", productLines: [{ title: "프리미엄 금은 선물", desc: "특별한 행사를 위한 금은 독점 선물 세트 — 존경과 축복을 전달합니다." }, { title: "태국 풍수 실버 주얼리", desc: "풍수 원칙에서 영감을 받은 실버 주얼리로 행운, 보호, 긍정 에너지를 가져다줍니다." }, { title: "풍수 골드", desc: "풍수 의미가 담긴 순금 제품 — 번영, 재운, 영적 보호의 상징." }, { title: "프리미엄 핸드메이드 아이템", desc: "금, 은, 보석으로 만든 독특한 수공예품: 실버 시계, 조각 실버 Zippo, 실버 펜 등." }], meaningLabel: "우리의 목적", meaningQuote: "각 제품은 단순한 장식품이 아니라 믿음, 존경, 축복, 열정의 그릇입니다.", meaningDesc: "Vien Chi Bao는 깊은 문화적·영적 가치를 지닌 프리미엄 선물이나 의미 있는 금은 주얼리를 원하는 고객들의 신뢰할 수 있는 선택이 되고 있습니다.", missionLabel: "장인 HuyK", missionTitle: "우리의 사명", missionP1: "HuyK는 10년 이상의 경험을 가진 마스터 금세공사입니다.", missionP2: '일본 장인들에게 사사하여 "쇼쿠닌" 정신을 이어받았습니다.', philosophyLabel: "우리의 철학", philosophyTitle: "마스터 공예의 기둥", pillars: [{ title: "진실성", desc: "금은의 품질과 무게에 관한 완전한 투명성." }, { title: "안전성", desc: "모든 피부 타입에 안전한 니켈 프리 소재 사용." }, { title: "예술성", desc: "각 작품은 정밀하게 단조된 수공예 걸작." }, { title: "정신성", desc: "모든 디자인에 영혼과 긍정적인 에너지 주입." }], footer: "© 2026 VIEN CHI BAO GLOBAL LLC. 장인의 여정." },
    team: { heroLabel: "탁월한 공예", heroTitle: "모든 창조 뒤에 있는", heroTitleHighlight: "영혼들", gridLabel: "마스터의 손", gridTitle: "모든 창조 뒤에 있는 영혼들", seeMore: "더 보기", expertiseLabel: "전문 분야", footer: "© 2026 VIEN CHI BAO GLOBAL LLC. 장인 아카이브.", members: [
      { name: "Huy K", position: "창립자 & 마스터 장인", bio: "10년 이상의 경험을 가진 금세공사.", expertise: ["금세공", "보석 가공"] },
      { name: "Linh Thi", position: "디자인 디렉터", bio: "섬세한 미적 감각으로 디자인을 창조합니다.", expertise: ["주얼리 디자인", "크리에이티브 디렉션"] },
      { name: "Thanh Minh", position: "시니어 장인", bio: "고정밀 가공 전문.", expertise: ["세팅", "피니싱"] },
      { name: "Quoc Anh", position: "시니어 장인", bio: "정교한 조각의 달인입니다.", expertise: ["세팅", "피니싱"] },
      { name: "Minh Tu", position: "시니어 장인", bio: "유산 작품 복원 전문가.", expertise: ["세팅", "피니싱"] },
      { name: "Hoang Nam", position: "시니어 장인", bio: "보석의 에너지 순수성에 집중합니다.", expertise: ["세팅", "피니싱"] },
    ]},
    productPage: { heroLabel: "물류 & 글로벌 배송", heroTitle: "배송", heroTitleHighlight: "정책", intro: '"VienChiBao에서는 모든 주얼리가 깊은 의미를 담고 있음을 이해합니다."', deliveryLabel: "배송", deliveryTitle: "무료 배송", deliveryDesc: "국내외 모든 주문에 무료 배송 서비스를 제공합니다.", timelineLabel: "일정", timelineTitle: "제작 & 처리", timelineP1: "예상 처리 시간:", timelineHighlight: "1~3주", timelineP2: "최종 제작 프로세스 시작 전 취소 가능합니다.", securityLabel: "보안", securityTitle: "주문 추적 & 보안", securityP1: "발송 후 이메일로 추적 번호를 받게 됩니다.", securityList: ["안전한 우편함을 확인하세요.", "이웃이나 가족에게 확인하세요.", "지역 배송업체에 연락하세요."] },
  },

  th: {
    nav: { home: "หน้าแรก", about: "เกี่ยวกับเรา", services: "บริการ", team: "ทีมงาน" },
    hero: { brand: "Vien Chi Bao Global LLC", title: "สร้างสรรค์จิตวิญญาณแห่ง", titleHighlight: "ความงามนิรันดร์", button: "สำรวจคอลเลกชัน" },
    story: { items: [
      { part: "ตอนที่ 1 / 3", title: "จุดเริ่มต้น", description: ["Vien Chi Bao เชี่ยวชาญด้านเครื่องประดับพรีเมียมจากเงิน S925 ทอง อัญมณี และไม้กฤษณาธรรมชาติ", "แต่ละชิ้นทำหน้าที่เป็นเครื่องรางส่วนตัว นำโชคลาภและพลังงานบวก"] },
      { part: "ตอนที่ 2 / 3", title: "งานฝีมืออันเชี่ยวชาญ", description: ["ทุกการออกแบบถูกสร้างด้วยมืออย่างพิถีพิถันโดยช่างฝีมือผู้เชี่ยวชาญ", "เราผสมผสานโลหะวิทยาโบราณกับความแม่นยำสมัยใหม่"] },
      { part: "ตอนที่ 3 / 3", title: "วิสัยทัศน์ระดับโลก", description: ["ก่อตั้งในเวียดนาม เราขยายตัวเพื่อนำภูมิปัญญาตะวันออกสู่โลกสมัยใหม่", "พันธกิจของเราคือการแบ่งปันความงามอันเหนือกาลเวลา"] },
    ]},
    videoSection: { years: "ปีแห่งงานฝีมือ", highlight: "จิตวิญญาณและมรดก", desc: "ผลงานทุกชิ้นของ Vien Chi Bao ถูกหลอมจากชั่วโมงการฝึกฝนนับพัน ชุ่มเปี้ยมด้วยจิตวิญญาณโชคุนิน — การแสวงหาความสมบูรณ์แบบอย่างไม่หยุดยั้ง" },
    stats: { years: "ปีประสบการณ์", pieces: "ผลงานชิ้นเอก", languages: "ภาษาที่รองรับ", handmade: "งานทำมือแท้" },
    featuredProducts: { heading: "คอลเลกชันซิกเนเจอร์" },
    products: {
      silver: { label: "เงิน S925", title: "กำไลพี่สิว", desc: "ทำจากเงิน S925 บริสุทธิ์ มอบพลังงานปกป้องและความเจริญรุ่งเรือง" },
      gold: { label: "ทอง 18K", title: "แหวนทองแกะสลัก", desc: "หล่อจากทอง 18K บริสุทธิ์ รายละเอียดแกะสลักด้วยมืออย่างประณีต" },
      gemstone: { label: "อัญมณี", title: "อัญมณีธรรมชาติ", desc: "คัดสรรจากธรรมชาติ อัญมณีแต่ละชิ้นมีพลังงานเฉพาะตัว" },
    },
    spirit: { label: "ปรัชญา", title: "จิตวิญญาณ", highlight: "โชคุนิน", p1: 'โชคุนิน — ภาษาญี่ปุ่นแปลว่า "ช่างฝีมือ" — ไม่ใช่แค่อาชีพ แต่เป็นปรัชญาชีวิต: อุทิศจิตใจทั้งหมดให้กับทุกผลงาน', p2: "ที่ Vien Chi Bao จิตวิญญาณนี้ถูก HuyK นำกลับมาจากญี่ปุ่นและส่งต่อให้สมาชิกทุกคน", quote: '"ไม่มีผลงานใดสมบูรณ์แบบ แต่ต้องปฏิบัติราวกับว่าทุกชิ้นเป็นผลงานชิ้นเอกสุดท้ายในชีวิต"', quoteRole: "ผู้ก่อตั้ง & ช่างฝีมือบรมครู" },
    teamPreview: { heading: "มือที่สร้างปาฏิหาริย์", button: "ดูทีมงานทั้งหมด" },
    values: { heading: "ค่านิยมหลักของเรา", items: [{ title: "ความซื่อสัตย์", desc: "วัสดุที่ผ่านการรับรองและความโปร่งใสสมบูรณ์" }, { title: "ความปลอดภัย", desc: "โลหะพรีเมียมที่ไม่ก่อให้เกิดอาการแพ้" }, { title: "ศิลปะ", desc: "จิตวิญญาณที่ถ่ายทอดด้วยมือในทุกรายละเอียด" }] },
    cta: { heading: "นำเครื่องรางกลับบ้าน", subheading: "ค้นพบเครื่องประดับที่สอดคล้องกับพลังงานของคุณ", button: "จองการปรึกษาส่วนตัว" },
    timeline: {
      label: "การเดินทางของเรา",
      title: "เรื่องราวจนถึงตอนนี้",
      items: [
        { year: "2014", title: "จุดเริ่มต้น", desc: "HuyK ก่อตั้งโรงงานช่างฝีมือแห่งแรกในฮานอย ด้วยความหลงใหลในงานทองเงิน" },
        { year: "2018", title: "การขยายตัว", desc: "เปิดตัวสายเครื่องประดับฮวงจุ้ยและจิตวิญญาณ ให้บริการลูกค้าทั่วเวียดนาม" },
        { year: "2022", title: "สู่สากล", desc: "เปิดตัวบริการหลายภาษาสำหรับลูกค้าชาวญี่ปุ่นและนานาชาติ" },
        { year: "2024", title: "Vien Chi Bao Global", desc: "Vien Chi Bao Global LLC ก่อตั้งอย่างเป็นทางการ — นำงานฝีมือเวียดนามสู่โลก" },
      ],
    },
    trust: { cert: "รับรองคุณภาพ", handmade: "100% งานทำมือ", material: "วัสดุที่ผ่านการรับรอง", warranty: "รับประกัน 10 ปี" },
    contact: { label: "ติดต่อ", title: "มาเยี่ยมชมเรา", desc: "เราพร้อมให้คำปรึกษาและแบ่งปันเรื่องราวเบื้องหลังทุกผลงาน", showroomLabel: "โชว์รูม", hqLabel: "สำนักงานใหญ่", phoneLabel: "สายด่วน", emailLabel: "อีเมล", hoursLabel: "ไลฟ์สตรีม", hoursValue: "ทุกวัน 10:30–13:30 (TikTok)", channelsLabel: "ช่องทางการซื้อ" },
    footer: { tagline: "เครื่องประดับทำมือระดับสูง อัดแน่นด้วยจิตวิญญาณและอัตลักษณ์เวียดนาม", contactTitle: "ข้อมูลการติดต่อ", companyLabel: "บริษัท", addressLabel: "ที่อยู่", emailLabel: "อีเมล", navTitle: "สำรวจ", navLinks: [{ label: "หน้าแรก", href: "/" }, { label: "เกี่ยวกับเรา", href: "/about" }, { label: "บริการ", href: "/products" }, { label: "ทีมงาน", href: "/team" }] },
    about: { heroLabel: "ผู้บุกเบิกงานทองเงิน", heroTitle: "ที่ซึ่งศรัทธาพบกับ", heroTitleHighlight: "งานฝีมือชั้นเลิศ", heroDesc: "Vien Chi Bao เป็นผู้บุกเบิกในการจัดหาของขวัญ เครื่องประดับ และสิ่งของที่ทำจากทองและเงินในเวียดนาม โดยยึดหลักคุณค่าทางศาสนาและฮวงจุ้ย", stat1: "ปีประสบการณ์", stat2: "สายผลิตภัณฑ์", stat3: "งานทำมือ", pioneerlabel: "เกี่ยวกับเรา", pioneerTitle: "มากกว่าเครื่องประดับ — สัญลักษณ์แห่งศรัทธา", pioneerP1: "Vien Chi Bao นำหน้าในการจัดหาของขวัญพรีเมียม เครื่องประดับ และของทำจากทองเงินในเวียดนาม ด้วยแนวทางทางจิตวิญญาณและฮวงจุ้ย ผลิตภัณฑ์มุ่งเน้นที่ความหมายและสัญลักษณ์", pioneerP2: "ผลิตภัณฑ์ของ Vien Chi Bao ไม่ใช่แค่เครื่องประดับธรรมดา แต่แต่ละชิ้นสื่อถึงศรัทธา ความเคารพ พรสวรรค์ และความหลงใหลในสัญลักษณ์ที่เป็นตัวแทน", tag1: "ฮวงจุ้ย", tag2: "ศาสนา", tag3: "งานฝีมือชั้นเลิศ", imageBadge: "ทำมือในเวียดนาม", productLinesLabel: "คอลเลกชันของเรา", productLinesTitle: "สายผลิตภัณฑ์", productLinesDesc: "แต่ละสายผลิตภัณฑ์ออกแบบด้วยความหมายลึกซึ้ง แทนค่านิยมและวัตถุประสงค์ที่แตกต่างกันสำหรับผู้ครอบครอง", productLines: [{ title: "ของขวัญพรีเมียมทองเงิน", desc: "ชุดของขวัญพิเศษที่ทำจากทองและเงิน เหมาะสำหรับโอกาสพิเศษ สื่อถึงความเคารพและพร" }, { title: "เครื่องประดับเงินฮวงจุ้ยไทย", desc: "เครื่องประดับเงินที่ได้รับแรงบันดาลใจจากหลักการฮวงจุ้ย นำโชค การคุ้มครอง และพลังงานบวก" }, { title: "ทองฮวงจุ้ย", desc: "ชิ้นทองบริสุทธิ์ที่มีความหมายฮวงจุ้ย เป็นสัญลักษณ์ของความเจริญรุ่งเรืองและการคุ้มครองทางจิตวิญญาณ" }, { title: "สินค้าแฮนด์เมดพรีเมียม", desc: "ชิ้นงานทำมือเฉพาะจากทอง เงิน และอัญมณี: นาฬิกาเงิน Zippo แกะสลัก ปากกาเงิน และอื่นๆ" }], meaningLabel: "วัตถุประสงค์ของเรา", meaningQuote: "แต่ละผลิตภัณฑ์ไม่ใช่แค่เครื่องประดับ — แต่เป็นภาชนะแห่งศรัทธา ความเคารพ พร และความหลงใหล", meaningDesc: "Vien Chi Bao กลายเป็นตัวเลือกที่เชื่อถือได้สำหรับลูกค้าที่ต้องการของขวัญพรีเมียมหรือเครื่องประดับทองเงินที่มีคุณค่าทางวัฒนธรรมและจิตวิญญาณ", missionLabel: "ช่างฝีมือ HuyK", missionTitle: "พันธกิจของเรา", missionP1: "HuyK เป็นช่างทองบรมครูที่มีประสบการณ์มากกว่าทศวรรษ", missionP2: 'สืบทอดจิตวิญญาณ "โชคุนิน" จากบรมครูชาวญี่ปุ่น', philosophyLabel: "ปรัชญาของเรา", philosophyTitle: "เสาหลักของงานฝีมือบรมครู", pillars: [{ title: "ความซื่อสัตย์", desc: "ความโปร่งใสเกี่ยวกับคุณภาพและน้ำหนักของทองและเงิน" }, { title: "ความปลอดภัย", desc: "วัสดุปราศจากนิกเกิล ปลอดภัยสำหรับทุกสภาพผิว" }, { title: "ศิลปะ", desc: "แต่ละชิ้นเป็นผลงานชิ้นเอกทำมือ" }, { title: "จิตวิญญาณ", desc: "ใส่จิตวิญญาณและพลังงานบวกลงในทุกการออกแบบ" }], footer: "© 2026 VIEN CHI BAO GLOBAL LLC. การเดินทางของช่างฝีมือ" },
    team: { heroLabel: "ความเป็นเลิศทางงานฝีมือ", heroTitle: "จิตวิญญาณเบื้องหลัง", heroTitleHighlight: "ทุกการสร้างสรรค์", gridLabel: "มือบรมครู", gridTitle: "จิตวิญญาณเบื้องหลังทุกการสร้างสรรค์", seeMore: "ดูเพิ่มเติม", expertiseLabel: "ด้านความเชี่ยวชาญ", footer: "© 2026 VIEN CHI BAO GLOBAL LLC. คลังเก็บของช่างฝีมือ", members: [
      { name: "Huy K", position: "ผู้ก่อตั้ง & ช่างฝีมือบรมครู", bio: "ช่างทองที่มีประสบการณ์มากกว่า 10 ปี", expertise: ["งานทอง", "การแปรรูปอัญมณี"] },
      { name: "Linh Thi", position: "ผู้อำนวยการฝ่ายออกแบบ", bio: "ด้วยความละเอียดอ่อนทางสุนทรียศาสตร์", expertise: ["การออกแบบเครื่องประดับ", "การกำกับสร้างสรรค์"] },
      { name: "Thanh Minh", position: "ช่างฝีมือซีเนียร์", bio: "เชี่ยวชาญการแปรรูปความแม่นยำสูง", expertise: ["การฝังหิน", "การตกแต่ง"] },
      { name: "Quoc Anh", position: "ช่างฝีมือซีเนียร์", bio: "บรมครูด้านการแกะสลักอันประณีต", expertise: ["การฝังหิน", "การตกแต่ง"] },
      { name: "Minh Tu", position: "ช่างฝีมือซีเนียร์", bio: "ผู้เชี่ยวชาญในการบูรณะชิ้นงานมรดก", expertise: ["การฝังหิน", "การตกแต่ง"] },
      { name: "Hoang Nam", position: "ช่างฝีมือซีเนียร์", bio: "มุ่งเน้นความบริสุทธิ์ของพลังงานอัญมณี", expertise: ["การฝังหิน", "การตกแต่ง"] },
    ]},
    productPage: { heroLabel: "โลจิสติกส์ & การจัดส่งทั่วโลก", heroTitle: "นโยบาย", heroTitleHighlight: "การจัดส่ง", intro: '"ทีมของเราให้คำมั่นว่าจะจัดส่งชิ้นงานของคุณอย่างรวดเร็วและปลอดภัย"', deliveryLabel: "การจัดส่ง", deliveryTitle: "จัดส่งฟรี", deliveryDesc: "เรายินดีให้บริการจัดส่งฟรีสำหรับทุกคำสั่งซื้อ", timelineLabel: "ระยะเวลา", timelineTitle: "การผลิต & การจัดการ", timelineP1: "เวลาดำเนินการโดยประมาณ:", timelineHighlight: "1 ถึง 3 สัปดาห์", timelineP2: "สามารถยกเลิกได้ก่อนเริ่มกระบวนการผลิตขั้นสุดท้าย", securityLabel: "ความปลอดภัย", securityTitle: "การติดตามคำสั่งซื้อ", securityP1: "เมื่อจัดส่งแล้ว คุณจะได้รับหมายเลขติดตามทางอีเมล", securityList: ["ตรวจสอบตู้ไปรษณีย์ที่ปลอดภัย", "ยืนยันกับเพื่อนบ้าน", "ติดต่อผู้ส่งสินค้าในพื้นที่"] },
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
  const [locale, setLocaleState] = useState<string>('en');
  const [ready, setReady] = useState(false);

  const t = (path: string): any => {
    const keys = path.split('.');
    return keys.reduce((obj, key) => (obj ? obj[key] : undefined), translations[locale] as any);
  };

  const setLocale = (lang: string) => {
    if (!translations[lang]) return;
    setLocaleState(lang);
    document.documentElement.lang = lang;
  };

  useEffect(() => {
    const detectIP = async () => {
      try {
        const res = await fetch('https://www.cloudflare.com/cdn-cgi/trace');
        const text = await res.text();
        const data: Record<string, string> = {};
        text.split('\n').forEach(line => {
          const [k, v] = line.split('=');
          if (k) data[k.trim()] = (v || '').trim();
        });
        const lang = COUNTRY_TO_LANG[data.loc] || 'en';
        setLocale(lang);
      } catch {
        setLocale('en');
      }
      setReady(true);
    };
    detectIP();
  }, []);

  if (!ready) return null;

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
