import { useState } from "react";
import { motion } from "framer-motion";

const skillsData = [
    {
        name: "HTML",
        icon: "https://gcdnb.pbrd.co/images/wDjqt6n3a406.png?o=1",
        phrase: "HTML and me? We are like 'open' and 'close' tags, always together!",
    },
    // Adicione mais habilidades conforme necessário
];

const SoftSkills = () => {
    const [experienceDate, setExperienceDate] = useState(new Date("1/1/2020"));

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="max-w-screen-lg w-full mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {skillsData.map((skill, index) => (
                        <motion.div
                            key={index}
                            className="bg-bg-200 p-4 rounded-lg flex items-center justify-start"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <div className="flex items-center mr-4">
                                <img src={skill.icon} alt={skill.name} className="w-32 h-12" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-text-100">{skill.name}</h3>
                                <p className="text-sm text-text-200">
                                    {`${Math.floor((new Date() - experienceDate) / (1000 * 60 * 60 * 24))} dias de experiência`}
                                </p>
                                <p className="text-sm text-text-200">{skill.phrase}</p> { `HTML and me? We are like 'open' and 'close' tags, always together!`}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SoftSkills;
