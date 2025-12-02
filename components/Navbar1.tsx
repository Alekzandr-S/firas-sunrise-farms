"use client";

import { useMediaQuery } from "@relume_io/relume-ui";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
// import { RxChevronDown } from "react-icons/rx";
import { Button } from "./ui/button";
import { menuData2 } from "./Navbar/menuData";
import { useRouter } from "next/navigation";

const useAzan = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 991px)");
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const openOnMobileDropdownMenu = () => {
    setIsDropdownOpen((prev) => !prev);
  };
  const openOnDesktopDropdownMenu = () => {
    !isMobile && setIsDropdownOpen(true);
  };
  const closeOnDesktopDropdownMenu = () => {
    !isMobile && setIsDropdownOpen(false);
  };
  const animateMobileMenu = isMobileMenuOpen ? "open" : "close";
  const animateMobileMenuButtonSpan = isMobileMenuOpen
    ? ["open", "rotatePhase"]
    : "closed";
  const animateDropdownMenu = isDropdownOpen ? "open" : "close";
  const animateDropdownMenuIcon = isDropdownOpen ? "rotated" : "initial";
  return {
    toggleMobileMenu,
    openOnDesktopDropdownMenu,
    closeOnDesktopDropdownMenu,
    openOnMobileDropdownMenu,
    animateMobileMenu,
    animateMobileMenuButtonSpan,
    animateDropdownMenu,
    animateDropdownMenuIcon,
  };
};

export function Navbar1() {
  const router = useRouter();
  const useActive = useAzan();

  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    return () => {
      window.removeEventListener("scroll", handleStickyNavbar);
    };
  }, []);

  return (
    <section
      className={`
        flex fixed lg:opacity-100 md:bg-transparent z-9999 w-full top24 items-center 
        md:-top-5.5 borderb border-border-primary bgbackground-primary 
        lg:min-h-1 lg:px-[5%] lg:py-0  ${
          sticky && "shadow-lg backdrop-blur-sm"
        }`}
    >
      <div className="size-ful relative w-full md:px-4 text-mint-lightest lg:flex lg:items-center lg:justify-between">
        <div className="flex min-h16 relative -ml-2 sm:ml-0 w-full items-center justify-between pr[5%] md:px-[5%] md:min-h18 lg:min-h-full ">
          <Link
            href="/"
            className={`bg-mint-dark h-20 rounded block relative top-10 py-3 md:ml0
                } `}
          >
            <Image
              src="/assets/logo.PNG"
              alt="logo"
              width={40}
              height={20}
              className="w-full max-w8 sm:max-w-ful -ml2 dark:idden"
            />
          </Link>
          <button
            className="-mr-2 flex relative top-4 size-12 flex-col items-center justify-center lg:hidden"
            onClick={useActive.toggleMobileMenu}
          >
            <motion.span
              className="my-[3px] h-0.5 w-6 bg-black"
              animate={useActive.animateMobileMenuButtonSpan}
              variants={{
                open: { translateY: 8, transition: { delay: 0.1 } },
                rotatePhase: { rotate: -45, transition: { delay: 0.2 } },
                closed: {
                  translateY: 0,
                  rotate: 0,
                  transition: { duration: 0.2 },
                },
              }}
            />
            <motion.span
              className="my-[3px] h-0.5 w-6 bg-black"
              animate={useActive.animateMobileMenu}
              variants={{
                open: { width: 0, transition: { duration: 0.1 } },
                closed: {
                  width: "1.5rem",
                  transition: { delay: 0.3, duration: 0.2 },
                },
              }}
            />
            <motion.span
              className="my-[3px] h-0.5 w-6 bg-black"
              animate={useActive.animateMobileMenuButtonSpan}
              variants={{
                open: { translateY: -8, transition: { delay: 0.1 } },
                rotatePhase: { rotate: 45, transition: { delay: 0.2 } },
                closed: {
                  translateY: 0,
                  rotate: 0,
                  transition: { duration: 0.2 },
                },
              }}
            />
          </button>
        </div>
        <motion.div
          variants={{
            open: { height: "var(--height-open)", width: "var(--w-open)" },
            close: { height: "var(--height-close)", width: "var(--w-close)" },
          }}
          initial="close"
          exit="close"
          animate={useActive.animateMobileMenu}
          transition={{ duration: 0.4 }}
          className="overflow-hidden text-black px-[5%] max-w-7xl
           bg-mint-dark lg:bg-transparent lg:mt-16 lg:py-4 absolute lg:static 
           w-full right-2 rounded lg:backdrop-blurmd lg:shadowlg lg:flex lg:justify-center 
           lg:items-center 
            [--w-open:30dvw] [--height-open:auto]
            [--w-close:30dvw] [--height-close:0]
            lg:[--w-close:100dvw] lg:[--height-close:auto]
          "
        >
          {menuData2.map((menu) => {
            return (
              <a
                key={menu.id}
                href={menu.path}
                className="block py-1 sm:py-3 text-md first:pt-7 lg:px-4 lg:py-2 lg:text-base first:lg:pt-2"
              >
                {menu.title}
              </a>
            );
          })}

          <div className="mt6 pb-3 flex flex-row items-center gap-4 lg:ml-4 lg:mt0 ">
            {/* <Button
              title="Contact"
              variant="ghost"
              size="sm"
              className=""
            >
              Contact
            </Button> */}
            <Button
              onClick={() => router.push("/contact")}
              title="Order"
              size="sm"
              className="bg-orange rounded-[999px]"
            >
              Order
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}