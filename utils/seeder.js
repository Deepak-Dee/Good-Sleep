const Room = require('../models/room');
const rooms = require( '../data/rooms');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/goodsleep', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex:true
})

const seedRooms = async () => {

    try {
        
        await Room.deleteMany();
        console.log('Rooms are deleted');

        await Room.insertMany(rooms);
        console.log('All rooms are added');

    } catch (error) {
        console.log(error.message);
        process.exit()
    }

}

seedRooms()