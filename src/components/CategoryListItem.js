import React from 'react';
import CategoryList from './CategoryList';
import CategoryListItemForm from './CategoryListItemForm';

function categoryReducer(state, action) {
    switch (action.type) {
        case 'update_category':
            return { ...state, category: { ...state.category, name: action.payload } }
        case 'add_children':
            return { ...state, children: [...state.children, action.payload] }
        default:
            return state
    }
}

function CategoryListItem(props) {
    const [categoryState, categoryDispatch] = React.useReducer(categoryReducer, { category: props.category, children: props.category.children })
    const { category, children } = categoryState
    const [editMode, setEditMode] = React.useState(category.name ? false : true)

    return (
        <li>
            {
                editMode ?
                    <React.Fragment>
                        <CategoryListItemForm
                            category={category}
                            onSave={(name) => {
                                categoryDispatch({ type: 'update_category', payload: name })
                                setEditMode(false)                                
                            }}
                            onCancel={() => setEditMode(false)}
                        />
                    </React.Fragment>
                    :
                    <React.Fragment>
                        {category.name}
                        <button type="button" onClick={(e) => setEditMode(true)}>Edit</button>                        
                        < button type="button" onClick={(e) => {
                            categoryDispatch({ type: 'add_children', payload: { name: '', id: children.length + 1, parent_id: category.id, children: [] } })
                        }} > +</button >
                    </React.Fragment>
            }
            {children ? <CategoryList categories={children} /> : null}
        </li>
    );
}

export default CategoryListItem;
