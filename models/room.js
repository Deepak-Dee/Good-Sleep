const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    
    name: {
        type: String,
        required: [true, 'Please enter the room name'],
        trim: true,
        maxLength: [100, 'Room name cannot exceed more than 100 characters.'],
    },

    pricePerNight: {
        type: Number,
        required: [true, 'Please enter the price of room'],
        default: 0.0,
        maxLength: [6, 'Room price cannot exceed more than 6 characters.'],
    },

    description: {
        type: String,
        required: [true, 'Please enter the room description'],
    },

    address: {
        type: String,
        required: [true, 'Please enter the room address'],
    },

    guestCapacity: {
        type: Number,
        required: [true, 'Please enter the number of guests'],
    },

    numOfBeds: {
        type: Number,
        required: [true, 'Please enter the number of beds in room'],
    },

    internet: {
        type: Boolean,
        default: false,
    },

    breakfast: {
        type: Boolean,
        default: false,
    },

    airConditioned: {
        type: Boolean,
        default: false,
    },

    petsAllowed: {
        type: Boolean,
        default: false,
    },

    roomCleaning: {
        type: Boolean,
        default: false,
    },

    ratings: {
        type: Number,
        default: 0,
    },

    noOfReviews: {
        type: Number,
        default: 0,
    },

    images: [
        {
            
            public_id: {
                type: String,
                required: true,
            },

            url: {
                type: String,
                required: true,
            }

        }
    ],

    category: {
        type: String,
        required: [true, 'Please enter the room category'],
        enum: {
            
            values: [
                'King',
                'Single',
                'Twins'
            ],

            message: 'Please select a category for the room'

        }
    },

    reviews: [
        {
            user: {
                type: mongoose.Schema.ObjectId,
                ref: 'User',
                required: true,
            },

            name: {
                type: String,
                required: true,
            },

            rating: {
                type: Number,
                required: true,
            },

            comment: {
                type: String,
                required: true,
            },

        }
    ],

    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: false
    },

    createdAt: {
        type: Date,
        default: Date.now()
    }

})

module.exports = mongoose.models.Room || mongoose.model('Room', roomSchema);