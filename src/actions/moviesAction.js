export const addMovie = (data) => {
    return {
        type: 'ADD_MOVIE',
        payload: data
    }
}

export const removeMovieCard = (id) => {
    return {
        type: 'REMOVE_MOVIE',
        payload: id
    }
}
