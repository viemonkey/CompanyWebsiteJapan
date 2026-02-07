export default function Products() {
  return (
    <div className="pt-20 bg-[#1a1a00]">
      {/* Hero */}
      <section className="section-padding py-24">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <p className="text-sm tracking-[0.3em] text-amber-500 mb-6 uppercase">Logistics</p>
          <h1 className="font-display text-5xl md:text-6xl font-light text-amber-50 mb-8">
            Shipping Policy
          </h1>
          <div className="divider-line mb-12 bg-amber-900/30 h-[1px] w-24 mx-auto"></div>
          <p className="text-xl text-amber-100/70 leading-relaxed max-w-3xl mx-auto font-light italic">
            Official Policies of VIENCHIBAO – HuyK Jewelry
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding pb-32">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-amber-950/10 border border-amber-900/20 p-12 space-y-12 rounded-sm shadow-2xl backdrop-blur-sm">
            
            {/* Introduction */}
            <div className="space-y-4">
              <p className="text-amber-100/70 leading-relaxed font-light">
                At HuyK, we understand that every piece of jewelry carries profound meaning and sentiment. Therefore, our team is committed to ensuring that your products are delivered swiftly, safely, and in pristine condition.
              </p>
            </div>

            {/* Section 1: Delivery Policy */}
            <div className="space-y-4">
              <h2 className="font-display text-3xl font-light text-amber-200 mb-4">
                Delivery Policy
              </h2>
              <div className="w-16 h-[1px] bg-amber-600/50"></div>
              <p className="text-amber-100/70 leading-relaxed font-light">
                We are pleased to offer complimentary shipping services for all orders.
              </p>
            </div>

            {/* Section 2: Order Confirmation & Processing */}
            <div className="space-y-4">
              <h2 className="font-display text-3xl font-light text-amber-200 mb-4">
                Confirmation & Processing
              </h2>
              <div className="w-16 h-[1px] bg-amber-600/50"></div>
              <div className="space-y-3">
                <p className="text-amber-100/70 leading-relaxed font-light">
                  Once your order is placed, a confirmation email will be sent to you. Following confirmation, the production request will be transmitted to our workshop.
                </p>
                <p className="text-amber-100/70 leading-relaxed font-light">
                  During this stage, cancellations or adjustments are possible before the final crafting process begins.
                </p>
                <p className="text-amber-100/70 leading-relaxed font-light">
                  Estimated processing time: <span className="text-amber-400">1 to 3 weeks</span> (excluding holidays and special circumstances).
                </p>
              </div>
            </div>

            {/* Section 3: Shipping Rates & Delivery Time */}
            <div className="space-y-4">
              <h2 className="font-display text-3xl font-light text-amber-200 mb-4">
                Rates & Delivery Time
              </h2>
              <div className="w-16 h-[1px] bg-amber-600/50"></div>
              <div className="space-y-3">
                <p className="text-amber-100/70 leading-relaxed font-light">
                  Standard shipping is free of charge for all domestic and international orders.
                </p>
                <p className="text-amber-100/70 leading-relaxed font-light italic text-sm">
                  Note: Delivery times may vary depending on local logistics, customs clearance, and regional progress.
                </p>
                <p className="text-amber-100/70 leading-relaxed font-light">
                  In-stock items: Delivered within 1–3 weeks.
                </p>
                <p className="text-amber-100/70 leading-relaxed font-light">
                  Detailed shipping information will be provided via your registered Gmail upon dispatch.
                </p>
              </div>
            </div>

            {/* Section 4: Order Tracking */}
            <div className="space-y-4">
              <h2 className="font-display text-3xl font-light text-amber-200 mb-4">
                Order Tracking
              </h2>
              <div className="w-16 h-[1px] bg-amber-600/50"></div>
              <div className="space-y-3">
                <p className="text-amber-100/70 leading-relaxed font-light">
                  Once shipped, you will receive a tracking number via email to monitor your package's status.
                </p>
                <p className="text-amber-100/70 leading-relaxed font-light">
                  Please ensure your shipping address and contact details are accurate. HuyK cannot be held responsible for failed deliveries due to incorrect information provided by the customer.
                </p>
                <p className="text-amber-200 leading-relaxed font-medium pt-2">
                  If your tracking indicates "Delivered" but you have not received your package, please verify the following:
                </p>
                <ul className="list-none space-y-3 pl-2">
                  <li className="text-amber-100/60 leading-relaxed font-light flex items-start">
                    <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Check with your building management, reception, or secure mailboxes.</span>
                  </li>
                  <li className="text-amber-100/60 leading-relaxed font-light flex items-start">
                    <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Confirm with neighbors or household members who may have accepted the parcel.</span>
                  </li>
                  <li className="text-amber-100/60 leading-relaxed font-light flex items-start">
                    <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Contact the local courier directly to verify the delivery signature and timestamp.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 5: Support Center */}
            <div className="space-y-4 pt-4 border-t border-amber-900/20">
              <h2 className="font-display text-3xl font-light text-amber-200 mb-4">
                Support Center
              </h2>
              <div className="w-16 h-[1px] bg-amber-600/50"></div>
              <div className="space-y-3">
                <p className="text-amber-100/70 leading-relaxed font-light">
                  The HuyK team is always available to assist with any questions regarding logistics and delivery. For support, please reach out to us:
                </p>
                <p className="text-amber-100/70 leading-relaxed font-light">
                  Email: <a href="mailto:ads.vienchibao@gmail.com" className="text-amber-500 hover:text-amber-400 underline transition-colors">ads.vienchibao@gmail.com</a>
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Optional CTA Section */}
      <section className="pb-32">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <div className="p-16 space-y-8 bg-amber-950/10 border border-amber-900/20 rounded-sm">
            <h2 className="font-display text-3xl font-light text-amber-50">
              Need Further Assistance?
            </h2>
            <div className="divider-line bg-amber-900/30 h-[1px] w-16 mx-auto"></div>
            <p className="text-amber-100/50 leading-relaxed font-light">
              Our concierge team is here to help with any shipping inquiries.
            </p>
            <button className="px-12 py-4 bg-amber-600 text-amber-50 text-xs tracking-widest uppercase hover:bg-amber-500 transition-colors rounded-sm shadow-lg shadow-amber-950/50">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}