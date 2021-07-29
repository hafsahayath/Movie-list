import React from 'react'
import { useDispatch } from 'react-redux'
import {removeMovieCard} from '../actions/moviesAction'
import '../styles/movieCard.css'


const MovieCard = ({id, movie, ranking}) => {
    const dispatch = useDispatch()

    const handleRemove = () => {
        dispatch(removeMovieCard(id))
    }

    return (
        <div className='movie-card-main-flex'>
            <div className='movie-card-item'>
                <img src="https://i.stack.imgur.com/ypvk3.png" alt="" />
                <div style={{display:'flex', flexDirection:'column', alignItems:'center',justifyContent:'space-between'}}>
                    <h3>{movie} - #{ranking}</h3>
                    <button style={{alignSelf:'flex-end'}} className='btn-delete' onClick={handleRemove}><i className="far fa-trash-alt"></i></button>
                </div>
            </div>
        </div>
    )
}

export default MovieCard