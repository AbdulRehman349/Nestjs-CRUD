export default (packages = [], action) => {
    switch (action.type) {
        case 'FETCH PACKAGE':
            return action.payload
        case 'UPDATE PACKAGE':
            return packages.map((packages) => (packages._id === action.payload._id ? action.payload : packages));
        case 'DELETE PACKAGE':
            return packages.filter((packages) => packages._id !== action.payload)
        case 'CREATE PACKAGE':
            return [...packages, action.payload]
        default:
            return packages
    }
}