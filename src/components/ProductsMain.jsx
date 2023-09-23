import { frame } from '../assets';
import { layout } from '../styles';
import { motion } from 'framer-motion';
import { slideIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const AboutMain = () => {
  return (
    <section className='relative w-full min-h-[700px] mx-auto flex 
    items-center flex flex-col mt-10'>
        <div className='relative justify-between w-full items-center
        max-w-[95rem] mx-auto flex md:flex-row ss:flex-row flex-col 
        items-start gap-5'
        >
            <motion.div 
                variants={slideIn('right', 'tween', 0.2, 0.5)}
                className='md:mt-10 ss:mt-6 mt-0'>
                <   img src={frame} alt='cloth'
                    className=' md:h-[500px] ss:h-[500px] h-[280px] w-auto'
                />
            </motion.div>
            
            <motion.div variants={textVariant()}
            className={`${layout.sectionInfo} mt-8`}
            >
                <h1 className='text-primary font-bold md:text-[60px]
                ss:text-[50px] text-[40px] tracking-tight'>
                    Who we are
                </h1>
                
                <div className='flex relative'>
                    <div className='bg-secondary md:w-[150px] ss:w-[150px]
                    w-[100px] h-[13px]' />
                </div>

                <p className='md:mt-8 ss:mt-8 mt-5 text-primary md:text-[20px] 
                ss:text-[20px] text-[14px] md:max-w-[620px] ss:max-w-[700px]
                tracking-tight'>
                Anayo Okpala Global Concept is a leading supplier of 
                high-quality foam cloth, tape edge, PVC, sewing thread, 
                cellotape, and other foam accessories for various 
                industries. With a commitment to providing top-notch 
                products, we have built a solid reputation for delivering 
                innovative solutions that meet the diverse needs of our 
                clients.
                </p>          
            </motion.div>
        </div>
    </section> 
  )
};

export default SectionWrapper(AboutMain, '');