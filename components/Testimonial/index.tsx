"use client";
import SectionHeader from "../Common/SectionHeader";

import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import { motion } from "framer-motion";
import SingleTestimonial from "./SingleTestimonial";
import { testimonialData } from "./testimonialData";

const Testimonial = () => {
  return (
    <>
      <section className="w-full bg-white py-4">
      <div className="mx-auto max-w-6xl px-4">

        {/* 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          
          {/* COLUMN 1 — About Us */}
          <div>
            <h2 className="font-inter font-semibold text-[18px] text-black mb-6">
              About Us
            </h2>

            <img
              src="/images/about-illustration.jpg"
              alt="About Illustration"
              className="w-full max-w-[260px]"
            />
          </div>

          {/* COLUMN 2 — What We Stand For */}
          <div>
            <h2 className="font-inter font-semibold text-[18px] text-black mb-4">
              What we Stand For
            </h2>

            <p className="font-inter text-[15px] leading-[26px] text-black/80 max-w-[330px]">
              We stand for responsibility, transparency, and creativity. Every project
              is undertaken with a deep commitment to safety, regulatory compliance,
              and sustainable impact, not only for users but also for the environment.
              We believe in working transparently, clearly communicating costs,
              timelines, and technical decisions.
            </p>
          </div>

          {/* COLUMN 3 — What We Stand For */}
          <div>
            <h2 className="font-inter font-semibold text-[18px] text-black mb-4">
              What we Stand For
            </h2>

            <p className="font-inter text-[15px] leading-[26px] text-black/80 max-w-[330px]">
              Our expertise covers mechanical engineering, electronics/IoT, embedded
              AI, and product design. We accompany you through every phase from initial
              scoping discussions to in-depth architectural design—delivering concrete
              results protected by confidentiality agreements.
            </p>
          </div>
        </div>

        {/* BUTTON RIGHT SIDE */}
        <div className="flex justify-end">
          <button className="inline-flex items-center gap-2 bg-black text-white font-inter text-[15px] px-6 py-3 rounded-xl">
            Read More <span className="text-[18px]">›</span>
          </button>
        </div>

      </div>
    </section>
    </>
  );
};

export default Testimonial;
