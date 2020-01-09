import categories from '../../categories.json'

function categoryReducer(state = { categories, incId: categories.length }, action) {
    let newState, incId

    switch (action.type) {
        case 'update_category':
            newState = { ...state }

            function getItemIndexById(id) {
                let itemFound = false, index = 0

                while (!itemFound) {
                    const item = newState.categories[index]

                    if (!item) break

                    if (id === item.id) {
                        itemFound = true
                        break
                    }

                    index++
                }

                return itemFound ? index : -1
            }

            const index = getItemIndexById(action.payload.id)

            if (index !== -1) {
                newState.categories[index] = action.payload
            }

            return newState
        case 'remove_category':
            newState = { ...state }
            newState.categories = newState.categories.filter(item => item.id !== action.payload.id)
            return newState
        case 'add_category':
            newState = { ...state }
            incId = newState.incId + 1
            newState.categories = [...newState.categories, {
                name: '',
                id: incId,
                parent_id: action.payload.parent_id,
                children: [],
            }]
            newState.incId = incId
            return newState
        default:
            return state
    }
}

export default categoryReducer