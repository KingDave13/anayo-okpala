import styles from '../styles';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { man } from '../assets';
import { useNavigate } from 'react-router-dom';

const CTA = () => {
    const navigate = useNavigate();
  return (
    <section className='relative w-full md:min-h-[500px] ss:min-h-[500px] 
    min-h-[300px] mx-auto flex items-center'>
        <div className={`${styles.padding} bg-primary flex md:max-w-[95rem] 
        ss:max-w-[95rem] mx-auto items-center w-full md:rounded-3xl 
        ss:rounded-3xl rounded-2xl relative`}>
            <motion.div variants={textVariant()}
            className='flex flex-start flex-col relative w-full'>
                <h1 className='text-white font-bold md:text-[30px] 
                ss:text-[25px] text-[20px] md:mb-5 ss:mb-3 mb-2
                md:leading-[40px] ss:leading-[35px] leading-[27px] 
                md:max-w-[600px] ss:max-w-[400px] max-w-[300px]'>
                    Buy from the <span className='text-secondary'>
                    right </span> and <span className='text-secondary'>
                    most reliable supplier! </span>
                </h1>
                
                <p className='text-white md:text-[17px] ss:text-[14px] 
                text-[11px] md:max-w-[650px] ss:max-w-[320px]'>
                Quality is guaranteed when you buy from Anaya 
                Okpala Global Concept! Don’t buy inferior 
                materials anymore; switch to the good side today!
                </p>

                <div className='md:mt-5 ss:mt-3 mt-3'>
                    <button className='bg-secondary grow2 md:text-[17px] 
                    ss:text-[14px] text-[11px] md:py-3 ss:py-2 py-1 
                    md:mr-5 ss:mr-3 mr-2 md:px-14 ss:px-5 px-3 
                    text-primary rounded-[3px] font-normal border-none 
                    hover:text-white'
                    onClick={() => navigate('/contact')}>
                        Contact Us
                    </button>

                    <button className='border-[1px] grow2 
                    border-secondary md:text-[17px] ss:text-[13px] 
                    text-[10px] md:py-3 ss:py-2 py-1 md:px-14 ss:px-5 
                    px-3 text-secondary rounded-[3px] font-normal
                    hover:text-white'>
                        View Products
                    </button>
                </div>
            </motion.div>

            <motion.div variants={fadeIn('left', 'spring', 0.3)}
            className='ss:flex hidden absolute md:mr-14 ss:mr-10 right-0 
            bottom-0'>
                <img src={man} className='object-contain md:w-[280px]
                ss:w-[240px]'/>
            </motion.div>                
        </div>
    </section>
  )
};

export default SectionWrapper(CTA, '');