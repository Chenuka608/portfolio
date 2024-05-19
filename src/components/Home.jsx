import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import CV from "../images/cv.jpg"
import { Link } from 'react-scroll'


  

const Home = () => {
  return (
    <div name='home' className="w-full h-screen bg-[#AC95C2]">
        {/* Container*/}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full' >

        <div className='mb-8 md:mb-0 md:mr-8 '>
            <img src={CV} alt="Chenuka Sarathchandra" className='rounded-full w-48 h-48 object-cover' />
        </div>
    <p className="text-white text-2xl font-bold">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#2A0E44]">Chenuka Sarathchandra</h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#630BB6]">I'm a Full Stack Developer.</h2>
        <p className='text-[#2A0E44] text-1xl py-4 max-w-[700px] font-bold' >
          I’m a full-stack developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive full-stack web applications along with countinously progressing with multiple java projects.
        </p>
        <div>
        <Link to='work' smooth={true} duration={500}>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#6906AE] hover:border-white'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home;
