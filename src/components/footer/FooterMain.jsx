import { Link } from "react-scroll";
import { FaHeart } from "react-icons/fa";

const FooterMain = () => {
  const footerLinks = [
    { name: "About Me", section: "about" },
    { name: "Skills", section: "skills" },
    { name: "Projects", section: "projects" },
  ];

  return (
    <footer className="px-4 font-special">
      {/* Horizontal line */}
      <div className="w-full h-[1px] bg-lightGrey mt-24"></div>

      {/* Footer content */}
      <div className="max-w-[1200px] mx-auto mt-4 flex flex-col sm:flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-2xl md:text-3xl text-lightGrey font-bold tracking-wide">
           Sahil Pal
        </p>

        <ul className="flex gap-6 text-lightGrey text-lg font-medium">
          {footerLinks.map((item, index) => (
            <li key={index}>
              <Link
                spy={true}
                smooth={true}
                duration={500}
                offset={-120}
                to={item.section}
                className="hover:text-white transition-all duration-300 cursor-pointer"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom message */}
      <div className="max-w-[1200px] mx-auto mt-6 mb-12 text-center sm:text-sm text-lightBrown font-light">
        Made with <FaHeart className="inline mx-1 text-red-500" /> by Sahil 
      </div>
    </footer>
  );
};

export default FooterMain;
