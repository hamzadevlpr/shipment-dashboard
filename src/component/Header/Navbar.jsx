import React, { useState } from 'react';
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { VscThreeBars } from 'react-icons/vsc';
import { GrClose } from 'react-icons/gr';
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { MenuIcon } from 'lucide-react';



function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function Navbar() {
    const navList = ['Dashboard', 'Shipment', 'Custormer Support', 'Profile'];
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <div className='sticky top-0 z-50'>
            <nav className=" shadow-md sticky top-0">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 ">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <Link to={'/home'} className="text-transparent text-2xl bg-clip-text bg-gradient-to-r from-[#15803D] to-[#16A34A] font-black uppercase content-center relative before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-gradient-to-r before:from-[#15803D] before:to-[#16A34A] before:transition hover:before:scale-100 cursor-pointer">SHIPMENT</Link>
                            </div>
                        </div>
                        <div className="hidden md:block ml-10">
                            <div className="flex items-center space-x-4 ">
                                {
                                    navList.map((list, id) => {
                                        return (
                                            <div key={id} className="flex px-3">
                                                <Link key={list.id} to={`${list.toLowerCase()}`} className="relative before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-gradient-to-r before:from-[#15803D] before:to-[#16A34A] before:transition hover:before:scale-100 cursor-pointer font-medium text-[#15803D]">
                                                    {list}
                                                </Link>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        </div>
                        <div className="flex items-center gap-8">

                            <Link to={'/login'}
                                // onChange={changeButtonText}
                                className="inline-block rounded-xl bg-[#15803D] px-5 py-1.5 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none  active:bg-[#15803D]"
                            >Login</Link>
                            {/* Profile dropdown */}
                            <Menu as="div" className="relative ml-3">
                                <div>
                                    <Menu.Button className="border-2 border-white flex rounded-full bg-gray-800 text-sm ">
                                        <span className="sr-only">Open user menu</span>
                                        <img
                                            className="h-8 w-8 rounded-full"
                                            src='/'
                                            alt=""
                                        />
                                    </Menu.Button>
                                </div>
                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <Menu.Item>
                                            {({ active }) => (
                                                <Link to={'/profile'}
                                                    href="#"
                                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                >
                                                    Your Profile
                                                </Link>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="#"
                                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                >
                                                    Settings
                                                </a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                >
                                                    Sign out
                                                </a>
                                            )}
                                        </Menu.Item>
                                    </Menu.Items>
                                </Transition>
                            </Menu>

                        </div>
                        <div className="-mr-2 flex md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="inline-flex items-center justify-center p-2 rounded-md text-[#16A34A]"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {!isOpen ? (
                                    <MenuIcon size={26} />
                                ) : (
                                    <GrClose size={26} />
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                <Transition
                    show={isOpen}
                    enter="transition ease-out duration-100 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    {
                        <div className="md:hidden" id="mobile-menu">
                            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                {navList.map((list, id) => (
                                    <div key={id}>
                                        <Link to={`${list.toLowerCase()}`}
                                            className="text-[#15803D] hover:bg-[#15803D] hover:text-white block px-3 py-2 rounded-md text-base font-medium decoration-0"
                                        >
                                            {list}
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    }

                </Transition>

            </nav >


        </div >
    );
}

export default Navbar;