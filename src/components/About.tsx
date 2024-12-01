import { motion } from "motion/react";
import { ABOUT_TEXT } from "../constants";

function About() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        About <span className="text-neutral-500">Me</span>
      </motion.h1>

      <div className="flex justify-center items-center">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -200 }}
          transition={{ duration: 1.5 }}
          className="max-w-2xl text-center my-2 py-6"
        >
          {ABOUT_TEXT}
        </motion.p>
      </div>
    </div>
  );
}

export default About;
