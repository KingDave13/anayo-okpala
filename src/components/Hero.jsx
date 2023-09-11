import styles, { layout } from '../styles';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { hero } from '../assets';

const Hero = () => {
  return (
    <section className='relative w-full min-h-[900px] mx-auto flex 
    items-center flex top-[80px] overflow-hidden'>
        <div className='relative items-center justify-between w-full
        max-w-[95rem] mx-auto flex flex-row items-start gap-5 mb-16'
        >
            <motion.div variants={textVariant()}
            className={`${layout.sectionInfo} mb-24`}
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
                    font-medium border-none hover:text-white'>
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

            <motion.div variants={textVariant()}
            className='flex bottom-0 right-0 absolute items-center'>
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='text-secondary font-bold text-[45px]
                    tracking-tight'>
                        50+
                    </h1>
                    <p className='text-white text-[15px]'>
                        Quality Products
                    </p>
                </div>

                <div className='flex relative m-14'>
                    <div className='bg-secondary w-[2px] h-[55px]' />
                </div> 

                <div className='flex flex-col justify-center items-center'>
                    <h1 className='text-secondary font-bold text-[45px]
                    tracking-tight'>
                        1000+
                    </h1>
                    <p className='text-white text-[15px]'>
                        Satisfied Customers
                    </p>
                </div>

                <div className='flex relative m-14'>
                    <div className='bg-secondary w-[2px] h-[55px]' />
                </div>

                <div className='flex flex-col justify-center items-center'>
                    <h1 className='text-secondary font-bold text-[50px]
                    tracking-tight'>
                        10+
                    </h1>
                    <p className='text-white text-[17px]'>
                        Years of Service
                    </p>
                </div>
            </motion.div>
        </div>
    </section>  
  )
};

export default SectionWrapper(Hero, 'home');