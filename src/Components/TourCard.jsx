import React from 'react'

export default function TourCard(props) {
    const [show, setShow] = React.useState(false);
  return (
    <div className='tour--card'>   
      <img src={props.image} alt={props.name}/>
      <div className='tour--title'>
        <span className='tour--name'>{props.name}</span>
        <span className='tour--price'>${props.price}</span>
      </div>
      <p className='tour--info'>
        {show ? props.info : `${props.info.substring(0, 200)}... `}
        <button className='tour--show btn' onClick={()=>setShow(!show)}>{show ? 'show less' : 'show more'}</button>
      </p>
      <button className='tour--remove btn' onClick={()=>props.removeTour(props.id)}>Not Interested</button>
    </div>
  )
}
