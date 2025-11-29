"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { RxChevronRight } from "react-icons/rx";
import { motion } from "motion/react";
import { fadeIn } from "@/hooks/variants";
import { GiMeat } from "react-icons/gi";
import { MdHighQuality } from "react-icons/md";

export function Layout03() {
  const router = useRouter();
  return (
    <section  className="px-[5 flex justify-center items-center py-16 md:py-24 lg:py-28">
      <div className="sm:container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <motion.p 
              className="mb-3 font-semibold md:mb-4"
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              whileInView="show"
              exit="hidden"
            >Quality</motion.p>
            <motion.h2
              className="mb-5 leading-8 md:leading-12 lg:leading-24 text-[clamp(2rem,5vw,16rem)] text5xl font-bold md:mb-6 md:text7xl lg:text8xl"
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              whileInView="show"
              exit="hidden"
             >
              Our poultry production process
            </motion.h2>
            <motion.p 
              className="md:text-md"
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              whileInView="show"
              exit="hidden"
            >
              Delivering premium eggs and meat through careful farming
              techniques.
            </motion.p>
          </div>
        </div>
        <div className="grid grid-cols-1 text-white gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
          <div className="relative p-6 text-text-alternative sm:col-span-2 md:p-8 lg:p-12">
            <motion.div 
              className="absolute inset-0 -z-10"
            >
              <div className="absolute inset-0 bg-black/50" />
              <Image
                width={1800}
                height={1800}
                src="/assets/images/egg-production.jpg"
                className="size-full object-cover"
                alt="Jaz placeholder image"
              />
            </motion.div>
            <motion.p 
              className="mb-2 inline-block text-sm font-semibold"
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              whileInView="show"
              exit="hidden"
            >Fresh</motion.p>
            <motion.h3 
              className="mb-5 font-semibold text-[clamp(1.5rem,4vw,10rem)] text4xl leading-[1.2] md:mb-6 md:text5xl lg:text6xl"
              variants={fadeIn('up', 0.23)}
              initial="hidden"
              whileInView="show"
              exit="hidden"
            >
              Egg production standards
            </motion.h3>
            <motion.p
              variants={fadeIn('up', 0.24)}
              initial="hidden"
              whileInView="show"
              exit="hidden"
            >
              We ensure consistent quality and nutritional value in every egg.
            </motion.p>
            <motion.div 
              className="mt-6 flex flex-wrap items-center gap-4 md:mt-8"
              variants={fadeIn('up', 0.24)}
              initial="hidden"
              whileInView="show"
              exit="hidden"
            >
              <Button 
                onClick={() => router.push("/gallery")}
                variant="secondary-alt"
              >View details</Button>
              {/* <Button
                onClick={() => router.push("/gallery")}
                iconRight={<RxChevronRight />}
                variant="link-alt"
                size="link"
              >
                Discover
              </Button> */}
            </motion.div>
          </div>
          <div className="relative flex flex-col p-6 text-text-alternative md:p-8 lg:p-6">
            <div className="absolute inset-0 -z-10">
              <div className="absolute inset-0 bg-black/50" />
              <Image
                width={1800}
                height={1800}
                src="/assets/images/meat-production.jpg"
                className="size-full object-cover"
                alt="Jaz placeholder image"
              />
            </div>
            <motion.div 
              className="mb-3 md:mb-4"
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              whileInView="show"
              exit="hidden"
            >
              <GiMeat size={40} color="orange" />
            </motion.div>
            <motion.h3 
              className="mb-2 font-semibold text-[clamp(1.5rem,3vw,10rem)] textxl md:text2xl"
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              whileInView="show"
              exit="hidden"
            >
              Meat production excellence
            </motion.h3>
            <motion.p
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              whileInView="show"
              exit="hidden"
            >Carefully raised broiler chickens for premium meat quality.</motion.p>
            <motion.div 
              className="mt-5 flex items-center md:mt-6"
              variants={fadeIn('up', 0.23)}
              initial="hidden"
              whileInView="show"
              exit="hidden"
            >
              <Button
                onClick={() => router.push("/gallery")}
                // iconRight={}
                variant="link-alt"
                size="link"
              >
                Learn more <RxChevronRight />
              </Button>
            </motion.div>
          </div>
          <div className="relative flex flex-col p-6 text-text-alternative md:p-8 lg:p-6">
            <div className="absolute inset-0 -z-10">
              <div className="absolute inset-0 bg-black/50" />
              <Image
                width={1800}
                height={1800}
                src="/assets/images/quality-assurance.png"
                className="size-full object-cover"
                alt="Jaz placeholder image"
              />
            </div>
            <motion.div 
              className="mb-3 md:mb-4"
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              whileInView="show"
              exit="hidden"
            >
              <MdHighQuality size={40} color="orange" />
            </motion.div>
            <motion.h3 
              className="mb-2 font-semibold text-[clamp(1.5rem,3vw,10rem)] textxl md:text2xl"
              variants={fadeIn('up', 0.23)}
              initial="hidden"
              whileInView="show"
              exit="hidden"
            >
              Quality assurance process
            </motion.h3>
            <motion.p
              variants={fadeIn('up', 0.23)}
              initial="hidden"
              whileInView="show"
              exit="hidden"
            >
              Rigorous health checks and ethical farming practices guarantee
              superior products.
            </motion.p>
            <motion.div 
              className="mt-5 flex items-center md:mt-6"
              variants={fadeIn('up', 0.23)}
              initial="hidden"
              whileInView="show"
              exit="hidden"
            >
              <Button
                onClick={() => router.push("/gallery")}
                // iconRight={}
                variant="link-alt"
                size="link"
              >
                Explore <RxChevronRight />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
