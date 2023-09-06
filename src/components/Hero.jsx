import styles, { layout } from '../styles';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { hero, Ellipse } from '../assets';

const Hero = () => {
  return (
    <section className='font-instrument-sans relative w-full
     min-h-[850px] mx-auto flex items-center flex top-[80px]'>
        <div className='absolute items-center justify-between w-full
        max-w-[95rem] mx-auto flex flex-row items-start gap-5'
        >
            <motion.div variants={textVariant()}
            className={`${layout.sectionInfo} mb-28`}
            >
                <h1 className='text-secondary font-bold text-[65px]
                leading-[80px] tracking-tight max-w-[750px]'>
                    No. 1 <span className='text-white'>
                    Home accessories and general </span> 
                    industrial materials supplier.
                </h1>

                <p className='mt-10 text-white text-[24px] max-w-[650px]'>
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

            <motion.div variants={fadeIn()}>
                <img src={hero} alt='hero'
                className=' h-[600px] w-auto'
                />
            </motion.div>
        </div>
    </section>  
  )
};

export default SectionWrapper(Hero, '');