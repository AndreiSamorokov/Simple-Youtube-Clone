function VideoList( videos ) {
    
  return (
    <div className="videolist">
        { videos.map( (video)=>{
            <div>{video}</div>
        })}
    </div>
  );
}

export default VideoList;
