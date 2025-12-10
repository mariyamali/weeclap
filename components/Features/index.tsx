"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const Feature = () => {
  return (
    <>
      {/* <!-- ===== Features Start ===== --> */}
  <section className="w-full bg-white pt-20 pb-16">
      <div className="mx-auto max-w-6xl px-4">

        {/* Heading */}
        <h2 className="font-inter font-semibold text-[20px] text-black mb-6">
          Use Cases
        </h2>

        {/* DESKTOP (STATIC GRID) */}
        <div className="hidden md:grid grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <div>
            <img
              src="/images/usecase-1.jpg"
              className="w-full h-[300px] object-cover rounded-xl"
            />
            <h3 className="font-inter font-medium text-[16px] text-black mt-3">
              Robotic Arm
            </h3>
          </div>

          {/* Card 2 */}
          <div>
            <img
              src="/images/usecase-2.jpg"
              className="w-full h-[300px] object-cover rounded-xl"
            />
            <h3 className="font-inter font-medium text-[16px] text-black mt-3">
              Mechanical Chair
            </h3>
          </div>

          {/* Card 3 (tall portrait) */}
          <div>
            <img
              src="/images/usecase-3.jpg"
              className="w-full h-[300px] object-cover rounded-xl"
            />
            <h3 className="font-inter font-medium text-[16px] text-black mt-3">
              Automated
            </h3>
          </div>
        </div>

        {/* MOBILE (SLIDER) */}
        <div className="md:hidden">
          <Swiper spaceBetween={20} slidesPerView={1.1}>
            
            <SwiperSlide>
              <div>
                <img
                  src="/images/usecase-1.jpg"
                  className="w-full h-[260px] object-cover rounded-xl"
                />
                <h3 className="font-inter font-medium text-[16px] text-black mt-3">
                  Robotic Arm
                </h3>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div>
                <img
                  src="/images/usecase-2.jpg"
                  className="w-full h-[260px] object-cover rounded-xl"
                />
                <h3 className="font-inter font-medium text-[16px] text-black mt-3">
                  Mechanical Chair
                </h3>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div>
                <img
                  src="/images/usecase-3.jpg"
                  className="w-full h-[260px] object-cover rounded-xl"
                />
                <h3 className="font-inter font-medium text-[16px] text-black mt-3">
                  Automated
                </h3>
              </div>
            </SwiperSlide>

          </Swiper>
        </div>

        {/* View All button */}
        <div className="mt-8">
          <button className="rounded-xl bg-black text-white font-inter text-[15px] px-6 py-3 inline-flex items-center gap-2">
            View All <span className="text-[18px]">›</span>
          </button>
        </div>

      </div>
    </section>
      {/* <!-- ===== Features End ===== --> */}
    </>
  );
};

export default Feature;
