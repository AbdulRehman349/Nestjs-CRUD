import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { createService, getsingleService, updateService } from '../../actions/service';

const ServiceForm = () => {

    const [serviceData, setServiceData] = useState({
        servicename: "", description: "", price: ""
    })

    const dispatch = useDispatch()
    const navigate = useNavigate()
    let { id } = useParams()
    let singleservice = useSelector((state) => state.singleservice)


    useEffect(() => {
        dispatch(getsingleService(id))
    }, [])


    useEffect(() => {
        if (id != undefined) {
            if (singleservice) setServiceData(singleservice);
        }
    }, [singleservice]);


    const handleSubmit = (e) => {
        e.preventDefault()
        if (serviceData.servicename != "" && serviceData.price != "" && serviceData.price != "") {
            if (singleservice.length === 0) {
                dispatch(createService(serviceData))
            } else {
                dispatch(updateService(singleservice._id, serviceData))
            }
            navigate("/services")
        } else alert("Provide all details")
    }



    return (
        <form autoComplete='off' noValidate onSubmit={handleSubmit}>
            <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Service Name</label>
                <input type="text" id="base-input" name='servicename' value={serviceData.servicename} onChange={(e) => setServiceData({ ...serviceData, servicename: e.target.value })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Description</label>
                <input type="text" id="base-input" name='description' value={serviceData.description} onChange={(e) => setServiceData({ ...serviceData, description: e.target.value })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Price</label>
                <input type="number" id="base-input" name='price' value={serviceData.price} onChange={(e) => setServiceData({ ...serviceData, price: e.target.value })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>
    )
}

export default ServiceForm