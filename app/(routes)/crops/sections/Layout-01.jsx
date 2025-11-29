"use client";

import { Button } from "@/components/ui/button"; 
import React from "react";
import { RxChevronRight } from "react-icons/rx";
import { fadeIn } from "@/hooks/variants";
import { motion } from "motion/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export function Layout141() {
  const router = useRouter();
  return (
    <section id="" className="px[5%] bg-eggshell min-h-screen py-16 md:py-24 lg:py-28">
      <div className="containe">
        <div className="flex flex-col items-center w-full">
          <div className=" mb-12 text-center md:mb-18 lg:mb-20">
            <div className="w-full ">
              <motion.p 
                className="mb-3 font-semibold md:mb-4"
                variants={fadeIn('center', 0.2)}
                initial="hidden"
                whileInView="show"
                exit="hidden"
              >Legacy</motion.p>
              <motion.h2 
                className="rb-5 mb-5 text5xl text-[clamp(1.5rem,4vw,10rem)] font-bold md:mb-6 md:text7xl lg:text8xl"
                variants={fadeIn('center', 0.2)}
                initial="hidden"
                whileInView="show"
                exit="hidden"
              >
                Growing strong since 2009
              </motion.h2>
              <motion.p 
                className="md:text-md"
                variants={fadeIn('center', 0.25)}
                initial="hidden"
                whileInView="show"
                exit="hidden"
              >
                Firas Sunrise Farms began with a simple dream of sustainable
                agriculture. We've grown into a diverse farming enterprise.
              </motion.p>
              <motion.div 
                className="mt-6 flex items-center justify-center gap-x-4 md:mt-8"
                variants={fadeIn('center', 0.3)}
                initial="hidden"
                whileInView="show"
                exit="hidden"
              >
                <Button 
                  className="hover:bg-amber-200" 
                  title="Our story" 
                  variant="secondary"
                  onClick={() => router.push('/')}
                >
                  Our story
                </Button>
                <Button
                  title="Read"
                  variant="link"
                  size="link"
                  onClick={() => router.push('/')}
                >
                  Read <RxChevronRight /> 
                </Button>
              </motion.div>
            </div>
          </div>
          <motion.div 
            className="inset-0 -z10"
            variants={fadeIn('up', 0.35)}
            initial="hidden"
            whileInView="show"
            exit="hidden"
          >
            <Image
              src="/assets/images/vegetable.png"
              className="size-full object-cover rounded-2xl"
              alt="Img placeholder image"
              width={800}
              height={800}
            />
            {/* <div className="absolute inset-0 bg-black/50" />                                                                                                                                                                                                                     */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
