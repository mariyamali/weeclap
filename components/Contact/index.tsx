"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const Contact = () => {
  /**
   * Source: https://www.joshwcomeau.com/react/the-perils-of-rehydration/
   * Reason: To fix rehydration error
   */
  const [hasMounted, setHasMounted] = React.useState(false);
  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  return (
    <>
      {/* <!-- ===== Contact Start ===== --> */}
      <section className="">
      <div className="mx-auto max-w-6xl px-4 py-24">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          {/* LEFT SIDE */}
          <div>
            {/* Heading */}
            <h2 className="font-inter font-bold text-[42px] leading-[48px] text-black mb-4">
              LET’S CO-CREATE <br />
              SOMETHING <br />
              <span className="text-[#E65A3A]">AMAZING</span>
            </h2>

            {/* Paragraph */}
            <p className="font-inter text-[15px] leading-[26px] text-black/80 max-w-[360px]">
              Got a project, idea, or question? We’re ready to help turn your vision into reality.
              Fill out the form below, and a dedicated member of our team will get back to you
              quickly, so you can start building the future today.
            </p>
          </div>

          {/* RIGHT SIDE — FORM */}
          <div className="bg-[#F4F2E7] rounded-xl p-8">

            {/* Row 1 */}
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <label className="font-inter text-[14px] text-black block mb-1">
                  First Name *
                </label>
                <input
                  className="w-full bg-transparent border-b border-black/60 pb-1 focus:outline-none"
                />
              </div>

              <div>
                <label className="font-inter text-[14px] text-black block mb-1">
                  Last Name *
                </label>
                <input
                  className="w-full bg-transparent border-b border-black/60 pb-1 focus:outline-none"
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <label className="font-inter text-[14px] text-black block mb-1">
                  Business E-mail *
                </label>
                <input
                  className="w-full bg-transparent border-b border-black/60 pb-1 focus:outline-none"
                />
              </div>

              <div>
                <label className="font-inter text-[14px] text-black block mb-1">
                  Phone Number *
                </label>
                <input
                  className="w-full bg-transparent border-b border-black/60 pb-1 focus:outline-none"
                />
              </div>
            </div>

            {/* Message */}
            <div className="mb-6">
              <label className="font-inter text-[14px] text-black block mb-2">
                Message *
              </label>
              <textarea
                className="w-full bg-white rounded-xl p-4 h-[200px] focus:outline-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button className="bg-[#D95F38] text-white px-6 py-3 rounded-xl text-[15px] font-inter">
              Submit
            </button>

          </div>

        </div>
      </div>
    </section>
      {/* <!-- ===== Contact End ===== --> */}
    </>
  );
};

export default Contact;
