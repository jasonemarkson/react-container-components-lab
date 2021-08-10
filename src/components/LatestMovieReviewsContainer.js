import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '9tNAuf9byusVRKd4dIOsam7pco4Goa5w';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

class LatestMovieReviewsContainer extends Component {
    
    state = {
        reviews: []
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
            <div className="latest-movie-reviews">
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }
}

export default LatestMovieReviewsContainer;