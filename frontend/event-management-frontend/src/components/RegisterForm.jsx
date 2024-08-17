import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, useToast } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { registerUser } from '../api/auth';

const RegisterForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const toast = useToast();
    const navigate = useNavigate(); // Initialize useNavigate

    const handleRegister = async () => {
        try {
            await registerUser({ name, email, password });
            toast({ title: 'Registration successful', status: 'success' });
            navigate('/login'); // Redirect to login page
        } catch (error) {
            toast({ title: 'Registration failed', description: error.message, status: 'error' });
        }
    };

    return (
        <Box maxW="md" mx="auto" mt="8">
            <FormControl isRequired>
                <FormLabel htmlFor="name">Name</FormLabel>
                <Input id="name" value={name} onChange={(e) => setName(e.target.value)} />
                
                <FormLabel htmlFor="email" mt="4">Email</FormLabel>
                <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                
                <FormLabel htmlFor="password" mt="4">Password</FormLabel>
                <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                
                <Button mt="4" colorScheme="teal" onClick={handleRegister}>
                    Register
                </Button>
            </FormControl>
        </Box>
    );
};

export default RegisterForm;
