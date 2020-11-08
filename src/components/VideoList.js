import VideoItem from './VideoItem.js'


function VideoList( videos ) {
    const videofiles = videos.videos;
    
    if( videofiles.length > 0 ){
        console.log( videofiles );    
        return (
            <div className="videolist">
                { videofiles.map( (video)=>{
                    // <div key={video.id.videoId}> test  </div>
                    <VideoItem key={video.id.videoId}
                    video={video} />
                })}
            
            </div>
        );

    
    }else{
        return (
            <div> loading ...</div>
        );
    }

}

export default VideoList;
