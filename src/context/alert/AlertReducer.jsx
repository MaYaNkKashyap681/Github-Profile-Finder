const alertReducer = (state, action) => {
    switch(action.type) {
        case "EMPTY_ERROR": 
            return {
                ...state,
                isError: true
            }
        case "REMOVE_ERROR":
            return {
                ...state,
                isError: false
            }
        default: 
            return state
    }
}

export default alertReducer