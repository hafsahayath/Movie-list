import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addMovie } from '../actions/moviesAction'
import '../styles/moviesForm.css'

const MoviesForm = (props) => {
    const [movie, setMovie] = useState('')
    const [ranking, setRanking] = useState('')

    const dispatch = useDispatch()

    const formSubmit = (e) => {
        e.preventDefault()
        const formData = {
            id: Number(new Date()),
            movie: movie,
            ranking: Number(ranking)
        }
        dispatch(addMovie(formData))
        
        // if(localStorage.getItem('movies')){
        //     const dataAvailable = JSON.parse(localStorage.getItem('movies'))
        //     localStorage.setItem('movies',JSON.stringify([...dataAvailable, {...formData}]))
        // } else {
        //     const noData = []
        //     noData.push(formData)
        //     localStorage.setItem('movies',JSON.stringify(noData))
        // }

        setMovie('')
        setRanking('')
    }

    return (
        <div className='movies-form-main-container'>
            <h2>Add Movie</h2>
            <form className='movies-form-container' onSubmit={formSubmit}>
                <input type="text" placeholder="Enter movie name" value={movie} onChange={(e)=>setMovie(e.target.value)} />
                <input type="text" placeholder="IMDB Ranking" value={ranking} onChange={(e)=>setRanking(e.target.value)} />
                <input className="btn" type="submit" value="Add" />
            </form>
        </div>
    )
}

export default MoviesForm
