import styles, { layout } from '../styles';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { hero } from '../assets';

const Hero = () => {
  return (
    <section className='relative bg-primary w-full h-screen mx-auto flex
    items-center'>
        <div className='absolute items-center
        max-w-7xl mx-auto flex flex-row items-start gap-5'
        >
            <motion.div variants={textVariant()}
            className={`${layout.sectionInfo}`}
            >
                <h1 className='text-secondary font-bold text-[65px]
                leading-[80px] tracking-tight'>
                    No. 1 <span className='text-white'>
                    Home accessories and general </span> 
                    industrial materials supplier.
                </h1>

                <p className='mt-10 text-white text-[24px] max-w-[650px]'>
                 We are the number one suppliers of top quality industrial
                 materials for various applications including mattress 
                 making, PVCs and lots more.
                </p>
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