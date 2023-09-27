import { useState, useEffect } from 'react';
import { layout } from '../styles';
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
    }, [count1, count2, count3]);
  
    return (
      <motion.div variants={textVariant()} 
      className='flex bottom-0 md:right-0 ss:right-0 left-0 md:pb-1 
      ss:pb-1 pb-2 absolute items-center'>
        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-secondary font-bold md:text-[40px] ss:text-[30px]
                text-[25px] tracking-tight'>
                {Math.round(count1)}+
            </h1>
            <p className='text-white md:text-[15px] ss:text-[15px] text-[11px]
            text-center'>
                Quality Products
            </p>
        </div>
  
        <div className='flex relative md:m-12 ss:m-6 m-2'>
            <div className='bg-secondary w-[1px] md:h-[55px] ss:h-[55px] 
            h-[45px]' />
        </div>
  
        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-secondary font-bold md:text-[40px] ss:text-[30px]
                text-[25px] tracking-tight'>
                {Math.round(count2)}+
            </h1>
            <p className='text-white md:text-[15px] ss:text-[15px] text-[11px]
            text-center'>
                Satisfied Customers
            </p>
        </div>
  
        <div className='flex relative md:m-12 ss:m-6 m-2'>
            <div className='bg-secondary w-[1px] md:h-[55px] ss:h-[55px] 
            h-[45px]' />
        </div>
  
        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-secondary font-bold md:text-[40px] ss:text-[30px]
                text-[25px] tracking-tight'>
                {Math.round(count3)}+
            </h1>
            <p className='text-white md:text-[15px] ss:text-[15px] text-[11px]
            text-center'>
                Years of Service
            </p>
        </div>
      </motion.div>
    );
  };

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className='relative w-full md:min-h-[890px] ss:min-h-[700px] 
    items-center flex overflow-hidden mobile'>
        <div className='relative items-center justify-between w-full
        max-w-[95rem] flex flex-row items-start gap-5' 
        >
            <motion.div variants={textVariant()}
            className={`${layout.sectionInfo}`}
            >
                <h1 className='text-secondary font-bold md:text-[65px]
                ss:text-[50px] text-[40px] md:leading-[78px] 
                ss:leading-[55px] leading-[50px]
                tracking-tight md:max-w-[750px]'>
                    No. 1 <span className='text-white'>
                    foam accessories and general </span> 
                    industrial materials supplier.
                </h1>

                <p className='md:mt-8 ss:mt-8 mt-5 text-white md:text-[20px]
                ss:text-[20px] text-[14px] md:max-w-[620px] ss:max-w-[620px]
                max-w-[320px]'>
                 We are the number one suppliers of top quality industrial
                 materials for various applications including mattress 
                 making, PVCs and lots more.
                </p>

                <div className='flex flex-row mt-5 md:gap-5 ss:gap-5 gap-2'>
                    <button className='bg-secondary grow2 md:text-[17px] 
                    ss:text-[17px] text-[14px] md:py-3 ss:py-3 py-2 
                    md:px-14 ss:px-14 px-6 text-primary rounded-[3px]
                    font-medium border-none hover:text-white'
                    onClick={() => navigate('/about')}
                    >
                        Learn More
                    </button>

                    <button className='border-[1px] grow2 border-secondary 
                    md:text-[17px] ss:text-[17px] text-[14px] md:py-3 
                    ss:py-3 py-2 md:px-14 ss:px-14 px-6 text-secondary 
                    rounded-[3px] font-medium hover:text-white'
                    onClick={() => navigate('/contact')}>
                        Get in Touch
                    </button>
                </div>           
            </motion.div>

            <motion.div variants={fadeIn('right', 'spring', 0.3)}
            className='md:flex hidden'>
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