export default (singlepackage = null, action) => {
    switch (action.type) {
        case 'FETCH SINGLE PACKAGE':
            return action.payload
        default:
            return singlepackage
    }
}