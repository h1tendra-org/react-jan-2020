import { createStore } from 'redux'
import reducer from './reducers'
import { saveState, getState } from '../helpers/common'

const initialState = {}

const catState = getState('STATE_category')
if (catState) {
    initialState.category = catState
}

const store = createStore(reducer, initialState)

store.subscribe(() => {
    const state = store.getState()
    saveState('STATE_category', state.category)
})

export default store
