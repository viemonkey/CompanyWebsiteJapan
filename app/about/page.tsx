'use client';
import { Card } from "@heroui/card";
import { Sparkles, ShieldCheck, Gem, Compass } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-[#1a1a00] min-h-screen text-stone-200 selection:bg-amber-500/20 font-sans overflow-hidden">
      
      {/* 1. HERO SECTION - Đôi Bàn Tay Tạo Nên Tâm Hồn */}
      <section className="relative pt-40 pb-24 px-4 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/workshop-bg.jpg')] bg-cover bg-center opacity-10 grayscale"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a00] via-transparent to-[#1a1a00]"></div>
        
        <div className="relative z-10 container mx-auto px-6 max-w-5xl text-center">
          <div className="mb-6">
            <span className="text-[10px] tracking-[0.5em] text-amber-600/60 uppercase font-medium italic">
              Nghệ nhân Vien Chi Bao
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif italic mb-6 text-stone-100 leading-tight tracking-wide">
            Đôi Bàn Tay <br /> 
            <span className="text-stone-100">Tạo Nên Tâm Hồn</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-stone-500 text-[13px] tracking-widest uppercase leading-relaxed font-light">
            Mỗi tác phẩm là một câu chuyện, gửi gắm niềm tin và những giá trị tâm linh sâu sắc 
            đến khách hàng yêu quý của chúng tôi.
          </p>
        </div>
      </section>

      {/* 2. SPLIT CONTENT SECTION - Sứ mệnh của chúng tôi */}
      <section className="relative py-24 border-t border-white/5">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Cột trái: Nội dung chữ */}
            <div className="space-y-10">
              <div className="space-y-4">
                <span className="text-[10px] tracking-[0.4em] text-amber-600/50 uppercase font-bold">Nghệ nhân HuyK</span>
                <h2 className="text-4xl md:text-5xl font-serif text-stone-100 italic">Sứ mệnh của chúng tôi</h2>
                <div className="h-[2px] w-16 bg-amber-600/40"></div>
              </div>

              <div className="space-y-6 text-stone-400 text-base leading-relaxed font-light italic text-justify">
                <p>
                  HuyK là một nghệ nhân kim hoàn với hơn 10 năm kinh nghiệm, được thúc đẩy bởi niềm đam mê sâu sắc đối với trang sức thủ công. Hành trình của tôi bắt đầu từ sự ám ảnh với những chi tiết nhỏ nhất.
                </p>
                <p>
                  Được đào tạo bởi các bậc thầy Nhật Bản, tôi thừa hưởng tinh thần "Shokunin" — sự theo đuổi không ngừng sự hoàn hảo và lòng tận tụy bền bỉ. Triết lý này đã trở thành nền tảng cho xưởng chế tác của tôi tại Việt Nam.
                </p>
              </div>
            </div>

            {/* Cột phải: Ảnh đặc tả tay nghề */}
            <div className="relative group pt-10 lg:pt-0">
              <div className="absolute -inset-4 border border-amber-500/10 rounded-sm"></div>
              <div className="relative aspect-square overflow-hidden border border-amber-900/20">
                <img 
                  src="https://vienchibao.com/wp-content/uploads/2025/02/Vong-tay-ty-huu-4.png" 
                  alt="Craftsmanship" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 text-amber-500/20 font-serif text-8xl select-none">“</div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. MISSION CARDS - Đồng bộ với hình ảnh bên phải của bạn */}
      <section className="relative py-32 bg-black/30 backdrop-blur-sm border-y border-white/5">
        <div className="container mx-auto px-6 max-w-5xl grid md:grid-cols-2 gap-20 items-center">
          
          <div className="space-y-4">
             <span className="font-serif italic text-amber-500/60 text-2xl">Triết lý</span>
             <div className="h-[1px] w-full bg-amber-900/20"></div>
          </div>

          <div className="space-y-4">
            {[
              { title: "Chính trực", icon: <ShieldCheck className="w-5 h-5"/>, desc: "Tuyệt đối minh bạch về chất lượng và trọng lượng." },
              { title: "Sự an toàn", icon: <Sparkles className="w-5 h-5"/>, desc: "Sử dụng nguyên liệu sạch, an toàn cho mọi làn da." },
              { title: "Tay nghề", icon: <Gem className="w-5 h-5"/>, desc: "Mỗi tác phẩm là một kiệt tác thủ công tỉ mỉ." },
              { title: "Tâm hồn", icon: <Compass className="w-5 h-5"/>, desc: "Gửi gắm linh hồn và năng lượng tích cực vào từng thiết kế." }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-6 p-6 bg-white/[0.02] border border-white/5 rounded-lg hover:bg-white/[0.04] transition-all duration-500 group">
                <div className="p-3 border border-amber-500/20 rounded-full text-amber-500/70 group-hover:text-amber-500 transition-colors">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-[14px] font-medium text-stone-200 uppercase tracking-widest">{item.title}</h3>
                  <p className="text-[11px] text-stone-500 font-light mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}