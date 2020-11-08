import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';


import VideoList from './components/VideoList'
import VideoDetails from './components/VideoDetails'
import youtube from './api/api'


  
function App() {
 
  const [videos, setVideos] = React.useState([]);
  const [selectedVideo, setSelectedVideo] = React.useState(null);

  const KEY = 'AIzaSyADEp1HFKfMKOhQ_pWV9meGyctGlStSBUI';
 
  React.useEffect(() => { 
    async function fetchVideos() {
      await youtube.get('/search', {
          params: {
              key: KEY,
              channelId: 'UCsUzcuvRZmPfJIqPcnmo3xw',
              part: 'snippet',
              q: 'Sam jiyon',
              maxResults: 5,
          }
      }).then(response => {

        setVideos( response.data.items ); 
        setSelectedVideo( response.data.items[1] );  
      });
      
    }

    fetchVideos();

  }, []); // <-- Have to pass in [] here!
 

  return selectedVideo ? (
    <div className="App">
        <div className="eleven wide column">
            <VideoDetails video={selectedVideo} />
        </div>
        <VideoList 
        videos = {videos}
        /> 
    </div>
  ) : (
    <div>
      Loading ...
    </div>
  )
}

export default App;
