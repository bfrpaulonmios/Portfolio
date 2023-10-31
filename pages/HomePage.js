import styled from 'styled-components';
import customTheme from '../public/customTheme';
import AsideBar from '@/components/molecules/asideBar/AsideBar';
import SectionHero from '@/components/molecules/sectionHero/SectionHero';

const HomePageContainer = styled.div`
  display: flex;
`;

const ContainerMain = styled.div`
  display: flex;
  flex-direction: colum;
  width: 80vw;
  justify-content: flex-start;
  align-items: stretch;
  height: 100vh;
  box-shadow: 0 0 10px ${customTheme.palette.secondary.main};
  transition: box-shadow 0.3s ease-in-out;
  &:hover {
    box-shadow: 0 0 25px ${customTheme.palette.secondary.dark};
    transition: box-shadow 0.3s ease-in-out;
  }
  `
export default function HomePage() {

  return (
    <HomePageContainer>
      <AsideBar />
      <ContainerMain>
        <SectionHero />
      </ContainerMain>
    </HomePageContainer>
  );
}
