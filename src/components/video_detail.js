import React from 'react'
import IFrame from 'react-iframe'

function VideoDetail(props){
	if(!props.video.id)
	{
		return <div>Loading...</div>;
	};

	const url =`https://www.youtube.com/embed/${props.video.id.videoId}`;
	return (
	<div className="youtube-detail-left">
		<div className="embed-responsive embed-responsive-16by9">
		<IFrame className="embed-responsive-item" url={url} allowfullscreen></IFrame>
		</div>
		<div className="youtube-detail">
		<div>{props.video.snippet.channelTitle}</div>
		<div>{props.video.snippet.description}</div>
		</div>
	</div>
	);
}

export default VideoDetail;