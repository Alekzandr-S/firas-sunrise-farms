"use client";

import { fadeIn } from "@/hooks/variants";
import React from "react";
import { motion } from "motion/react";

export function Header46() {
  return (
    <section className=" px[5%] py-16 md:py-24 lg:py-28">
      <div className="sm:container max-w-4xl mx-auto ">
        <div className="w-full text-center flex justify-center flex-col items-center">
          <motion.h1 
            className="mb-5 text-[clamp(2rem,5vw,16rem)] text6xl font-bold md:mb-6 md:text9xl lg:text10xl"
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            exit="hidden"
          >
            Get in Touch
          </motion.h1>
          <motion.p 
            className="md:text-md"
            variants={fadeIn('up', 0.23)}
            initial="hidden"
            whileInView="show"
            exit="hidden"
          >
            We’re here to answer your questions and provide more information
            about our products and services.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
