export const convertToUpper = str => {
    try {
        return str.toUpperCase()
    } catch (error) {
        return ""
    }
}
export const FindRolePermissions = (arrayList, role_id) => arrayList && arrayList.find(item => parseInt(item.id) === parseInt(role_id))

export const FilterMenuByType = (arrayList, parent) => arrayList && arrayList.filter(item => item.permission_m.perm_type === "ROUTE" && convertToUpper(item.permission_m.perm_parent) === convertToUpper(parent))
export const FindActionPermissions = (arrayList, description) => arrayList && arrayList.find(item =>
    item.permission_m.perm_type === "ACTION" &&
    item.permission_m.description === description)


/*
export const FindActionPermissions = (arrayList, description) => {
    //  console.log(arrayList, description)
    const res = arrayList && arrayList.find(item => {
        console.log(item.permission_m.perm_type, item.permission_m.description)
        const xx = item.permission_m.perm_type === "ACTION" && item.permission_m.description === description
        console.log(xx)
        return xx
    })
}
 */