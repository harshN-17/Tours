import React from 'react'
import TourCard from './TourCard'

export default function Tours(props) {
    const tours = props.tours.map((tour) => {
        return(
            <TourCard key={tour.id} {...tour} removeTour = {props.removeTour}/>
        )
    })
  return (
    <>
    <h1 className='title'>Our Tours</h1>
    <div className='tour--container'>
      {tours}
    </div>
    </>
  )
}
