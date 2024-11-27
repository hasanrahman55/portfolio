import { ABOUT_TEXT } from "../constants/index.js";

function About() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
        About <span className="text-neutral-500">Me</span>
      </h1>

      <div className="flex justify-center items-center">
        <p className="max-w-2xl text-center my-2 py-6">{ABOUT_TEXT}</p>
      </div>
    </div>
  );
}

export default About;
