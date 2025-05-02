import React from 'react';

const Navbar = () => {
    return (
        <nav >
            <h1 >My App</h1>
            <ul >
                <li><a href="#home" style={styles.link}>Home</a></li>
                <li><a href="#about" style={styles.link}>About</a></li>
                <li><a href="#contact" style={styles.link}>Contact</a></li>
            </ul>
        </nav>
    );
};
export default Navbar;