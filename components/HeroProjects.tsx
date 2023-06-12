import { motion } from "framer-motion";

const HeroProjects = () => (
  <div className="bg-hero-projects text-black py-20 w-full">
    <div className="container mx-auto px-4">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold mb-8 text-center"
      >
        My Projects
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-xl mb-12 text-center"
      >
        Discover the world of amazing projects I've developed.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="text-black font-bold py-4 px-8 text-center text-4xl"
      >
        'Through programming, I challenge the impossible and bring innovative ideas to life through lines of code.'

      </motion.p>
    </div>
  </div>
)

export default HeroProjects;
