"use client";

import { Button } from "@/components/ui/button";
import { fadeIn } from "@/hooks/variants";
import { motion } from "motion/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export function Header98() {
  const router = useRouter();
  return (
    <section className="flex justify-center items-center text-white min-h-screen px-[5%] py12 md:py16 lg:py20">
      <div className="containe">
        <div className=" flex flex-col justify-center p-0 sm:p-8 text-center md:p-28">
          <div className="w-full">
            <motion.h1 
              className="mb-5 text-[clamp(2rem,5vw,16rem)] md:leading-20 max-w-sm md:max-w-2xl  font-bold md:mb-6"
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              whileInView="show"
              exit="hidden"
            >
              Fresh harvest from sunrise to sunset  
            </motion.h1>
            <motion.p 
              className="text-text-alternative md:text-md"
              variants={fadeIn('up', 0.25)}
              initial="hidden"
              whileInView="show"
              exit="hidden"
            >
              Sustainable farming drives our passion. We grow quality food that
              nourishes communities.
            </motion.p>
          </div>
          <motion.div 
            className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8"
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            whileInView="show"
            exit="hidden"
          >
            <Button 
              className="bg-orange rounded-[999px] hover:bg-orange-ligher" 
              onClick={()=> router.push('/how-we-farm')} 
              title="Explore" 
              variant="primary"
            >
              Explore
            </Button>
            <Button className="rounded-[999px]" title="Learn" variant="outline">
              Learn
            </Button>
          </motion.div>
          <div className="absolute inset-0 -z-10">
            <Image
              src="/assets/images/vegetable.png"
              className="size-full object-cover"
              width={1800}
              height={900}
              alt="Jaz placeholder image"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
        </div>
      </div>
    </section>
  );
}
