import styles, { layout } from '../styles';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { map } from '../assets';

const Location = () => {
  return (
    <section className='relative w-full min-h-[700px] mx-auto flex'>
        <div className='absolute w-full
        max-w-[95rem] mx-auto flex flex-col gap-5 mb-16'
        >
            <motion.div variants={textVariant()}
            className={`${layout.sectionInfo} mb-5`}
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

            <div className='flex justify-center mt-10'>
                <motion.div variants={fadeIn('right', 'spring', 0.3)}>
                    <h1 className='text-primary text-[30px] font-medium
                    mb-8'>
                        We are closer to you than you think!
                    </h1>
                    {/* <div className='mt-8 w-[200px]'>
                    <img src={map} className='object-contain' alt='map'/>
                    </div> */}
                    <h1>
                        No. 5 Address Street, Location Road
                        Map Town, Nigeria.
                    </h1>
                </motion.div>
            </div>
        </div>
    </section>
  )
};

export default SectionWrapper(Location, '');