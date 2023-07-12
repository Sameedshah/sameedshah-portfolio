"use client"
import { About } from "@/components/about";
import Contact from "@/components/contact";
import Hero from "@/components/hero";
import { Project } from "@/components/project";
import Skills from "@/components/skills";

export default function Home() {
    return (
      <div> 
        <Hero/>
        <About/>
        <Skills/>
        <Project/>
        <Contact/>
      </div>
    )
}