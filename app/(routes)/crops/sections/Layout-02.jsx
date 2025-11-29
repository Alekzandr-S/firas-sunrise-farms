"use client";

import { Button } from "@/components/ui/button"; 
import React from "react";
import { RxChevronRight } from "react-icons/rx";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import { cardVariants, containerVariants, fadeIn } from "@/hooks/variants";
import Image from "next/image";

const cardDetails = [
  {
    index: 1,
    kicker: 'Crops',
    heading: 'Diverse vegetables grown with care',
    desc: 'Onions, cucumbers, tomatoes and more fresh from our fields',
    buttonPlaceHolder: 'Explore',
    imgSrc: '/assets/v-hero2.JPG'
  },
  {
    index: 2,
    kicker: 'Poultry',
    heading: 'Healthy chickens, quality protein',
    desc: 'Layer and broiler chickens raised in ethical conditions',
    buttonPlaceHolder: 'Discover',
    imgSrc: '/assets/images/layer-chicken.jpg'
  },
  {
    index: 3,
    kicker: 'Dairy',
    heading: 'Fresh milk straight from our farm',
    desc: 'Producing fresh and sour milk with traditional methods',
    buttonPlaceHolder: 'Learn',
    imgSrc: '/assets/images/dairyhero.JPG'
  },
]

export function Layout394() {
  const router = useRouter();
  return (
    <section  className="px-[5%]  py-16 md:py-24 lg:py-28">
      <motion.div 
        className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20"
        variants={fadeIn('center', 0.2)}
        initial="hidden"
        whileInView="show"
        exit="hidden"
      >
        <p className="mb-3 font-semibold md:mb-4">Harvest</p>
        <h2 className="mb-5 text5xl text-[clamp(1.5rem,4vw,10rem)] font-bold md:mb-6 md:text-7xl lg:text8xl">
          Our farm produces
        </h2>
        <p className="md:text-md">Quality products from field to table</p>
      </motion.div>
      <motion.div 
        className="grid auto-cols-fr grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        // viewport={{ once: true }}
        exit="hidden"
      >
        {cardDetails.map((card) =>{
          const route = card.index === 1 ? "/crops" : card.index === 2 ? '/poultry' : '/dairy';
          return (
            <motion.div 
              key={card.index} 
              className="flex flex-col border border-border-primary"
              variants={cardVariants}
              whileHover={{
                y: -6,
                scale: 1.02,
                boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
              }}
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 18,
              }}
            >
              <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
                <div>
                  <p className="mb-2 font-semibold">{card.kicker}</p>
                  <h2 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                    {card.heading}
                  </h2>
                  <p>
                    {card.desc}
                  </p>
                </div>
                <motion.div 
                  className="mt-5 md:mt-6"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 150 }}
                >
                  <Button
                    title="Explore"
                    variant="link"
                    size="link"
                    onClick={() => router.push(route)}
                  >
                    {card.buttonPlaceHolder} <RxChevronRight />
                  </Button>
                </motion.div>
              </div>
              <motion.div 
                className="aspect-[4/4] w-full self-start"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <Image
                  width={1800}
                  height={1800}
                  className="object-cove h-full"
                  src={card.imgSrc}
                  alt="Vegetable placeholder image"
                />
              </motion.div>
            </motion.div>
          );         
          })
        }
      </motion.div>
    </section>
  );
}