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
                <h1 className='text-secondary font-bold text-[65px]
                    tracking-tight'>
                    About Us
                </h1>

                <div className='flex flex-row text-[20px] justify-center
                items-center gap-5 text-white'>
                    <p>Home</p>
                    <BsArrowRightShort className='text-[30px] 
                    text-white'/>
                    <p>About Us</p>
                </div>
              </motion.div>          
          </div>
      </section>  
    )
  };
  
  export default SectionWrapper(Hero, '');