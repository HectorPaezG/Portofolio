"use client"
import WorkCard from "@/components/WorkCard";
import { motion } from "framer-motion";
import ProjectTag from "@/components/ProjectTag";
import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";

const projectsData = [
  // {
  //   id: 1,
  //   title: "Lorem Input 1",
  //   description: "Project 1 description",
  //   image: "/assets/work/thumb1.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
  // {
  //   id: 2,
  //   title: "Lorem Input 2",
  //   description: "Project 2 description",
  //   image: "/assets/work/thumb2.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
  // {
  //   id: 3,
  //   title: "Lorem Input 3",
  //   description: "Project 3 description",
  //   image: "/assets/work/thumb3.png",
  //   tag: ["All", "Mobile"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
];

const Page = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
        }}
      >
        <h2 className="text-4xl text-center font-bold text-white mt- p-6">My Projects</h2>
        <div className="text-white flex flex-row justify-center place-items-center gap-2 py-6">
          <ProjectTag onClick={() => handleTagChange("All")} name="All" isSelected={tag === "All"} />
          <ProjectTag onClick={() => handleTagChange("Web")} name="Web" isSelected={tag === "Web"} />
          <ProjectTag onClick={() => handleTagChange("Mobile")} name="Mobile" isSelected={tag === "Mobile"} />
        </div>
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {filteredProjects.map((project) => (
            <WorkCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          ))
          }

        <div className="col-span-3 flex justify-center items-center py-20">
              <span className="text-blue-500 text-3xl font-semibold">
                <TypeAnimation
                  sequence={[
                    "",
                    2000,
                    "Coming soon...",
                    3000,
                    "",
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  style={{
                    fontSize: "inherit",
                    display: "inline-block",
                  }}
                  repeat={Infinity}
                />
              </span>
            </div>
        </div>
      </motion.div>
    </>
  );
};

export default Page;