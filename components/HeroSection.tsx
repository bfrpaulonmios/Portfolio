import { motion } from "framer-motion";
import Link from "next/link";

const technologies = [
  { name: "React JS" },
  { name: "Next JS" },
  { name: "JavaScript" },
  { name: "TypeScript" },
  { name: "TailWind CSS" },
  { name: "Frame Motion" },
  { name: "Node JS" },
  { name: "Mongo DB" },
];

const HeroSection = () => {
  return (
    <>
      <div className="flex justify-center items-center h-full bg-bg-200  w-full mx-auto">
        <div className="flex flex-col md:flex-row-reverse justify-center items-center mx-auto">
          <div className="md:w-1/2">
            <motion.img
              src="https://gcdnb.pbrd.co/images/4ULDyrt7B8lT.png?o=1"
              alt="Picture of Bruno Paulon"
              className="w-80 rounded-full blink"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            />
            <motion.div
              className="flex items-end"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex ml-8 space-x-6 mt-5 items-center">
                <motion.a
                  href="https://drive.google.com/file/d/17sdQTGdlNcb8fC1rOc17KUIAJvJILmvj/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                >
                  <motion.img
                    src="https://gcdnb.pbrd.co/images/LLXh5PEPr3WK.png?o=1"
                    alt="Resume"
                    className="w-14 h-12 "
                  />
                </motion.a>
                <motion.a
                  href="https:/www.linkedin.com/in/bfrpaulon"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                >
                  <motion.img
                    src="https://gcdnb.pbrd.co/images/d1O0FgSl8N4B.png?o=1"
                    alt="LinkedIn"
                    className="w-6 h-6 "
                  />

                </motion.a>
                <motion.a
                  href="https:/www.github.com/bfrpaulon"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                >
                  <motion.img
                    src="https://gcdnb.pbrd.co/images/hxdnD7KF64jq.png?o=1"
                    alt="Github"
                    className="w-6 h-6"
                  />
                </motion.a>
                <motion.a
                  href="https://www.instagram.com/bfrpaulondev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                >
                  <motion.img
                    src="https://gcdnb.pbrd.co/images/UiKpFCYfLq09.png?o=1"
                    alt="Instagram"
                    className="w-6 h-6"
                  />
                </motion.a>
                <motion.a
                  href="https://www.youtube.com/channel/UCEJiIGAkQ5_YcdsRZjGJwjw"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                >
                  <motion.img
                    src="https://gcdnb.pbrd.co/images/QyQeL5HGFoCc.png?o=1"
                    alt="Youtube"
                    className="w-6 h-6"
                  />
                </motion.a>
              </div>
            </motion.div>
          </div>
          <div className="md:w-1/2 mx-9">
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-4xl text-primary-300 py-4 text-center">
                {" "}
                # Hello World #
              </p>
              <p className="text-lg text-accent-200 text-justify">
                <strong className="text-primary-100 ">
                  {" "}
                  Hey folks! My name is Bruno Paulon.{" "}
                </strong>{" "}
                I am a front-end developer with a passion for technology. With
                more than 4 years of experience in front-end projects from
                conception to implementation. My goal is to create a beautiful
                and functional user interface. I am always open to new
                opportunities and challenges. Discover the power of a seamless
                user interface. Contact me and lets turn your ideas into
                reality!
              </p>
              <a href="http://wa.me/351920276484" target="_blank" rel="noopener noreferrer"><button className="bg-bg-100 text-accent-200 px-4 py-2 rounded mt-5 hover:bg-primary-200 hover:text-text-100"> Contact me ►
              </button></a>

            </motion.div>
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-4xl text-primary-300 py-4 text-center">
                Main Technologies
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={index}
                    className="bg-bg-100 p-4 rounded-lg flex items-center justify-center hover:bg-primary-200 hover:text-bg-100"
                    whileHover={{ scale: 1.05 }}
                  >
                    <p className="text-text-100 ml-2">{tech.name}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
