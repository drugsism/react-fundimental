import React from 'react';
import VideolistItem from './video_list_item';

const VideoList = (props) => {
    const videoItem = props.videos.map((video) => {
        return <VideolistItem 
            video={video} 
            key={video.etag} 
            onVideoSelect={props.onVideoSelect}
            />
    });
    return (
        <ul className="col-md-4  list-group">
            {videoItem}
        </ul>
    );
};


export default VideoList;