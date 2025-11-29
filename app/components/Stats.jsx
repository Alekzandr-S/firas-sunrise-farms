"use client";

import { fadeIn } from "@/hooks/variants";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button"; 
import React, { Fragment } from "react";
import { RxChevronRight } from "react-icons/rx";
import { M } from "react-flaticons";

const cardVariant = {
  hidden: { opacity: 0, scale: 0.4 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export function Stats() {
  return (
    <section  className="px-[5%]  flex justify-center bg-mint-lightest py-16 md:py-24 lg:py-28">
      <div className="xs:container md:max-w-6xl">
        <div className="mb-12 grid grid-cols-1 gap-y-5 md:mb-14 md:grid-cols-2 md:gap-x-12 lg:mb20 lg:gap-x-20">
          <div className="max-w-xl">
            <motion.p 
              className="mb-3 font-semibold md:mb-4"
              variants={fadeIn('center', 0.2)}
              initial="hidden"
              whileInView="show"
              exit="hidden"
            >Impact</motion.p>
            <motion.h2 
              className="text5xl leading-8 lg:leading-16 max-w4xl text-[clamp(1.5rem,4vw,10rem)] font-bold md:text7xl lg:text8xl"
              variants={fadeIn('center', 0.2)}
              initial="hidden"
              whileInView="show"
              exit="hidden"
            >
              Our farm's growth in numbers
            </motion.h2>
          </div>
          <div>
            <motion.p  
              className="md:text-md"
              variants={fadeIn('up', 0.25)}
              initial="hidden"
              whileInView="show"
              exit="hidden"
            >
              Since 2009, we've transformed agricultural potential into tangible
              results. Our commitment translates into measurable success across
              crops, livestock, and dairy production.
            </motion.p>
            <motion.div 
              className="mt-6 flex flex-wrap items-center gap-4 md:mt-8"
              variants={fadeIn('up', 0.3)}
              initial="hidden"
              whileInView="show"
              exit="hidden"
            >
              <Button 
                title="Explore" 
                variant="secondary"
                className="text-white rounded-[999px] hover:text-green bg-green hover:bg-green-lighter"
                onClick={() => router.push('/crops')}  
              >
                Explore
              </Button>
              <Button
                title="Details"
                variant="link"
                size="link"
                onClick={() => router.push('/crops')} 
              >
                Details <RxChevronRight />
              </Button>
            </motion.div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Fragment>
            <motion.div 
              className="border border-border-primary p-8 first:flex first:flex-col first:md:col-span-2 first:md:row-span-1 first:lg:col-span-1 first:lg:row-span-2"
              variants={cardVariant}
              initial="hidden"
              whileInView="show"
              exit="hidden"
              // viewport={{ once: true }}
            >
              <p className="mb-8 text-orange text-10xl font-bold leading-[1.3] md:mb-10 md:text-[4rem] lg:mb-12 lg:text-[5rem]">
                85%
              </p>
              <h3 className="text-md font-bold leading-[1.4] md:text-xl mt-auto">
                Crop diversity
              </h3>
              <p className="mt-2">
                Seven distinct crop varieties cultivated with precision and care
              </p>
            </motion.div>
          </Fragment>
          <Fragment>
            <motion.div
              variants={cardVariant}
              initial="hidden"
              whileInView="show"
              exit="hidden"
              className="yourCardClasses"
            >
              <img
                className="aspect-[3/2] size-full object-cover"
                src="/assets/images/farm-growth.jpg"
                alt="Jaz placeholder image"
              />
            </motion.div>
          </Fragment>
          <Fragment>
            <motion.div 
              className="border border-border-primary p-8"
              variants={cardVariant}
              initial="hidden"
              whileInView="show"
              exit="hidden"
            >
              <p className="mb-8 text-orange text-10xl font-bold leading-[1.3] md:mb-10 md:text-[4rem] lg:mb-12 lg:text-[5rem]">
                75%
              </p>
              <h3 className="text-md font-bold leading-[1.4] md:text-xl">
                Dairy production
              </h3>
              <p className="mt-2">
                Consistent dairy quality through advanced dairy management techniques
              </p>
            </motion.div>
          </Fragment>
          <Fragment>
            <motion.div 
              className="border border-border-primary p-8 [&:nth-last-child(2)]:order-last [&:nth-last-child(2)]:md:order-none"
              variants={cardVariant}
              initial="hidden"
              whileInView="show"
              exit="hidden"
            >
              <p className="mb-8 text-orange text-10xl font-bold leading-[1.3] md:mb-10 md:text-[4rem] lg:mb-12 lg:text-[5rem]">
                92%
              </p>
              <h3 className="text-md font-bold leading-[1.4] md:text-xl">
                Livestock health
              </h3>
              <p className="mt-2">
                Maintaining superior breeding and nutrition standards for both cattle and poultry
              </p>
            </motion.div>
          </Fragment>
          <Fragment>
            <motion.div
              variants={cardVariant}
              initial="hidden"
              whileInView="show"
              exit="hidden"
            >
              <img
                className="aspect-[3/2] size-full object-cover"
                src="/assets/images/farm-growth-metrics.jpg"
                alt="Jaz placeholder image"
              />
            </motion.div>
          </Fragment>
        </div>
      </div>
    </section>
  );
}
