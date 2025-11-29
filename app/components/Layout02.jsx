"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";
import { cardVariants, containerVariants, fadeIn } from "@/hooks/variants";
import { motion } from "motion/react";
import { MdOutlineHighQuality, MdOutlinePublishedWithChanges } from "react-icons/md";
import { BiGitCommit } from "react-icons/bi";
import { useRouter } from "next/navigation";

const cardDetails = [
  {
    index: 1,
    logo: <BiGitCommit size={40}/>,
    heading: "Commitment to land and community",
    desc: "Nurturing growth through responsible farming practices",
    buttonPlaceHolder: "Explore"
  },
  {
    index: 2,
    logo: <MdOutlinePublishedWithChanges size={40}/>,
    heading: "Innovation in agriculture",
    desc: "Developing advanced techniques for crop and livestock management",
    buttonPlaceHolder: "Learn"
  },
  {
    index: 3,
    logo: <MdOutlineHighQuality  size={40}/>,
    heading: "Environmental stewardship",
    desc: "Protecting natural resources while producing high-quality agricultural products",
    buttonPlaceHolder: "Understand"
  },
]

export function Layout02() {
  const router = useRouter();
  return (
    <section  className="px-[5%] flex flex-col justify-center items-center bg-green-lighter py-16 md:py-24 lg:py-28">
      <div className=" sm:container">
        <div className="flex justify-center flex-col items-center mx-auto mb-12 w-full max-wlg text-center md:mb-18 lg:mb-20">
          <motion.p 
            className="mb-3 font-semibold md:mb-4"
            variants={fadeIn('center', 0.2)}
            initial="hidden"
            whileInView="show"
            exit="hidden"
          >Values</motion.p>
          <motion.h1 
            className="mb-5 text5xl leading-10 lg:leading-16 max-w-4xl text-[clamp(1.5rem,4vw,10rem)] font-bold md:mb-6 md:text7xl lg:text8xl"
            variants={fadeIn('center', 0.2)}
            initial="hidden"
            whileInView="show"
            exit="hidden"
          >
            Our core principles
          </motion.h1>
          <motion.p 
            className="md:text-md"
            variants={fadeIn('center', 0.25)}
            initial="hidden"
            whileInView="show"
            exit="hidden"
          >
            Sustainable agriculture drives our mission
          </motion.p>
        </div>
        <motion.div 
          className="grid auto-cols-fr grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          exit="hidden"
        >
          {cardDetails.map((card) => {
            return(
              <motion.div 
                key={card.index} 
                className="flex flex-col justify-center border border-border-primary p-6 md:p-8"
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
                <div>
                  <div className="rb-5 mb-5 md:mb-6">
                    {card.logo}
                  </div>
                  <h2 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                    {card.heading}
                  </h2>
                  <p>{card.desc}</p>
                </div>
                {/* <motion.div 
                  className="mt-5 md:mt-6"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 150 }}
                >
                  <Button
                    title="Explore"
                    variant="link"
                    size="link"
                    onClick={() => router.push("/contact")}
                  >
                    {card.buttonPlaceHolder} <RxChevronRight />
                  </Button>
                </motion.div> */}
              </motion.div>)
          })
          }
        </motion.div>
      </div>
    </section>
  );
} 
