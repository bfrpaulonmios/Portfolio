import { motion } from "framer-motion";

const technologies = [
    { name: "React", icon: "/path/to/react-icon.png" },
    { name: "Tailwind CSS", icon: "/path/to/tailwind-icon.png" },
    { name: "Framer Motion", icon: "/path/to/framer-icon.png" },
    { name: "Next.js", icon: "/path/to/nextjs-icon.png" },
    { name: "Outra tecnologia", icon: "/path/to/other-icon.png" },
];

const HeroSection = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-gradient">
            <div className="flex flex-col md:flex-row-reverse justify-center items-center">
                <div className="md:w-1/2">
                    <motion.img
                        src="/path/to/your/photo.jpg"
                        alt="Minha Foto"
                        className="w-80 rounded-full"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    />
                </div>
                <div className="md:w-1/2 mx-6">
                    <motion.div
                        className="mb-6"
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <p className="text-2xl text-primary-200">Hello World !</p>
                        <p className="text-lg text-text-200">
                        Hello World, my name is Bruno Paulon and I'm a front-end developer with a passion for technology. With more than 4 years of experience in front-end projects from conception to implementation. My goal is to create a beautiful and functional user interface. I am always open to new opportunities and challenges. Discover the power of a seamless user interface. Contact me and let's turn your ideas into reality!                        </p>
                    </motion.div>
                    <motion.div
                        className="mb-6"
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <p className="text-2xl text-primary-200">Principais tecnologias</p>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
                            {technologies.map((tech, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-bg-200 p-4 rounded-lg flex items-center justify-center"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <img src={tech.icon} alt={tech.name} className="w-12 h-12" />
                                    <p className="text-text-100 ml-2">{tech.name}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                    <motion.div
                        className="flex items-center"
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <button className="bg-accent-100 text-white px-4 py-2 rounded mr-4">
                            Entre em Contato
                        </button>
                        <div className="flex space-x-2">
                            <motion.a
                                href="https://link-da-sua-rede-social"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.2 }}
                            >
                                <img src="/path/to/your/social-media-icon.png" alt="Social Media" className="w-6 h-6" />
                            </motion.a>
                            {/* Adicione mais links para outras redes sociais */}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
