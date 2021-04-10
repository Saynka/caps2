'use strict';

require('dotenv').config();

const port = process.env.PORT || 3000;
const io = require('socket.io')(port);
const caps = io.of('/caps');

const Queue = {
  received: {},
  inProgress: {},
  completed: {},
};

function logger(EVENT, payload) {
  let time = new Date();
  console.log({ EVENT, time, payload });
};

caps.on('connection', socket => {
  console.log('connected on: ', socket.id);

  socket.on('pickup', payload => {
    Queue.received[payload.orderId] = payload;
    logger('PICK-UP *****', payload);
    caps.emit('pickup', payload);
  })

  socket.on('in-transit', payload => {
    Queue.received[payload.orderId] = payload;
    logger('In-Transt *****', payload);
    socket.emit('transit', payload);
  })

  socket.on('pickup', payload => {
    delete Queue.received[payload.orderId];
    delete Queue.inProgress[payload.orderId];
    delete Queue.completed[payload.orderId];
    caps.emit('delivered', payload);
  })


  socket.on('getAll', () => {
    for (let key in Queue.received) {
      socket.emit('pickup', Queue.received[key]);
    }
    for (let key in Queue.inProgress) {
      socket.emit('in-transit', Queue.inProgress[key]);
    }
    for (let key in Queue.completed) {
      socket.emit('delivered', Queue.completed[key]);
    }
  });

  socket.on('delivered', payload => {
    Queue.completed[payload.orderId] = payload;
    logger('DELIVERED *****', payload)

    caps.emit('delivered', payload);

  });

});

console.log('CAPS-LIVE');

module.exports = logger;


