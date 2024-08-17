import React, { useState, useEffect } from 'react';
import { Container, SimpleGrid } from '@chakra-ui/react';
import EventCard from './EventCard';
import { fetchEvents } from '../api/events';

const EventList = ({ onRegister }) => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const getEvents = async () => {
            const data = await fetchEvents();
            setEvents(data);
        };
        getEvents();
    }, []);

    return (
        <Container maxW="container.mx" mt="8">
            <SimpleGrid columns={[1, null, 3]} spacing="8">
                {events.map(event => (
                    <EventCard key={event._id} event={event} onRegister={onRegister} />
                ))}
            </SimpleGrid>
        </Container>
    );
};

export default EventList;
