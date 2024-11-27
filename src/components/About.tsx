import { motion } from "motion/react";
import { ABOUT_TEXT } from "../constants/index.js";

function About() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
        About <span className="text-neutral-500">Me</span>
      </h1>

      <div className="flex justify-center items-center">
        <motion.p
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          initial={{ opacity: 0, scale: 0 }}
          className="max-w-2xl text-center my-2 py-6"
        >
          {ABOUT_TEXT}
        </motion.p>
      </div>
    </div>
  );
}

export default About;
