import styles from '../styles';
import { motion } from 'framer-motion';
import { textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const Mission = () => {
  return (
    <section className='relative w-full min-h-[500px] mx-auto flex 
    justify-center items-center'>
        <div className='absolute w-full max-w-[95rem] mx-auto flex 
        mb-16 justify-center'>
            <motion.div variants={textVariant()}
            className={`${styles.paddingX} flex flex-col justify-center 
            items-center relative`}>
                <h1 className='text-primary font-bold md:text-[60px]
                ss:text-[47px] text-[40px] tracking-tight text-center'>
                    Our Mission
                </h1>
                
                <div className='flex relative justify-center'>
                    <div className='bg-secondary md:w-[150px] ss:w-[150px]
                    w-[100px] h-[13px]' />
                </div>

                <motion.div className='flex md:mt-16 ss:mt-10 mt-8 
                items-center flex-col relative justify-center'>
                    <p className='text-primary md:text-[20px] ss:text-[20px] 
                    text-[14px] max-w-[700px] tracking-tight text-center 
                    md:leading-[30px] ss:leading-[30px] leading-[25px]'>
                    At Anayo Okpala Global Concept, our mission is to 
                    bring comfort and creativity to your everyday life 
                    with our range of foam accessories. We believe that 
                    everyone deserves a touch of softness and fun in their
                    lives, and our friendly team is dedicated to 
                    providing you with high-quality, affordable products 
                    that make a difference. Whether you're looking for 
                    cozy mattress cloth or versatile foam sheets, we've 
                    got you covered. So why settle for ordinary when you 
                    can have extraordinary foam accessories that add joy 
                    and comfort to your world? <br></br>Join us on this 
                    foam-tastic journey!
                    </p>
                </motion.div>
            </motion.div>
        </div>
    </section>
  )
};

export default SectionWrapper(Mission, '');