import styles, { layout } from '../styles';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc'
import { values } from '../constants';
import { BsArrowRightShort } from 'react-icons/bs';

const ValueCard = ({ index, title, description, image}) => {
    return (
        <div className='w-full flex'>
            <motion.div
                variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
                className='w-full bg-dimWhite p-[5px] rounded-[20px]
                cursor-pointer'
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
        </div>
    )
};

const Values = () => {
  return (
    <section className='relative w-full min-h-[700px] mx-auto flex 
    justify-center'>
        <div className='absolute w-full max-w-[95rem] mx-auto flex 
        mb-16 justify-center'>
            <motion.div variants={textVariant()}
            className={`${styles.paddingX} flex flex-col justify-center 
            items-center relative`}>
                <h1 className='text-primary font-bold text-[60px]
                tracking-tight'>
                    Our core values
                </h1>
                
                <div className='flex relative justify-center'>
                    <div className='bg-secondary w-[150px]
                    h-[13px]' />
                </div>

                <div>
                    <motion.div className='flex mt-16 gap-12'>
                        {values.map((value, index) => (
                            <ValueCard 
                                key={value.title} 
                                index={index} 
                                {...value}
                            />
                        ))}
                    </motion.div> 
                </div>

                 <div className='flex mt-16 justify-center items-center 
                 gap-1 cursor-pointer grow2 flex-row'>
                    <p className='font-medium text-primary'>
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