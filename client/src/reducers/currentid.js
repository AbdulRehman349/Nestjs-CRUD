export default (currentid = "0", action) => {
    switch (action.type) {
        case 'SET ID':
            return action.payload
        default:
            return currentid
    }
}