import { SectionWrapper } from '../hoc';
import { cloth } from '../assets';
import styles, { layout } from '../styles';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';

const About = () => {
  return (
    <section className='relative w-full min-h-[850px] mx-auto flex 
    items-center flex overflow-hidden'>
        <div className='absolute items-center justify-between w-full
        max-w-[95rem] mx-auto flex flex-row items-start gap-5 mb-16'
        >
            <motion.div variants={textVariant()}
            className={`${layout.sectionInfo}`}
            >
                <h1 className='text-primary font-bold text-[65px]
                tracking-tight'>
                    Who we are
                </h1>
                
                <div className='flex relative'>
                    <div className='bg-secondary w-[150px]
                    h-[13px]' />
                </div>

                <p className='mt-8 text-primary text-[20px] max-w-[700px]'>
                Anayo Okpala Global Concept are a Nigerian industrial and 
                household item supplier dealing with a wide range of items. 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed non risus. Suspendisse lectus tortor, dignissim sit 
                amet, adipiscing nec, ultricies sed, dolor. Cras elementum 
                ultrices diam. Maecenas ligula massa, varius a, semper 
                congue, euismod non, mi.
                </p>

                <div className='mt-8'>
                    <button className='bg-primary grow
                    text-[17px] py-3 px-14 text-white rounded-[3px]
                    font-medium border-none hover:text-primary'>
                        Learn More
                    </button>
                </div>           
            </motion.div>

            <motion.div variants={fadeIn('right', 'spring', 0.3)}>
                <img src={cloth} alt='cloth'
                className=' h-[400px] w-auto'
                />
            </motion.div>
        </div>
    </section> 
  )
}

export default SectionWrapper(About, 'about');