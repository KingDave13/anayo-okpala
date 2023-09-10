import styles from '../styles';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const CTA = () => {
  return (
    <section className='relative w-full min-h-[500px] mx-auto flex
    items-center'>
        <div className={`${styles.padding} bg-primary flex max-w-[95rem] 
        mx-auto items-center justify-center w-full rounded-3xl`}>
            <motion.div variants={textVariant()}
            className='flex flex-start flex-col relative w-full'>
                <h1 className='text-white font-bold text-[30px] mb-5
                leading-[40px] max-w-[600px]'>
                    Buy from the <span className='text-secondary'>
                    right </span> and <span className='text-secondary'>
                    most reliable supplier! </span>
                </h1>
                
                <p className='text-white text-[17px] max-w-[650px]'>
                Quality is guaranteed when you buy from Anaya 
                Okpala Global Concept! Don’t buy inferior 
                materials anymore; switch to the good side today!
                </p>

                <div className='mt-5'>
                    <button className='bg-secondary grow2 mr-5
                    text-[16px] py-2 px-12 text-primary rounded-[3px]
                    font-normal border-none hover:text-white'>
                        Contact Us
                    </button>

                    <button className='border-[1px] grow2 
                    border-secondary text-[16px] py-2 px-12 
                    text-secondary rounded-[3px] font-normal
                    hover:text-white'>
                        View Products
                    </button>
                </div>
            </motion.div>
            
                            
        </div>
    </section>
  )
};

export default SectionWrapper(CTA, '');