import React from 'react'
import CategoryList from './CategoryList'
import { useSelector, useDispatch } from 'react-redux'

function Category() {
    const categoryState = useSelector(state => state.category)
    const dispatch = useDispatch()

    return <React.Fragment>
        <div>
            <button type="button" onClick={() => dispatch({ type: 'add_category' })}>Add parent category</button>
        </div>
        <CategoryList categories={categoryState.categories}
            onUpdateCategory={
                (payload) => {
                    dispatch({ type: 'update_category', payload })
                }
            }
            onRemoveCategory={
                (payload) => {
                    dispatch({ type: 'set_category', payload })
                }
            }
        />
    </React.Fragment>
}

export default Category
