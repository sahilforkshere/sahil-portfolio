import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://www.linkedin.com/in/sahil1008/" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/sahilforkshere" Icon={FiGithub} />
      <SingleContactSocial link="https://www.instagram.com/_sap4?igsh=YTl0bWR3dXppbDJp" Icon={FaInstagram} />
    </div>
  );
};

export default ContactSocial;
