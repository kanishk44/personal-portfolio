"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const Project = ({ data, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: index % 2 === 0 ? 100 : -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, type: "spring", stiffness: 100 }}
      className="relative w-[350px] sm:w-full h-max border border-yellow-400 rounded-lg group"
    >
      <a href={data.link} target="_blank" rel="noopener noreferrer">
        <Image
          src={data.url}
          alt="Project Image"
          width={400}
          height={400}
          className="rounded-lg opacity-70 group-hover:opacity-30 transition-opacity duration-300"
        />
        <div className="absolute top-0 w-full h-full flex flex-col items-center justify-center gap-y-2 bg-white/95 p-4 rounded-lg dark:bg-zinc-700/95 transition-colors opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h2 className="text-lg font-bold tracking-wide text-gray-500 dark:text-white transition-colors">
            {data.name}
          </h2>
          <div className="h-[200px] overflow-y-auto custom-scrollbar">
            <p className="text-sm text-justify text-gray-500 first-letter:pl-2 dark:text-gray-100 transition-colors">
              {data.desc}
            </p>
          </div>
          {data.github && (
            <a
              href={data.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 p-1 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <FaGithub className="w-6 h-6" />
            </a>
          )}
        </div>
      </a>
    </motion.div>
  );
};

export default Project;
