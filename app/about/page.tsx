import { Card } from "@heroui/card";

export default function About() {
  return (
    <div className="pt-20 bg-[#1a1a00]">
      {/* Hero Section */}
      <section className="section-padding py-24">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <p className="text-sm tracking-[0.3em] text-amber-500 mb-6 uppercase">Our Story</p>
          <h1 className="font-display text-5xl md:text-6xl font-light text-amber-50 mb-8">
            About Us
          </h1>
          <div className="w-full max-w-[1000px] mx-auto">
            <Card className="bg-transparent border-none shadow-none" style={{ overflow: 'hidden'}}>
              <img src="/images/huyk.jpg" alt="Master Craftsman HuyK" className="w-full mb-8 transition-all duration-700" style={{borderRadius: 20}} />
            </Card>

            <div className="divider-line mb-12 bg-amber-900/30 h-[1px] w-24 mx-auto"></div>
            
            <p className="text-xl text-amber-100/70 leading-relaxed font-light text-justify w-full">
              HuyK is a master goldsmith with over 10 years of experience, driven by a profound passion for handcrafted jewelry. My journey began with an obsession for fine details—where metal, gemstones, and emotions converge to create living art.
              <br /><br />
              Having had the privilege to study under Japanese masters, I inherited the spirit of **"Shokunin"** (Artisan)—a relentless pursuit of perfection and steadfast dedication. This philosophy became the foundation of my workshop in Vietnam, ensuring every piece is born from the hands, heart, and pride of a craftsman. My dream is to showcase the beauty of Vietnamese hand-forged jewelry to the world.
              <br /><br />
              To me, jewelry is not merely an ornament; it is a personal narrative. It is an emotional journey between the creator and the owner—each ring, necklace, and bracelet carries its own soul, reflecting memories, love, and aspirations.
              <br /><br />
              Today, my creations under the name HuyK, through VIENCHIBAO Global, are reaching international horizons, fulfilling the vision of spreading handcrafted excellence globally.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding py-32 bg-gradient-to-b from-[#1a1a00] to-[#141400] border-t border-amber-900/10">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div> 
                <p className="text-sm tracking-[0.3em] text-amber-500 mb-4 uppercase">Philosophy</p>
                <h2 className="font-display text-4xl font-light text-amber-50 mb-6">
                  Our Mission
                </h2>
                <div className="divider-line mx-0 mb-8 bg-amber-900/30 h-[1px] w-16"></div>
              </div>
              <p className="text-amber-100/60 leading-relaxed font-light">
                Built upon the Japanese "Artisan Spirit," HuyK fuses sophisticated technique with raw passion to create bespoke jewelry that gives form to each client's unique story. We value the meticulous attention to detail and the profound connection between the maker and the wearer.
              </p>
              <p className="text-amber-100/60 leading-relaxed font-light">
                Our mission is to weave human narratives through the medium of jewelry, sharing the exquisite beauty of skilled Vietnamese craftsmanship with the global community.
              </p>
            </div>

            <div className="relative">
              <div className="p-12 space-y-8 bg-amber-950/10 border border-amber-900/20 rounded-sm shadow-2xl backdrop-blur-sm">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-amber-600 rounded-full shadow-[0_0_8px_rgba(245,158,11,0.6)]"></div>
                    <h3 className="font-display text-xl font-light text-amber-200">Integrity</h3>
                  </div>
                  <p className="text-amber-100/50 leading-relaxed font-light text-sm pl-6">
                    From material selection to the final polish, we accept no compromises. Absolute sincerity in our process is our primary commandment.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-amber-600 rounded-full shadow-[0_0_8px_rgba(245,158,11,0.6)]"></div>
                    <h3 className="font-display text-xl font-light text-amber-200">Refinement</h3>
                  </div>
                  <p className="text-amber-100/50 leading-relaxed font-light text-sm pl-6">
                    As "Shokunin," we constantly pursue perfection, refining traditional techniques and modern sensibilities to create one-of-a-kind masterpieces with a soul.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-amber-600 rounded-full shadow-[0_0_8px_rgba(245,158,11,0.6)]"></div>
                    <h3 className="font-display text-xl font-light text-amber-200">Co-Creation</h3>
                  </div>
                  <p className="text-amber-100/50 leading-relaxed font-light text-sm pl-6">
                    Jewelry is a mirror reflecting your memories, love, and dreams. Through dialogue, we craft the ultimate narrative together.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding py-32 border-t border-amber-900/10">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-20">
            <p className="text-sm tracking-[0.3em] text-amber-500 mb-4 uppercase">Principles</p>
            <h2 className="font-display text-4xl font-light text-amber-50 mb-6">
              Core Values
            </h2>
            <div className="divider-line bg-amber-900/30 h-[1px] w-16 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-12 text-amber-50">
            <div className="text-center space-y-6">
              <div className="w-24 h-24 mx-auto border border-amber-500/20 rounded-sm flex items-center justify-center">
                <span className="font-display text-3xl text-amber-500/80 italic">Simplicity</span>
              </div>
              <h3 className="font-display text-2xl font-light tracking-wide">Refined Simplicity</h3>
              <p className="text-amber-100/50 leading-relaxed font-light text-sm">
                Beauty resides in the essence. To maximize the character of our materials, we strip away the unnecessary, pursuing the purest form of aesthetic grace.
              </p>
            </div>

            <div className="text-center space-y-6">
              <div className="w-24 h-24 mx-auto border border-amber-500/20 rounded-sm flex items-center justify-center">
                <span className="font-display text-3xl text-amber-500/80 italic">Harmony</span>
              </div>
              <h3 className="font-display text-2xl font-light tracking-wide">Tradition & Innovation</h3>
              <p className="text-amber-100/50 leading-relaxed font-light text-sm">
                Merging the "Artisan Spirit" with contemporary vision. We preserve ancient techniques while creating new value, aiming for a perfect balance.
              </p>
            </div>

            <div className="text-center space-y-6">
              <div className="w-24 h-24 mx-auto border border-amber-500/20 rounded-sm flex items-center justify-center">
                <span className="font-display text-3xl text-amber-500/80 italic">Spirit</span>
              </div>
              <h3 className="font-display text-2xl font-light tracking-wide">Handcrafted Heart</h3>
              <p className="text-amber-100/50 leading-relaxed font-light text-sm">
                We breathe soul into every piece. We aspire to be a partner in giving shape to your most cherished thoughts and memories through sincere craftsmanship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History - Timeline */}
      <section className="section-padding py-32 bg-[#1d1d00] border-t border-amber-900/10">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-20">
            <p className="text-sm tracking-[0.3em] text-amber-500 mb-4 uppercase">Timeline</p>
            <h2 className="font-display text-4xl font-light text-amber-50 mb-6">
              Our Journey
            </h2>
            <div className="divider-line bg-amber-900/30 h-[1px] w-16 mx-auto"></div>
          </div>

          <div className="space-y-16">
            {[
              { year: "2015", title: "The Apprenticeship", desc: "Captivated by Japanese jewelry-making techniques, training began under master artisans to learn the fundamentals of the craft." },
              { year: "2018", title: "Defining the Style", desc: "Establishing a unique identity that merges the 'Artisan Spirit' with Vietnamese traditional aesthetics and modern sensibilities." },
              { year: "2021", title: "HuyK Workshop Founded", desc: "Establishment of our dedicated workshop in Vietnam, beginning our international expansion of bespoke handcrafted jewelry." },
              { year: "Present", title: "Towards the Future", desc: "Continuing to deliver soul-infused creations to clients worldwide through VIENCHIBAO Global." }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-12 items-start group">
                <div className="flex-shrink-0 w-32 text-right">
                  <span className="font-display text-3xl font-light text-amber-500">{item.year}</span>
                </div>
                <div className="flex-1 pt-2 border-l border-amber-900/30 pl-8 group-last:border-transparent">
                  <h3 className="font-display text-xl font-light text-amber-200 mb-3 tracking-wide">{item.title}</h3>
                  <p className="text-amber-100/50 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}