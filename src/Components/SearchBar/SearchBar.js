import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ''
        }

        this.scrollToTopDiv = this.scrollToTopDiv.bind(this);
        this.search = this.search.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    scrollToTopDiv() {
        document.getElementById("searchResultsList").scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
      }

    search() {
        this.props.onSearch(this.state.term);
        this.scrollToTopDiv();
    }

    handleKeyPress(e) {
        if(e.keyCode === 13) {
            this.search();
        }
    }

    handleTermChange(event) {
        this.setState({term: event.target.value});
    }

    render() {
        return (
            <div className="SearchBar">
                <input placeholder="Enter A Song, Album, or Artist" 
                    onChange={this.handleTermChange} onKeyDown={this.handleKeyPress} />
                <button className="SearchButton" onClick={this.search}>SEARCH</button>
            </div>
        );
    }
};

export default SearchBar;