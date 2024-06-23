
import type { Project } from "../types";
import Image from "next/image";

export default function Project({ project }: { project: Project}) {
  return (
	<div className="w-full h-full">
		<Image
			width={150}
			height={150}
			alt="project image"
			src={project.image}
		></Image>
		<p>{project?.description_1}</p>
		<h2>{project.name}</h2>
  </div>
	);
}
