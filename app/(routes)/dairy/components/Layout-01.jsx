"use client";

import { fadeIn } from "@/hooks/variants";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import React from "react";
import { FaBottleDroplet } from "react-icons/fa6";
import { RxChevronRight } from "react-icons/rx";
import Image from "next/image";

export function Layout01() {
  return (
    <section  className="bg-green text-white px-[5%] py-16 md:py-24 lg:py-28">
      <div className="sm:container -mt-8 md:-mt-16 lg:-mt-24">
        <div className="items-baseline grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <motion.div 
              className="rb-5 mb-5 md:mb-6"
              variants={fadeIn('center', 0.2)}
              initial="hidden"
              whileInView="show"
              exit="hidden"
            >
              <FaBottleDroplet size={40} color="orange" />
            </motion.div>
            <motion.h2 
              className="rb-5 mb-5 text5xl leading-10 md:leading-12 lg:leading-20 text-[clamp(1.5rem,4vw,10rem)] font-bold md:mb-6 md:text7xl lg:text8xl"
              variants={fadeIn('center', 0.2)}
              initial="hidden"
              whileInView="show"
              exit="hidden"
            >
              From pasture to bottle, our milk journey begins
            </motion.h2>
            <motion.p 
              className="md:text-md"
              variants={fadeIn('center', 0.25)}
              initial="hidden"
              whileInView="show"
              exit="hidden"
            >
              Our dairy cows graze on lush, organic pastures, ensuring each milk
              bottle captures the pure essence of natural farming. We carefully
              collect and process milk using methods that preserve its original
              nutritional value and fresh taste.
            </motion.p>
            {/* <motion.div 
              className="mt-6 flex flex-wrap items-center gap-4 md:mt-8"
              variants={fadeIn('center', 0.3)}
              initial="hidden"
              whileInView="show"
              exit="hidden"
            >
              <Button title="Explore process" variant="secondary">
                Explore process
              </Button>
              <Button
                title="Watch"
                variant="link"
                size="link"
              >
                Watch <RxChevronRight />
              </Button>
            </motion.div> */}
          </div>
          <div>
            <Image
              width={1800}
              height={1800}
              src="/assets/images/milkvideo.PNG"
              className="w-full object-cover"
              alt="Jaz placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
