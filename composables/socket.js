import io from 'socket.io-client';

export const userSocket = () => {
    const userSocket = io('http://localhost:3001');
    return userSocket;
}