import React from 'react';
import TrackList from '../TrackList/TrackList.js';
import './SearchResults.css';

class SearchResults extends React.Component {
    constructor(props) {
        super(props);

        this.searchAgain = this.searchAgain.bind(this);
        this.scrollToTopDiv = this.scrollToTopDiv.bind(this);
    }

    scrollToTopDiv() {
        document.getElementById("searchResultsList").scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
      }

    searchAgain() {
        this.props.onSearch(document.getElementById("searchTerm").value);
        this.scrollToTopDiv();
    }

    render() {
        return (
            <div id="searchResultsList" className="SearchResults">
                <h2>Results</h2>
                <TrackList tracks={this.props.searchResults} onAdd={this.props.onAdd} isRemoval={false} />
                <div className="SearchAgainContainer">
                    <button className="SearchAgain" onClick={this.searchAgain}>GET MORE</button>
                </div>
            </div>
        );
    }
};

export default SearchResults;