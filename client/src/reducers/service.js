
export default (service = [], action) => {
    switch (action.type) {
        case 'FETCH SERVICE':
            return action.payload
        case 'UPDATE SERVICE':
            return service.map((service) => (service._id === action.payload._id ? action.payload : service));
        case 'DELETE SERVICE':
            return service.filter((service) => service._id !== action.payload)
        case 'CREATE SERVICE':
            return [...service, action.payload]
        default:
            return service
    }
}