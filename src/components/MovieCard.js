import React from 'react';
import './MovieCard.css'
const MovieCard = (props) => {

    const image_url = 'https://image.tmdb.org/t/p/w500'

  return (
    <div className='card'>
        <div className='poster'>
            <img src={image_url + props.poster_path}/>
        </div>
        <div className='info'>
            <p className='title'>{props.title} </p>
            <p className='vote'>{props.vote_average} </p>
        </div>
    </div>

  )
};

export default MovieCard;