"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import FAQItem from "./FAQItem";
import faqData from "./faqData";

const FAQ = () => {
  const [activeFaq, setActiveFaq] = useState(1);

  const handleFaqToggle = (id: number) => {
    activeFaq === id ? setActiveFaq(0) : setActiveFaq(id);
  };

  return (
    <>
      {/* <!-- ===== FAQ Start ===== --> */}
      
      {/* <!-- ===== FAQ End ===== --> */}
    </>
  );
};

export default FAQ;
