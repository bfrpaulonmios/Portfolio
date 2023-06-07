import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import Image from "next/image";

const skillsData = [
    {
        name: "HTML",
        icon: "/path/to/html-icon.png",
        phrase: "HTML and me? We are like 'open' and 'close' tags, always together!",
        startYear: 2010,
    },
    {
        name: "CSS",
        icon: "/path/to/css-icon.png",
        phrase: "CSS is my superpower!",
        startYear: 2012,
    },
    // Add more technologies as needed
];

const SoftSkills = () => {
    const [currentYear] = useState(new Date().getFullYear());
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const softSkillsSection = document.getElementById("softSkillsSection");
            if (softSkillsSection) {
                const softSkillsSectionTop = softSkillsSection.offsetTop;
                const softSkillsSectionHeight = softSkillsSection.offsetHeight;
                const windowScrollTop = window.pageYOffset;
                const windowHeight = window.innerHeight;

                if (
                    windowScrollTop > softSkillsSectionTop - windowHeight + softSkillsSectionHeight / 2 &&
                    windowScrollTop < softSkillsSectionTop + softSkillsSectionHeight / 2
                ) {
                    setIsInView(true);
                } else {
                    setIsInView(false);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const calculateExperienceInYears = (startYear: number) => {
        const experienceInYears = currentYear - startYear;
        return experienceInYears;
    };

    return (
        <div id="softSkillsSection" className="flex justify-center items-center h-screen">
            <div className="max-w-screen-lg w-full mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {skillsData.map((skill, index) => (
                        <Link
                            key={index}
                            to="softSkillsSection"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className="cursor-pointer"
                        >
                            <motion.div
                                className="bg-bg-200 p-4 rounded-lg flex items-center justify-start"
                                initial={{ opacity: 0, y: 100, rotateX: -20 }}
                                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100, rotateX: isInView ? 0 : -20 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                whileHover={{ scale: 1.1, rotateZ: 5 }}
                                style={{ perspective: 1000 }}
                            >
                                <div className="flex items-center mr-4">
                                    <Image src={skill.icon} alt={skill.name} width={24} height={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-text-100">{skill.name}</h3>
                                    <p className="text-sm text-text-200">{`${calculateExperienceInYears(skill.startYear)} years of experience`}</p>
                                    <p className="text-sm text-text-200">{skill.phrase}</p>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SoftSkills;
