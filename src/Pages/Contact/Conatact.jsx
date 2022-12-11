import React from 'react'
import { Link } from 'react-router-dom'


const Conatact = () => {
    return (
        <div className=''>
            {/* write a code for the align image in the background with blur */}
            <div className="image-fenil">
                <img src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" alt="https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" className='absolute sm:px-8 top-24 px-20 sm:h-1/5 -z-40 blur-sm w-full h-3/6' />
            </div>
            <div className="all-other-cotant mt-44 sm:mt-32">
                <h1 className='font-bold text-6xl sm:text-3xl text-center text-white'>Conatct Us</h1>
                <div className="grid w-full sm:mt-20 mt-60 grid-cols-3 sm:grid-cols-2">
                    <div className="col-span-2 mx-24 sm:w-full sm:ml-3">
                        <table className='w-full'>
                            <tbody>
                                <tr className=''>
                                    <td className='text-md font-semibold pt-8 pb-2'>First Name</td>
                                    <td className='text-md font-semibold pt-8 pb-2'>Last Name</td>
                                </tr>
                                <tr>
                                    <td><input type="text" name='first-name' className='border-2 bg-gray-100 border-gray-400 rounded-lg transition-all outline-yellow-700 ease-in duration-500 p-2 w-5/6' /></td>
                                    <td><input type="text" name='last-name' className='border-2	bg-gray-100 border-gray-400 rounded-lg transition-all outline-yellow-700 ease-in duration-500 p-2 w-5/6' /></td>
                                </tr>
                                <tr>
                                    <td className='pt-8 font-semibold pb-2'>Email:-</td>
                                    <td className='pt-8 font-semibold pb-2'>Phone No:-</td>
                                </tr>
                                <tr >
                                    <td>
                                        <input type="text" name='email' className='border-2	bg-gray-100 border-gray-400 rounded-lg transition-all peer  outline-yellow-700 ease-in duration-500 p-2 w-5/6' />
                                    </td>
                                    <td>
                                        <input type="phone" className='border-2	bg-gray-100 border-gray-400 rounded-lg transition-all  outline-yellow-700 ease-in duration-500 p-2 w-5/6' />
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={2} className="pt-6 pb-2 font-semibold" >Your Message:-</td>
                                </tr>
                                <tr>
                                    <td colSpan={2}>
                                        <textarea name="message" id="message" className='border-2	bg-gray-100 border-gray-400 rounded-lg transition-all  outline-yellow-700 ease-in duration-300 p-2 w-[91.5%]'></textarea>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={2} className="pt-6">
                                        <label className="block">
                                            <span className="sr-only">Choose profile photo</span>
                                            <input type="file" className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4  file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700    hover:file:bg-violet-100" />
                                        </label>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={2} className="pt-6">
                                        <div className="flex items-center">
                                            <input id="link-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 transition-all rounded-3xl ease-in focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="link-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 dark:text-blue-500 hover:underline">terms and conditions</a>.</label>
                                        </div>

                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={2} className="pt-6">
                                        <button className='bg-yellow-500 transition-all duration-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full'>Submit Query</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='col-span-1 justify-center'>
                        <div className="grid sm:mt-12 grid-cols-2 sm:gap-x-28">
                            <div className='text-center w-5/6 sm:w-40 sm:my-2 my-10'>
                                <i className="fa-solid fa-location-dot text-5xl bg-gray-300 p-7 rounded-2xl"></i>
                                <h1 className='font-bold text-2xl'>Address</h1>
                                <p className='text-md m-auto w-3/4 text-center whitespace-pre-line'>Shop E-3,Radhika Residency,Variyav Road,Amroli,Surat-394107</p>
                            </div>
                            <div className='text-center w-5/6 sm:w-40 sm:my-2 my-10'>
                                <i className="fa-solid fa-building text-5xl bg-gray-300 p-7 rounded-2xl"></i>
                                <h1 className='font-bold text-2xl'>Tax Info</h1>
                                <p className='text-md m-auto w-3/4 text-center whitespace-pre-line'>Artlaaza In <br />
                                    Registered In India
                                </p>
                            </div>
                            <div className='text-center w-5/6 sm:w-40 sm:my-2 '>
                                <i className="fa-solid fa-phone text-5xl bg-gray-300 p-7 rounded-2xl"></i>
                                <h1 className='font-bold text-2xl'>Phone</h1>
                                <p className='text-md m-auto w-3/4 text-center whitespace-pre-line'>Number Is Comming Soon....</p>
                            </div>
                            <div className='text-center sm:w-40 sm:my-2  cursor-pointer'>
                                <Link href="https://mail.google.com/mail/u/0/?view=cm&amp;fs=1&amp;tf=1&amp;source=mailto&amp;to=artlaaza@gmail.com&title;=fenilsonani" target="_blank" rel="nofollow noopener">
                                    <i className="fa-solid fa-envelope text-5xl bg-gray-300 p-7 rounded-2xl"></i>
                                    <h1 className='font-bold text-2xl'>Email</h1>
                                    <p className='text-md m-auto capitalize w-3/4 text-center whitespace-pre-line'>artalaaza@gmail.com
                                        Send Your inquiry with gamil</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Conatact