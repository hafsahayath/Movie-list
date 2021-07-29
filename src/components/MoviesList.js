import React,{ useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import MovieCard from './MovieCard'
import '../styles/movieList.css'

const MoviesList = (props) => {
    const movies = useSelector(state=>state.movies)
    const [text, setText] = useState('')
    const [list, setList] = useState([])
    const [sort, setSort] = useState('')
    
    localStorage.setItem('movies',JSON.stringify(movies))

    useEffect(()=>{
        setList([...movies])
    },[movies])

    const handleChange = (e) => {
        let str = e.target.value
        const res = movies.filter(ele=>ele.movie.toLowerCase().includes(str.trim().toLowerCase()))
        setText(str)
        setList(res)
    }

    const handleSortChange = (e) => {
        const option = e.target.value
        setSort(option)
        if(option === 'ascending'){
            const atoz = list.sort((a,b)=>a.ranking - b.ranking)
            setList(atoz)
        } else if(option === 'descending'){
            const ztoa = list.sort((a,b)=>b.ranking - a.ranking)
            setList(ztoa)
        } else if(option === '') {
            setList([...movies])
        }
    }

    return (
        <div className='movie-list-container'>
            <form className='form-control-movielist'>
                <input type="text" placeholder="search by name" value={text} onChange={handleChange}/>
                <select value={sort} onChange={handleSortChange}>
                    <option value="">order by</option>
                    <option value="ascending">ascending</option>
                    <option value="descending">descending</option>
                </select>
            </form>
            {list.map(ele=>{
                return <MovieCard key={ele.id} {...ele} />
            })}
        </div>
    )
}

export default MoviesList
