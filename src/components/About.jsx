import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#AC95C2] text-[#2A0E44]'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#630BB6]'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Chenuka, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p className='font-bold'> I am a keen and highly ambitious Software Engineering undergraduate at Informatics Institute of Technology (IIT) , I studied in Lyceum 
              Internation School Nugegoda in which the subject computer science rooted my ambition of being a Software Engineer, with a
                passion for exploring many new technologies in the IT industry. I am able to
                adapt to working in a team to provide scalable, high-quality solutions.
                Proficient in ReactJS , Java, Python, HTML, JavaScript, and CSS with a
                passion for tackling complex challenges. Currently seeking a challenging
                internship opportunity to apply and expand my technical and problem-solving
                skills in a dynamic environment.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;