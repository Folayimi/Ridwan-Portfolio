// components/Footer.jsx
import { FaXTwitter, FaGithub, FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 py-[40px] md:pt-[40px] md:pb-[100px] px-[5%] bg-[#f5f5f5] text-[#6E6E6E]">
      <div className="flex flex-col items-center justify-center gap-4 text-center">
        <p className="text-sm font-[500]">
          Copyright &copy; {new Date().getFullYear()} Ridwan Ogunlade.{" "}
          <span className="">All rights reserved.</span>          
        </p>

        <div className="flex items-center gap-6 mt-2">
          <a
            href="https://x.com/Fola_Dev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-colors"
          >
            <FaXTwitter size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/ridwan-ogunlade-1a9610369/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-colors"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://github.com/folayimi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-colors"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="mailto:ridwanfolayimi@gmail.com"
            className="hover:text-black transition-colors"
          >
            <MdEmail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
