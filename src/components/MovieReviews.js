// Code MovieReviews Here
import React from 'react';

const MovieReviews = ({display_title, summary_short, publication_date}) => {
    <div className="review-list">    
        <div className="review">
            <h2>{display_title}</h2>
            <em>Published: {publication_date}</em>
            <p>{summary_short}</p>
        </div>
    </div>
}

export default MovieReviews