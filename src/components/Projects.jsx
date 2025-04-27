"use client";
import Heading from "./sub/Heading";
import Project from "./sub/Project";
import { projectsData } from "@/assets";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div id="projects" className="min-h-screen py-20">
      <Heading text={"Projects"} />
      <div className="flex flex-wrap items-center justify-center gap-5 py-10">
        {projectsData.map((data, i) => (
          <motion.div
            key={`id-${i}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <Project data={data} index={i} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
