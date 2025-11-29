"use client";

import { Button, useMediaQuery } from "@relume_io/relume-ui";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { RxChevronRight } from "react-icons/rx";

const FeatureCard = ({ feature, children }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });
  const animatedWidth = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
  });
  const width = { width: useTransform(animatedWidth, [0, 1], ["0%", "100%"]) };
  return (
    <div className="flex flex-col items-start justify-center py-8 md:py-0">
      <div className="mt-10 flex text-[6rem] font-bold leading-[1] md:mt-0 md:hidden md:text-[14rem]">
        {feature.number}
      </div>
      <div
        ref={ref}
        className="mb-8 mt-8 h-0.5 w-full bg-neutral-lighter md:mt-0"
      >
        <motion.div className="h-0.5 w-8 bg-neutral-black" style={width} />
      </div>
      {children}
    </div>
  );
};

const useJaz = () => {
  const ref = useRef(null);
  const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 991px)");
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = isTablet
    ? useTransform(
        scrollYProgress,
        [0.3, 0.4, 0.5, 0.6, 0.7, 0.8],
        ["0%", "-25%", "-25%", "-50%", "-50%", "-75%"]
      )
    : useTransform(
        scrollYProgress,
        [0.3, 0.4, 0.5, 0.6, 0.7, 0.8],
        ["0%", "-20%", "-25%", "-50%", "-50%", "-75%"]
      );
  return { ref, y };
};

export function Layout03() {
  const useScroll = useJaz();
  return (
    <section
      className="px-[5%] bg-green text-white py-16 md:py-24 lg:py-28"
      ref={useScroll.ref}
    >
      <div className="container">
        <div className="relative grid auto-cols-fr grid-cols-1 items-start gap-x-8 gap-y-12 md:grid-cols-[0.75fr_1fr] md:gap-y-16 lg:grid-cols-[max-content_1fr] lg:gap-x-20">
          <div className="static top-[20%] hidden h-56 overflow-hidden md:sticky md:flex md:items-start">
            <h1 className="text-[6rem] font-bold leading-[1] md:text-[14rem]">
              0
            </h1>
            <motion.div className="text-center" style={{ y: useScroll.y }}>
              <h1 className="text-[6rem] font-bold leading-[1] md:text-[14rem]">
                {1}
              </h1>
              <h1 className="text-[6rem] font-bold leading-[1] md:text-[14rem]">
                {2}
              </h1>
              <h1 className="text-[6rem] font-bold leading-[1] md:text-[14rem]">
                {3}
              </h1>
              <h1 className="text-[6rem] font-bold leading-[1] md:text-[14rem]">
                {4}
              </h1>
            </motion.div>
          </div>
          <div className="grid auto-cols-fr grid-cols-1 gap-x-12 gap-y-12 md:gap-x-28 md:gap-y-28">
            <FeatureCard
              feature={{
                number: "01",
                tagline: "Tagline",
                heading: "Medium length section heading goes here",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
                buttons: [
                  { title: "Button", variant: "secondary" },
                  {
                    title: "Button",
                    variant: "link",
                    size: "link",
                    iconRight: <RxChevronRight />,
                  },
                ],
              }}
            >
              <h2 className="hidden">01</h2>
              <div className="hidde" />
              <p className="mb-3 font-semibold md:mb-4">Nutrients</p>
              <h2 className="rb-5 mb-5 leading-10 sm:leading-16 text-[clamp(1.5rem,4vw,10rem)] text5xl font-bold md:mb-6 md:text7xl lg:text8xl">
                Packed with essential vitamins and minerals
              </h2>
              <p className="md:text-md">
                Our dairy products deliver a powerful nutritional punch. Rich in
                calcium, protein, and vital micronutrients that support strong
                bones and healthy living.
              </p>
            </FeatureCard>
            <FeatureCard
              feature={{
                number: "02",
                tagline: "Tagline",
                heading: "Medium length section heading goes here",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
                buttons: [
                  { title: "Button", variant: "secondary" },
                  {
                    title: "Button",
                    variant: "link",
                    size: "link",
                    iconRight: <RxChevronRight />,
                  },
                ],
              }}
            >
              <h2 className="hidden">01</h2>
              <div className="hidden" />
              <p className="mb-3 font-semibold md:mb-4">Nutrients</p>
              <h2 className="rb-5 mb-5 leading-10 sm:leading-16 text-[clamp(1.5rem,4vw,10rem)] text5xl font-bold md:mb-6 md:text7xl lg:text8xl">
                Sourced from our own sustainable pastures
              </h2>
              <p className="md:text-md">
                Our dairy products deliver a powerful nutritional punch. Rich in
                calcium, protein, and vital micronutrients that support strong
                bones and healthy living.
              </p>
            </FeatureCard>
            <FeatureCard
              feature={{
                number: "03",
                tagline: "Tagline",
                heading: "Medium length section heading goes here",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
                buttons: [
                  { title: "Button", variant: "secondary" },
                  {
                    title: "Button",
                    variant: "link",
                    size: "link",
                    iconRight: <RxChevronRight />,
                  },
                ],
              }}
            >
              <h2 className="hidden">01</h2>
              <div className="hidden" />
              <p className="mb-3 font-semibold md:mb-4">Nutrients</p>
              <h2 className="rb-5 mb-5 leading-10 sm:leading-16 text-[clamp(1.5rem,4vw,10rem)] text5xl font-bold md:mb-6 md:text7xl lg:text8xl">
                Minimal processing, maximum flavor
              </h2>
              <p className="md:text-md">
                Our milk goes from cow to bottle with minimal intervention. We preserve the natural taste and nutritional integrity of our dairy.
              </p>
            </FeatureCard>
            <FeatureCard
              feature={{
                number: "04",
                tagline: "Tagline",
                heading: "Medium length section heading goes here",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
                buttons: [
                  { title: "Button", variant: "secondary" },
                  {
                    title: "Button",
                    variant: "link",
                    size: "link",
                    iconRight: <RxChevronRight />,
                  },
                ],
              }}
            >
              <h2 className="hidden">01</h2>
              <div className="hidden" />
              <p className="mb-3 font-semibold md:mb-4">Nutrients</p>
              <h2 className="rb-5 mb-5 leading-10 sm:leading-16 text-[clamp(1.5rem,4vw,10rem)] text5xl font-bold md:mb-6 md:text7xl lg:text8xl">
                Environmentally conscious dairy
              </h2>
              <p className="md:text-md">
                We implement eco-friendly practices that protect our land and support local ecosystems. Our farming methods minimize environmental impact.
              </p>
            </FeatureCard>
          </div>
        </div>
      </div>
    </section>
  );
}
