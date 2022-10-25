import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { deletePackage } from '../../actions/service'
import { getPackage } from '../../actions/service'



const Packages = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const packages = useSelector((state) => state.packages)


    useEffect(() => {
        dispatch(getPackage())
    }, [])

    const calPrice = (pack) => {
        let total = 0
        pack.servicesArr.forEach((item) => {
            total = total + (Number(item.service_qty) * Number(item.service_id.price))
        })
        return total
    }

    return (
        <>
            <div className='flex justify-end my-6' >
                <Link to="addpackage" className=" right-0 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Add Package
                </Link>
            </div>
            {!packages.length ? <h3>No Available Packages</h3> : (
                <div className='space-y-10 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10 md:space-y-0'>
                    {packages.map((pack) => (
                        <div key={pack._id} className="col-sm-6 ">
                            <div className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{pack.packagename}</h5>
                                <p className="font-normal text-gray-700 dark:text-gray-400">{pack.description}</p>
                                {pack.servicesArr.map((service) => (

                                    <h6 key={service._id} className="font-normal text-gray-700 dark:text-gray-400">{service.service_id.servicename} X {service.service_qty}</h6>

                                ))}
                                <h6 className="font-normal text-gray-700 dark:text-gray-400">Price:${calPrice(pack)}</h6>
                                <div className=' flex justify-around items-center mt-2'>
                                    <button type="submit" onClick={() => dispatch(deletePackage(pack._id))} className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                    </button>
                                    <button type="submit" onClick={() => navigate(`updatepackage/${pack._id}`)} className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
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

export default Packages