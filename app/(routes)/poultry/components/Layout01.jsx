"use client";

import { Button } from "@relume_io/relume-ui";
import Image from "next/image";
import React from "react";
import { RxChevronRight } from "react-icons/rx";
import { motion } from "motion/react";
import { fadeIn } from "@/hooks/variants";

export function Layout01() {
  return (
    <section  className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="sm:container">
        <div className="rb-12 mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <motion.p 
              className="mb-3 font-semibold md:mb-4"
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              whileInView="show"
              exit="hidden"
            >Sustainable</motion.p>
            <motion.h2 
              className="rb-5 mb-5 leading-8  md:leading-12 lg:leading-16  
                text-[clamp(1.5rem,4vw,10rem)]  text5xl font-bold md:mb-6 
                md:text7xl lg:text8xl
              "
              variants={fadeIn('up', 0.25)}
              initial="hidden"
              whileInView="show"
              exit="hidden"
            >
              Ethical chicken farming practices
            </motion.h2>
            <motion.p 
              className="md:text-md"
              variants={fadeIn('up', 0.25)}
              initial="hidden"
              whileInView="show"
              exit="hidden"
            >
              Raising chickens with care and respect for animal welfare.
            </motion.p>
          </div>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 border border-border-primary md:grid-cols-2">
          <div className="flex flex-col justify-center p-6 md:p-8 lg:p-12">
            <motion.div
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              whileInView="show"
              exit="hidden"
            >
              <p className="mb-2 text-sm font-semibold">Organic</p>
              <h3 className="mb-5 text 4xl font-semibold text-[clamp(1.5rem,3vw,10rem)] leading-[1.2] md:mb-6 md:text 5xl lg:text 6xl">
                Layer and broiler chicken production
              </h3>
              <p>
                We maintain high standards of health and nutrition for our
                chickens.
              </p>
            </motion.div>
            <motion.div 
              className="mt-6 flex flex-wrap items-center gap-4 md:mt-8"
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              whileInView="show"
              exit="hidden"
            >
              <Button title="Learn more" variant="secondary">
                Learn more
              </Button>
              <Button
                title="Explore"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                Explore
              </Button>
            </motion.div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              width={500}
              height={500}
              src="/assets/images/chicken-production.png"
              className="size-full object-cover"
              alt="Jaz placeholder image"
            />
          </div>  
        </div>
      </div>
    </section>
  );
}
