import { SectionWrapper } from '../hoc';
import { cloth } from '../assets';
import { layout } from '../styles';
import { motion } from 'framer-motion';
import { slideIn, textVariant } from '../utils/motion';
import { useNavigate } from 'react-router-dom';

const About = () => {
    const navigate = useNavigate();

  return (
    <section className='relative w-full min-h-[700px] mx-auto flex 
    items-center flex overflow-hidden'>
        <div className='absolute items-center justify-between w-full
        max-w-[95rem] mx-auto flex md:flex-row ss:flex-row flex-col 
        items-start md:gap-5 ss:gap-5 gap-10 mb-16'
        >
            <motion.div variants={textVariant()}
            className={`${layout.sectionInfo}`}
            >
                <h1 className='text-primary font-bold md:text-[60px]
                ss:text-[50px] text-[40px] tracking-tight'>
                    Who we are
                </h1>
                
                <div className='flex relative'>
                    <div className='bg-secondary md:w-[150px] ss:w-[150px]
                    w-[100px] h-[13px]' />
                </div>

                <p className='md:mt-12 ss:mt-8 mt-5 text-primary 
                md:text-[20px] ss:text-[18px] text-[15px] max-w-[700px]'>
                Anayo Okpala Global Concept is a leading supplier of 
                high-quality foam cloth, tape edge, PVC, sewing thread, 
                cellotape, and other foam accessories for various 
                industries. With a commitment to providing top-notch 
                products, we have built a solid reputation for delivering 
                innovative solutions that meet the diverse needs of our 
                clients.
                </p>

                <div className='md:mt-12 ss:mt-8 mt-5'>
                    <button className='bg-primary grow
                    md:text-[17px] 
                    ss:text-[17px] text-[14px] md:py-3 ss:py-3 py-3 
                    md:px-14 ss:px-14 px-8 text-white rounded-[3px]
                    font-medium border-none hover:text-primary'
                    onClick={() => navigate('/about')}>
                        Learn More
                    </button>
                </div>           
            </motion.div>

            <motion.div 
            variants={slideIn('right', 'tween', 0.2, 0.5)}>
                <img src={cloth} alt='cloth'
                className='md:h-[400px] ss:h-[300px] w-auto'
                />
            </motion.div>
        </div>
    </section> 
  )
};

export default SectionWrapper(About, 'about');