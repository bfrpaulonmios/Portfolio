import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import customTheme from '../public/customTheme';
import { motion } from 'framer-motion';
import Link from 'next/link';

const HomePageContainer = styled.div`
  background-color: ${customTheme.palette.background.default};
`;

const AsideBar = styled(motion.div)`
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

const Logo = styled(motion.div)`
  width: 200px; 
  height: 200px;
  background-image: url('/logo.png'); 
  background-repeat : no-repeat;
  background-size: contain;
`;

const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${customTheme.palette.background.default};
`;

const Loader = styled.div`
  width: 50px;
  height: 50px;
  border: 5px solid transparent;
  border-top: 5px solid ${customTheme.palette.primary.main};
  border-radius: 50%;
  animation: spin 1s linear infinite;
  position: relative;
`;

const LoaderText = styled.p`
  margin-top: 20px;
  font-size: 16px;
  color: ${customTheme.palette.primary.main};
  font-weight: bold;
`;

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  // Simulando um carregamento
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Simule o tempo de carregamento (3 segundos)
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      {isLoading ? (
        <LoaderContainer>
          <Loader />
          <LoaderText>Bem vindo ! Aguarde ... </LoaderText>
        </LoaderContainer>
      ) : (
        <HomePageContainer>
          <AsideBar>
              <Logo
                initial={{ scale: 0 }} // Escala inicial do zero
                animate={{ scale: 1 }} // Escala para 1 (tamanho original)
                transition={{ duration: 1 }} // Duração da animação
              />
            {/* <ItemList>
              {items.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }} // Ajuste o atraso conforme necessário
                >
                  {item}
                </motion.li>
              ))}
            </ItemList> */}
          </AsideBar>
        </HomePageContainer>
      )}
    </div>
  );
}
