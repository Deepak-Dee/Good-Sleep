import React from 'react';
import Image from 'next/image'

const RoomItem = ({ room }) => {
    return (
        <div class="col-sm-12 col-md-6 col-lg-3 my-3">
          <div class="card p-2">
            <Image
              class="card-img-top mx-auto"
              src={room.images[0].url}
            />
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">
                <Link href={`/room/${room._id}`}>
                  <a>{room.name}</a>
                </Link>
              </h5>

              <div class="ratings mt-auto mb-3">
                <p class="card-text"><b>${room.pricePerNight}</b> / night</p>

                <div class="rating-outer">
                    <div class="rating-inner" style={{ width: `${(room.ratings / 5) * 100}%` }}></div>
                </div>
                <span id="no_of_reviews">({room.numOfReviews})</span>
            </div>

            <button class="btn btn-block view-btn">
                <Link href={`/room/${room._id}`}>View Details</Link>
            </button>
          </div>
        </div>
        </div>
    )
}

export default RoomItem 