import React from 'react';
import { Box, Heading, Text, Button } from '@chakra-ui/react';

const EventCard = ({ event, onRegister }) => {
    return (
        <Box borderWidth="1px" borderRadius="lg" p="5" mb="4">
            <Heading size="md">{event.name}</Heading>
            <Text mt="2">{event.description}</Text>
            <Text mt="2">Date: {new Date(event.date).toLocaleDateString()}</Text>
            <Text mt="2">Time: {event.time}</Text>
            <Text mt="2">Location: {event.location}</Text>
            <Button mt="4" colorScheme="teal" onClick={() => onRegister(event)}>
                Register
            </Button>
        </Box>
    );
};

export default EventCard;
