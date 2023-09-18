import { layout } from '../styles';
import { motion } from 'framer-motion';
import { zoomIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { map } from '../assets';
import { Tilt } from 'react-tilt';

const Location = () => {

  return (
    <section className='relative w-full md:min-h-[800px] ss:min-h-[800px]
    min-h-[550px] mx-auto flex items-center'>
        <div className='absolute w-full max-w-[95rem] mx-auto flex 
        flex-col gap-5 mb-16'
        >
            <motion.div variants={textVariant()}
            className={`${layout.sectionInfo}`}
            >
                <h1 className='text-primary font-bold md:text-[60px]
                ss:text-[50px] text-[40px] tracking-tight'>
                    Where are we?
                </h1>
                
                <div className='flex relative'>
                    <div className='bg-secondary md:w-[150px] ss:w-[150px]
                    w-[100px] h-[13px]' />
                </div>                  
            </motion.div>

            <div className='flex flex-col items-center justify-center'>
                <motion.div variants={zoomIn(0.3, 0.7)}
                className='flex flex-col justify-center items-center'>
                    <h1 className='text-primary md:text-[25px] 
                    ss:text-[22px] text-[18px] font-medium mb-3 
                    tracking-tight'>
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
                        md:border-[10px] ss:border-[10px] border-[5px]
                        border-[#99999] cursor-pointer'
                        alt='map'/>
                    </Tilt>
                </motion.div>

                <motion.div variants={textVariant()}
                    className='flex items-center justify-between md:mt-10
                    ss:mt-10 mt-5 md:max-w-[50rem] ss:max-w-[50rem]
                    max-w-[19rem]'>
                        <div className='flex flex-col md:mr-16 ss:mr-16
                        mr-10'>
                            <h1 className='text-primary md:text-[18px]
                            ss:text-[18px] text-[16px] font-bold'>
                                Head Office
                            </h1>
                            <p className='text-primary md:text-[16px]
                            ss:text-[16px] text-[13px] leading-[18px]'>
                                No. 101 Ibrahim Taiwo Road by <br></br>
                                Sani Ungogo, Kano State, Nigeria.
                            </p>
                        </div>

                        <div className='flex md:mr-16 ss:mr-16 mr-10'>
                            <div className='bg-primary md:w-[2px] ss:w-[2px]
                            w-[1px] md:h-[60px] ss:h-[60px] h-[80px]' />
                        </div>
                        <div className='flex justify-end flex-col text-right'>
                            <h1 className='text-primary md:text-[18px]
                            ss:text-[18px] text-[16px] font-bold'>
                                Branch Office
                            </h1>
                            <p className='text-primary md:text-[16px]
                            ss:text-[16px] text-[13px] leading-[18px]'>
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