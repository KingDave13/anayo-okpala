import { SectionWrapper } from '../hoc';
import { motion } from 'framer-motion';
import { textVariant, fadeIn } from '../utils/motion';

const Newsletter = () => {
  return (
    <section className='relative w-full min-h-[320px] mx-auto flex 
    items-center justify-center flex-col'>
      <div className='flex max-w-[95rem] mx-auto items-center w-full 
      relative items-center justify-center flex-col'>
        <motion.div variants={textVariant()} className='flex flex-col 
        relative w-full items-center'>
            <h1 className='text-primary font-bold md:text-[45px]
                ss:text-[40px] text-[30px] tracking-tight'>
                Subscribe to our newsletter
            </h1>

            <div className='flex relative'>
            <div className='bg-secondary md:w-[120px] ss:w-[120px]
                w-[80px] md:h-[10px] ss:h-[10px] h-[8px]' />
            </div>

            <p className='font-medium md:text-[20px] ss:text-[18px] 
            text-[15px] tracking-tight text-primary md:mt-5 ss:mt-5 mt-5'>
                to stay up to date with the latest from us.
            </p>
        </motion.div>

        <motion.div variants={fadeIn('up', 'spring', 0.3)} 
        className='flex flex-col w-full items-center md:mt-10 ss:mt-5 
        mt-5'>
            <input
              type="email"
              name="email"
            //   value={form.email}
            //   onChange={handleChange}
              placeholder="Enter your email"
              className="py-4 px-4 border-b-[2px] outline-none 
              placeholder:text-black-100 text-black rounded-lg
              md:placeholder:text-[16px] ss:placeholder:text-[14px]
              placeholder:text-[14px] md:w-[650px] text-center"
            />

            <button className='bg-primary grow2 md:mt-5 ss:mt-5 mt-5
            md:text-[16px] ss:text-[16px] text-[12px] md:py-3 
            ss:py-3 py-2 md:px-14 ss:px-14 px-8 text-white text-center
            rounded-[3px] font-medium border-none hover:text-primary
            hover:text-white'
            >
                Subscribe
            </button>
        </motion.div>
      </div>
    </section>
  )
};

export default SectionWrapper(Newsletter, '');
