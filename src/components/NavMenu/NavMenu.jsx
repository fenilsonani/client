import React from 'react'
import { Link } from 'react-router-dom'

const NavMenu = () => {
    return (
        <div>
            <div id="mega-menu-full-dropdown" className="mt-1 border-gray-200 shadow-sm bg-gray-50 md:bg-white border-y dark:bg-gray-800 dark:border-gray-600">
                <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:px-6">
                    <ul>
                        <li>
                            <Link href="#" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                                <div className="font-semibold">Online Stores</div>
                                <span className="text-sm font-light text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                                <div className="font-semibold">Segmentation</div>
                                <span className="text-sm font-light text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                                <div className="font-semibold">Marketing CRM</div>
                                <span className="text-sm font-light text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                            </Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link href="#" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                                <div className="font-semibold">Online Stores</div>
                                <span className="text-sm font-light text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                                <div className="font-semibold">Segmentation</div>
                                <span className="text-sm font-light text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                                <div className="font-semibold">Marketing CRM</div>
                                <span className="text-sm font-light text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavMenu