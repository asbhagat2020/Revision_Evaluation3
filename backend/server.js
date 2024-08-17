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
        origin: 'http://localhost:8080', 
        methods: ['GET', 'POST'],
        credentials: true,
    },
});


app.use(cors()); 
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/events', eventRoutes);

io.on('connection', (socket) => {
    console.log('New client connected', socket.id);

    socket.on('eventCreated', (event) => {
        io.emit('newEvent', event); 
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected', socket.id);
    });
});

app.use(errorMiddleware);


const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
