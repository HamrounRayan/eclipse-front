import React from 'react';

const Navbar = () => {
    return (
        <nav >     
            <ul className='flex justify-between items-center  text-white p-4'>
                <li><a href="#home" >HR Dashboard</a></li>
                <li><a href="#about" >Hiring Dashboard</a></li>
                <li><a href="#contact" >HR Dashboard</a></li>
            </ul>
        </nav>
    );
};
export default Navbar;