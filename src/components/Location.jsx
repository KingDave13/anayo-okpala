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

            <div className='flex flex-col items-center justify-center'>
                <motion.div variants={zoomIn(0.3, 0.7)}
                className='flex flex-col justify-center items-center'>
                    <h1 className='text-primary text-[25px] font-medium
                    mb-3 tracking-tight'>
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
                        <img src={map} className='object-contain w-[850px]
                        border-[10px] border-[#99999] cursor-pointer'
                        alt='map'/>
                    </Tilt>
                </motion.div>

                <motion.div variants={textVariant()}
                    className='flex items-center justify-between mt-10
                    max-w-[50rem]'>
                        <div className='flex flex-col mr-16'>
                            <h1 className='text-primary text-[18px]
                            font-bold'>
                                Head Office
                            </h1>
                            <p className='text-primary text-[16px]
                            leading-[18px]'>
                                No. 101 Ibrahim Taiwo Road by <br></br>
                                Sani Ungogo, Kano State, Nigeria.
                            </p>
                        </div>

                        <div className='flex mr-16'>
                            <div className='bg-primary w-[2px] 
                            h-[60px]' />
                        </div>
                        <div className='flex justify-end flex-col text-right'>
                            <h1 className='text-primary text-[18px]
                            font-bold'>
                                Branch Office
                            </h1>
                            <p className='text-primary text-[16px]
                            leading-[18px]'>
                                No. 9 Festing Road Sabon Gari, <br></br>
                                Kano State, Nigeria.
                            </p>
                        </div>     
                </motion.div>
            </div>
        </div>
    </section>
  )
};

export default SectionWrapper(Location, '');