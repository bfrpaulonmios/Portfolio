import { motion } from "framer-motion";

const Footer = () => {
    return (
            <footer className="bg-gray-900 py-6">
                <div className="w-full mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="text-accent-100 text-3xl mb-4 md:mb-0">© 2023 Bruno Paulon. All rights reserved.</div>
                        <div className="flex space-x-4">
                            <motion.a
                                className="text-accent-100 text-3xl hover:text-gray-300"
                                href="https://github.com/Bfrpaulon"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.2 }}
                            >
                                Github
                            </motion.a>
                            <motion.a
                                className="text-accent-100 text-3xl hover:text-gray-300"
                                href="https://www.linkedin.com/in/bfrpaulon/"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.2 }}
                            >
                                LinkedIn
                            </motion.a>
                            <motion.a
                                className="text-accent-100 text-3xl hover:text-gray-300"
                                href="https://drive.google.com/file/d/17sdQTGdlNcb8fC1rOc17KUIAJvJILmvj/view"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.2 }}
                            >
                                Resume
                            </motion.a>

                        </div>
                    </div>
                </div>
            </footer>
    );
};

export default Footer;
