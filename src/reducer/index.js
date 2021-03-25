const initState = {
    count: 0
}
const reducer = (state = initState, action) => {
    console.log('reducer', action)
    switch (action.type) {
        case 'add_action':
            return {
                count: state.count + 1
            }
        default:
            return state
    }
}

export {
    reducer
} 