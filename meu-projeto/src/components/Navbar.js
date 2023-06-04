import React from 'react';
import { Link } from 'react-router-dom';
import { Box } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <Box
      as="nav"
      p={4}
      bg="var(--bg-100)"
      color="var(--text-100)"
      boxShadow="0px 2px 4px rgba(0, 0, 0, 0.1)"
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        fontWeight="bold"
      >
        <Box>
          <Link
            to="/"
            textDecoration="none"
            color="var(--primary-100)"
            fontSize="xl"
          >
            Logo
          </Link>
        </Box>
        <Box>
          <Link
            to="/about"
            textDecoration="none"
            color="var(--primary-200)"
            mr={4}
            _hover={{ color: 'var(--primary-300)' }}
          >
            About
          </Link>
          <Link
            to="/projects"
            textDecoration="none"
            color="var(--accent-100)"
            mr={4}
            _hover={{ color: 'var(--accent-200)' }}
          >
            Projects
          </Link>
          <Link
            to="/contact"
            textDecoration="none"
            color="var(--text-200)"
            _hover={{ color: 'var(--text-100)' }}
          >
            Contact
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
