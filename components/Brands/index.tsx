"use client";
import React from "react";
import SingleBrand from "./SingleBrand";
import brandData from "./brandData";

const Brands = () => {
  return (
    <>
      {/* <!-- ===== Clients Start ===== --> */}
    <section className="w-full bg-white">
      <div className="mx-auto max-w-6xl px-4">

        {/* Masonry grid */}
        <div className="columns-1 md:columns-3 gap-4 space-y-4">

          {/* LEFT COLUMN BLOCKS */}

          {/* Black Logo */}
          <div className="break-inside-avoid bg-black rounded-xl w-full h-[260px] flex items-center justify-center">
            <img src="/images/brand-1.png" className="h-20" />
          </div>

          {/* Skills Block */}
          <div className="break-inside-avoid bg-black rounded-xl w-full h-[420px] p-5 flex flex-wrap content-start gap-3">
            {[
              "Mechanical Engineering",
              "IoT",
              "AI Integration",
              "Product Design",
              "Prototyping",
              "UX",
              "Market Research",
              "Patent & IP Advisory",
            ].map((skill, i) => (
              <span
                key={i}
                className={`text-[13px] px-4 py-1 rounded-full font-inter ${
                  skill === "AI Integration"
                    ? "bg-[#D95F38] text-white"
                    : "bg-white text-black"
                }`}
              >
                {skill}
              </span>
            ))}
          </div>

          {/* CENTER COLUMN BLOCKS */}

          {/* Orange R */}
          <div className="break-inside-avoid bg-[#D95F38] rounded-xl w-full h-[150px] flex items-center justify-center">
            <img src="/images/brand-2.png" className="h-16" />
          </div>

          {/* Weeclap Logo */}
          <div className="break-inside-avoid bg-black rounded-xl w-full h-[200px] flex items-center justify-center">
            <img src="/images/brand-3.png" className="h-14" />
          </div>

          {/* Orange Circles */}
          <div className="break-inside-avoid bg-[#D95F38] rounded-xl w-full h-[260px] relative p-4 flex items-end">
            <div className="flex gap-3 flex-wrap">
              <div className="bg-[#F4F2E7] w-16 h-16 rounded-full flex items-center justify-center text-[11px]">Creativity</div>
              <div className="bg-[#F4F2E7] w-16 h-16 rounded-full flex items-center justify-center text-[11px]">Transparency</div>
              <div className="bg-[#F4F2E7] w-24 h-24 rounded-full flex items-center justify-center text-[11px]">Experience</div>
              <div className="bg-[#F4F2E7] w-16 h-16 rounded-full flex items-center justify-center text-[11px]">Quality</div>
              <div className="bg-[#F4F2E7] w-14 h-14 rounded-full flex items-center justify-center text-[11px]">Passion</div>
            </div>
          </div>

          {/* RIGHT COLUMN BLOCKS */}

          {/* Black Text Block */}
          <div className="break-inside-avoid bg-black rounded-xl w-full h-[150px] p-6 flex items-center">
            <h3 className="font-inter text-white text-[22px] leading-[28px]">
              Where <br /> Innovation <br /> Meets Intelligence|
            </h3>
          </div>

          {/* Beige Block */}
          <div className="break-inside-avoid bg-[#F4F2E7] rounded-xl w-full h-[420px] p-6 flex items-start">
            <h3 className="font-inter text-black text-[26px] leading-[34px]">
              Your <br />
              creation, <br />
              confidently <br />
              <span className="text-[#6FDFA5]">covered|</span>
            </h3>
          </div>

        </div>
      </div>
    </section>
      {/* <!-- ===== Clients End ===== --> */}
    </>
  );
};

export default Brands;
