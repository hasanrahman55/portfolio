import logo from "../assets/kevinRushLogo.png";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { FaInstagram } from "react-icons/fa";
function NavBar() {
  return (
    <nav className="bg-red-200 mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="Hasan Rahman Logo" />
      </div>

      <div className="m-8 flex justify-center items-center gap-4 text-2xl">
        <FaLinkedinIn />
        <FaGithub />
        <FaXTwitter />
        <FaInstagram />
      </div>
    </nav>
  );
}

export default NavBar;
