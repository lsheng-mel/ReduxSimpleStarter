import React from 'react'

const VideoListItem = function(props){
	return (
		<li className="list-group-item" onClick={() => {
			props.OnVideoClicked(props.video);
		}}>
			<div>
				{props.video.snippet.title}}
			</div>
			<img src={props.video.snippet.thumbnails.high.url} />
		</li>
	);
}

export default VideoListItem;