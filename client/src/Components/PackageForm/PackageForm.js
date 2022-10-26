import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getService, createPackage, getsinglePackage, updatePackage } from '../../actions/service'




const PackageForm = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    let { id } = useParams()
    const [packages, setPackages] = useState({ packagename: '', description: '', servicesArr: [] })
    const [allservices, setAllServices] = useState([])
    let services = useSelector((state) => state.service)

    let singlepackage = useSelector((state) => state.singlepackage)


    useEffect(() => {
        dispatch(getService())
        setAllServices([...services])
    }, [services])

    useEffect(() => {
        if (id != undefined) {
            if (singlepackage) setPackages({
                ...singlepackage, servicesArr: singlepackage.servicesArr?.map(({ service_id, service_qty }) => {
                    return { service_id: service_id, service_qty }
                })
            })
        }
    }, [singlepackage])



    useEffect(() => {
        if (id) {
            dispatch(getsinglePackage(id))
        }
    }, [])




    const handleAdd = (id) => {
        !checker(id) && setPackages({ ...packages, servicesArr: [...packages.servicesArr, { service_id: id, service_qty: 1 }] })

    }

    const handleRemove = (id) => {

        const arr = packages.servicesArr.filter((item) => {
            return item.service_id !== id
        })
        return arr
    }


    const inc = (id) => {
        const arr = [...packages.servicesArr]
        arr.forEach((item) => {
            if (item.service_id === id) {
                item.service_qty = item.service_qty + 1
            }
        })
        setPackages({ ...packages, servicesArr: arr })
    }

    const dec = (id) => {
        let arr = [...packages.servicesArr]
        arr.forEach((item) => {
            if (item.service_id === id) {
                if (item.service_qty > 1) {
                    item.service_qty = item.service_qty - 1
                } else {
                    arr = handleRemove(id)
                }
            }
        })
        setPackages({ ...packages, servicesArr: arr })
    }

    const checker = (id) => {

        let service = packages.servicesArr?.find(service => service.service_id === id)
        if (service) return true
        return false
    }

    const quantity = (id) => {
        let arr = [...packages.servicesArr]
        let qnty = 0
        arr.forEach((item) => {
            if (item.service_id === id) {
                qnty = item.service_qty
            }
        })
        return qnty
    }



    const handleSubmit = (e) => {
        e.preventDefault()
        if (packages.packagename != '' && packages.packagedescription != '' && packages.servicesArr.length != 0) {
            if (id === undefined) {
                dispatch(createPackage(packages))
            } else {
                dispatch(updatePackage(id, packages))
            }
            navigate("/packages");
        } else alert("Provide all details")
    }


    return (
        <div className="m-9" >
            <form onSubmit={handleSubmit}>
                <div className="mb-6">
                    <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Package Name</label>
                    <input type="text" id="base-input" value={packages.packagename} onChange={(e) => setPackages({ ...packages, packagename: e.target.value })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <div className="mb-6">
                    <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Description</label>
                    <input type="text" id="base-input" value={packages.description} onChange={(e) => setPackages({ ...packages, description: e.target.value })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>
            {!allservices.length ? <h3>No Available Services</h3> : (
                <div className='mt-5 space-y-10 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10 md:space-y-0'>
                    {allservices.map((service, idx) => (
                        <div key={idx} className="col-sm-6 ">

                            <div className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{service.servicename}</h5>
                                <p className="font-normal text-gray-700 dark:text-gray-400">{service.description}</p>
                                <p className="font-normal text-gray-700 dark:text-gray-400">{service.price}</p>
                                <div className=' flex justify-around items-center'>
                                    {checker(service._id) ?
                                        <>
                                            <button type="submit" onClick={() => dec(service._id)} className="text-gray-900 bg-gray-200  focus:outline-none hover:bg-gray-100  focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" >
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                            </button>
                                            <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">{quantity(service._id)}</label>
                                            <button type="submit" onClick={() => inc(service._id)} className="text-gray-900 bg-gray-200  focus:outline-none hover:bg-gray-100  focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                            </button>
                                        </>
                                        :

                                        <button type="submit" onClick={() => handleAdd(service._id)} className="text-gray-900 bg-gray-200  focus:outline-none hover:bg-gray-100  focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                                            Select
                                        </button>
                                    }
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            )
            }
        </div >
    )
}

export default PackageForm