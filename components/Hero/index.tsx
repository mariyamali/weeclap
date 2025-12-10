"use client";
import Image from "next/image";
import { useState } from "react";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="w-full bg-white pt-28 pb-20 text-center">

  {/* LARGE HEADINGS */}
  <div className="mx-auto max-w-6xl px-4">
    <h1 className="font-literata font-light text-primary text-[60px] leading-[70px] md:text-[110px] md:leading-[120px]">
      Creative
    </h1>

    <h1 className="font-literata font-light text-black text-[60px] leading-[70px] md:text-[110px] md:leading-[120px]">
      Engineering
    </h1>

    <h1 className="font-literata font-light text-primary text-[60px] leading-[70px] md:text-[110px] md:leading-[120px]">
      Production-Ready
    </h1>

    <h1 className="font-literata font-light text-black text-[60px] leading-[70px] md:text-[110px] md:leading-[120px]">
      Results
    </h1>
  </div>

  {/* DIVIDER */}
  <div className="w-full border-t border-[#e5e5e5] mt-20 mb-10"></div>

  {/* PARAGRAPH */}
  <p className="font-inter text-[16px] leading-[28px] text-black/70 max-w-2xl mx-auto px-4">
    We help innovators, entrepreneurs, SMEs, and brands transform ambitious ideas 
    into reliable, compliant, and production-ready products. We combine mechanical 
    engineering, electronics/IoT, embedded AI, and product design.
  </p>

  {/* BUTTON */}
  <div className="mt-10">
    <a
      href="#contact"
      className="inline-flex items-center gap-2 rounded-xl bg-black px-8 py-3 text-white font-inter text-[16px] font-medium shadow-[0_10px_25px_rgba(0,0,0,0.2)] hover:bg-black/90 transition"
    >
      Start Your Project
      <span className="text-[20px]">›</span>
    </a>
  </div>
</section>


    </>
  );
};

export default Hero;
