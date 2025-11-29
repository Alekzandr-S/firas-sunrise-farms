"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { fadeIn } from "@/hooks/variants";
import Link from "next/link";
// import { Button,  } from "@relume_io/relume-ui";
import React from "react";
import { motion } from "motion/react";

export function Cta14() {
  return (
    <section id="azan" className="relative bg-mint px-[5%] py-16 md:py-24 lg:py-28">
      <div className="sm:container grid grid-rows-1 items-start gap-y-5 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:gap-x-20 lg:gap-y-16">
        <div>
          <motion.h1 
            className="text-5xl font-bold text-[clamp(1.5rem,4vw,10rem)] md:text7xl lg:text8xl"
            variants={fadeIn('center', 0.2)}
            initial="hidden"
            whileInView="show"
            exit="hidden"
          >
            Stay Updated with Our Newsletter
          </motion.h1>
        </div>
        <div>
          <motion.p 
            className="md:text-md"
            variants={fadeIn('center', 0.23)}
            initial="hidden"
            whileInView="show"
            exit="hidden"
          >
            Subscribe to our newsletter for the latest updates and
            announcements. Be the first to know about our programs and events!
          </motion.p>
          <div className="mt-6 md:mt-8">
            <motion.form 
              className="rb-4 mb-4 grid max-w-sm grid-cols-1 gap-y-3 sm:grid-cols-[1fr_max-content] sm:gap-4"
              variants={fadeIn('center', 0.25)}
              initial="hidden"
              whileInView="show"
              exit="hidden"
            >
              <Input id="email" type="email" placeholder="Enter your email" />
              <Button title="Sign Up">
                <Link href="#">Sign Up</Link>
              </Button>
            </motion.form>
            <motion.p 
              className="text-xs"
              variants={fadeIn('center', 0.25)}
              initial="hidden"
              whileInView="show"
              exit="hidden"
            >
              By clicking Sign Up you're confirming that you agree with our
              Terms and Conditions.
            </motion.p>  
          </div>
        </div>
      </div>
    </section>
  );
}
