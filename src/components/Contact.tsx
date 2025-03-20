import { motion } from "motion/react";
function Contact() {
  return (
    <div className="border-b border-neutral-900 pb-20 text-center">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="mt-20 mb-6 text-center text-4xl"
      >
        Get In Touch
      </motion.h1>
      <a
        href="mailto:hasanrahman33605@gmail.com"
        className="border-b text-center"
      >
        Email Me
      </a>
    </div>
  );
}

export default Contact;
