import { motion } from "framer-motion";

const projects = [
    { id: 1, title: "Projeto 1", description: "Descrição do Projeto 1" },
    { id: 2, title: "Projeto 2", description: "Descrição do Projeto 2" },
    { id: 3, title: "Projeto 3", description: "Descrição do Projeto 3" },
    { id: 4, title: "Projeto 3", description: "Descrição do Projeto 3" },
    { id: 5, title: "Projeto 3", description: "Descrição do Projeto 3" },
    { id: 6, title: "Projeto 3", description: "Descrição do Projeto 3" },
    { id: 7, title: "Projeto 3", description: "Descrição do Projeto 3" },
    { id: 8, title: "Projeto 3", description: "Descrição do Projeto 3" },
    { id: 9, title: "Projeto 3", description: "Descrição do Projeto 3" },
    { id: 10, title: "Projeto 3", description: "Descrição do Projeto 3" },
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
                            src="https://via.placeholder.com/500"
                            alt={project.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="absolute bottom-0 left-0 p-4">
                            <h2 className="text-2xl font-bold text-white">{project.title}</h2>
                            <p className="text-white">{project.description}</p>
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
