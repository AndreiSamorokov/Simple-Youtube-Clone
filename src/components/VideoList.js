import VideoItem from './VideoItem.js'
import Grid from '@material-ui/core/Grid'

function VideoList( {videos, onVideoSelect} ) { 
    if( videos.length > 0 ){  
        return (
            <Grid item lg={4} xs={12}> 
                { videos.map( (video)=>(
                     
                    <VideoItem key={ video.id.videoId ? video.id.videoId : video.id.channelId}
                    video={video} 
                    onVideoSelect={onVideoSelect}
                    /> 
                ))}            
            </Grid>
        );

    
    }else{
        return (
            <div> loading ...</div>
        );
    }

}

export default VideoList;
