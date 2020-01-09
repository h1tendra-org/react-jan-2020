import React from 'react'
import CategoryList from './CategoryList'
import { useSelector, useDispatch } from 'react-redux'

function Category() {
    const categoryState = useSelector(state => state.category)
    const dispatch = useDispatch()

    return <React.Fragment>
        <div>
            <button type="button" onClick={() => dispatch({ type: 'add_category', payload: { parent_id: 0 } })}>Add parent category</button>
        </div>
        <CategoryList categories={categoryState.categories} />
    </React.Fragment>
}

export default Category
