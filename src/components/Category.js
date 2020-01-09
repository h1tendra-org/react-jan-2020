import React from 'react'
import CategoryList from './CategoryList'
import { useSelector, useDispatch } from 'react-redux'
import { getCategoryTreeView } from '../helpers/common'

function Category() {
    const categoryState = useSelector(state => state.category)
    const dispatch = useDispatch()
    const categories = getCategoryTreeView(categoryState.categories)
    const [dataLoaded, setDataLoaded] = React.useState(false)

    React.useEffect(() => {
        async function loadData() {
            try {
                let data = await fetch('/categories.json')
                data = await data.json()
                dispatch({ type: 'set_categories', payload: data })
                setDataLoaded(true)
            } catch (e) {
                setDataLoaded(true)
            }
        }

        if (!dataLoaded && categories.length === 0) {
            loadData()
        } else if (!dataLoaded) {
            setDataLoaded(true)
        }
    }, [dataLoaded, dispatch, categories])

    return <React.Fragment>
        <div>
            <button type="button"
                onClick={() => dispatch({ type: 'add_category', payload: { parent_id: 0 } })}>
                Add parent category</button>
        </div>
        <CategoryList categories={categories} />
    </React.Fragment>
}

export default Category
