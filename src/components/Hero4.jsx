import { layout } from '../styles';
import { motion } from 'framer-motion';
import { textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { BsArrowRightShort } from 'react-icons/bs';

const Hero = () => {  
    return (
      <section className='w-full mx-auto flex 
      items-center flex'>
          <div className='items-center justify-center w-full
          max-w-[95rem] mx-auto flex flex-col gap-5'
          >
              <motion.div variants={textVariant()}
              className={`${layout.sectionInfo} justify-center 
              items-center`}
              >
                <h1 className='text-secondary font-bold md:text-[65px]
                ss:text-[65px] text-[40px] tracking-tight'>
                  Products
                </h1>

                <div className='flex flex-row items-center md:gap-5 
                ss:gap-5 gap-2 text-white md:text-[20px] ss:text-[20px] 
                text-[14px] justify-center'>
                    <p>Home</p>
                    <BsArrowRightShort className='md:text-[30px] 
                    ss:text-[30px] text-[25px] text-white'/>
                    <p>Products</p>
                </div>
              </motion.div>          
          </div>
      </section>  
    )
  };
  
  export default SectionWrapper(Hero, '');