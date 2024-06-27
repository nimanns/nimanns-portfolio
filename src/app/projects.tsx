"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef, useCallback } from "react";
import { cuteBezier } from "./utils/utils";
import { useThrottle } from "./utils/clientUtils";
import type { Project, Direction } from "./types";
import ProjectComponent from "./components/Project";
import type { Variants, Transition } from "framer-motion";
import { useSwipeable } from "react-swipeable";

export default function Projects({ projects }: { projects: Project[] }) {
  const handlers = useSwipeable({
    onSwipedRight: (e) => {
      debouncedMoveProject("previous");
    },
    onSwipedLeft: (e) => {
      debouncedMoveProject("next");
    },
  });
  //states
  const [index, setIndex] = useState<number>(0);
  const [direction, setDirection] = useState<number>(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  //refs
  const effectsRan = useRef<boolean>(false);

  //callbacks
  const moveProject = useCallback((direction: Direction) => {
    switch (direction) {
      case "next":
        setDirection(1);
        setIndex((prevIndex) => (prevIndex + 1) % projects.length);
        break;
      case "previous":
        setDirection(-1);
        setIndex((prevIndex) => {
          console.log(prevIndex);
          return prevIndex === 0 ? projects.length - 1 : prevIndex - 1;
        });
        break;
      default:
        break;
    }
  }, []);

  //debounced functions
  const debouncedMoveProject = useThrottle(moveProject, 2000);

  //use effect
  useEffect(() => {
    if (effectsRan.current) return;
    effectsRan.current = true;
    window.addEventListener("keyup", (e) => {
      switch (e.key) {
        case "ArrowRight":
          debouncedMoveProject("next");
          break;
        case "ArrowLeft":
          debouncedMoveProject("previous");
        default:
          break;
      }
    });
  }, []);

  const variants: Variants = {
    enter: (dir) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: "0%",
      opacity: 1,
    },
    exit: (dir) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  const transition: Transition = {
    type: "tween",
    ease: cuteBezier,
    duration: 0.5,
  };

  return (
    <>
      {projects && (
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            {...handlers}
            key={projects[index].name}
            className="absolute flex flex-col items-center min-h-screen bg-gray-800 text-text-color gap-4 h-full w-[80%] max-w-7xl p-10 shadow-[0_0_40px_-6px_rgba(0,0,0,0.4)]"
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={transition}
          >
            <ProjectComponent project={projects[index]} />
          </motion.div>
        </AnimatePresence>
      )}
      <motion.div className="absolute bottom-10 w-fit h-50 flex flex-row justify-center contents-center">
        <motion.div variants={{}} id="left-arrow" className="w-10"></motion.div>
        <p className="text-2xl w-fit">
          Use arrow keys or swipe left and right to move between projects
        </p>
        <motion.div id="right-arrow" className="w-10 "></motion.div>
      </motion.div>
    </>
  );
}
