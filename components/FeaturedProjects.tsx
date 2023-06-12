import React from "react";
import { motion } from "framer-motion";

// Sample data for featured projects
const projectsData = [
    {
        name: "Project 1",
        image: "/path/to/project1-image.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        technologies: ["HTML", "CSS", "JavaScript"],
        website: "https://www.example.com/project1",
    },
    {
        name: "Project 2",
        image: "/path/to/project2-image.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        technologies: ["React", "Node.js", "MongoDB"],
        website: "https://www.example.com/project2",
    },
    {
        name: "Project 3",
        image: "/path/to/project3-image.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        technologies: ["Python", "Django", "PostgreSQL"],
        website: "https://www.example.com/project3",
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
