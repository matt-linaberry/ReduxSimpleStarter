// IMports!
import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCy6OzbZqgPIF6aVkWqWqOSsYHqfNfkTQc';

// Create a new component. It will produce some HTML.
const App = () => {  // const is ES6 stuff. it's declaring App as a true final constant.
    return (
    <div>
        <SearchBar />
    </div>
    );
}

// Put it in the DOM!
// Take this component's HTML, and put it on the page (the dom)

ReactDOM.render(<App/>, document.querySelector('.container'));

