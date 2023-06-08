import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import Image from "next/image";

const skillsData = [
    {
        name: "HTML",
        phrase: "HTML and me? We are like 'open' and 'close' tags, always together!",
        startYear: 2020,
    },
    {
        name: "CSS",
        phrase: "CSS is the reason why my webpages look better than my wardrobe!",
        startYear: 2020,
    },
    {
        name: "Javascript",
        phrase: "JavaScript: Turning coffee into code since 1995!",
        startYear: 2020,
    },
    {
        name: "Typescript",
        phrase: "TypeScript and I are like a dynamic duo, fighting bugs and adding types like there's no tomorrow!",
        startYear: 2021,
    },
    {
        name: "Bootstrap",
        phrase: "Bootstrap and I are like a perfect match, adding class to my HTML and style to my life!",
        startYear: 2021,
    },
    {
        name: "SASS/LESS/STYLUS",
        phrase: "Using SASS, LESS, or Stylus is like having a personal stylist for your stylesheets. It's CSS with a touch of fashion!",
        startYear: 2021,
    },
    {
        name: "UI/UX",
        phrase: "UI and UX go together like peanut butter and jelly. They're a delicious combination that makes your app or website irresistible!",
        startYear: 2021,
    },
    {
        name: "React JS",
        phrase: "Why do I love working with React JS? Because each component is like a virtual friend that I can call at any time!",
        startYear: 2021,
    },
    {
        name: "Tailwind CSS",
        phrase: "Tailwind CSS is like having a personal assistant for your styling needs. It's a one-stop-shop for all your design desires!",
        startYear: 2021,
    },
    {
        name: "Material UI",
        phrase: "Material UI and I are like a perfect match. It's the 'material' that brings my web design dreams to life!",
        startYear: 2021,
    },
    {
        name: "Next JS",
        phrase: "Next.js is like the 'fast and furious' of web frameworks. It accelerates your development speed to the max!",
        startYear: 2022,
    },
    {
        name: "Node JS",
        phrase: "Node.js and I are like a perfect match. We're constantly 'listening' to each other, waiting for events to happen!",
        startYear: 2022,
    },
    {
        name: "Mongo DB",
        phrase: "MongoDB is like a pet octopus for data storage. It has a lot of tentacles, but it's surprisingly cuddly!",
        startYear: 2022,
    },
    {
        name: "Chakra UI",
        phrase: "Chakra UI: Where your website gets dressed to impress, with a touch of UI magic!",
        startYear: 2022,
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
        if (startYear < 1) {
            const currentDate = new Date();
            const startDate = new Date(currentDate.getFullYear(), 0, 1);
            const daysDifference = Math.ceil((currentDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
            return `${daysDifference} days`;
        } else {
            const experienceInYears = currentYear - startYear;
            return `${experienceInYears} years`;
        }
    };
    const TitleSection = "... Import { SoftSkills } from 'Head-Bruno';";

    return (
       <><div>
            <h2 className="text-3xl pl-52 pt-11 bg-bg-300 text-primary-300 shadow-lg shadow-primary-200">{TitleSection}</h2>
        </div><div id="softSkillsSection" className="flex justify-center items-center h-full py-10 bg-bg-300">
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
                                    className="bg-bg-100 p-4 rounded-lg flex justify-items-center justify-center"
                                    initial={{ opacity: 0, y: 100, rotateX: -20 }}
                                    animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100, rotateX: isInView ? 0 : -20 }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                    whileHover={{ scale: 1.1, rotateZ: 5 }}
                                    style={{ perspective: 1000 }}
                                >
                                    <div>
                                        <h3 className="text-lg font-semibold text-accent-100 text-center">{skill.name}</h3>
                                        <p className="text-sm text-accent-200 text-center space-">{`${calculateExperienceInYears(skill.startYear)} of experience`}</p>
                                        <p className="text-sm text-accent-100 text-center">{skill.phrase}</p>
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div></>
    );
};

export default SoftSkills;
