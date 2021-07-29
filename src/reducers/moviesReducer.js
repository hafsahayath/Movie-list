const initialMovieState = JSON.parse(localStorage.getItem('movies'))||[]

const moviesReducer = (state=initialMovieState, action) => {

    switch(action.type){
        case 'ADD_MOVIE':{
            return [...state, {...action.payload}]
        }
        case 'REMOVE_MOVIE': {
            const res = state.filter(ele=>{
                return ele.id !== action.payload
            })
            return res
        }

        default: {
            return [...state]
        }
    }
}

export default moviesReducer