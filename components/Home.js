import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import RoomItem from './room/roomItem';
import { toast } from 'react-toastify';

const fetcher = data => data(url)

const Home = () => {

  const { rooms } = useSelector(state => state.allRooms);

  useEffect(() =>{
    toast.error(error)
  }, [])

  return(
    
    <section id="rooms" class="container mt-5">

        <h2 class='mb-3 ml-2 stays-heading'>Stays in New York</h2>

        <a href='#' class='ml-2 back-to-search'> <i class='fa fa-arrow-left'></i> Back to Search</a>
      <div class="row">
        {rooms && rooms.length  === 0 ?
          <div className="alert alert-danger"><b>No room Found</b></div>
        :
        rooms && rooms.map(room => (
          <RoomItem key={room.id} room={room} />
          ))
        }
      </div>
    </section>
    
  )
}

export default Home