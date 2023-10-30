import React from 'react';
import styled from 'styled-components';
import customTheme from '@/public/customTheme';

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 19vw;
  height: 25vh;
  background-color: ${customTheme.palette.background.secondary};
  cursor: pointer; 
`;


export const Logo = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <LogoContainer onClick={scrollToTop}>
       
    </LogoContainer>
  );
};