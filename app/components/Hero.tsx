'use client'

import React from 'react'
import {motion} from 'motion/react';
import { fadeIn } from '@/hooks/variants';
import styles from "./landingPage.module.css";
import Image from 'next/image';


const Hero = () => {
  return (
    <section id='JazSystems
    ' className="text-white relative flex flex-col justify-center items-center min-h-screen text-center">
      <div className="hero-bg">
        <Image
          width={800}
          height={800}
          src="/assets/why-hero.JPG" 
          alt="Chickens and eggs at sunrise on the farm" />
        <div className="overlay"></div>
      </div>
      <div className="hero-inner revea-stagger">
        <motion.div 
          className="sale-tag"
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          FARM FRESH
        </motion.div>
        <motion.h1 
          className='hero-title'
          // className="block md:leading-14 lg:leading24 font-extrabold xs:max-[445px]: sm:text-4xl text-[clamp(2rem,5vw,16rem)] leading8 lg:leading-none font-poppins"
          variants={fadeIn('up', 0.35)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          FIRAS Sunrise Farms
          <span 
            // className="block text-outline text-transparen sm:text-4xl"
            className="outline block leading-10 sm:leading-normal"
          > Poultry <span className=''>•</span> Dairy <span className=''>•</span> Vegetables</span>
        </motion.h1>
        <motion.p 
          className="hero-sub"
          variants={fadeIn('up', 0.45)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          Fresh from the sunrise to your table, nourishing families with premium poultry, eggs, vegetables and dairy.
        </motion.p>

        <motion.div className="hero-actions min-w-sm">
          <motion.a 
            href="#" 
            className="btn btn-solid"
            variants={fadeIn('left', 0.55)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            Contact
          </motion.a>
          <motion.a 
            href="/products" 
            className="btn btn-ghost"
            variants={fadeIn('right', 0.55)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            Products
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero