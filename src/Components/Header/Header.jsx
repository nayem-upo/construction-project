import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [open, setOpen] = useState(true)
    let hr = <div className='w-32 md:w-0'><hr /></div>
    return (
        <div className='flex justify-evenly items-center bg-slate-600 p-2'>
            <img className='h-16' src="https://themegavias.com/drupal/indutri/themes/custom/indutri_subtheme/logo.png" alt="" />
            <div className='flex items-center md:gap-32'>
                <ul className={`pb-5 pt-2 top-20 right-0 md:p-0 px-5 bg-slate-600 md:top-0 md:relative absolute md:flex md:gap-10 font-bold text-white  duration-500 ${open ? 'opacity-0 md:opacity-100 transition-opacity' : ''}`}>
                    <NavLink to="/" className={({ isActive }) => isActive ? "hover:underline underline hover:text-orange-500 text-orange-500" : "hover:underline hover:text-orange-500"}><li>Home</li></NavLink> {hr}
                    <NavLink to="/services" className={({ isActive }) => isActive ? "hover:underline underline hover:text-orange-500 text-orange-500" : "hover:underline hover:text-orange-500"}><li>Services</li></NavLink> {hr}
                    <NavLink to="/projects" className={({ isActive }) => isActive ? "hover:underline underline hover:text-orange-500 text-orange-500" : "hover:underline hover:text-orange-500"}><li>Projects</li></NavLink> {hr}
                    <NavLink to="/blog" className={({ isActive }) => isActive ? "hover:underline underline hover:text-orange-500 text-orange-500" : "hover:underline hover:text-orange-500"}><li>Blog</li></NavLink> {hr}
                    <NavLink to="/pages" className={({ isActive }) => isActive ? "hover:underline underline hover:text-orange-500 text-orange-500" : "hover:underline hover:text-orange-500"}><li>Pages</li></NavLink> {hr}
                    <NavLink to="/contact" className={({ isActive }) => isActive ? "hover:underline underline hover:text-orange-500 text-orange-500" : "hover:underline hover:text-orange-500"}><li>Contact</li></NavLink> {hr}
                </ul>
                <FontAwesomeIcon className='px-6 py-4 text-white bg-slate-800 cursor-pointer' icon={faMagnifyingGlass} />
            </div>
            <div className='md:hidden' onClick={()=> setOpen(!open)}>
                {open? <FontAwesomeIcon className='h-10' icon={faBars} /> : <FontAwesomeIcon className='h-11' icon={faXmark} />}
            </div>
        </div>
    );
};

export default Header;