"use client"

import { FaHtml5, FaCss3, FaReact, FaPhp, FaJs } from "react-icons/fa"
import { SiTailwindcss, SiNextdotjs } from "react-icons/si"

// about data
const about = {
  title: "About me",
  description: "A brief introduction about who I am, my passions, and what drives me.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Héctor Páez",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+52) 314 182 4891",
    },
    {
      fieldName: "Experience",
      fieldValue: "Nothing",
    },
    {
      fieldName: "Languages",
      fieldValue: "Spanish, English",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Mexican",
    },
    {
      fieldName: "Email",
      fieldValue: "hecxav3010@outlook.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
  ]
}

// experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description: "Highlights of my professional journey and the roles I have taken in the tech industry.",
  items: [
    {
      company: "DanTechnology",
      position: "FullStack Developer",
      duration: "2021 - 2021",
    },
    {
      company: "DanTechnology",
      position: "FullStack Developer",
      duration: "2023 - 2023",
    },
  ]
}

// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description: "My academic background and courses that have shaped my career.",
  items: [
    {
      institution: "Universidad Tecnologica de Manzanillo",
      degree: "Ingeniería en desarrollo y gestión de software",
      duration: "2020 - 2024",
    },
    {
      institution: "Cetis No.84",
      degree: "Técnico programador",
      duration: "2017 - 2020",
    },
  ]
}

// skills data
const skills = {
  title: "My Skills",
  description: "A showcase of the technical and soft skills I have mastered.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaPhp />,
      name: "php",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwing.css",
    },
  ]
}

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { motion } from "framer-motion"
import SkillsCard from "@/components/SkillsCard"
import TextCard from "@/components/TextCard"
import AboutCard from "@/components/AboutCard"

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">

            {/* experience */}
            <TextCard Item={experience} value={"experience"} />

            {/* education */}
            <TextCard Item={education} value={"education"} />

            {/* skills */}
            <SkillsCard skills={skills} />

            {/* about */}
            <AboutCard about={about} />

          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume