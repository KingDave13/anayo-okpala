import { SectionWrapper } from '../hoc';
import styles, { layout } from '../styles';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';
import { testimonials } from '../constants';
import { quote } from '../assets';

const TestCard = ({ index, testimonial, image, name, designation }) => {
    return (
        <motion.div
        variants={fadeIn('', 'spring', index * 0.5, 0.75)}
        className='bg-dimWhite pt-16 pb-16 p-10 rounded-3xl xs:w-[500px] 
        w-full relative cursor-pointer'
        whileHover={{ boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)', 
        transition: { duration: 0.2, ease: 'easeInOut' } }}
        >
            <img src={quote}
                className='absolute object-contain w-16 h-auto top-[-35px]
                right-7' 
            />

            <div className=''>
                <p className='text-primary text-[18px] font-normal'>
                    {testimonial}
                </p>

                <div className='mt-5 flex justify-between items-center'>
                    <img 
                        src={image}
                        alt='name'
                        className='w-10 h-10 mr-5 rounded-full 
                        object-cover'
                    />
                    <div className='flex relative mr-5'>
                        <div className='bg-primary w-[1px]
                        h-[45px] bg-opacity-40' />
                    </div> 
                    <div className='flex-1 flex flex-col'>
                        <p className='text-primary font-bold text-[18px]'>
                            {name}
                        </p>
                        <p className='text-primary text-[12px]'>
                            {designation}
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    )
};

const Testimonials = () => {
  return (
    <section className='relative w-full min-h-[900px] mx-auto flex
    items-center'>
        <div className='max-w-[95rem] mx-auto flex flex-col mb-10'
        >
            <motion.div variants={textVariant()}>
                <h1 className='text-primary font-bold md:text-[60px]
                ss:text-[50px] text-[40px] tracking-tight'>
                    Testimonials
                </h1>
                
                <div className='flex relative'>
                    <div className='bg-secondary md:w-[150px] ss:w-[150px]
                    w-[100px] h-[13px]' />
                </div>                  
            </motion.div>

            <div className='flex gap-14 flex-wrap justify-center mt-20'>
                {testimonials.map((test, index) => (
                <TestCard 
                    key={test.name} 
                    index={index} 
                    {...test}
                />
                ))}
            </div>
        </div>
    </section>
  )
};

export default SectionWrapper(Testimonials, '');