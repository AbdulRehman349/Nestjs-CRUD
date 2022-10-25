import axios from 'axios'


const url = 'http://localhost:5000/service'
const url2 = 'http://localhost:5000/package'


export const fetchService = () => axios.get(url)
export const fetchSingleService = (id) => axios.get(`${url}/singleservice/${id}`)
export const createService = (newService) => axios.post(url, newService)
export const updateService = (id, updatedService) => axios.patch(`${url}/${id}`, updatedService);
export const deleteService = (id) => axios.delete(`${url}/${id}`)

export const fetchPackage = () => axios.get(url2)
export const fetchSinglePackage = (id) => axios.get(`${url2}/singlepackage/${id}`)
export const createPackage = (newPackage) => axios.post(url2, newPackage)
export const updatePackage = (id, updatedPackage) => axios.patch(`${url2}/${id}`, updatedPackage);
export const deletePackage = (id) => axios.delete(`${url2}/${id}`)

