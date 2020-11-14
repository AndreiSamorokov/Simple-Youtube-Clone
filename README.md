# Simple Youtube Clone with React

    - Google youtube API v3
    - Material UI

    - useEffect using in functional component
    //-------------------------
    React.useEffect(() => {
        fetchVideos(); 
    }, [channelId]); // <-- It making useEffect run once changed [channelId]
    //-------------------------

    - youtube Iframe Responsive
    //-------------------------
     .framewrapper{
        position: relative;
        padding-bottom: 56.25%; /* 16:9 */
        padding-top: 25px;
        height: 0;
    }

    .framewrapper iframe{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    //-------------------------