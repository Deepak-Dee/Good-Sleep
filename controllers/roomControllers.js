import Room from '../models/room'
import ErrorHandler from '../utils/errorHandler'
import catchAsyncError from '../middlewares/catchAsyncErrors'
import APIFeatures from '../utils/apiFeatures'

// Create all romms => /api/rooms
const allRooms = catchAsyncError(async (req, res) => {
    
    const resPerPage = 4;
    const roomsCount = await Room.countDocuments();

    const apiFeatures = new APIFeatures(Room.find(), req.query).search()
        .search()
        .filter()
    
    let rooms = await apiFeatures.query;
    let filteredRoomsCount = rooms.length;

    apiFeatures.pagination(resPerPage);
    rooms = await apiFeatures.query;
    
    res.status(200).json({ 
        success: true,
        roomsCount,
        resPerPage,
        filteredRoomsCount,
        rooms
    })

})


// Create new room => /api/rooms
const newRoom = catchAsyncError(async (req, res) => {
    
    const room = await Room.create(req.body);

    res.status(200).json({ 
        success: true,
        room
    })

})

//Get room details => /api/rooms/:id
const getSingleRoom = catchAsyncError(async (req, res, next) => {
    
    const room = await Room.findById(req.query.id)

    if(!room) {
        return next(new ErrorHandler('No room found with this id', 404))
    }

    res.status(200).json({ 
        success: true,
        room
    })

})

//Update the room => /api/rooms/:id
const updateRoom = catchAsyncError(async (req, res, next) => {
    
    let room = await Room.findById(req.query.id)

    if(!room) {
        return next(new ErrorHandler('No room found with this id', 404))
    }

    room = await Room.findByIdAndUpdate(req.query.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify:false
    })

    res.status(200).json({ 
        success: true,
        room
    })

})

//Delete the room => /api/rooms
const deleteRoom = catchAsyncError(async (req, res,next) => {
    
    const room = await Room.findById(req.query.id)

    if(!room) {
        return next(new ErrorHandler('No room found with this id', 404))
    }

    await room.remove();

    res.status(200).json({ 
        success: true,
        message: 'Room deleted successfully'
    })

})

export {
    allRooms,
    newRoom,
    getSingleRoom,
    updateRoom,
    deleteRoom
}