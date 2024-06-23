import Image from "next/image";
import type { Project } from "./types";
import ProjectComponent from "./components/Project";
import { useEffect, useState } from "react";
import { fetchData } from "./utils/utils";

export default async function Home() {
  //const projects: Project[] = await fetchData();
  const projects: Project[] = [
    {
      name: "Project 1",
      image: "https://via.placeholder.com/150",
      link: "https://www.google.com",
    },
    {
      name: "Project 2",
      image: "https://via.placeholder.com/150",
      link: "https://www.google.com",
    },
    {
      name: "Project 3",
      image: "https://via.placeholder.com/150",
      link: "https://www.google.com",
    },
    {
      name: "Project 4",
      image: "https://via.placeholder.com/150",
      link: "https://www.google.com",
    },
    {
      name: "Project 5",
      image: "https://via.placeholder.com/150",
      link: "https://www.google.com",
    },
    {
      name: "Project 6",
      image: "https://via.placeholder.com/150",
      link: "https://www.google.com",
    },
  ];
	let index = 0;

  return (
    <main className="overflow-x-hidden flex min-h-screen flex-row items-center justify-between gap-12">
			<ProjectComponent
				projects={projects}
			></ProjectComponent>
    </main>
  );
}
