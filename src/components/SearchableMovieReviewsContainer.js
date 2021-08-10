import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '9tNAuf9byusVRKd4dIOsam7pco4Goa5w';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {

    state = {
        reviews: [],
        searchTerm: ""
    }

    componentDidMount() {
        fetch(URL)
        .then(response => response.json())
        .then(movieReviews => 
            
            this.setState ({
                reviews: movieReviews.results
            })
        
        )
    }

    render() {
        return (
            <div className="searchable-movie-reviews">
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer;