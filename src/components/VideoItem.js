import Typography from '@material-ui/core/Typography'
import './VideoItem.css'
import Paper from '@material-ui/core/Paper'

function VideoItem( {video, onVideoSelect} ) {
    
    return (
        <Paper onClick={() => onVideoSelect(video)}>
            <img className="ui image" 
                src={video.snippet.thumbnails.medium.url} 
                alt="{video.snippet.title}" />
            <div className="content"> 
                <Typography>
                    {video.snippet.title}   
                </Typography> 
            </div>
        </Paper>
    );
}

export default VideoItem;
