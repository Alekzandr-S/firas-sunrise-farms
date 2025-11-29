"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { RxChevronRight } from "react-icons/rx";
import { motion } from "motion/react";
import { fadeIn } from "@/hooks/variants";
import Image from "next/image";

export function Layout02() {
  return (
    <section id="jazSystems" className="px-[5%] bg-mint-dark flex justify-center py-16 md:py-24 lg:py-28">
      <div className="sm:container md:max-w-6xl">
        <div className="rb-12 mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <motion.p 
              className="mb-3 font-semibold md:mb-4"
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              whileInView="show"
              exit="hidden"
            >Nutrition</motion.p>
            <motion.h2 
              className="rb-5 mb-5 leading-8 md:leading-12 lg:leading-16  
                text-[clamp(1.5rem,4vw,10rem)] text5xl font-bold md:mb-6 md:text7xl 
                lg:text8xl"
                variants={fadeIn('up', 0.2)}
                initial="hidden"
                whileInView="show"
                exit="hidden"
              >
              Benefits of our farm-fresh poultry
            </motion.h2>
            <motion.p 
              className="md:text-md"
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              whileInView="show"
              exit="hidden"
            >
              Delivering healthy, nutrient-rich eggs and meat from our
              sustainable farm.
            </motion.p>
          </div>
        </div>
        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2 md:gap-8">
          <div className="border border-border-primary flexflexcol" >
            <motion.div 
              className="flex aspect-[2/1] overflow-hidden max-w[150px] w[80px] h-auto mx-auto items-center justify-center"
              variants={fadeIn('up', 0.23)}
              initial="hidden"
              whileInView="show"
              exit="hidden"
            >
              <Image
                width={1800}
                height={1800}
                src="/assets/images/egg-production2.jpg"
                className="size-full object-cover hauto"
                alt="Jaz placeholder image 1"
                layout="responsive"
              />
            </motion.div>
            <div className="p-6 md:p-8 lg:p-12">
              <motion.p 
                className="mb-2 text-sm  font-semibold"
                variants={fadeIn('up', 0.2)}
                initial="hidden"
                whileInView="show"
                exit="hidden"
              >Healthy</motion.p>
              <motion.h3 
                className="mb-5 text4xl font-semibold text-[clamp(1.5rem,3vw,10rem)] leading-[1.0] md:mb-6 md:text5xl lg:text6xl"
                variants={fadeIn('up', 0.2)}
                initial="hidden"
                whileInView="show"
                exit="hidden"
              >
                Nutrition of our eggs
              </motion.h3>
              <motion.p
                variants={fadeIn('up', 0.25)}
                initial="hidden"
                whileInView="show"
                exit="hidden"
              >
                Rich in protein and essential nutrients, our eggs support a
                balanced diet.
              </motion.p>
              <motion.div 
                className="mt-6 flex flex-wrap items-center gap-4 md:mt-8"
                variants={fadeIn('up', 0.23)}
                initial="hidden"
                whileInView="show"
                exit="hidden"
              >
                {/* <Button title="Learn more" variant="secondary">
                  Learn more
                </Button> */}
                <Button
                  onClick={() => router.push("/gallery")}
                  title="Explore"
                  variant="link"
                  size="link"
                  // iconRight={<RxChevronRight />}
                >
                  Explore <RxChevronRight />
                </Button>
              </motion.div>
            </div>
          </div>
          <div className="border border-border-primary">
            <motion.div 
              className="flex aspect-[2/1] overflow-hidden items-center justify-center"
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              whileInView="show"
              exit="hidden"
            >
              <Image
                width={1800}
                height={1800}
                src="/assets/images/chicken-meat2.jpg"
                className="size-full object-cover h-auto"
                alt="Jaz placeholder image 1"
              />
            </motion.div>
            <div className="p-6 md:p-8 lg:p-12">
              <motion.p 
                className="mb-2 text-sm font-semibold"
                variants={fadeIn('up', 0.2)}
                initial="hidden"
                whileInView="show"
                exit="hidden"
              >Protein</motion.p>

              <motion.h3 
                className="mb-5 text4xl font-semibold text-[clamp(1.5rem,3vw,10rem)]  leading-[1.0] md:mb-6 md:text5xl lg:text6xl"
                variants={fadeIn('up', 0.2)}
                initial="hidden"
                whileInView="show"
                exit="hidden"
              >

                Benefits of our chicken meat
              </motion.h3>
              <motion.p
                variants={fadeIn('up', 0.23)}
                initial="hidden"
                whileInView="show"
                exit="hidden"
              >
                Lean, high-quality protein sourced from ethically raised
                chickens.
              </motion.p>
              <motion.div 
                className="mt-6 flex flex-wrap items-center gap-4 md:mt-8"
                variants={fadeIn('up', 0.25)}
                initial="hidden"
                whileInView="show"
                exit="hidden"
              >
                {/* <Button title="Discover" variant="secondary">
                  Discover
                </Button> */}
                <Button
                  onClick={() => router.push("/gallery")}
                  title="Explore"
                  variant="link"
                  size="link"
                  // iconRight={}
                >
                  Explore <RxChevronRight />
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
