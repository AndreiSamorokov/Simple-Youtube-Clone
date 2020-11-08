import React from 'react'
import logo from './logo.svg';
import './App.css';


import VideoList from './components/VideoList'
import youtube from './api/api'


function App() {
 
  const [videos, setVideos] = React.useState([]);
  const KEY = 'AIzaSyADEp1HFKfMKOhQ_pWV9meGyctGlStSBUI';

  React.useEffect(() => {
     
    const response = youtube.get('/search', {
      params: {
          key: KEY,
          part: 'snippet',
          q: 'react js',
          maxResults: 5,
      }
    });
    
    
    console.log( response );
  }, []); // <-- Have to pass in [] here!

 

  return (
    <div className="App">
        {/* <VideoList 
        videos = {videos}
        />  */}
    </div>
  );
}

export default App;
