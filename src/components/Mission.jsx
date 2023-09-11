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
                <h1 className='text-primary font-bold text-[60px]
                tracking-tight'>
                    Our Mission
                </h1>
                
                <div className='flex relative justify-center'>
                    <div className='bg-secondary w-[150px]
                    h-[13px]' />
                </div>

                <motion.div className='flex mt-16 items-center flex-col
                relative justify-center'>
                    <p className='text-primary text-[21px] max-w-[700px]
                    tracking-tight text-center leading-[30px]'>
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