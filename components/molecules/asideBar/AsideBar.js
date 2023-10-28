import React from 'react'
import styled from 'styled-components';
import customTheme from '@/public/customTheme';
import { Logo } from '@/components/atoms/logo/Logo'

const ContainerAsideBar = styled.div`
  width: 20vw;
  gap: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${customTheme.palette.background.paper};
  position: relative;
  box-shadow: 0 0 10px ${customTheme.palette.secondary.main};

  /* Animação da sombra */
  transition: box-shadow 0.3s ease-in-out;
  &:hover {
    box-shadow: 10px 0 15px ${customTheme.palette.secondary.dark};
  }
`;


const AsideBar = () => {
  return (
    <ContainerAsideBar >
        <Logo />
    </ContainerAsideBar>
  )
}

export default AsideBar