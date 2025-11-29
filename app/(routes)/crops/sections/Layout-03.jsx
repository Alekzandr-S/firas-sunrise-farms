"use client";

import { PiTruckTrailerBold } from "react-icons/pi";
import { useMediaQuery } from "@relume_io/relume-ui";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { RxChevronRight } from "react-icons/rx";
import { Button } from "@/components/ui/button";
import { fadeIn } from "@/hooks/variants";
import { useRouter } from "next/navigation";
import Image from "next/image";

const ConditionalRender = ({ condition, children }) => {
  return condition ? <>{children}</> : null;
};

const useRelume = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const heroWidth = useTransform(scrollYProgress, [0, 1], ["100vw", "55vw"]);
  const scaleHeight = useTransform(scrollYProgress, [0, 1], ["100vh", "90vh"]);
  const position = useTransform(scrollYProgress, [0, 1], ["-5%", "0%"]);
  const cardsXPosition = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);
  const cardsWidth = useTransform(scrollYProgress, [0, 1], ["100vw", "35vw"]);
  const cardPositions = (index) =>
    useTransform(
      scrollYProgress,
      [0, 0 + index * 0.01, 0.2 + index * 0.5, 1],
      ["100%", "100%", "0%", "0%"],
    );
  const motionHeroStyles = {
    width: heroWidth,
    height: scaleHeight,
    y: position,
    x: position,
  };
  const motionCardsStyles = {
    width: cardsWidth,
    height: scaleHeight,
    y: position,
    x: cardsXPosition,
  };
  return { containerRef, cardPositions, motionHeroStyles, motionCardsStyles };
};

const useMobile = () => {
  const isMobile = useMediaQuery("(max-width: 767px)");
  return { isMobile };
};

const useTablet = () => {
  const isTablet = useMediaQuery("(min-width: 768px)");
  return { isTablet };
};

