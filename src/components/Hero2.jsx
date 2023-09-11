import { layout } from '../styles';
import { motion } from 'framer-motion';
import { textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const Hero = () => {  
    return (
      <section className='relative w-full min-h-[400px] mx-auto flex 
      items-center flex'>
          <div className='relative items-center justify-center w-full
          max-w-[95rem] mx-auto flex flex-col gap-5'
          >
              <motion.div variants={textVariant()}
              className={`${layout.sectionInfo}`}
              >
                  
              </motion.div>          
          </div>
      </section>  
    )
  };
  
  export default SectionWrapper(Hero, '');