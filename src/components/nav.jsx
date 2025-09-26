import React from 'react';
import { navLinks } from '../../constants/index.js';
const Nav = () => {
    return (
        <nav className='bg-black h-18'>
            <div className=" ml-12 -mt-14">
                <a href="#home">
                    <img src="/images/logotb.png" alt="logotb" className="w-28 h-38" />
                </a>

                <ul className='flex gap-30 -mr-40 -mt-2'>
                    {navLinks.map((link) => (
                        <li key={navLinks.id}>
                            <a href={`#${link.id}`}>{link.title}</a>
                        </li>
                    ))}
                </ul>
            </div>



        </nav>
    );
};

export default Nav;