"use client"

import {motion, AnimatePresence} from "framer-motion";
import {useState, useEffect, useRef, useCallback} from "react";
import {useThrottle} from "./utils/utils.ts";
import type { Project, Direction } from "./types";
import ProjectComponent from "./components/Project.tsx";

export default function Projects({projects} : {projects: Project[]}){
	const [index, setIndex] = useState<number>(0);	
	const [direction, setDirection] = useState<number>(0);
	const effectsRan = useRef<boolean>(false);
	const moveProject = useCallback((direction:Direction)=>{
		switch(direction){
			case "next":
				setDirection(1);
				setIndex((prevIndex) => (prevIndex + 1) % projects.length);
				break;
			case "previous":
				setDirection(-1); 
				setIndex((prevIndex)=> prevIndex === 0 ? projects.length-1 :(prevIndex - 1)  );
				break;
			default:
				break;
		}
	},[]);
	const debouncedMoveProject = useThrottle(moveProject, 600);

	useEffect(()=>{
			if(effectsRan.current) return;
			effectsRan.current = true;
			window.addEventListener("keyup", (e)=>{
				switch(e.key){
					case "ArrowRight":
						debouncedMoveProject("next");
						break;
					case "ArrowLeft":
						debouncedMoveProject("previous");
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
			</motion.div>
		</AnimatePresence>
	}
	</>
	)
}
