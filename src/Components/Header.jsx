// import APP_LOGO from "../assets/Logo copy.jpg"

// const Header = () => {
//     return (
//         <>
//             <header className=" ">
//                 <nav className="bg-sky-200 flex justify-between px-8 items-center w-full fixed py-2 shadow z-50    ">
//                     <div className="">
//                         <img className="w-20 h-20 cursor-pointer rounded-full  " src={APP_LOGO} alt="" />
//                     </div>
//                     <div>
//                         <ul className="flex">
//                             <li className="mx-4 text-orange-500 text-lg cursor-pointer border-2 p-2  border-orange-500 shadow rounded-lg hover:bg-orange-100 hover:text-sky-400 ">Call Now</li>
//                             <li className=" inset-0  mx-4 text-orange-500 text-lg cursor-pointer border-2 p-2 border-orange-500 shadow rounded-lg hover:bg-orange-100 hover:text-sky-400 ">Message Now</li>
//                         </ul>
//                     </div>
//                 </nav>
//             </header>
//         </>
//     )
// }
// export default Header


import { useState } from 'react';
import APP_LOGO from "../assets/Logo copy.jpg";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="w-full">
            <nav className="bg-gradient-to-r from-sky-400 to-sky-300 fixed top-0 left-0 right-0 z-50 shadow-lg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-3 md:py-4">
                        {/* Logo */}
                        <div className="flex-shrink-0 transition-transform hover:scale-105 duration-300">
                            <img
                                className="w-16 h-16 sm:w-20 sm:h-20 cursor-pointer rounded-full border-4 border-white shadow-lg object-cover "
                                src={APP_LOGO}
                                alt="Company Logo"
                            />
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex space-x-4 lg:space-x-6">
                            <button className="bg-gradient-to-r cursor-pointer from-orange-500 to-orange-600 text-white font-semibold px-6 py-3 rounded-xl shadow-md hover:shadow-xl hover:from-orange-600 hover:to-orange-700 transform hover:-translate-y-1 transition-all duration-300 border-2 border-orange-400">
                                📞 Call Now
                            </button>
                            <button className="bg-white cursor-pointer text-orange-600 font-semibold px-6 py-3 rounded-xl shadow-md hover:shadow-xl hover:bg-orange-50 transform hover:-translate-y-1 transition-all duration-300 border-2 border-orange-500">
                                💬 Message Now
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden text-orange-600 bg-white p-2 rounded-lg shadow-md hover:bg-orange-50 transition-colors duration-300"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {isMenuOpen ? (
                                    <path d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>

                    {/* Mobile Navigation */}
                    <div
                        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-48 pb-4' : 'max-h-0'
                            }`}
                    >
                        <div className="flex flex-col space-y-3 px-2">
                            <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold px-6 py-3 rounded-xl shadow-md hover:shadow-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 border-2 border-orange-400 w-full ">
                                📞 Call Now
                            </button>
                            <button className="bg-white text-orange-600 font-semibold px-6 py-3 rounded-xl shadow-md hover:shadow-lg hover:bg-orange-50 transition-all duration-300 border-2 border-orange-500 w-full ">
                                💬 Message Now
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
            {/* Spacer to prevent content from going under fixed header */}
            <div className="h-20 sm:h-24 md:h-28"></div>
        </header>
    );
};

export default Header;