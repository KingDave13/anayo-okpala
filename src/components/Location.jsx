import styles, { layout } from '../styles';
import { motion } from 'framer-motion';
import { zoomIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { map } from '../assets';
import { Tilt } from 'react-tilt';

const Location = () => {
  return (
    <section className='relative w-full min-h-[800px] mx-auto flex'>
        <div className='absolute w-full
        max-w-[95rem] mx-auto flex flex-col gap-5 mb-16'
        >
            <motion.div variants={textVariant()}
            className={`${layout.sectionInfo}`}
            >
                <h1 className='text-primary font-bold text-[60px]
                tracking-tight'>
                    Where are we?
                </h1>
                
                <div className='flex relative'>
                    <div className='bg-secondary w-[150px]
                    h-[13px]' />
                </div>                  
            </motion.div>

            <div className='flex justify-center mt-4'>
                <motion.div variants={zoomIn(0.3, 0.7)}
                className='flex flex-col justify-center items-center'>
                    <h1 className='text-primary text-[28px] font-medium
                    mb-6'>
                        We are closer to you than you think!
                    </h1>

                    <Tilt
                    perspective={1000}
                    className='your-tilt-container'
                    options={{
                      scale: 1.05,
                      speed: 1000,
                      transition: true,
                    }}>
                        <img src={map} className='object-contain w-[900px]
                        border-[10px] border-[#99999] cursor-pointer'
                        alt='map'/>
                    </Tilt>
                    
                    <h1 className='text-primary text-[18px] leading-[22px]
                    flex justify-center text-center mt-3'>
                        No. 5 Address Street, Location Road <br></br>
                        Map Town, Nigeria.
                    </h1>
                </motion.div>
            </div>
        </div>
    </section>
  )
};

export default SectionWrapper(Location, '');