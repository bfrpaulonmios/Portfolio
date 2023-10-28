import React from 'react';
import styled from 'styled-components';
import customTheme from '@/public/customTheme';
import Image from 'next/image';

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 19vw;
  height: 25vh;
  background-color: ${customTheme.palette.background.secondary};
  cursor: pointer; /* Adicione isso para mostrar que a imagem é clicável */
`;

export const Logo = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Isso faz a rolagem parecer suave
    });
  };

  return (
    <LogoContainer onClick={scrollToTop}>
      <Image src="/logo.png" alt="Logo" width={100} height={100} />
    </LogoContainer>
  );
};
