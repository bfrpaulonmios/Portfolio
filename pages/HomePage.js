import styled from 'styled-components';
import customTheme from '../public/customTheme';
import AsideBar from '@/components/molecules/asideBar/AsideBar';


const HomePageContainer = styled.div`
  display: flex;
  background-color: ${customTheme.palette.background.default};
`;

const ContainerMain = styled.div`
  display: flex;
  flex-direction: colum
  width: 80vw; // 80% da largura da página main;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${customTheme.palette.background.paper};
  position: sticky;
  box-shadow: 0 0 10px ${customTheme.palette.secondary.main};
`;

export default function HomePage() {

  return (
    <HomePageContainer>
      <AsideBar />
      <ContainerMain><h1>Hello World</h1></ContainerMain>
    </HomePageContainer>
  );
}
