import React from "react";
import { motion } from "framer-motion";

const projectsData = [
    {
        name: "Dev Wise Blog",
        image: "https://i.ibb.co/gjLCfYy/capa-projeto-dev-wise.png",
        description: "I'm currently working on developing the DevWise Blog, a React project I'm building for myself. The blog will utilize Material UI and React Spring libraries to create a modern and pleasant user experience.",
        technologies: ["React", "JavaScript", "Material UI", "React Spring", "TailWind CSS", "React Spring"],
        website: "https://dev-wise-bruno.vercel.app/",
    },
];

const FeaturedProjects = () => {
    return (
        <div className="w-full mx-auto px-4 py-12 bg-bg-100">
            <h2 className="text-center text-4xl font-bold mb-8 text-accent-100">
                Featured Projects
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-8 w-4/5 mx-auto">
                {projectsData.map((project, index) => (
                    <motion.div
                        key={index}
                        className="bg-bg-200 p-6 rounded-lg grid grid-cols-1 md:grid-cols-2 gap-4"
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        whileHover={{ scale: 1.1 }}
                    >
                        <div className="md:col-span-1">
                            <img
                                src={project.image}
                                alt={project.name}
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                        <div className="md:col-span-1">
                            <h3 className="text-2xl font-semibold mb-4 text-accent-100">
                                {project.name}
                            </h3>
                            <p className="text-accent-200 mb-4">{project.description}</p>
                            <div className="grid grid-cols-3 gap-2 mb-4">
                                {project.technologies.map((technology, index) => (
                                    <motion.div
                                        key={index}
                                        className="bg-accent-200 p-2 rounded-lg text-center"
                                        whileHover={{ scale: 1.1 }}
                                    >
                                        <span className="text-accent-100">{technology}</span>
                                    </motion.div>
                                ))}
                            </div>
                            <a
                                href={project.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-text-200 hover:text-text-100"
                            >
                                Check out the project website
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default FeaturedProjects;
