"use client";

import { Button } from "@/components/ui/button"; 
import React from "react";
import { RxChevronRight } from "react-icons/rx";
import { fadeIn } from "@/hooks/variants";
import { motion } from "motion/react";
import { GiJourney } from "react-icons/gi";
import Image from "next/image";

export function Layout01() {
  return (
    <section  className="px-[5%] bg-orange-ligher py-16 md:py-24 lg:py-28">
      <div className="containe">
        <div className="flex flex-col items-center">
          <div className="mb-12 md:mb-18 lg:mb-20">
            <div className="mx-auto flex max-w- flex-col items-center text-center">
              <motion.p 
                className="mb-3 font-semibold md:mb-4"
                variants={fadeIn('center', 0.2)}
                initial="hidden"
                whileInView="show"
                exit="hidden"
              >Roots</motion.p>
              <motion.h2 
                className="rb-5 mb-5 leading-10 lg:leading-16 max-w-lg lg:max-w-3xl text-[clamp(1.5rem,4vw,10rem)] font-bold md:mb-6 md:text7xl lg:text8xl"
                variants={fadeIn('center', 0.2)}
                initial="hidden"
                whileInView="show"
                exit="hidden"
              >
                Our journey of agricultural excellence
              </motion.h2>
              <motion.p 
                className="mb-5 md:mb-6 md:text-md"
                variants={fadeIn('center', 0.25)}
                initial="hidden"
                whileInView="show"
                exit="hidden"
              >
                We started with bare earth and a bold vision. Every acre
                transformed represents our commitment to sustainable farming and
                community nourishment.
              </motion.p>
              <motion.div 
                className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 py-2"
                variants={fadeIn('center', 0.3)}
                initial="hidden"
                whileInView="show"
                exit="hidden"
              >
                <GiJourney size={40}/>
                {/* <GiJourney size={40}/>
                <GiJourney size={40}/>
                <GiJourney size={40}/> */}
              </motion.div>
              {/* <motion.div  */}
            </div>
          </div>
        </div>
        <motion.div 
          className="max-w-5xl items-center flex justify-center mx-auto"
          variants={fadeIn('up', 0.35)}
          initial="hidden"
          whileInView="show"
          exit="hidden"
        >
          <Image
            width={500}
            height={500}
            src="/team/farm-journer.PNG"
            className="size-full object-cover rounded-2xl"
            alt="Jaz placeholder image"
          />
        </motion.div>
      </div>
    </section>
  );
}
