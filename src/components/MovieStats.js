import React from 'react'
import { useSelector } from 'react-redux'
import '../styles/movieStats.css'

const MovieStats = (props) => {
    const movies = useSelector(state=>state.movies)
    console.log(movies)

    const score=[]
    movies.forEach(ele=>{
    score.push(ele.ranking)
    })
    const topScore = Math.max(...score)
    let topMovie;
    movies.forEach(ele=>{
        if(ele.ranking === topScore){
            topMovie = ele
        }
    })

    return (
        <div className='movies-stats-main-container'>
            <h2 style={{marginBottom:'20px'}}>Movie stats</h2>
            <h3>Total movies - <span className={movies.length>0?'highlight':''}>{movies.length}</span></h3>
            {topMovie && <h2><span className='highlight'>{topMovie.movie}</span></h2>}
        </div>
    )
}

export default MovieStats
