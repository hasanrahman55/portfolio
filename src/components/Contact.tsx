import { CONTACT } from "../constants/index.js";
function Contact() {
  return (
    <div className="border-b border-neutral-900 pb-20 text-center">
      <h1 className="mt-20 mb-6 text-center text-4xl">Get In Touch</h1>
      <a href="mailto:" className="border-b text-center">
        {CONTACT.email}
      </a>
    </div>
  );
}

export default Contact;
