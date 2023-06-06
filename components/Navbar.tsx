import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-4 py-2 bg-bg-100">
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
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
            BP Dev
          </motion.span>
        </div>
      </div>
      <div className="space-x-4">
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
