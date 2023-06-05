import React from 'react';
import { Box, Flex, Link, Text } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      padding={4}
      backgroundColor="primary.100"
    >
      <Box>
        {/* Logo */}
        <Link href="/" textDecoration="none">
          <Text fontSize="xl" fontWeight="bold">
            Seu Logo
          </Text>
        </Link>
      </Box>

      <Box>
        {/* Links da Navbar */}
        <Link href="/about" textDecoration="none" marginX={2}>
          <Text>About</Text>
        </Link>
        <Link href="/projects" textDecoration="none" marginX={2}>
          <Text>Projects</Text>
        </Link>
        <Link href="/contact" textDecoration="none" marginX={2}>
          <Text>Contact</Text>
        </Link>
      </Box>
    </Flex>
  );
};

export default Navbar;
