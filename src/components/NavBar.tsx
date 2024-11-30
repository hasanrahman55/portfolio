import logo from "../assets/logo.png";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoDocumentTextOutline } from "react-icons/io5";
import resume from "../assets/resume.pdf";

function NavBar() {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="Hasan Rahman Logo" />
      </div>

      <div className="m-8 flex justify-center items-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/hasanrahman55/"
          target="_blank"
          title="Linkedin"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://github.com/hasanrahman55"
          target="_blank"
          title="Github"
        >
          <FaGithub />
        </a>
        <a href="https://x.com/hasanrahman55" target="_blank" title="Twitter">
          <FaXTwitter />
        </a>
        <a href={resume} download={true} target="_blank" title="Resume">
          <IoDocumentTextOutline />
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
