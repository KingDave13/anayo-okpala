import styles, { layout } from '../styles';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc'

const Products = () => {
  return (
    <section className='relative w-full min-h-[600px] mx-auto flex 
    justify-center'>
        <div className='absolute w-full max-w-[95rem] mx-auto flex 
        mb-16 justify-center'>
            <motion.div variants={textVariant()}
            className={`${styles.paddingX} flex flex-col justify-center`}>
                <h1 className='text-primary font-bold text-[65px]
                tracking-tight'>
                    Our products
                </h1>
                
                <div className='flex relative'>
                    <div className='bg-secondary w-[150px]
                    h-[13px]' />
                </div>

                <div className='flex mt-8 gap-5'>
                    <button className='bg-secondary text-[17px] py-3 
                    px-14 text-primary rounded-[3px] font-medium 
                    border-none hover:text-white'>
                        Order Now
                    </button>

                    <button className='border-[1px] border-secondary 
                    text-[17px] py-3 px-14 text-secondary rounded-[3px] 
                    font-medium hover:text-white'>
                        View Details
                    </button>
                </div>           
            </motion.div>
        </div>
    </section> 
  )
};

export default SectionWrapper(Products, 'products');