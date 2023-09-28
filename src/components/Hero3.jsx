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
                  Get in Touch
                </h1>

                <div className='flex flex-row items-center md:gap-5 
                ss:gap-5 gap-1 text-white md:text-[20px] ss:text-[20px] 
                text-[14px] justify-center'>
                    <p>Home</p>
                    <BsArrowRightShort className='md:text-[30px] 
                    ss:text-[30px] text-[25px] text-white'/>
                    <p>Contact</p>
                </div>

                <div className='md:mt-10 ss:mt-7 mt-5 text-center'>
                  <p className='text-white font-normal md:text-[20px]
                  ss:text-[20px] text-[13px]'>
                    <span className='text-secondary font-bold'>Email:
                    </span> Anasconigltd@yahoo.com
                  </p>

                  <p className='text-white font-normal md:text-[20px]
                  ss:text-[19px] text-[12px] md:mt-2 ss:mt-1 mt-1'>
                    <span className='text-secondary font-bold'>Phone:
                    </span> 08037002296, 08035895253, 08134353345.
                  </p>

                  <p className='text-white font-normal md:text-[20px]
                  ss:text-[19px] text-[12px] leading-[17px] md:mt-3
                  ss:mt-2 mt-1'>
                    <span className='text-secondary font-bold'>Head Office:
                    </span> No. 101 Ibrahim Taiwo Rd by Sani Ungogo,
                    Kano State.
                  </p>

                  <p className='text-white font-normal md:text-[20px]
                  ss:text-[19px] text-[12px] leading-[17px] md:mt-5
                  ss:mt-4 mt-1'>
                    <span className='text-secondary font-bold'>Branch Office:
                    </span> No 9 Festing Rd, Sabon Gari, Kano State.
                  </p>
                </div>
              </motion.div>
          </div>
      </section>  
    )
  };
  
  export default SectionWrapper(Hero, '');