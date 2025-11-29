"use client";

import { fadeIn } from "@/hooks/variants";
import React from "react";
import { motion } from "motion/react";

export function Header() {
  return (
    <section className="px-[5%] py-28 bg-orange-ligher md:py-24 lg:py-28">
      <div className="containe  flex flex-col justify-center items-center text-center">
        <motion.h1 
          className="mb-5 max-w-lg md:max-w-4xl leading-10 sm:leading-14 lg:leading-24 text-[clamp(2rem,5vw,16rem)] text6xl font-bold md:mb-6 md:text9xl lg:text10xl"
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView="show"
          exit="hidden"
        >
          Raising healthy chickens
        </motion.h1>
        <motion.p 
          className="md:text-md max-w-4xl"
          variants={fadeIn('up', 0.25)}
          initial="hidden"
          whileInView="show"
          exit="hidden"
        >
          Our poultry operations deliver fresh eggs and premium meat through
          sustainable farming practices that respect the land and the animals we
          raise.
        </motion.p>
      </div>
    </section>
  );
}
