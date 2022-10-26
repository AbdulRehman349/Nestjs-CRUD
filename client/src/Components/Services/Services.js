import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { deletePackage, deleteService, getPackage, getService, updatePackage } from '../../actions/service'



const Services = () => {


    const dispatch = useDispatch()
    const navigate = useNavigate()
    const services = useSelector((state) => state.service)
    const packages = useSelector((state) => state.packages)

    useEffect(() => {
        dispatch(getService())
    }, [])

    useEffect(() => {
        dispatch(getPackage())
    }, [])



    const handleDelete = (id) => {
        dispatch(deleteService(id))
        const newPackages = packages.map((singlepackage) => {
            const newServices = singlepackage.servicesArr.filter((item) => {
                return item.service_id._id !== id
            })
            singlepackage.servicesArr = newServices

            if (singlepackage.servicesArr.length > 0) {
                dispatch(updatePackage(singlepackage._id, singlepackage))
            } else {
                dispatch(deletePackage(singlepackage._id))
            }
        })
    }



    return (
        <>
            <div className='flex justify-end my-6'>

                <Link to="addservice" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                    Add Service
                </Link>
            </div>
            {!services.length ? <h3>No Available Services</h3> : (
                <div className='space-y-10 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10 md:space-y-0'>
                    {services.map((service, idx) => (
                        <div key={idx} className="col-sm-6 ">

                            <div className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{service.servicename}</h5>
                                <p className="font-normal text-gray-700 dark:text-gray-400">{service.description}</p>
                                <p className="font-normal text-gray-700 dark:text-gray-400">${service.price}</p>
                                <div className=' flex justify-around items-center mt-2'>
                                    <button type="submit" onClick={() => handleDelete(service._id)} className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                    </button>
                                    <button type="submit" onClick={() => navigate(`updateservice/${service._id}`)} className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                                    </button>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            )}
        </>
    )
}

export default Services