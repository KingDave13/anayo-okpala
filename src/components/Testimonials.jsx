import { SectionWrapper } from '../hoc';
import styles, { layout } from '../styles';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';
import { testimonials } from '../constants';

const TestCard = ({ index, testimonial, image, name, designation }) => {
    return (
        <motion.div
        variants={fadeIn('', 'spring', index * 0.5, 0.75)}
        className='bg-dimWhite pt-16 pb-16 p-10 rounded-3xl xs:w-[500px] 
        w-full relative'
        >
            <p className='text-secondary font-bold text-[48px] font-poppins
            absolute'>
                "
            </p>

            <div className=''>
                <p className='text-primary text-[18px] font-medium'>
                    {testimonial}
                </p>

                <div className='mt-2 flex justify-between items-center'>
                    <img 
                        src={image}
                        alt='name'
                        className='w-10 h-10 mr-5 rounded-full 
                        object-cover'
                    />
                    <p className='text-[45px] mr-5 font-poppins-100'>
                        |
                    </p>
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
    <section className='relative w-full min-h-[900px] mx-auto flex'>
        <div className='max-w-[95rem] mx-auto flex flex-col mb-10'
        >
            <motion.div variants={textVariant()}
            className={`${layout.sectionInfo}`}
            >
                <h1 className='text-primary font-bold text-[60px]
                tracking-tight'>
                    Testimonials
                </h1>
                
                <div className='flex relative'>
                    <div className='bg-secondary w-[150px]
                    h-[13px]' />
                </div>                  
            </motion.div>

            <div className='flex gap-14 flex-wrap justify-center'>
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