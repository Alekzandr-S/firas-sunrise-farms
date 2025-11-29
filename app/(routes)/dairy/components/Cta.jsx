"use client";

import { Button } from "@/components/ui/button";
import { MdOutlineDifference } from "react-icons/md";
import React from "react";
import { HiOutlineFlag } from "react-icons/hi";
import { motion} from "framer-motion";
import { fadeIn } from "@/hooks/variants";


export function Cta() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="containe ">
        <div className="grid auto-cols-fr grid-cols-1 lg:w-full gap-x-8 gap-y-12 md:grid-cols-2 lg:gap-x-16">
          <div className="flex flex-col max-w-7xl items-center justify-center text-center">
            <motion.div 
              className="pb-2.5"
              variants={fadeIn('center', 0.2)}
              initial="hidden"
              whileInView="show"
              exit="hidden"
            >
              <HiOutlineFlag  size={40} color=""/>
            </motion.div>
            <motion.h2 
              className="rb-5 mb-5 max-w-4xl leading-16 text-[clamp(1.5rem,4vw,8rem)] text5xl font-bold md:mb-6 md:text7xl lg:text8xl"
              variants={fadeIn('center', 0.23)}
              initial="hidden"
              whileInView="show"
              exit="hidden"
            >
              Taste the difference
            </motion.h2>
            <motion.p 
              className="max-w-xl"
              variants={fadeIn('center', 0.25)}
              initial="hidden"
              whileInView="show"
              exit="hidden"
            >
              Experience farm-fresh dairy that connects you directly to the
              heart of sustainable agriculture and pure nutrition.
            </motion.p>
            <motion.div 
              className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8"
              variants={fadeIn('center', 0.3)}
              initial="hidden"
              whileInView="show"
              exit="hidden"
            >
              <Button 
                className="bg-orange hover:bg-orange-light"
                onClick={() => router.push("/contact")}
              >Order now</Button>
              <Button 
                variant="secondary"
                onClick={() => router.push("/contact")}
              >Learn more</Button>
            </motion.div>
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <motion.div
              variants={fadeIn('center', 0.2)}
              initial="hidden"
              whileInView="show"
              exit="hidden"
            >
              <MdOutlineDifference size={40} color="" />
            </motion.div>
            <motion.h2 
              className="rb-5 mb-5 leading-16 text-[clamp(1.5rem,4vw,10rem)] text5xl font-bold md:mb-6 md:text7xl lg:text8xl"
              variants={fadeIn('center', 0.23)}
              initial="hidden"
              whileInView="show"
              exit="hidden"
            >
              Visit our farm
            </motion.h2>
            <motion.p 
              className="max-w-xl"
              variants={fadeIn('center', 0.25)}
              initial="hidden"
              whileInView="show"
              exit="hidden"
            >
              See how we produce the most natural and nutritious dairy products
              in the region.
            </motion.p>
            <motion.div 
              className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8"
              variants={fadeIn('center', 0.3)}
              initial="hidden"
              whileInView="show"
              exit="hidden"
              
            >
              <Button 
                className="bg-orange hover:bg-orange-light" 
                variant="primary"
                onClick={() => router.push("/contact")}
              >Book tour</Button>
              <Button 
                variant="secondary"
                onClick={() => router.push("/contact")}
              >Contact us</Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
