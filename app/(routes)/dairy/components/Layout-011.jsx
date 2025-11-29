'use client'

import React from 'react'
import { fadeIn } from "@/hooks/variants";
import { motion } from "motion/react";
import styles from "../../../components/landingPage.module.css";

const Layout011 = () => {
  return (
    <>
      <section className="dairy-features revea" id="dairy-services">
        <div className='containe mx-auto max-w-2xl'>
          <div className="pf-wra revea-stagger">
            <motion.div
              className="pf-intro mb-4 gap-4"
              variants={fadeIn('center', 0.2)}
              initial="hidden"
              whileInView="show"
              exit="hidden"
            >
              <h3>QUALITY DAIRY</h3>
              <p className="muted">FRESH & PURE</p>
              <p>
                Our cows are pasture fed, well cared for, and milked daily to ensure freshness and nutritional value.
              </p>
              <a href="/contact" className="font-bold rounded-[999px] mb-4 py-4 px-6 bg-orange">Our Ranch</a>
            </motion.div>
            <ul className="pf-grid">
              <motion.li
                className="pf-item"
                variants={fadeIn('center', 0.3)}
                initial="hidden"
                whileInView="show"
                exit="hidden"
              >
                {/* <!-- Cow Head Icon --> */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64"
                  fill="none" stroke="#ff7a1a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="32" cy="32" r="14"/>
                  <path d="M18 24c-4-2-6-6-6-10M46 24c4-2 6-6 6-10"/>
                  <circle cx="26" cy="30" r="2"/>
                  <circle cx="38" cy="30" r="2"/>
                </svg>
                <h4>Healthy Cows</h4>
                <p>Our cows are pasture raised, grass fed, and treated with care.</p>
              </motion.li>
              <motion.li
                className="pf-item"
                variants={fadeIn('center', 0.3)}
                initial="hidden"
                whileInView="show"
                exit="hidden"
              >
                {/* <!-- Milk Bottle Icon --> */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64"
                  stroke="#0f4d3f" fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="22" y="10" width="20" height="44" rx="6"/>
                  <line x1="22" y1="18" x2="42" y2="18"/>
                </svg>
                <h4>Fresh Milk</h4>
                <p>Pure and creamy milk, bottled at the source for maximum freshness.</p>
              </motion.li>
              <motion.li
                className="pf-item"
                variants={fadeIn('center', 0.3)}
                initial="hidden"
                whileInView="show"
                exit="hidden"
              >
                {/* <!-- Cheese Wheel Icon --> */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64"
                  stroke="#0f4d3f" fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="32" cy="32" r="20"/>
                  <path d="M32 12v40M12 32h40"/>
                </svg>
                <h4>Dairy Products</h4>
                <p>fresh and sour milk made with traditional farm methods.</p>
              </motion.li>
              <motion.li
                className="pf-item"
                variants={fadeIn('center', 0.3)}
                initial="hidden"
                whileInView="show"
                exit="hidden"
              >
                {/* <!-- Delivery Truck Icon --> */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64"
                  stroke="#0f4d3f" fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="28" width="32" height="16"/>
                  <polyline points="36,28 52,28 60,36 60,44 36,44"/>
                  <circle cx="16" cy="44" r="4"/>
                  <circle cx="48" cy="44" r="4"/>
                </svg>
                <h4>Fast Delivery</h4>
                <p>Delivered fresh to your doorstep, keeping it cold and nutritious.</p>
              </motion.li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

export default Layout011