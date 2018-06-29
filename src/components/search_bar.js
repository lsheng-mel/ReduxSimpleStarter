import React from 'react';
import ReactDOM from 'react-dom';

class SearchBar extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			term : '', 
			onTermChanged: props.onTermChanged
		}
	}

	render(){
		return (
			<div>
			<input className="youtube-search" value={this.state.term} onChange={event => {
				// update its internal term
				this.setState({term: event.target.value});

				// invoke the callback function passed from the parent component
				this.state.onTermChanged(this.state.term);
			}}/>
			</div>
		)
	}
}

export default SearchBar;