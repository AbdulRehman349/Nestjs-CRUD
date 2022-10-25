export default (singleservice = [], action) => {
    switch (action.type) {
        case 'FETCH SINGLE SERVICE':
            return action.payload
        default:
            return singleservice
    }
}