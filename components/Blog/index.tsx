"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const Blog = async () => {
  return (
    
    <section className="w-full py-24 bg-white relative">
      <div className="mx-auto max-w-6xl px-4 text-center">

        {/* Heading */}
        <h2 className="font-literata text-[42px] leading-[56px] text-black mb-16">
          We engineer solutions that <br />
          turn ideas into <br />
          <span className="text-[#E65A3A]">impactful products.</span>
        </h2>

        {/* Blog Slider */}
        <div className="overflow-visible">
          <Swiper
            modules={[Pagination]}
            spaceBetween={24}
            pagination={{ clickable: true }}
            breakpoints={{
              0: { slidesPerView: 1.15 },
              640: { slidesPerView: 1.5 },
              768: { slidesPerView: 2.2 },
              1024: { slidesPerView: 3.2 },
              1280: { slidesPerView: 3.5},
            }}
            className="pb-12"
          >

            {/* Slide 1 */}
            <SwiperSlide>
              <div className="relative rounded-xl overflow-hidden h-[340px]">
                <img
                  src="/images/blog-1.png"
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-left">
                  <h3 className="text-white font-inter text-[20px] font-medium mb-3">
                    The Importance of Patents
                  </h3>
                  <button className="bg-white text-black rounded-xl px-4 py-2 text-[14px] font-inter inline-flex items-center gap-1">
                    Read Article <span>›</span>
                  </button>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 2 (Active Border Blue) */}
            <SwiperSlide>
              <div className="relative rounded-xl overflow-hidden h-[340px] border-4 border-blue-400">
                <img
                  src="/images/blog-2.png"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-left">
                  <h3 className="text-white font-inter text-[20px] font-medium mb-3">
                    From Concept to Patent
                  </h3>
                  <button className="bg-white text-black rounded-xl px-4 py-2 text-[14px] font-inter inline-flex items-center gap-1">
                    Read Article <span>›</span>
                  </button>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 3 */}
            <SwiperSlide>
              <div className="relative rounded-xl overflow-hidden h-[340px]">
                <img
                  src="/images/blog-3.png"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-left">
                  <h3 className="text-white font-inter text-[20px] font-medium mb-3">
                    Building a Collaborative Engineering Team
                  </h3>
                  <button className="bg-white text-black rounded-xl px-4 py-2 text-[14px] font-inter inline-flex items-center gap-1">
                    Read Article <span>›</span>
                  </button>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 4 */}
            <SwiperSlide>
              <div className="relative rounded-xl overflow-hidden h-[340px]">
                <img
                  src="/images/blog-4.png"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-left">
                  <h3 className="text-white font-inter text-[20px] font-medium mb-3">
                    How We Foster Innovation
                  </h3>
                  <button className="bg-white text-black rounded-xl px-4 py-2 text-[14px] font-inter inline-flex items-center gap-1">
                    Read Article <span>›</span>
                  </button>
                </div>
              </div>
            </SwiperSlide>

          </Swiper>
        </div>

        {/* Our Blog Button */}
        <div className="mt-8">
          <button className="bg-black text-white px-6 py-3 rounded-xl text-[15px] inline-flex items-center gap-2">
            Our Blog <span>›</span>
          </button>
        </div>

      </div>
    </section>
  );
};

export default Blog;
