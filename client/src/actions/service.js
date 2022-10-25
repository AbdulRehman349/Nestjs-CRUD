import * as api from '../api'


export const currentId = (serviceId) => (dispatch) => {
    dispatch({ type: 'SET ID', payload: serviceId })
}



export const getService = () => async (dispatch) => {
    try {
        const { data } = await api.fetchService()
        dispatch({ type: "FETCH SERVICE", payload: data })
    } catch (error) {
        console.log(error.message)
    }
}

export const getsingleService = (id) => async (dispatch) => {
    try {
        const { data } = await api.fetchSingleService(id)
        dispatch({ type: "FETCH SINGLE SERVICE", payload: data })
    } catch (error) {
        console.log(error.message)
    }
}

export const createService = (service) => async (dispatch) => {
    try {
        const { data } = await api.createService(service)
        dispatch({ type: "CREATE SERVICE", payload: data })
    } catch (error) {
        console.log(error.message)
    }
}

export const updateService = (id, updateService) => async (dispatch) => {
    try {
        const { data } = await api.updateService(id, updateService)
        dispatch({ type: 'UPDATE SERVICE', payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const deleteService = (id) => async (dispatch) => {
    try {
        await api.deleteService(id)
        dispatch({ type: 'DELETE SERVICE', payload: id })
    } catch (error) {
        console.log(error)
    }
}



export const getPackage = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPackage()
        dispatch({ type: "FETCH PACKAGE", payload: data })
    } catch (error) {
        console.log(error.message)
    }
}

export const getsinglePackage = (id) => async (dispatch) => {
    try {
        const { data } = await api.fetchSinglePackage(id)
        dispatch({ type: "FETCH SINGLE PACKAGE", payload: data })
    } catch (error) {
        console.log(error.message)
    }
}

export const updatePackage = (id, updatePackage) => async (dispatch) => {
    try {
        const { data } = await api.updatePackage(id, updatePackage)
        dispatch({ type: 'UPDATE PACKAGE', payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const createPackage = (packages) => async (dispatch) => {
    try {
        const { data } = await api.createPackage(packages)
        dispatch({ type: "CREATE PACKAGE", payload: data })
    } catch (error) {
        console.log(error.message)
    }
}

export const deletePackage = (id) => async (dispatch) => {
    try {
        await api.deletePackage(id)
        dispatch({ type: 'DELETE PACKAGE', payload: id })
    } catch (error) {
        console.log(error)
    }
}