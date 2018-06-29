import React from 'react';
import ReactDOM from 'react-dom';
import YoutubeSearch from 'youtube-api-v3-search'
import SearchBar from './components/search_bar.js'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'

const API_KEY = 'AIzaSyDNWf_Df3MM9SKDgvZPNORNwQoS4hPsc4g';

class App extends React.Component{
	constructor(props)
	{
		super(props);

		// initialisation of the state
		this.state = {
			videos: [],
			currentVideo: {}
		};

		// initial search
		this.SearchTerm('basketball');
	};

	SetData(videos, video)
	{
		this.setState({
			videos: videos,
			currentVideo: video
		})
	}
	
	// handler for video clicked
	OnVideoClicked(video)
	{
		this.SetData(this.state.videos, video);
	}

	// set up internal state after search is done
	OnSearch(err, result){
		if(err)
		{
			this.setState({videos: []})
			return;
		}

		this.SetData(result.items, result.items[0])
	}

	// search based on the given term
	SearchTerm(term){
		YoutubeSearch(API_KEY, {q: term}, this.OnSearch.bind(this));
	}

	// render the class
	render(){
		return (
			<div>
			<SearchBar onTermChanged={this.SearchTerm.bind(this)} />
			<VideoDetail video={this.state.currentVideo} />
			<VideoList videos={this.state.videos} OnVideoClicked={this.OnVideoClicked.bind(this)} />
			</div>
		)
	}
}

ReactDOM.render(<App/>, document.querySelector('.container'));