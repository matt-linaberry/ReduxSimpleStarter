import React, { Component } from 'react';

// functional component
//const SearchBar = () => {
//    return <input />;
//};

// class component!
class SearchBar extends Component {
    // this is inherited from React.Component!
    // state changes refire the render method!

    constructor(props) {
        super(props);

        this.state = { term: '' };
    }

    render() {
        // only edit state with the setState method!
        // controlled elements are set by the state via the value attribute
        return (
        <div className="search-bar">
            <input 
                value={this.state.term}
                onChange={event => this.onInputChange(event.target.value)} /> 
        </div>
        );
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;