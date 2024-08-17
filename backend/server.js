const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./src/configs/db');
const authRoutes = require('./src/routes/authRoutes');
const eventRoutes = require('./src/routes/eventRoutes');
const { errorMiddleware } = require('./src/middlewares/errorMiddleware');

dotenv.config();
connectDB();

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: 'http://localhost:8080', // Your frontend URL
        methods: ['GET', 'POST'],
        credentials: true,
    },
});

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/events', eventRoutes);

// WebSocket Connection Handling
io.on('connection', (socket) => {
    console.log('New client connected', socket.id);

    // Listen for an event creation and broadcast to all clients
    socket.on('eventCreated', (event) => {
        io.emit('newEvent', event); // Broadcast new event to all clients
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected', socket.id);
    });
});

// Error handling middleware
app.use(errorMiddleware);

// Start the server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
