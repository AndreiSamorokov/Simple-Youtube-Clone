import VideoItem from './VideoItem.js'


function VideoList( videos ) {
    const videofiles = videos.videos;
    
    if( videofiles.length > 0 ){  
        return (
            <div className="list"> 
                { videofiles.map( (video)=>(
                     
                    <VideoItem key={ video.id.videoId ? video.id.videoId : video.id.channelId}
                    video={video} />
                    
                ))}
            
            </div>
        );

    
    }else{
        return (
            <div> loading ...</div>
        );
    }

}

export default VideoList;
