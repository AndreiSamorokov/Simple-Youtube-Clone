function VideoItem( video, onVideoSelect ) {
    var videofile = video.video;
    return (
        <div className="video-item item" onClick={() => onVideoSelect(videofile)}>
            <img className="ui image" 
                src={videofile.snippet.thumbnails.medium.url} 
                alt="{videofile.snippet.title}" />
            <div className="content">
                <div className="header">
                    {videofile.snippet.title}
                </div>
            </div>
        </div>
    );
}

export default VideoItem;
