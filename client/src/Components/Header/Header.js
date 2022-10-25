import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav className="bg-gray-50 dark:bg-gray-700">
            <div className="py-3 px-4 mx-auto max-w-screen-xl md:px-6">
                <div className="flex items-center">
                    <ul className="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
                        <li>
                            <Link to="/services" className="text-gray-900 dark:text-white hover:underline" aria-current="page">Services</Link>
                        </li>
                        <li>
                            <Link to="/packages" className="text-gray-900 dark:text-white hover:underline">Packages</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header