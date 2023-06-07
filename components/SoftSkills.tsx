import { useState } from "react";
import { motion } from "framer-motion";

const skillsData = [
    {
        name: "HTML",
        icon: "https://gcdnb.pbrd.co/images/Jzlg6HhJDHRZ.png?o=1",
        phrase: "HTML and me? We are like 'open' and 'close' tags, always together!",
    },
    {
        name: "HTML",
        icon: "https://gcdnb.pbrd.co/images/Jzlg6HhJDHRZ.png?o=1",
        phrase: "HTML and me? We are like 'open' and 'close' tags, always together!",
    },
    {
        name: "HTML",
        icon: "https://gcdnb.pbrd.co/images/Jzlg6HhJDHRZ.png?o=1",
        phrase: "HTML and me? We are like 'open' and 'close' tags, always together!",
    },
    {
        name: "HTML",
        icon: "https://gcdnb.pbrd.co/images/Jzlg6HhJDHRZ.png?o=1",
        phrase: "HTML and me? We are like 'open' and 'close' tags, always together!",
    },
    {
        name: "HTML",
        icon: "https://gcdnb.pbrd.co/images/Jzlg6HhJDHRZ.png?o=1",
        phrase: "HTML and me? We are like 'open' and 'close' tags, always together!",
    },
    {
        name: "HTML",
        icon: "https://gcdnb.pbrd.co/images/Jzlg6HhJDHRZ.png?o=1",
        phrase: "HTML and me? We are like 'open' and 'close' tags, always together!",
    },
    {
        name: "HTML",
        icon: "https://gcdnb.pbrd.co/images/Jzlg6HhJDHRZ.png?o=1",
        phrase: "HTML and me? We are like 'open' and 'close' tags, always together!",
    },
    {
        name: "HTML",
        icon: "https://gcdnb.pbrd.co/images/Jzlg6HhJDHRZ.png?o=1",
        phrase: "HTML and me? We are like 'open' and 'close' tags, always together!",
    },
    {
        name: "HTML",
        icon: "https://gcdnb.pbrd.co/images/Jzlg6HhJDHRZ.png?o=1",
        phrase: "HTML and me? We are like 'open' and 'close' tags, always together!",
    },
    {
        name: "HTML",
        icon: "https://gcdnb.pbrd.co/images/Jzlg6HhJDHRZ.png?o=1",
        phrase: "HTML and me? We are like 'open' and 'close' tags, always together!",
    },
    // Adicione mais habilidades conforme necessário
];

const SoftSkills = () => {
    const [experienceDate, setExperienceDate] = useState(new Date("1/1/2020"));

    return (
        <div className="flex justify-center items-start mt-5 h-screen bg-skills">
            <div className="max-w-screen-lg w-full  px-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-5 justify-center">
                    {skillsData.map((skill, index) => (
                        <motion.div
                            key={index}
                            className="bg-bg-200 p-2 rounded-lg flex items-center justify-center"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            
                            <div className="block text-center justify-center">
                                <h3 className="text-lg font-semibold text-text-100">{skill.name}</h3>
                                <p className="text-lg text-accent-200">
                                    {`${Math.floor((new Date() - experienceDate) / (1000 * 60 * 60 * 24))} dias de experiência`}
                                </p>
                                <p className="text-sm text-text-200">{skill.phrase}</p> { `HTML and me? We are like 'open' and 'close' tags, always together!`}
                                <img src={skill.icon} alt={skill.name} className=" flex w-32 h-26 flex justify-center mx-auto" />

                            </div>
                            
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SoftSkills;
