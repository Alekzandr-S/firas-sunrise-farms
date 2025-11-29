"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { BiPurchaseTagAlt } from "react-icons/bi";
import { CiCircleMore } from "react-icons/ci";
import { motion } from "motion/react";
import { fadeIn } from "@/hooks/variants";

export function Cta() {
  return (
    <section  className="px-[5%] flex justify-center py-16 md:py-24 lg:py-28">
      <div className="sm:container md:max-w-6xl">
        <div className="grid auto-cols-fr grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:gap-x-16">
          <div className="flex flex-col items-center justify-center text-center">
            <motion.div
              className="py-4"
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              whileInView="show"
              exit="hidden"
            >
              <BiPurchaseTagAlt size={40} color="orange" />
            </motion.div>
            <motion.h2 
              className="rb-5 mb-5 leading-8 md:leading-12 lg:leading-16 
              text-[clamp(1.3rem,4vw,10rem)] 
              text5xl font-bold md:mb-6 md:text7xl lg:text8xl"
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              whileInView="show"
              exit="hidden"
            >
              Order fresh poultry today
            </motion.h2>
            <motion.p
              variants={fadeIn('up', 0.23)}
              initial="hidden"
              whileInView="show"
              exit="hidden"
            >
              Connect with our farm team to discuss bulk orders, delivery
              options, and sustainable chicken production.
            </motion.p>
            <motion.div 
              className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8"
              variants={fadeIn('up', 0.25)}
              initial="hidden"
              whileInView="show"
              exit="hidden"
            >
              <Button className="text-white bg" onClick={() => router.push("/contact")} variant="outline">Order now</Button>
              <Button onClick={() => router.push("/contact")} variant="secondary">Contact us</Button>
            </motion.div>
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <motion.div
            className="py-4"
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              whileInView="show"
              exit="hidden"
            >
              <CiCircleMore size={40} color="orange" />
            </motion.div>
            <motion.h2 
              className="rb-5 mb-5 leading-8 md:leading-12 lg:leading-20 text-[clamp(1.3rem,4vw,10rem)] text5xl font-bold md:mb-6 md:text7xl lg:text8xl"
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              whileInView="show"
              exit="hidden"
            >
              Need more information?
            </motion.h2>
            <motion.p
              variants={fadeIn('up', 0.23)}
              initial="hidden"
              whileInView="show"
              exit="hidden"
            >
              Our team is ready to answer your questions about our layer and
              broiler chicken operations.
            </motion.p>
            <motion.div 
              className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8"
              variants={fadeIn('up', 0.25)}
              initial="hidden"
              whileInView="show"
              exit="hidden"
            >
              <Button asChild variant="outline" className="text-white">
                <Link
                  href={"tel:0950004590"}
                >Call us</Link></Button>
              <Button asChild variant="secondary">
                <Link
                  href={"mailto:tembochinyama5@gmail.com"}
                >Email</Link></Button>
              {/* <Button variant="secondary">Email</Button> */}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
