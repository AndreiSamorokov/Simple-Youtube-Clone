import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';


import VideoList from './components/VideoList'
import VideoDetails from './components/VideoDetails'
import youtube from './api/api'

import Typography from '@material-ui/core/Typography'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Container from '@material-ui/core/Container'
import {ThemeProvider, createMuiTheme} from '@material-ui/core/styles'
import { orange } from '@material-ui/core/colors'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'


function App() {
 
  const [videos, setVideos] = React.useState([]);
  const [selectedVideo, setSelectedVideo] = React.useState(null);

  const theme = createMuiTheme({
    // palette: {
    //   primary: {
    //     // main: orange[500],
    //   }
    // }
  })
 
  const KEY = 'AIzaSyADEp1HFKfMKOhQ_pWV9meGyctGlStSBUI';
 
  React.useEffect(() => { 
    async function fetchVideos() {
      await youtube.get('/search', {
          params: {
              key: KEY,
              channelId: 'UCsUzcuvRZmPfJIqPcnmo3xw',
              part: 'snippet',
              q: 'Sam jiyon',
              maxResults: 15,
              order: 'date'
          }
      }).then(response => {

        setVideos( response.data.items ); 
        setSelectedVideo( response.data.items[0] );  
      });
      
    }

    fetchVideos();

  }, []); // <-- Have to pass in [] here!
 
  function onVideoSelect(video){
    console.log( video );
    setSelectedVideo( video );  
  }

  return selectedVideo ? (
    <ThemeProvider theme={theme}>   
          <AppBar position="relative">
              <Toolbar>
                <VideoLibraryIcon />
                <Typography variant="h5" > Videos </Typography>

                <Button color="inherit">Sam jiyon</Button>
                <Button color="inherit">Film</Button>
                <Button color="inherit">Echo</Button>
              </Toolbar> 
          </AppBar>
          <main> 
          <Container >
            <Grid container spacing={3}>  
                <VideoDetails video={selectedVideo} />  
                <VideoList 
                  videos = {videos}
                  onVideoSelect = {onVideoSelect}
                  />  
            </Grid>   
          </Container>
        </main>
    </ThemeProvider>
  ) : (
    <div>
      Loading ...
    </div>
  )
}

export default App;
