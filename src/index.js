// IMports!
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyCy6OzbZqgPIF6aVkWqWqOSsYHqfNfkTQc';



// Create a new component. It will produce some HTML.
class App extends Component {  // const is ES6 stuff. it's declaring App as a true final constant.+
    constructor(props) {
        super(props);
        this.state = { videos: [] };

        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
            // now update the state with the new videos
            this.setState({ videos });  // json == {videos: videos}
        });
    }
    // pass those props!
    render() {
        return (
    <div>
        <SearchBar />
        <VideoList videos={this.state.videos}/> 
    </div>
    );
    }
}

// Put it in the DOM!
// Take this component's HTML, and put it on the page (the dom)

ReactDOM.render(<App/>, document.querySelector('.container'));

