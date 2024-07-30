import React, { useState } from 'react';
import CV from '../Assets/cv.pdf';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../images/logo.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[60px] flex justify-between items-center px-4 bg-[#671C9C] text-gray-300 z-50'>
      <div>
        <img src={Logo} alt='Logo' style={{ width: '200px' }} />
      </div>

      {/* Desktop Menu */}
      <ul className='hidden md:flex'>
        <li className='mr-10 cursor-pointer'>
          <Link to='home' smooth={true} duration={500} className="hover:border-b-2 hover:border-white hover:mb-2">
            Home
          </Link>
        </li>
        <li className='mr-10 cursor-pointer'>
          <Link to='about' smooth={true} duration={500} className="hover:border-b-2 hover:border-white hover:mb-2">
            About
          </Link>
        </li>
        <li className='mr-10 cursor-pointer'>
          <Link to='skills' smooth={true} duration={500} className="hover:border-b-2 hover:border-white hover:mb-2">
            Skills
          </Link>
        </li>
        <li className='mr-10 cursor-pointer'>
          <Link to='work' smooth={true} duration={500} className="hover:border-b-2 hover:border-white hover:mb-2">
            Work
          </Link>
        </li>
        <li className='mr-10 cursor-pointer'>
          <Link to='contact' smooth={true} duration={500} className="hover:border-b-2 hover:border-white hover:mb-2">
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger Icon */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={`fixed top-12 right-0 w-1/3 h-auto bg-[#4B266A]/70 flex flex-col justify-start items-start p-2 md:hidden ${nav ? '' : 'hidden'}`}
      >
        <li className='py-3 text-2xl w-full'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-3 text-2xl w-full'>
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-3 text-2xl w-full'>
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-3 text-2xl w-full'>
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='py-3 text-2xl w-full'>
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social Icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#103A88]'>
            <a
              className='flex justify-between items-center w-full text-gray-300 px-1'
              href='https://www.linkedin.com/in/chenuka-sarathchandra-353334266'
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#4F0A82]'>
            <a
              className='flex justify-between items-center w-full text-gray-300 px-1'
              href='https://github.com/Chenuka608'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#13757D]'>
            <a
              className='flex justify-between items-center w-full text-gray-300 px-1'
              href='mailto:your-chenuka478@gmail.com'
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#129AA5]'>
            <a
              className='flex justify-between items-center w-full text-gray-300 px-1'
              href={CV} download
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
