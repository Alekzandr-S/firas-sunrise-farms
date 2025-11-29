"use client";

import { Honey01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";
import { ShoppingCart } from "react-flaticons";
import { FcGoodDecision } from "react-icons/fc";
import { RxChevronRight } from "react-icons/rx";
import { fadeIn } from "@/hooks/variants";
import { motion } from "motion/react";
import { IoNutritionOutline } from "react-icons/io5";
import Image from "next/image";

export function Layout02() {
  const router = useRouter();
  return (
    <section  className="px-[5%] bg-orange-light flex justify-center py-16 md:py-24 lg:py-28">
      <div className="sm:container md:max-w-6xl">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Sour</p>
            <motion.h1 
              className="rb-5 mb-5 text5xl leading-10 sm:leading-16 text-[clamp(1.5rem,4vw,10rem)] font-bold md:mb-6 md:text7xl lg:text8xl"
              variants={fadeIn('center', 0.2)}
              initial="hidden"
              whileInView="show"
              exit="hidden"
            >
              Traditional sour milk crafted with care
            </motion.h1>
            <motion.p 
              className="mb-6 md:mb-8 md:text-md"
              variants={fadeIn('center', 0.23)}
              initial="hidden"
              whileInView="show"
              exit="hidden"
            >
              We ferment our milk using time-honored techniques passed down
              through generations. Each batch captures the rich, tangy essence
              of authentic dairy production.
            </motion.p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <motion.div
                variants={fadeIn('center', 0.25)}
                initial="hidden"
                whileInView="show"
                exit="hidden"
              >
                <div className="mb-3 md:mb-4">
                  <HugeiconsIcon icon={Honey01Icon} strokeWidth={1.5} size={40} />
                </div>
                <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                  Natural fermentation
                </h6>
                <p>
                  Carefully cultured to preserve probiotics and enhance
                  digestive health.
                </p>
              </motion.div>
              <motion.div
                variants={fadeIn('center', 0.25)}
                initial="hidden"
                whileInView="show"
                exit="hidden"
              >
                <div className="mb-3 md:mb-4">
                  <IoNutritionOutline size={40} strokeWidth={2.5} fill="2.5" />
                 </div>
                <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                  Nutritional benefits
                </h6>
                <p>
                  Packed with essential nutrients that support overall wellness
                  and immune function.
                </p>
              </motion.div>
            </div>
            <motion.div 
              className="mt-6 flex flex-wrap items-center gap-4 md:mt-8"
              variants={fadeIn('center', 0.25)}
              initial="hidden"
              whileInView="show"
              exit="hidden"
            >
              <Button 
                onClick={() => router.push("/contact")}
                title="Learn" 
                variant="secondary"
              >
                Learn
              </Button>
              <Button
                onClick={() => router.push("/contact")}
                title="Discover"
                variant="link"
                size="link"
              >
                Discover <RxChevronRight />
              </Button>
            </motion.div>
          </div>
          <motion.div 
            className="max-w-md"
            variants={fadeIn('center', 0.25)}
            initial="hidden"
            whileInView="show"
            exit="hidden"
          >
            <Image
              width={1800}
              height={1800}
              src="/assets/images/sour-milk.jpg"
              className="w-full object-cover rounded-2xl"
              alt="Jaz placeholder image"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
