import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

const UserProfile = ({ user }) => {
    return (
        <Box maxW="md" mx="auto" mt="8" p="4" borderWidth="1px" borderRadius="lg">
            <Heading size="md">{user.name}</Heading>
            <Text mt="2">Email: {user.email}</Text>
            <Text mt="2">Role: {user.role}</Text>
        </Box>
    );
};

export default UserProfile;
