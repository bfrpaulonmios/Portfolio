import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion'; 
import customTheme from './customTheme';

const HomePageContainer = styled.div`
  background-color: ${customTheme.palette.background.default};
`;

const AsideBar = styled(motion.div)`
  width: 15vw;
  height: 100vh;
  background-color: ${customTheme.palette.background.paper};
  border-right: 3px solid;
`;

export default function HomePage() {
  return (
    <HomePageContainer>
     <AsideBar>

     </AsideBar>
    </HomePageContainer>
  );
}
