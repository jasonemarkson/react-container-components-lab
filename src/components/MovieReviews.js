// Code MovieReviews Here
import React from 'react';

const MovieReviews = (reviews) => {
    return <div className="review-list"> 
        { reviews.reviews.map(r => <MovieReview display_title={r.display_title} summary_short={r.summary_short} publication_date={r.publication_date} />) }
    </div>
}

const MovieReview = ({display_title, summary_short, publication_date}) => {
    return <div className="review">
        <h1>{display_title}</h1>
        <em>Published: {publication_date}</em>
        <p>{summary_short}</p>
    </div>
}

export default MovieReviews