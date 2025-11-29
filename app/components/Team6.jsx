"use client";

import { Button } from "@/components/ui/button";  
import { useRouter } from "next/navigation";
import React from "react";
import { BiLogoDribbble, BiLogoLinkedinSquare } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { cardVariants, containerVariants, fadeIn } from "@/hooks/variants";
import { motion } from "motion/react";
import Image from "next/image";

const profiles = [
  {
    index: 0,
    imgSrc: "/team/Chinyama-Miyoba.jpg" || "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    profName: "Chinyama Miyoba",
    role: "" || "Farm director",
    desc: "A seasoned finance and tax expert with an MBA from Manchester University and over 14 years at the farm, bringing strategic leadership, tax compliance expertise, and extensive experience from major institutions such as Zamtel, Airtel, Deloitte, PwC, and ZRA.",
    in: "",
    x: "",
    fb: "",
  },
  {
    index: 1,
    imgSrc: "/team/Christine-Miyoba.png" || "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    profName: "Christine Miyoba",
    role: "" || "Farm Manager",
    desc: "Ensuring high standards in biosecurity, worker supervision, feed control, crop rotation, and water resource management to keep farm operations running efficiently.",
    in: "",
    x: "",
    fb: "",
  },
  {
    index: 2,
    imgSrc: "/team/Tiami-Tembo.png" || "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    profName: "Tiami Tembo",
    role: "" || "Accountant",
    desc: `
      Managing 
      financial records, budgeting, cost analysis, and 
      reporting to support data-driven decision-making and maintain 
      the farm’s financial stability and growth
    `,
    in: "",
    x: "",
    fb: "",
  },
  {
    index: 3,
    imgSrc: "/team/Joseph-Mapanza.png" || "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    profName: "Joseph Mapanza",
    role: "" || "Farm Manager",
    desc: `
      Ensuring high standards in biosecurity, worker supervision, 
      feed control, crop rotation, and water resource management 
      to keep farm operations running efficiently.`,
    in: "",
    x: "",
    fb: "",
  },
  // {
  //   index: 3,
  //   imgSrc: "" || "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
  //   profName: "Kenzie Simbeye",
  //   role: "" || "IT Specialist",
  //   desc: "Focused on delivering secure, scalable, and user-centered systems while optimizing operations through modern technologies and best practices.",
  //   in: "",
  //   x: "",
  //   fb: "",
  // },
]
export function Team6() {
  const router = useRouter();
  return (
    <section  className="px-[5%] flex justify-center bg-orange-lightest py-16 md:py-24 lg:py-28">
      <div className="sm:container md:max-w-6xl" >
        <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <motion.p 
            className="mb-3 font-semibold md:mb-4"
            variants={fadeIn('center', 0.2)}
            initial="hidden"
            whileInView="show"
            exit="hidden"
          >People</motion.p>
          <motion.h2 
            className="rb-5 mb-5 leading-16 text-[clamp(1.5rem,4vw,10rem)] text5xl font-bold md:mb-6 md:text7xl lg:text8xl"
            variants={fadeIn('center', 0.2)}
            initial="hidden"
            whileInView="show"
            exit="hidden"
          >
            Our team
          </motion.h2>
          <motion.p 
            className="md:text-md"
            variants={fadeIn('center', 0.25)}
            initial="hidden"
            whileInView="show"
            exit="hidden"
          >
            Dedicated professionals driving agricultural innovation and
            sustainable farming
          </motion.p>
        </div>
        <motion.div 
          className="grid grid-cols-1 items-start justify-center gap-x-8 gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          exit="hidden"
        >
          {profiles.map((prof) => {
            return(
            <motion.div 
              key={prof.index} 
              className={`flex flex-col text-center ${prof.index === 0 && 'md:col-span-3 mx-auto max-w-lg'}`}
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
              <div className="rb-5 mb-5 flex w-full items-center justify-center md:mb-6">
                <Image
                  width={800}
                  height={800}
                  src={prof.imgSrc}
                  alt="Profile placeholder image"
                  className="aspect-square size-full object-cover"
                />
              </div>
              <div className="mb-3 md:mb-4">
                <h5 className="text-md font-semibold md:text-lg">{prof.profName}</h5>
                <h6 className="md:text-md">{prof.role}</h6>
              </div>
              <p>
                {prof.desc}
              </p>
              <div className="mt-6 grid grid-flow-col grid-cols-[max-content] gap-[0.875rem] self-center">
                <a href="#">
                  <BiLogoLinkedinSquare color="orange" className="size-6" />
                </a>
                <a href="#">
                  <FaXTwitter color="orange" className="size-6 p-0.5" />
                </a>
                <a href="#">
                  <BiLogoDribbble color="orange" className="size-6" />
                </a>
              </div>
            </motion.div>
            )
          })
          }
        </motion.div>
        <motion.div 
          className="mx-auto mt-14 w-full max-w-md text-center md:mt-20 lg:mt-24"
          variants={fadeIn('center', 0.2)}
          initial="hidden"
          whileInView="show"
          exit="hidden"
        >
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            Join our team
          </h4>
          <p className="md:text-md">
            Passionate about agriculture? Explore career opportunities with us
          </p>
          <div className="mt-6 flex items-center justify-center gap-x-4 text-center md:mt-8">
            <Button 
              className="hover:bg-mint-light rounded-[999px]"
              title="View positions" 
              variant=""
              onClick={() => router.push('/contact')}
            >
              View positions
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
