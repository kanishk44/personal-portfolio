"use client";
import Heading from "./sub/Heading";
import { skillsData } from "@/assets";
import { motion } from "framer-motion";

const Skills = () => {
  const variants = {
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.07,
      },
    }),
    hidden: {
      opacity: 0,
      y: 30,
    },
  };

  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  };

  return (
    <div
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center gap-y-20"
    >
      <Heading text={"Skills"} />
      <div className="w-full flex justify-between flex-wrap gap-x-8 gap-y-10 lg:gap-y-6">
        {skillsData.map((item, i) => (
          <motion.div
            custom={i}
            variants={variants}
            initial="hidden"
            whileInView="visible"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
              borderColor: "#f59e0b",
            }}
            viewport={{ margin: "50px", once: true }}
            key={i}
            className="group flex items-center justify-center gap-x-3 rounded-xl border-2 border-yellow-500/50 bg-zinc-100 px-5 py-3 lg:px-3 hover:bg-zinc-50 dark:bg-zinc-800 dark:hover:bg-zinc-700 transition-all duration-300"
          >
            <motion.div
              className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 grid place-items-center shadow-lg group-hover:shadow-xl transition-shadow duration-300"
              variants={iconVariants}
              whileHover="hover"
            >
              <div className="text-white text-xl">{item.icon}</div>
            </motion.div>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-300 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors duration-300">
              {item.name}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
