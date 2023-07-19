import { motion } from "framer-motion";

const projects = [
    { id: 1, title: "Dev Wise Blog", description: "I'm currently working on developing the DevWise Blog, a React project I'm building for myself. The blog will utilize Material UI and React Spring libraries to create a modern and pleasant user experience.", image: "https://i.ibb.co/gjLCfYy/capa-projeto-dev-wise.png" },
   
];

const ProjectsGallery = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
                <motion.div
                    key={project.id}
                    className="bg-white rounded-lg shadow-lg overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <div className="relative">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="absolute bottom-0 left-0 p-4">
                            <h2 className="text-2xl font-bold text-white">{project.title}</h2>
                        </div>
                    </div>
                    <div className="bg-blue-900 text-white py-3 px-4">
                        <p className="text-sm">{project.description}</p>
                        <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Saiba mais
                        </button>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default ProjectsGallery;
