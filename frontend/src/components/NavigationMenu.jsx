
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navigationmenu.css';

const NavigationMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleMenuItemClick = () => {
        setIsOpen(false);
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between flex-wrap bg-white shadow-md p-4">
            <Link to='/' onClick={handleMenuItemClick}>
                <div className="flex items-center flex-shrink-0 text-gray-900 mr-6 animate-logo-spin-3d">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="32" height="32" fill="#030303">
                        <path d="M256 224c-79.37 0-191.1 122.7-191.1 200.2C64.02 459.1 90.76 480 135.8 480C184.6 480 216.9 454.9 256 454.9C295.5 454.9 327.9 480 376.2 480c44.1 0 71.74-20.88 71.74-55.75C447.1 346.8 335.4 224 256 224zM108.8 211.4c-10.37-34.62-42.5-57.12-71.62-50.12S-7.104 202 3.27 236.6C13.64 271.3 45.77 293.8 74.89 286.8S119.1 246 108.8 211.4zM193.5 190.6c30.87-8.125 46.37-49.1 34.5-93.37s-46.5-71.1-77.49-63.87c-30.87 8.125-46.37 49.1-34.5 93.37C127.9 170.1 162.5 198.8 193.5 190.6zM474.9 161.3c-29.12-6.1-61.25 15.5-71.62 50.12c-10.37 34.63 4.75 68.37 33.87 75.37c29.12 6.1 61.12-15.5 71.62-50.12C519.1 202 503.1 168.3 474.9 161.3zM318.5 190.6c30.1 8.125 65.62-20.5 77.49-63.87c11.87-43.37-3.625-85.25-34.5-93.37c-30.1-8.125-65.62 20.5-77.49 63.87C272.1 140.6 287.6 182.5 318.5 190.6z"></path>
                    </svg>
                </div>
            </Link>
            
            <div className="block lg:hidden">
                <button
                    onClick={() =>{ setIsOpen(!isOpen)}}
                    className=" flex items-center px-3 py-2 border rounded text-gray-900 border-black hover:text-gray-500 hover:border-gray-500"
                >
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Menu</title>
                        <path d="M0 3h20v2H0zM0 9h20v2H0zM0 15h20v2H0z" />
                    </svg>
                </button>
            </div>
            <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? 'text-center ' : 'hidden'}`}>
                <div className="text-sm lg:flex-grow">
                    <Link
                        to="/"
                        className="block mt-4 lg:inline-block lg:mt-0 text-gray-900 hover:text-gray-500 mr-4"
                        onClick={handleMenuItemClick}
                    >
                        Home
                    </Link>
                    <Link
                        to="/about"
                        className="block mt-4 lg:inline-block lg:mt-0 text-gray-900 hover:text-gray-500 mr-4"
                        onClick={handleMenuItemClick}
                    >
                        About
                    </Link>
                    <Link
                        to="/services"
                        className="block mt-4 lg:inline-block lg:mt-0 text-gray-900 hover:text-gray-500 mr-4"
                        onClick={handleMenuItemClick}
                    >
                        Services
                    </Link>
                    <Link
                        to="/contact"
                        className="block mt-4 lg:inline-block lg:mt-0 text-gray-900 hover:text-gray-500 mr-4"
                        onClick={handleMenuItemClick}
                    >
                        Contact
                    </Link>
                </div>

                    <div className="booking-button flex justify-center mt-4 lg:mt-0 lg:flex-none">
                        <Link to="/booking-form">
                            <button
                            
                            className="bg-[#40bfe0] hover:bg-[#40cff1] text-gray-900 font-bold py-2 px-4 rounded-full shadow-lg"
                                onClick={handleMenuItemClick}
                            >
                                Book Now
                            </button>
                        </Link>
                    </div>
            </div>
        </nav>
    );
};

export default NavigationMenu;

