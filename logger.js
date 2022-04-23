


const Logger = require('./logger')
const EventEmitter = require('events')

const logger = new Logger()

logger.on('message' , (data) => console.log('called listener :' , data))


logger.log()































const EventEmitter = require('events')
const uuid = require('uuid')
class Logger extends EventEmitter{
     log(msg){
        this.emit('message' , {id : uuid.v4() , msg})
     }
}

class MyEmitter extends EventEmitter { }

const myEmitter = new MyEmitter();

myEmitter.on('event' , () => console.log('fired'))

myEmitter.emit('event')
myEmitter.emit('event')
myEmitter.emit('event')
myEmitter.emit('event')
myEmitter.emit('event')
