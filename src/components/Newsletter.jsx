import { SectionWrapper } from '../hoc';
import { motion } from 'framer-motion';
import { textVariant } from '../utils/motion';

const Newsletter = () => {
  return (
    <section className='relative w-full min-h-[320px] mx-auto flex 
    items-center flex-col md:mb-0 ss:mb-0 mb-6'>
      <div className='flex max-w-[95rem] mx-auto items-center w-full 
      relative'>
        <motion.div variants={textVariant()} className='flex relative 
        w-full'>
            <h1 className='text-primary font-bold md:text-[55px]
                ss:text-[50px] text-[35px] tracking-tight'>
                Subscribe to our newsletter
            </h1>

            <div className='flex relative'>
            <div className='bg-secondary md:w-[120px] ss:w-[120px]
                w-[80px] md:h-[10px] ss:h-[10px] h-[8px]' />
            </div>

            <p>
                to stay up to date with the latest from us.
            </p>
        </motion.div>
      </div>
    </section>
  )
};

export default SectionWrapper(Newsletter, '');
