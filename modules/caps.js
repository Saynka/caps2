// 'use strict';

// require('../index.js')

// io.on('connection', (socket) => {
//   console.log('connected?', socket.id);
// });
// caps.on('connection', (socket) => {
//   // step2
//   socket.on('pickup', (payload) => {
//     socket.broadcast.emit('pickup', payload);
//     console.log('heard pickup')
//   })

//   socket.on('in-transit', (payload) => {
//     socket.emit('in-transit', payload);
//     console.log('heard in-transit')
//   })
//   socket.on('delivered', (payload) => {
//     socket.broadcast.emit('delivered', payload);
//     console.log('heard delivered')
//   })
//   console.log('connected to', socket.id)

// });

// 'use strict';

// require('dotenv').config();

// const port = process.env.PORT || 3000;
// const io = require('socket.io')(port);
// const caps = io.of('/caps');

// io.on('connection', (socket) => {
//   console.log('connected?', socket.id);
// });

// caps.on('connection', (socket) => {
//   socket.on('pickup', (payload) => {
//     socket.broadcast.emit('pickup', payload);
//     console.log('heard pickup');
//   })

//   socket.on('in-transit', (payload) => {
//     socket.emit('in-transit', payload);
//     console.log('heard in-transit');
//   })
//   socket.on('delivered', (payload) => {
//     socket.broadcast.emit('delivered', payload);
//     console.log('heard delivered');
//   })
//   console.log('connected to', socket.id);

// });
