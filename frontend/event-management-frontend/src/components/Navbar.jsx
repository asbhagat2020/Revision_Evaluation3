import React from 'react';
import { Box, Flex, Heading, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <Box bg="teal.500" color="white" px="4" py="3">
            <Flex align="center" justify="space-between">
                <Heading size="md">Event Management</Heading>
                <Flex>
                    <Link to="/login">
                        <Button colorScheme="teal" mr="4">
                            Login
                        </Button>
                    </Link>
                    <Link to="/register">
                        <Button colorScheme="teal">
                            Register
                        </Button>
                    </Link>
                </Flex>
            </Flex>
        </Box>
    );
};

export default Navbar;
