// import VideoItem from './VideoItem.js'


function VideoList( videos ) {

    console.log( videos );
    if( videos.length > 0 ){
        
        return (
            <div className="videolist">
                { videos.map( (video)=>{
                    <div key={video.id.videoId}> test  </div>
                    // <VideoItem key={video.id.videoId}
                    // video={video}
                    // onVideoSelect={onVideoSelect} />
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
