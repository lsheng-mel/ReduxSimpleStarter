import React from 'react'
import VideoListItem from './video_list_item'

const VideoList = function(props){
	return (
		<div className="list-group-right">
		<ul className="list-group">
		{
			props.videos.map(video => {
				return <VideoListItem key={video.etag} video={video} OnVideoClicked={props.OnVideoClicked}/>
			})
		}
		</ul>
		</div>
		);
}

export default VideoList;