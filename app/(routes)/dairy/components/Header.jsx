"use client";

import { fadeIn } from "@/hooks/variants";
import { motion } from "motion/react";
import React from "react";

export function Header() {
  return (
    <section  
      className="px-[5%] flex justify-center items-center bg-eggshell py-16 md:py-24 lg:py-28"
    >
      <div 
        className="flex flex-col justify-center items-center text-centersm:containe max- sm:maxw-4xl text-center"
      >
        <motion.h1 
          className="text-center mb-5 mx-auto max-w-25 sm:leading-12 sm:max-w-2xl text6xl text-[clamp(1.5rem,4vw,10rem)] font-bold md:mb-6 md:text9xl lg:text10xl"
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView="show"
          exit="hidden"
        >
          <span className="block xs:inline">Fresh</span> dairy goodness
        </motion.h1>
        <motion.p 
          className="md:text-md md:max-w-4xl"
          variants={fadeIn('up', 0.25)}
          initial="hidden"
          whileInView="show"
          exit="hidden"
        >
          Pure milk straight from our pastures, crafted with generations of
          farming wisdom and a commitment to delivering the highest quality
          dairy products to our community.
        </motion.p>
      </div>
    </section>
  );
}
