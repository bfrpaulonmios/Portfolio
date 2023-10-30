import styled from 'styled-components';
import customTheme from '../../../public/customTheme';
import TextAnimatedSectionHero from '@/components/atoms/textAnimatedSectionHero/TextAnimatedSectionHero';

const SectionHero = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    justify-content: space-around;
    align-items: center;
`;

const TextHeroSection = styled.h1` 
    color: ${customTheme.palette.secondary.dark};
    font-size: 2.5rem;
    font-weight: bold;
    text-align: center;
    margin: 0 auto; 
    width: 100%;
    height: 30vh;
`;

const IntroduceSection = styled.h2`
    width: 90%;
    line-height: 2.5;
    color: ${customTheme.palette.secondary.dark};
    font-size: 0.99rem;
    font-weight: bold;
    text-align: center;
    margin: 0 auto;
`;

export default function HomePage() {

    return (
        <SectionHero>
            <TextHeroSection>
                Hi guys, I'm Bruno Paulon! Master in <TextAnimatedSectionHero />
            </TextHeroSection>
            <IntroduceSection>
            <h2>Sou um desenvolvedor Full Stack MERN apaixonado com a missão de criar aplicações web robustas e eficientes. Com uma sólida base de conhecimento em tecnologias como MongoDB, Express, React e Node.js, tenho habilidades para desenvolver tanto o lado do cliente quanto o lado do servidor. Tenho experiência em traduzir requisitos complexos em soluções funcionais e escaláveis, garantindo uma ótima experiência para o usuário.</h2>
            </IntroduceSection>
        </SectionHero>
    );
}
