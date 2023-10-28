import styled from 'styled-components';
import customTheme from '../public/customTheme';
import AsideBar from '@/components/molecules/asideBar/AsideBar';


const HomePageContainer = styled.div`
  background-color: ${customTheme.palette.background.default};
`;


export default function HomePage() {

  return (
        <HomePageContainer>
          <AsideBar />
        </HomePageContainer>
  );
}
