"use client";

import type { Project } from "../types";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import type { Variants, Transition } from "framer-motion";
import { cuteBezier } from "../utils/utils";

export default function Project({ project }: { project: Project }) {
  const main_variants: Variants = {
    enter: {
      x: 0,
      y: "-100%",
    },
    center: {
      x: 0,
      y: 0,
    },
    exit: {
      x: 0,
      y: "-100%",
    },
  };
  const main_transition: Transition = {
    type: "tween",
    ease: cuteBezier,
    duration: 0.9,
  };

  const description_variants: Variants = {
    enter: {
      y: "100%",
      opacity: 0,
    },
    center: {
      y: 0,
      opacity: 1,
    },
    exit: {
      y: "100%",
      opacity: 0,
    },
  };
  const description_transition: Transition = {
    type: "tween",
    ease: "easeInOut",
    duration: 1,
  };

  return (
    <motion.div className="w-full h-full flex flex-col ">
      <motion.div
        className="flex flex-col sm:flex-row justify-center items-center"
        variants={main_variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={main_transition}
      >
        <a href={project.url} target="_blank">
          <motion.h1 className="hover:underline p-10 text-[32px] sm:p-3 w-fit h-fit sm:text-[48px]">
            {project.name}
          </motion.h1>
        </a>
        <Image
          className="sm:ml-auto"
          width={150}
          height={150}
          alt="project image"
          src={project.image}
        ></Image>
      </motion.div>
      <motion.div className="flex flex-row w-full h-fit gap-10 items-center justify-center p-10">
        <motion.div
          className="absolute h-full w-full object-cover z-[-1] blur-xl h-full mix-blend-add"
          animate={["animate", "loop"]}
          variants={{
            initial: { opacity: 0, y: 50 },
            animate: { opacity: 1, y: 0 },
            loop: {
              y: [-10, 20, -10],
              transition: {
                duration: 20,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              },
            },
          }}
          transition={{ animate: { duration: 0.5 }, loop: { delay: 0.5 } }}
        >
          <Image
            className="w-full h-full object-cover opacity-40 absolute top-[250px]"
            width={0}
            height={0}
            sizes="100vw"
            alt="project image"
            src={project.image}
          ></Image>
        </motion.div>
      </motion.div>
      <motion.h2
        variants={description_variants}
        transition={description_transition}
        initial="enter"
        animate="center"
        exit="exit"
        id="project-title"
        className="relative lg:text-5xl md:text-4xl sm:text-3xl text-lg"
      >
        {project?.description_1}
      </motion.h2>
      <motion.p
        className="mt-10 lg:text-3xl md:text-2xl sm:text-xl text-lg"
        variants={description_variants}
        transition={description_transition}
      >
        {project?.description_2}
      </motion.p>
    </motion.div>
  );
}
