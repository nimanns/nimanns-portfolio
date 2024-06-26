import Image from "next/image";
import type { Project } from "./types";
import { useEffect, useState } from "react";
import { fetchData } from "./utils/utils";
import Projects from "./projects";
import { projects_db } from "./projects_db";

export default async function Home() {
  //const projects: Project[] = await fetchData();
  let index = 0;

  return (
    <main className="relative overflow-hidden flex min-h-screen flex-row items-center justify-center gap-2">
      <Projects projects={projects_db}></Projects>
    </main>
  );
}
