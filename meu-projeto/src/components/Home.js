import { Box, Heading, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <Box p={4}>
      <Heading as="h2" size="xl">
        Home
      </Heading>

      <motion.div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridGap: '20px',
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          style={{
            background: 'rgba(52, 152, 219, 0.5)',
            borderRadius: '8px',
            height: '100px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text fontSize="3xl" color="white" fontWeight="bold">
            D
          </Text>
        </motion.div>

        {/* Adicione mais quadrados conforme necessário */}
      </motion.div>

      <Box mt={8} textAlign="center">
        <Heading as="h3" size="lg">
          Bruno Paulon
        </Heading>
        <Box mt={4}>
          {/* Coloque a tag de imagem abaixo e ajuste o atributo src conforme necessário */}
          <img src="/caminho/para/sua/imagem.jpg" alt="Imagem do Bruno Paulon" />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
