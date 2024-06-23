"use client"

import type { Project } from "../types";
import Image from "next/image";
import {motion, AnimatePresence} from "framer-motion";
import {useState} from "react";

export default function Project({ projects }: { projects: Project[] }) {
	const [index, setIndex] = useState<Number>(0);	
	const [direction, setDirection] = useState<Number>(0);
	const nextProject = ()=>{
		setDirection(1);
		setIndex((index + 1) % projects.length)
	}

  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      x: "0%",
      opacity: 1
    },
    exit: (dir) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0
    })
  };

	const cuteBezier = [0.34, 1.56, 0.64, 1];

  return (
	<>
	{ projects &&
			<AnimatePresence initial={false} custom={direction}>
				<motion.div
					key={projects[index].name}
					className="absolute flex flex-col items-center justify-center min-w-full min-h-screen bg-gray-800 text-white gap-4"
					custom={direction}
					variants={variants}
					initial="enter"
					animate="center"
					exit="exit"
					transition={{type:"tween", ease: cuteBezier, duration: 0.5}}
				>
					<Image
						width={150}
						height={150}
						alt="project image"
						src={projects[index].image}
					></Image>
					<h2>{projects[index].name}</h2>
				<button onClick={nextProject}>Next</button>
				</motion.div>
			</AnimatePresence>
		}
  </>
	);
}
