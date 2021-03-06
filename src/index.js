// IMports!
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyCy6OzbZqgPIF6aVkWqWqOSsYHqfNfkTQc';



// Create a new component. It will produce some HTML.
class App extends Component {  // const is ES6 stuff. it's declaring App as a true final constant.+
    constructor(props) {
        super(props);

        this.state = { 
            videos: [],
            selectedVideo: null 
        };
        this.videoSearch('surfboards');
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            // now update the state with the new videos
            this.setState({ 
                videos: videos,
                selectedVideo: videos[0]
            });  // json == {videos: videos}
            
        });
    }
    // pass those props!
    render() {

        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
        return (
    <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList 
            onVideoSelect={selectedVideo => this.setState({selectedVideo})}
            videos={this.state.videos}
        /> 
    </div>
    );
    }
}

// Put it in the DOM!
// Take this component's HTML, and put it on the page (the dom)

ReactDOM.render(<App/>, document.querySelector('.container'));

