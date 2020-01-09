import categories from '../../categories.json'

function categoryReducer(state = { categories }, action) {
    let newState
    switch (action.type) {
        case 'update_category':
            newState = { ...state }
            newState.categories[action.payload.index] = action.payload.payload
            return newState
        case 'set_category':
            newState = { ...state }
            newState.categories = action.payload
            return newState
        case 'remove_category':
            newState = { ...state }
            newState.categories.splice(action.payload.index)
            return newState
        case 'add_category':
            newState = { ...state }
            newState.categories.push({
                name: '',
                id: newState.categories.length + 1,
                parent_id: newState.id,
                children: [],
            })
            return newState
        default:
            return state
    }
}

export default categoryReducer