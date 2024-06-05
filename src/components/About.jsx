import React from 'react';
import LaptopVid from '../images/purple.mp4';

const About = () => {
  return (
    <div name='about'className='relative w-full h-screen'>
      {/* Background video */}
      <video className='absolute top-0 left-0 w-full h-full object-cover z-0' autoPlay loop muted>
        <source src={LaptopVid} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
      {/* Overlay */}
      <div className='absolute top-0 left-0 w-full h-full bg-black opacity-60 z-10'></div>
      
      <div className='relative flex flex-col justify-center items-center w-full h-full z-20'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 text-white border-white'>
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold text-white'>
            <p>Hi. I'm Chenuka, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p className='text-white font-bold'> 
              I am a keen and highly ambitious Software Engineering undergraduate at Informatics Institute of Technology (IIT). I studied at Lyceum 
              International School Nugegoda where the subject computer science rooted my ambition of being a Software Engineer, with a
              passion for exploring many new technologies in the IT industry. I am able to
              adapt to working in a team to provide scalable, high-quality solutions.
              Proficient in ReactJS, Java, Python, HTML, JavaScript, and CSS with a
              passion for tackling complex challenges. Currently seeking a challenging
              internship opportunity to apply and expand my technical and problem-solving
              skills in a dynamic environment.
            </p>  
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
