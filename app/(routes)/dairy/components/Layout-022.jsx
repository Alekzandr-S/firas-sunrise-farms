'use client'

import React from 'react'
import styles from '../../../components/landingPage.module.css';
import { fadeIn } from "@/hooks/variants";
import { motion } from "motion/react";
import Image from 'next/image';

const Layout022 = () => {
  return (
    <>
      <section className="py-16 revea px-[5%]">
        <div className='sm:containe max-w-5xl mx-auto'>
          <div className=" flex flex-col justify-center items-center md:flex-row  
            ">
            <motion.div
              className="ph-text max-w-"
              variants={fadeIn('center', 0.2)}
              initial="hidden"
              whileInView="show"
              exit="hidden"
            >
              <p className="ph-eyebrow">Fresh Milk for You</p>
              <h2 className="ph-title">EVERYDAY!</h2>
              <p className="font-semibold pb-6">
                Taste our wholesome dairy products, pure, creamy, and packed with natural goodness, delivered straight from the farm.
              </p>
              <a href="/products" className="btn btn-solid ph-cta">Our Products</a>
            </motion.div>
            <motion.div
              className="max-w-sm sm:max-w-2xl mx-auto"
              variants={fadeIn('center', 0.28)}
              initial="hidden"
              whileInView="show"
              exit="hidden"
            >
              <Image
                width={1800}
                height={1800}
                src="/assets/splash.PNG" alt="Cows and milk" />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Layout022