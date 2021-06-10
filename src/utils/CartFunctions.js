let index, newlist
export const onAddItem = (state, payload) => {
    // // console.log(state, payload)
    return {
        ...state, cartList: [{ ...payload }, ...state.cartList,]
    }
}
export const onAddItems = (state, payload) => {
    // console.log(state.cartList, payload)
    return {
        ...state,
        cartList: [...state.cartList, ...payload]
    }
}

export const onItemExist = (state, payload) => {
    return state.cartList.find(item => parseInt(payload.product_id) === parseInt(item.product_id)
    )
}


export const onUpdateItem = (state, payload) => {
    index = state.cartList.indexOf(onItemExist(state, payload))
    newlist = [...state.cartList];
    if (index > -1) {
        newlist[index] = payload
    }
    return { ...state, cartList: newlist }
}

export const onRemoveItem = (state, payload) => {
    return {
        ...state,
        cartList: state.cartList.filter((item) => item.product_id !== payload.product_id),
    };
}
export const onRemoveAll = (state) => {
    return {
        ...state,
        cartList: [],
    };
}