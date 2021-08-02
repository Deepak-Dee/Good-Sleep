import Room from '../models/room'

// Create all romms => /api/rooms
const allRooms = async (req, res) => {
   
    try {
        
        const rooms = await Room.find();
    
        res.status(200).json({ 
            success: true,
            count: rooms.length,
            rooms
        })
    
    } catch (error) {

        res.status(400).json({
            success: false,
            error: error.message,
        })

    }

}


// Create new room => /api/rooms
const newRoom = async (req, res) => {
    
    try {
        const room = await Room.create(req.body);

        res.status(200).json({ 
            success: true,
            room
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        })
    }

}

//Get room details => /api/rooms/:id
const getSingleRoom = async (req, res) => {
    
    try {
        const room = await Room.findById(req.query.id)

        if(!room) {
            return res.status(404).json({
                success: false,
                error: 'No room found with this id'
            })
        }

        res.status(200).json({ 
            success: true,
            room
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        })
    }

}

//Update the room => /api/rooms

//Delete the room => /api/rooms


export {
    allRooms,
    newRoom,
    getSingleRoom
}