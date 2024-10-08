import React from 'react';

import HTML from '../images/html.png';
import CSS from '../images/css.png';
import JavaScript from '../images/javascript.png';
import ReactImg from '../images/react.png';
import Node from '../images/node.png';
import GitHub from '../images/github.png';
import Tailwind from '../images/tailwind.png';
import Mongo from '../images/mongo.png';        
import Java from '../images/java.png';
import Python from '../images/python.png';
import PS from '../images/ps.jpg';
import moavi from '../images/moavi.png';
import Pr from '../images/Pr.png';

const Skills = () => {
  return (
    <div name='skills' className='max-w[1000px] bg-[#2B0347] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-5 flex flex-col justify-center w-full h-full pb-4'>
          <div className= "pt-12 pb-1">
              <p className='text-4xl font-bold inline border-b-4 border-white'>Skills</p>
              <p className='py-4'> My Tech Stack :</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                  <p className='my-4'>HTML</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
                  <p className='my-4'>CSS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" />
                  <p className='my-4'>JAVASCRIPT</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" />
                  <p className='my-4'>REACT</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={GitHub} alt="HTML icon" />
                  <p className='my-4'>GITHUB</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Node} alt="HTML icon" />
                  <p className='my-4'>NODE JS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Mongo} alt="HTML icon" />
                  <p className='my-4'>MONGO DB</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Tailwind} alt="HTML icon" />
                  <p className='my-4'>TAILWIND</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Java} alt="HTML icon" />
                  <p className='my-4'>JAVA</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Python} alt="HTML icon" />
                  <p className='my-4'>PYTHON</p>
              </div>
          </div>

          {/* Editing Stack Heading */}
          <div className="pt-8 pb-1">
              <p className='text-4xl font-bold inline border-b-4 border-white'>Editing Stack</p>
              <p className='py-4'> My Editing Tools :</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={PS} alt="Photoshop icon" />
                  <p className='my-4'>PHOTOSHOP</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={moavi} alt="Movavi Editor icon" />
                  <p className='my-4'>MOVAVI EDITOR</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Pr} alt="Premiere Pro icon" />
                  <p className='my-4'>PREMIERE PRO</p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Skills;
