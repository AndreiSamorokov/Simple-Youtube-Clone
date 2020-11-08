import React from 'react'
import logo from './logo.svg';
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
      const response = await youtube.get('/search', {
          params: {
              key: KEY,
              part: 'snippet',
              q: 'dprk',
              maxResults: 5,
          }
      });
        
      setVideos( response.data.items );
      setSelectedVideo( response .data.items[0] );
    }

    fetchVideos();

  }, []); // <-- Have to pass in [] here!

  
  return (
    <div className="App">
        <div className="eleven wide column">
            <VideoDetails video={selectedVideo} />
        </div>
        <VideoList 
        videos = {videos}
        /> 
    </div>
  );
}

export default App;
