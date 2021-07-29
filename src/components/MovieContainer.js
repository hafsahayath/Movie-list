import React from 'react'
import MoviesForm from './MoviesForm'
import MoviesList from './MoviesList'
import MovieStats from './MovieStats'
import '../styles/movieContainer.css'

const MovieContainer = (props) => {
    return (
        <div>
            <h1 style={{textAlign:'center', marginBottom:'40px', color:'white'}}>My Big Movie List</h1>
            <div className='movie-container-top-flex'>
                <div className='leftside-container'>
                    <MoviesList />
                </div>
                <div className='aside-container'>
                    <MoviesForm />
                    <MovieStats />
                </div>
            </div>
        </div>
    )
}

export default MovieContainer
