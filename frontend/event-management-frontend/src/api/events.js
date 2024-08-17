import axios from 'axios';

const token = localStorage.getItem('token'); // Adjust if storing token elsewhere

export const fetchEvents = async () => {
    try {
        const response = await axios.get('http://localhost:8080/api/events', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching events:', error);
        throw error;
    }
};


export const registerForEvent = async (eventId, userId) => {
    const response = await axios.post(`${API_URL}/events/${eventId}/register`, { userId });
    return response.data;
};
