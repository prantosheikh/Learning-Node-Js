const EventEmitter = require('node:events');

class myBirthday extends EventEmitter { }


const myBirthday1 = new myBirthday()

// createing event listeners

myBirthday1.on('birthday', () => {
   console.log("Happy Birthday")
})


myBirthday1.on('birthday', (bike) => {
   console.log(`I will send a ${bike} as a gift.`)
})

// emitting events 

myBirthday1.emit('birthday', 'bike')