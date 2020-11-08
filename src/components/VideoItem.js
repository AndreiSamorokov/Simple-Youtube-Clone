function VideoItem( video, onVideoSelect ) {
    
    return (
        <div className="video-item item" onClick={() => onVideoSelect(video)}>
            test
        </div>
    );
}

export default VideoItem;
