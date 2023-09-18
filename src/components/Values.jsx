import styles, { layout } from '../styles';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc'
import { values } from '../constants';
import { BsArrowRightShort } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const ValueCard = ({ index, title, description, image}) => {
    return (
        <Tilt className='w-full flex'>
            <motion.div
                variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
                className='w-full bg-dimWhite p-[5px] rounded-[20px]
                cursor-pointer shadow-xl'
            >
                <div options={{ max: 45, scale: 1, speed: 450 }}
                className='flex flex-col justify-evenly p-7'>
                    <img src={image} alt='value' 
                    className='object-contain w-8'
                    />
                    <h1 className='font-medium text-[20px] text-primary
                    mt-3'>
                        {title}
                    </h1>
                    <p className='max-w-[220px] text-primary mt-1
                    text-[14px] font-medium leading-[18px]'>
                        {description}
                    </p>
                </div>
            </motion.div>
        </Tilt>
    )
};

const Values = () => {
    const navigate = useNavigate();

  return (
    <section className='relative w-full md:min-h-[650px] ss:min-h-[650px] 
    min-h-[900px] mx-auto flex justify-center items-center'>
        <div className='absolute w-full max-w-[95rem] mx-auto flex 
        mb-16 justify-center'>
            <motion.div variants={textVariant()}
            className={`${styles.paddingX} flex flex-col justify-center 
            items-center relative`}>
                <h1 className='text-primary font-bold md:text-[60px]
                ss:text-[50px] text-[40px] tracking-tight md:mt-0
                ss:mt-0 mt-20'>
                    Our core values
                </h1>
                
                <div className='flex relative justify-center'>
                    <div className='bg-secondary md:w-[150px] ss:w-[150px]
                    w-[100px] h-[13px]' />
                </div>

                <div>
                    <motion.div className='flex md:flex-row ss:flex-row 
                    flex-col md:mt-16 ss:mt-14 mt-10 gap-12'>
                        {values.map((value, index) => (
                            <ValueCard 
                                key={value.title} 
                                index={index} 
                                {...value}
                            />
                        ))}
                    </motion.div> 
                </div>

                 <div className='flex md:mt-16 ss:mt-14 mt-10 
                 justify-center items-center gap-1 cursor-pointer 
                 grow2 flex-row'>
                    <p className='font-medium text-primary'
                    onClick={() => navigate('/about')}>
                        See more about us
                    </p>
        
                    <BsArrowRightShort className='text-[30px] text-primary'/>
                </div>   
            </motion.div>          
        </div>
    </section>
  )
};

export default SectionWrapper(Values, '');