export default function Layout518() {
  const router = useRouter();
  const renderTablet = useTablet();
  const renderMobile = useMobile();
  const useScroll = useRelume();
  return (
    <section
      
      ref={useScroll.containerRef}
      className="relative px-[5%]  py-16 md:px-0 md:py-24 lg:h-[250vh] lg:py-0"
    >
      <ConditionalRender condition={renderMobile.isMobile}>
        <div className="min-w-x text-white flex justify-center items-center">
          <div className="relative mb-6 flex items-center justify-center px-6 py-16 md:mb-8 md:px-8 md:py-24">
            <div className="max-w-md text-center text-text-alternative">
              <p className="mb-3 font-semibold md:mb-4">Sustainable</p>
              <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                Nurturing the land for future generations
              </h2>
              <p className="md:text-md">
                We practice regenerative agriculture that respects the earth.
                Our methods protect soil health and biodiversity.
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
                <Button title="Button" variant="secondary-alt">
                  Discover
                </Button>
                <Button
                  title="Button"
                  variant="link-alt"
                  size="link"
                >
                  More <RxChevronRight />
                </Button>
              </div>
            </div>
            <div className="absolute inset-0 -z-10">
              <img
                width={1800}
                height={1800}
                src="/assets/images/nurturing-land2.jpg"
                className="size-full object-cover"
                alt="Icon placeholder image"
              />
              <div className="absolute inset-0 bg-black/50" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-6 md:gap-y-8">
          <div className="min-w-x flex border border-border-primary p-0 sm:p-8 text-center">
            <div className="mx-auto flex max-w-md flex-col items-center justify-center lg:max-w-full">
              <div className="mb-3 md:mb-4">
                 <PiTruckTrailerBold size={40}/>
              </div>
              <h3 className="mb-3 text-4xl font-bold leading-[1.2] md:mb-4 md:text-5xl">
                Responsible farming
              </h3>
              <p>
                Minimizing environmental impact 
                through careful land management and ecological practices.
              </p>
              <motion.div 
                className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8"
                variants={fadeIn('center', 0.2)}
                initial="hidden"
                whileInView="show"
                exit="hidden"
              >
                <Button onClick={() => router.push("/contact")} title="Discover" variant="secondary-alt">
                  Discover
                </Button>
                <Button
                  title="More"
                  variant="link-alt"
                  size="link"
                  onClick={() => router.push("/contact")}
                  >
                  More <RxChevronRight />
                </Button>
              </motion.div>
            </div>
          </div>
          <div className="min-w-x flex border border-border-primary p-0 sm:p-8 text-center">
            <div className="mx-auto flex max-w-md flex-col items-center justify-center lg:max-w-full">
              <div className="mb-3 md:mb-4">
                 <PiTruckTrailerBold size={40}/>
              </div>
              <h3 className="mb-3 text-4xl font-bold leading-[1.2] md:mb-4 md:text-5xl">
                Community impact
              </h3>
              <p>
                Supporting local economies and providing fresh, 
                nutritious food to nearby communities.
              </p>
              <motion.div 
                  className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8"
                  variants={fadeIn('center', 0.2)}
                  initial="hidden"
                  whileInView="show"
                  exit="hidden"
                >
                  <Button onClick={() => router.push("/contact")} title="Discover" variant="secondary-alt">
                    Discover
                  </Button>
                  <Button
                    title="More"
                    variant="link-alt"
                    size="link"
                    onClick={() => router.push("/contact")}
                    >
                    More <RxChevronRight />
                  </Button>
                </motion.div>
            </div>
          </div>
        </div>
      </ConditionalRender>
      <ConditionalRender condition={renderTablet.isTablet}>
        <div 
          className="
            mx-auto w-[90vw] lg:sticky lg:top-0 
            lg:flex lg:h-screen lg:w-full lg:items-center 
            lg:justify-center lg:overflow-hidden
          "
        >
          <div className="
            grid grid-cols-1 gap-y-6 md:gap-y8 lg:h-[90vh] 
            lg:w-[90vw] lg:grid-cols-[55vw_35vw] lg:gap-y0
          ">
            <motion.div
              style={useScroll.motionHeroStyles}
              className="relative flex items-center justify-center px-6 py-16 md:px-8 md:py-24 lg:p-3"
            >
              <motion.div className="max-w-2xl text-white text-center text-text-alternative">
                <motion.p 
                  className="mb-3 font-semibold md:mb-4"
                  variants={fadeIn('center', 0.2)}
                  initial="hidden"
                  whileInView="show"
                  exit="hidden"
                >Sustainable</motion.p>
                <motion.h2 
                  className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text- 8xl"
                  variants={fadeIn('center', 0.2)}
                  initial="hidden"
                  whileInView="show"
                  exit="hidden"
                >
                  Nurturing the land for future generations
                </motion.h2>
                <motion.p 
                  className="md:text-md"
                  variants={fadeIn('center', 0.2)}
                  initial="hidden"
                  whileInView="show"
                  exit="hidden"
                >
                  We practice regenerative agriculture that respects the earth.
                  Our methods protect soil health and biodiversity.
                </motion.p>
                <motion.div 
                  className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8"
                  variants={fadeIn('center', 0.2)}
                  initial="hidden"
                  whileInView="show"
                  exit="hidden"
                >
                  <Button onClick={() => router.push("/contact")} title="Discover" variant="secondary-alt">
                    Discover
                  </Button>
                  <Button
                    title="More"
                    variant="link-alt"
                    size="link"
                    onClick={() => router.push("/contact")}
                    >
                    More <RxChevronRight />
                  </Button>
                </motion.div>
              </motion.div>
              <div className="absolute inset-0 -z-10">
                <Image
                  width={1800}
                  height={1800}
                  src="/assets/images/nurturing-land2.jpg"
                  className="size-full object-cover"
                  alt="Icon placeholder image"
                />
                <div className="absolute inset-0 bg-black/50" />
              </div>
            </motion.div>
            <motion.div
              style={useScroll.motionCardsStyles}
              className="grid grid-cols-1 gap-y-6 md:gap-y-8 lg:pl-8"
            >
              <motion.div
                style={{ x: useScroll.cardPositions(0) }}
                className="flex h-[350px] border p-8 text-center lg:max-w-[640px]"
              >
                <div className="mx-auto flex max-w-md flex-col items-center justify-center lg:max-w-full">
                  <div className="mb-3 md:mb-4">
                    <PiTruckTrailerBold size={40}/>
                  </div>
                  <h3 className="mb-3 text4xl font-bold leading-[1.2] md:mb-4 md:text5xl lg:text6xl text-[clamp(1.2rem,2vw,3rem)]">
                    Responsible farming
                  </h3>
                  <p>
                    Minimizing environmental impact through careful land
                    management and ecological practices.
                  </p>
                  <a
                    className="focus-visible:ring-border-primary inline-flex items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-0 text-text-primary gap-2 p-0 mt-6 md:mt-8"
                    href="/contact"
                  >
                    Learn
                    <RxChevronRight />
                  </a>
                </div>
              </motion.div>
              <motion.div
                style={{ x: useScroll.cardPositions(1) }}
                className="flex border  p-8 text-center lg:max-w-[640px]"
              >
                <div className="mx-auto flex max-w-md flex-col items-center justify-center lg:max-w-full">
                  <div className="mb-3 md:mb-4">
                    <PiTruckTrailerBold size={40}/>
                  </div>
                  <h3 className="mb-3 text4xl font-bold leading-[1.2] md:mb-4 md:text5xl lg:text6xl text-[clamp(1.2rem,2vw,3rem)]">
                    Community impact
                  </h3>
                  <p>
                    Supporting local economies and providing fresh, nutritious
                    food to nearby communities.
                  </p>
                  <a
                    className="focus-visible:ring-border-primary inline-flex items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-0 text-text-primary gap-2 p-0 mt-6 md:mt-8"
                    href="/contact"
                  >
                    Connect
                    <RxChevronRight />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </ConditionalRender>
    </section>
  );
}
