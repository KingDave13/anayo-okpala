import { useState, useEffect } from 'react';
import styles, { layout } from '../styles';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { hero } from '../assets';
import { useNavigate } from 'react-router-dom';

const Counter = () => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);
  
    const target1 = 50;
    const target2 = 1000;
    const target3 = 10;
  
    useEffect(() => {
      const duration = 2000;
  
      // Calculate the increment for each step
      const increment1 = (target1 / duration) * 10;
      const increment2 = (target2 / duration) * 10;
      const increment3 = (target3 / duration) * 10;
  
      // Start counting animation
      const interval1 = setInterval(() => {
        if (count1 < target1) {
          setCount1((prevCount) => Math.min(prevCount + increment1, target1));
        } else {
          clearInterval(interval1);
        }
      }, 10);
  
      const interval2 = setInterval(() => {
        if (count2 < target2) {
          setCount2((prevCount) => Math.min(prevCount + increment2, target2));
        } else {
          clearInterval(interval2);
        }
      }, 10);
  
      const interval3 = setInterval(() => {
        if (count3 < target3) {
          setCount3((prevCount) => Math.min(prevCount + increment3, target3));
        } else {
          clearInterval(interval3);
        }
      }, 10);
  
      return () => {
        clearInterval(interval1);
        clearInterval(interval2);
        clearInterval(interval3);
      };
    }, []);
  
    return (
      <motion.div variants={textVariant()} 
      className='flex bottom-0 right-0 pb-1 absolute items-center'>
        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-secondary font-bold text-[40px] 
                tracking-tight'>
                {Math.round(count1)}+
            </h1>
            <p className='text-white text-[15px]'>
                Quality Products
            </p>
        </div>
  
        <div className='flex relative m-12'>
            <div className='bg-secondary w-[1px] h-[55px]' />
        </div>
  
        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-secondary font-bold text-[40px] 
                tracking-tight'>
                {Math.round(count2)}+
            </h1>
            <p className='text-white text-[15px]'>
                Satisfied Customers
            </p>
        </div>
  
        <div className='flex relative m-12'>
            <div className='bg-secondary w-[1px] h-[55px]' />
        </div>
  
        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-secondary font-bold text-[40px]
                tracking-tight'>
                {Math.round(count3)}+
            </h1>
            <p className='text-white text-[15px]'>
                Years of Service
            </p>
        </div>
      </motion.div>
    );
  };

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className='relative w-full min-h-[890px] mx-auto flex 
    items-center flex overflow-hidden'>
        <div className='relative items-center justify-between w-full
        max-w-[95rem] mx-auto flex flex-row items-start gap-5'
        >
            <motion.div variants={textVariant()}
            className={`${layout.sectionInfo}`}
            >
                <h1 className='text-secondary font-bold text-[65px]
                leading-[78px] tracking-tight max-w-[750px]'>
                    No. 1 <span className='text-white'>
                    home accessories and general </span> 
                    industrial materials supplier.
                </h1>

                <p className='mt-8 text-white text-[20px] max-w-[620px]'>
                 We are the number one suppliers of top quality industrial
                 materials for various applications including mattress 
                 making, PVCs and lots more.
                </p>

                <div className='flex flex-row mt-5 gap-5'>
                    <button className='bg-secondary grow
                    text-[17px] py-3 px-14 text-primary rounded-[3px]
                    font-medium border-none hover:text-white'
                    onClick={() => navigate('/AboutPage')}
                    >
                        Learn More
                    </button>

                    <button className='border-[1px] 
                    grow border-secondary text-[17px] py-3 px-14 
                    text-secondary rounded-[3px] font-medium
                    hover:text-white'>
                        Get in Touch
                    </button>
                </div>           
            </motion.div>

            <motion.div variants={fadeIn('right', 'spring', 0.3)}>
                <img src={hero} alt='hero'
                className=' h-[600px] w-auto'
                />
            </motion.div>          
        </div>

        <Counter />
    </section>  
  )
};

export default SectionWrapper(Hero, 'home');