import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="block sm:flex items-center justify-center px-4 py-5 bg-bg-100 h-14">
      <div className="flex items-center justify-center space-x-4  py-5">
        <div className="flex items-center space-x-5 py-5">
          <motion.img
            src="https://gcdnb.pbrd.co/images/cFvSDR4BrTtx.png?o=1"
            alt="Logo"
            className="w-8 h-8"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <motion.span
            className="text-text-100 font-semibold text-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            
          </motion.span>
        </div>
      </div>
      <div className="sm:flex space-x-4 text-2xl">
        <Link href="/" className="text-text-100 hover:text-text-200">
          Home
        </Link>
        <Link href="/projects" className="text-text-100 hover:text-text-200">
          Projects
        </Link>
        <Link href="/contact" className="text-text-100 hover:text-text-200">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
