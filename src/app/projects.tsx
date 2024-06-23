"use client"

import {motion, AnimatePresence} from "framer-motion";
import {useState, useEffect, useRef, useCallback} from "react";
import {useThrottle} from "./utils/utils.ts";
import type { Project } from "./types";
import ProjectComponent from "./components/Project.tsx";

export default function Projects({projects} : {projects: Project[]}){
	const [index, setIndex] = useState<number>(0);	
	const [direction, setDirection] = useState<number>(0);
	const effectsRan = useRef<boolean>(false);

	const nextProject = useCallback(()=>{
		setDirection(1);
		setIndex((prevIndex) => (prevIndex + 1) % projects.length);
	}, [projects.length]);
	
	const debouncedNextProject = useThrottle(nextProject, 600);

	useEffect(()=>{
			if(effectsRan.current) return;
			effectsRan.current = true;
			window.addEventListener("keyup", (e)=>{
				switch(e.key){
					case "ArrowRight":
						debouncedNextProject();
						break;
					default:
						break;
				}
			})
		}, []);
	
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
	return(
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
			<ProjectComponent project={projects[index]}/>
			<button onClick={nextProject}>Next</button>
			</motion.div>
		</AnimatePresence>
	}
	</>
	)
}
