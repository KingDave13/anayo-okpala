import { SectionWrapper } from '../hoc';
import { motion } from 'framer-motion';
import { textVariant, fadeIn } from '../utils/motion';

const Feedbacks = () => {
  return (
    <section className='relative w-full md:min-h-[320px] ss:min-h-[280px] 
    min-h-[230px] mx-auto flex items-center justify-center flex-col'>
      <div className='flex max-w-[95rem] mx-auto items-center w-full 
      relative items-center justify-center flex-col'>
        <motion.div variants={textVariant()} className='flex flex-col 
        relative w-full items-center'>
            <h1 className='text-primary font-bold md:text-[45px]
                ss:text-[35px] text-[24px] tracking-tight'>
                Feedbacks and Suggestions
            </h1>

            <div className='flex relative'>
            <div className='bg-secondary md:w-[120px] ss:w-[120px]
                w-[80px] md:h-[10px] ss:h-[10px] h-[6px]' />
            </div>

            <p className='font-medium md:text-[20px] ss:text-[18px] 
            text-[14px] tracking-tight text-primary md:mt-5 ss:mt-5 mt-3'>
                We'd love to know your thoughts about us and our products
            </p>
        </motion.div>
      </div>
    </section>
  )
};

export default SectionWrapper(Feedbacks, '');
