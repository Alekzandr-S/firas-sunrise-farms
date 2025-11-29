"use client";

import { Button } from "@/components/ui/button"; 
import { useRouter } from "next/navigation";
import React from "react";
import { MdCenterFocusStrong } from "react-icons/md";
import { RxChevronRight } from "react-icons/rx";
import { motion } from "motion/react";
import { fadeIn } from "@/hooks/variants";

export function Layout03() {
  const router = useRouter();
  return (
    <section  className="px-[5%] flex flex-col justify-center items-center bg-green-lightest py-16 md:py-24 lg:py-28">
      <div className="sm:container">
        <div className="flex flex-col justify-center items-center">
          <div className="mb-12 md:mb-18 lg:mb-20">
            <div className="mx-auto flex max-w-4xl flex-col justify-center items-center text-center">
              <motion.p 
                className="mb-3 font-semibold md:mb-4"
                variants={fadeIn('center', 0.2)}
                initial="hidden"
                whileInView="show"
                exit="hidden"
              >Legacy</motion.p>
              <motion.h2 
                className="rb-5 mb-5 text5xl leading-8 sm:leading-10 lg:leading-16 max-w4xl text-[clamp(1.5rem,4vw,10rem)] font-bold md:mb-6 md:text7xl lg:text8xl"
                variants={fadeIn('center', 0.2)}
                initial="hidden"
                whileInView="show"
                exit="hidden"
              >
                Cultivating sustainable agriculture for generations
              </motion.h2>
              <motion.p 
                className="mb-5 md:mb-6 md:text-md"
                variants={fadeIn('center', 0.25)}
                initial="hidden"
                whileInView="show"
                exit="hidden"
              >
                We transform challenging landscapes into productive farmland
                through careful stewardship and strategic agricultural
                practices. Our approach balances economic viability with
                environmental responsibility, ensuring long-term sustainability
                for both our farm and the surrounding ecosystem.
              </motion.p>
              <motion.div 
                className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 py-2"
                variants={fadeIn('center', 0.25)}
                initial="hidden"
                whileInView="show"
                exit="hidden"
              >
                <MdCenterFocusStrong size={40} />
                <MdCenterFocusStrong size={40} />
                <MdCenterFocusStrong size={40} />
                <MdCenterFocusStrong size={40} />
              </motion.div>
              <motion.div 
                className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8"
                variants={fadeIn('center', 0.3)}
                initial="hidden"
                whileInView="show"
                exit="hidden"
              >
                <Button 
                  title="Connect" 
                  variant="secondary"
                  className=" text-green-lightest rounded-[999px] bg-green hover:bg-green-light "
                  onClick={() => router.push("/crops")}
                >
                  Connect
                </Button>
                <Button
                  title="Explore"
                  variant="link"
                  size="link"
                  onClick={() => router.push("/crops")}
                >
                  Explore <RxChevronRight />
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="max-w-4xl mx-auto">
          <motion.img
            src="/assets/images/sustainable-agriculture.jpg"
            className="w-full h-auto object-cover rounded-2xl"
            alt="Jaz placeholder image"
            variants={fadeIn('up', 0.35)}
            initial="hidden"
            whileInView="show"
            exit="hidden"
          />
        </div>
      </div>
    </section>
  );
}
