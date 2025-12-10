"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Footer = () => {
  return (
    <>
<footer className="w-full bg-white py-16 border-t border-gray-200">
      <div className="mx-auto max-w-6xl px-4">

        {/* ⭐ CUSTOM GRID WIDTHS — 1st column is WIDER */}
        <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr_1fr_1fr_1fr] gap-12">

          {/* 1 — Newsletter (Wider Column) */}
          <div>
            <h3 className="font-inter font-semibold text-[16px] mb-3">Newsletter</h3>

            <p className="font-inter text-[14px] text-black/70 mb-4 max-w-[300px]">
              We’d love to share our love for engineering with you in our monthly newsletter.
            </p>

            <div className="flex items-center">
              <input
                type="email"
                placeholder="john@gmail.com"
                className="bg-[#F4F4F4] text-black/60 text-[14px] font-inter px-4 py-2 rounded-l-lg outline-none w-[200px]"
              />
              <button className="bg-[#EAEAEA] text-black text-[14px] font-inter px-4 py-2 rounded-r-lg">
                Subscribe
              </button>
            </div>
          </div>

          {/* 2 — WEECLAP */}
          <div>
            <h3 className="font-inter font-semibold text-[16px] mb-3">WEECLAP</h3>
            <ul className="space-y-2 text-[14px] font-inter text-black/80">
              <li>Blog</li>
              <li>Services</li>
              <li>Terms & Policy</li>
            </ul>
          </div>

          {/* 3 — Social */}
          <div>
            <h3 className="font-inter font-semibold text-[16px] mb-3">Social</h3>
            <ul className="space-y-2 text-[14px] font-inter text-black/80">
              <li>Instagram</li>
              <li>Discord</li>
              <li>LinkedIn</li>
            </ul>
          </div>

          {/* 4 — Product */}
          <div>
            <h3 className="font-inter font-semibold text-[16px] mb-3">Product</h3>
            <ul className="space-y-2 text-[14px] font-inter text-black/80">
              <li>Prototyping</li>
              <li>Process</li>
              <li>Patenting</li>
              <li>AI Integration</li>
            </ul>
          </div>

          {/* 5 — Resources */}
          <div>
            <h3 className="font-inter font-semibold text-[16px] mb-3">Resources</h3>
            <ul className="space-y-2 text-[14px] font-inter text-black/80 mb-4">
              <li>Documentation</li>
              <li>Articles</li>
              <li>Contact us</li>
            </ul>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center">
                <img src="/images/icon-instagram.png" className="w-4" />
              </div>
              <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center">
                <img src="/images/icon-linkedin.png" className="w-4" />
              </div>
              <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center">
                <img src="/images/icon-twitter.png" className="w-4" />
              </div>
            </div>
          </div>

        </div>

      </div>
    </footer>
    </>
  );
};

export default Footer;
