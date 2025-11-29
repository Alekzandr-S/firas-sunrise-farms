import { Variants } from "framer-motion";
type Direction = "up" | "down" | "left" | "right" | "center";

export const fadeIn = (direction: Direction, delay: number): Variants => {    return {
        hidden: {
            y: direction === 'up' ? 80 : direction === 'down' ? -80 : 0,
            opacity: 0,
            x: direction === 'left' ? 80 : direction === 'right' ? -80 : 0,
            transition: {
                type: 'spring' as const,
                duration: 1.2,
                delay: delay,
                ease: [0.25, 0.6, 0.3, 0.8],
            },
        },
        show: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                type: 'spring' as const,
                duration: 1,
                delay: delay,
                ease: [0.25, 0.25, 0.25, 0.75],
            },
        },
        initial: {}
    };
};

export const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

export const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};