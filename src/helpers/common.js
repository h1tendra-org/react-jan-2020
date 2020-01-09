export function getCategoryTreeView(categories) {
    const parents = [], childrens = []

    categories.forEach(item => {
        if (item.parent_id === 0) {
            parents.push(item)
        } else {
            childrens.push(item)
        }
    })

    function getCategoryHierarchy(parents, childrens) {
        parents.forEach((parent, i) => {
            parents[i].children = childrens.filter(item => item.parent_id === parents[i].id)

            if (parents[i].children.length > 0) {
                parents[i].children = getCategoryHierarchy(parents[i].children, childrens)
            }
        })

        return parents
    }

    return getCategoryHierarchy(parents, childrens)
}
