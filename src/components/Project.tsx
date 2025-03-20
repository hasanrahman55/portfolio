import { motion } from "motion/react";
import { PROJECTS } from "../constants/index";

function Project() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Project
      </motion.h1>
      <div>
        {PROJECTS.map((project, index) => (
          // <a href="{project.link}" target="_blank"></a>
          <div
            key={index}
            className="mb-8 flex flex-wrap lg:justify-center cursor-pointer"
            onClick={() => window.open(project.link, "_blank")}
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -200 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-1/4"
            >
              <img
                src={project.image}
                alt={project.title}
                height={150}
                width={150}
                className="mb-6 rounded object-cover"
              />
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold"> {project.title}</h6>
              <p className="mb-2 text-neutral-400">{project.description}</p>
              {project.technologies.map((tech) => (
                <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
