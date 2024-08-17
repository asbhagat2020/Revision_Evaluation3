import React, { useState } from 'react';
import EventList from '../components/EventList';
import { registerForEvent } from '../api/events';

const Home = () => {
    const [user, setUser] = useState(null);

    const handleRegister = async (event) => {
        if (user) {
            try {
                await registerForEvent(event._id, user._id);
                alert('Registration successful!');
            } catch (error) {
                alert('Registration failed');
            }
        } else {
            alert('Please log in to register for an event');
        }
    };

    return (
        <div>
            <EventList onRegister={handleRegister} />
        </div>
    );
};

export default Home;
