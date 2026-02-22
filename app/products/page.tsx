'use client';

import React from 'react';
import Link from 'next/link';
import { Truck, Clock, ShieldCheck, Mail, ArrowDown } from 'lucide-react';

export default function ShippingPolicy() {
  return (
    <div className="bg-[#0f0f0f] min-h-screen text-stone-100 selection:bg-amber-500/30 font-sans overflow-x-hidden">
      
      {/* 1. HERO SECTION - Đồng bộ style Home */}
      <section className="relative h-[60vh] flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#0f0f0f] z-10"></div>
          {/* Background mờ ảo tạo độ sâu */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-amber-900/10 blur-[120px] rounded-full"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto space-y-6">
          <div className="animate-fade-in">
            <div className="mb-6 text-amber-500/60 tracking-[0.6em] text-[10px] uppercase font-light">
              Logistics & Global Delivery
            </div>
            <h1 className="text-4xl md:text-[54px] font-serif text-white leading-tight italic font-light tracking-wide">
              Shipping <span className="text-amber-500 not-italic font-normal">Policy</span>
            </h1>
            <div className="w-12 h-[1px] bg-amber-500/30 mx-auto mt-8"></div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-20 animate-bounce">
          <ArrowDown className="w-5 h-5 text-white" />
        </div>
      </section>

      {/* 2. MAIN CONTENT - Chuyển sang Grid Layout cho thoáng */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          
          {/* Introduction - Chữ nhỏ, giãn dòng rộng */}
          <div className="mb-32 text-center max-w-2xl mx-auto">
            <p className="text-[15px] md:text-lg text-stone-400 leading-[2] font-light italic italic-font-serif">
              "At HuyK, we understand that every piece of jewelry carries profound meaning and sentiment. 
              Our team is committed to ensuring your pieces are delivered swiftly, safely, and in pristine condition."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-32">
            
            {/* Section 1: Delivery Policy */}
            <div className="space-y-6 group">
              <div className="flex items-center gap-4 text-amber-500/40 group-hover:text-amber-500 transition-colors">
                <Truck size={20} strokeWidth={1} />
                <span className="text-[9px] tracking-[0.4em] uppercase font-bold">Delivery</span>
              </div>
              <h2 className="text-2xl font-serif text-white italic">Complimentary Shipping</h2>
              <p className="text-[13px] text-stone-500 leading-[1.8] font-light border-l border-amber-500/20 pl-6">
                We are pleased to offer complimentary shipping services for all domestic and international orders.
              </p>
            </div>

            {/* Section 2: Processing */}
            <div className="space-y-6 group">
              <div className="flex items-center gap-4 text-amber-500/40 group-hover:text-amber-500 transition-colors">
                <Clock size={20} strokeWidth={1} />
                <span className="text-[9px] tracking-[0.4em] uppercase font-bold">Timeline</span>
              </div>
              <h2 className="text-2xl font-serif text-white italic">Crafting & Handling</h2>
              <div className="space-y-4 text-[13px] text-stone-500 leading-[1.8] font-light border-l border-amber-500/20 pl-6">
                <p>Estimated processing time: <span className="text-amber-500/80 italic">1 to 3 weeks</span>.</p>
                <p>Cancellations or adjustments are possible before the final crafting process begins.</p>
              </div>
            </div>

            {/* Section 3: Order Tracking */}
            <div className="space-y-6 group lg:col-span-2">
              <div className="flex items-center gap-4 text-amber-500/40 group-hover:text-amber-500 transition-colors">
                <ShieldCheck size={20} strokeWidth={1} />
                <span className="text-[9px] tracking-[0.4em] uppercase font-bold">Security</span>
              </div>
              <h2 className="text-2xl font-serif text-white italic">Order Tracking & Security</h2>
              <div className="grid md:grid-cols-2 gap-12 text-[13px] text-stone-500 leading-[1.8] font-light border-l border-amber-500/20 pl-6">
                <p>Once shipped, you will receive a tracking number via email. Please ensure your shipping address and contact details are accurate.</p>
                <ul className="space-y-2 italic text-[12px]">
                  <li>• Check building management or secure mailboxes.</li>
                  <li>• Confirm with neighbors or household members.</li>
                  <li>• Contact local courier for signature verification.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 1.5s ease-out forwards;
        }
        .italic-font-serif {
          font-family: var(--font-serif), serif;
        }
      `}</style>
    </div>
  );
}