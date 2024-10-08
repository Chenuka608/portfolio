import React from 'react';
import LaptopVid from '../images/purple.mp4';
import MyPicture from '../images/me.jpg'; // Import your picture here

const About = () => {
  return (
    <div name='about' className='relative w-full min-h-screen flex items-center justify-center'>
      {/* Background video */}
      <video className='absolute top-0 left-0 w-full h-full object-cover z-0' autoPlay loop muted>
        <source src={LaptopVid} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
      {/* Overlay */}
      <div className='absolute top-0 left-0 w-full h-full bg-black opacity-60 z-10'></div>

      <div className='relative max-w-[1000px] w-full grid grid-cols-1 sm:grid-cols-2 gap-8 z-20 p-4 items-center justify-center'>
        {/* Left Side - Image */}
        <div className='flex justify-center items-center'>
          <img
            src={MyPicture}
            alt='Chenuka in full suit'
            className='rounded-md shadow-lg w-[200px] sm:w-[300px] h-auto object-cover'
          />
        </div>
        {/* Right Side - Text */}
        <div className='flex flex-col justify-center items-center sm:items-start text-center sm:text-left'>
          <p className='text-4xl font-bold text-white border-b-4 border-white pb-2'>
            About
          </p>
          <p className='text-white text-3xl font-bold mt-4'>
            Hi. I'm Chenuka, nice to meet you. Please take a look around.
          </p>
          <p className='text-white font-bold mt-4'>
            I am a keen and highly ambitious Software Engineering undergraduate at Informatics Institute of Technology (IIT). I studied at Lyceum International School Nugegoda where the subject computer science rooted my ambition of being a Software Engineer, with a passion for exploring many new technologies in the IT industry. I am able to adapt to working in a team to provide scalable, high-quality solutions. Proficient in ReactJS, Java, Python, HTML, JavaScript, and CSS with a passion for tackling complex challenges. Currently seeking a challenging internship opportunity to apply and expand my technical and problem-solving skills in a dynamic environment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
