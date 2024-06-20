import Image from "next/image";
import { Project } from "./types";
import { useEffect, useState } from "react";
import { fetchData } from "./utils/utils";

export default async function Home() {
  // const projects: Project[] = await fetchData();
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

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-14 gap-12">
      <h1>Projects</h1>
      <p>A new portfolio page.</p>
      {projects.map((project) => (
        <div
          key={project.name}
          className="flex flex-col items-center justify-center"
        >
          <Image
            width={150}
            height={150}
            alt="project image"
            src={project.image}
          ></Image>
          <h2>{project.name}</h2>
        </div>
      ))}
    </main>
  );
}
