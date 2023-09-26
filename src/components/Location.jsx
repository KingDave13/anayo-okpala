import { layout } from '../styles';
import { motion } from 'framer-motion';
import { zoomIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

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
                ss:text-[50px] text-[35px] tracking-tight'>
                    Where are we?
                </h1>
                
                <div className='flex relative'>
                    <div className='bg-secondary md:w-[150px] ss:w-[150px]
                    w-[80px] md:h-[13px] ss:h-[13px] h-[8px]' />
                </div>                  
            </motion.div>

            <div className='flex flex-col items-center justify-center'>
                <motion.div variants={zoomIn(0.3, 0.7)}
                className='flex flex-col justify-center items-center'>
                    <h1 className='text-primary md:text-[25px] 
                    ss:text-[22px] text-[17px] font-medium mb-3 
                    tracking-tight'>
                        We are closer to you than you think!
                    </h1>

                    <div className='md:max-w-[1000px] ss:max-w-[650px] 
                    max-w-[320px] md:max-h-[520px] ss:max-h-[450px] 
                    max-h-[260px] md:border-[7px] ss:border-[7px] 
                    border-[5px] border-[#99999] cursor-pointer 
                    overflow-hidden flex items-center justify-center
                    '>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.519424648168!2d8.532180700000008!3d12.007719100000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae811f184305e7%3A0x185c8f79cab2bf!2s101%20Ibrahim%20Taiwo%20Rd%2C%20Kofar%20Wambali%20700211%2C%20Kano!5e0!3m2!1sen!2sng!4v1695671626641!5m2!1sen!2sng" 
                            width="1000px" 
                            height="500px"
                            title="Office location"
                            style={{ border: '' }} 
                            allowFullScreen="" 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
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
                            ss:text-[16px] text-[12px] md:leading-[18px]
                            ss:leading-[18px] leading-[15px]'>
                                No. 101 Ibrahim Taiwo Road by <br></br>
                                Sani Ungogo, Kano State, Nigeria.
                            </p>
                        </div>

                        <div className='flex md:mr-16 ss:mr-16 mr-10'>
                            <div className='bg-primary md:w-[2px] ss:w-[2px]
                            w-[1px] md:h-[60px] ss:h-[60px] h-[70px]' />
                        </div>
                        <div className='flex justify-end flex-col text-right'>
                            <h1 className='text-primary md:text-[18px]
                            ss:text-[18px] text-[16px] font-bold'>
                                Branch Office
                            </h1>
                            <p className='text-primary md:text-[16px]
                            ss:text-[16px] text-[12px] md:leading-[18px]
                            ss:leading-[18px] leading-[15px]'>
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