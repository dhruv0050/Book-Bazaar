import React, { useState } from 'react';
import { HiBars3CenterLeft } from "react-icons/hi2";
import { Link } from 'react-router-dom';
import { IoSearchCircle } from "react-icons/io5";
import { LiaUserAstronautSolid } from "react-icons/lia";
import { BiSolidHeartCircle } from "react-icons/bi";
import { HiShoppingCart } from "react-icons/hi2";
import avatarImg from "../assets/avatar.png"
import { useSelector } from 'react-redux'
import { useAuth } from '../context/AuthContext';

const navigation = [
    { name: "Dashboard", href: "/user-dashboard" },
    { name: "Orders", href: "/orders" },
    { name: "Cart Page", href: "/cart" },
    { name: "Check Out", href: "/checkout" },
]
const Navbar = () => {
    const { currentUser, logout } = useAuth()
    const handleLogOut = () => {
        logout()
    }

    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const cartItems = useSelector(state => state.cart.cartItems)
    return (
        <header className="max-w-screen-3xl mx-auto px-4 py-6">
            <nav className='flex justify-between items-center'>
                {/* Left side */}
                <div className="relative sm:w-72 w-40 space-x-2">
                    <Link to="/">
                        <img src="/BOOK BAZAAR.png" alt="Book Bazaar Logo" className="h-20 w-20 object-contain" />
                    </Link>
                </div>
                {/* Right side */}
                <div className="relative flex items-center md:space-x-3 space-x-2">
                    <div >
                        {
                            currentUser ? <>
                                <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                                    <img src={avatarImg} alt="" className="size-7 rounded-full ring-2 ring-blue-500" />
                                </button>
                                {/* Show dropdowns */}
                                {isDropdownOpen && (
                                    <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-40">
                                        <ul className="py-2">
                                            {navigation.map((item) => (
                                                <li key={item.name} onClick={() => setIsDropdownOpen(false)}>
                                                    <Link to={item.href} className="block px-4 py-2 text-sm hover:bg-gray-100">
                                                        {item.name}
                                                    </Link>
                                                </li>
                                            ))
                                            }
                                            <li>
                                                <button
                                                    onClick={handleLogOut}
                                                    className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">Logout</button>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </> : (
                                <Link to="/login">
                                    <LiaUserAstronautSolid className="w-6 h-6" />
                                </Link>
                            )
                        }

                    </div>
                    <button className='hidden sm:block'>
                        <BiSolidHeartCircle className='w-6 h-6' />
                    </button>
                    <Link to="/cart" className='bg-primary p-1 sm:px-6 flex items-center rounded-md'>
                        <HiShoppingCart className="w-6 h-6" />
                        {
                            cartItems.length > 0 ? (
                                <span className="text-sm font-semibold sm:ml-1">{cartItems.length}</span>
                            ) : (
                                <span className="text-sm font-semibold sm:ml-1">0</span>
                            )
                        }

                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;