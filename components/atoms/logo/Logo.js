import React from 'react'
import styled from 'styled-components';
import customTheme from '@/public/customTheme';
import Image from 'next/image';

const LogoContainer = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  width: 19vw; 
  height: 20vh;
  background-color: ${customTheme.palette.background.secondary};
`

export const Logo = () => {
    return (
        <LogoContainer> 
          <Image src="/logo.png" alt="Logo" width={200} height={200} />
        </LogoContainer>
    )
}
