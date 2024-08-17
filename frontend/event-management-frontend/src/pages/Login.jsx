import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, useToast } from '@chakra-ui/react';
import { loginUser } from '../api/auth';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const toast = useToast();

    const handleLogin = async () => {
        try {
            const { token } = await loginUser({ email, password });
            localStorage.setItem('token', token);
            toast({ title: 'Login successful', status: 'success' });
            window.location.href = '/';
        } catch (error) {
            toast({ title: 'Login failed', description: error.message, status: 'error' });
        }
    };

    return (
        <Box maxW="md" mx="auto" mt="8">
            <FormControl isRequired>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <FormLabel htmlFor="password" mt="4">Password</FormLabel>
                <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button mt="4" colorScheme="teal" onClick={handleLogin}>
                    Login
                </Button>
            </FormControl>
        </Box>
    );
};

export default Login;
