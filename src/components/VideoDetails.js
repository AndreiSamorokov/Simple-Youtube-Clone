import VideoItem from './VideoItem.js'


function VideoDetails(video) {

    if (!video) return <div>Loading....! </div>;
 
    const videovalue = video.video;
    const videoEmbedURL = `https://www.youtube.com/embed/${videovalue.id.videoId}`;

    return (
        <div> 
            <div className="ui embed">
                <iframe src={videoEmbedURL} title="Video Player"></iframe>
            </div>
            <div className="ui segment">
                <h4 className="ui header"> {videovalue.snippet.title} </h4>
                <p> {videovalue.snippet.description} </p>
            </div>
        </div>
    );
}

export default VideoDetails;
