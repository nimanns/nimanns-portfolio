"use client";

import { Transition, Variants, motion } from "framer-motion";

const variants: Variants = {
  hidden: { opacity: 0, x: -200, y: 250 },
  enter: { opacity: 1, x: 0, y: 0 },
};

const transition_options: Transition = {
  type: "linear",
  duration: 0.5,
};

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.main
			class="overflow-hidden"
      variants={variants}
      initial="hidden"
      animate="enter"
      transition={transition_options}
    >
      {children}
    </motion.main>
  );
}
