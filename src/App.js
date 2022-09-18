import React, { useEffect } from 'react';
import './App.css';
import Loading from './Components/Loading';
import Tours from './Components/Tours';
const url = 'https://course-api.com/react-tours-project';


function App() {
  const [loading, setLoading] = React.useState(true);
  const [tours, setTours] = React.useState([]);

  const fetchTours = async () => {
    setLoading(true);
    const response = await fetch(url);
    const tourLocal = await response.json();
    setLoading(false);
    setTours(tourLocal);
  };

  useEffect(()=>{
    fetchTours()
  },[]);

  const removeTour = (id)=> {
    const newTours = tours.filter((tour)=>tour.id !== id);
    setTours(newTours);
  }

  
  if(loading) {
    return(
      <Loading />
      );
  }
  if(tours.length === 0) {
    return(
      <div className='no--list'>
        No interesting Destination Left
        <button className='btn refresh' onClick={()=>fetchTours()}>Refresh  </button>
      </div>
    )
  }
    else {
      return(
      <Tours removeTour={removeTour} tours={tours}/>
      );
  }
}

export default App;
