import { SectionWrapper } from '../hoc';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';
import { testimonials } from '../constants';
import { quote } from '../assets';

const TestCard = ({ index, testimonial, image, name, designation }) => {
    return (
        <motion.div
        variants={fadeIn('', 'spring', index * 0.5, 0.75)}
        className='bg-dimWhite md:pt-16 md:pb-16 ss:pt-16 ss:pb-16 pt-10
        pb-10 p-10 rounded-3xl xs:w-[500px] 
        w-full relative cursor-pointer'
        whileHover={{ boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)', 
        transition: { duration: 0.2, ease: 'easeInOut' } }}
        >
            <img src={quote}
                alt='quotes'
                className='absolute object-contain md:w-16 ss:w-16 w-10 
                h-auto md:top-[-35px] ss:top-[-35px] top-[-20px]
                right-7' 
            />

            <div className=''>
                <p className='text-primary md:text-[16px] ss:text-[16px] 
                text-[13px] font-normal'>
                    {testimonial}
                </p>

                <div className='md:mt-5 ss:mt-5 mt-4 flex justify-between 
                items-center'>
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
                        <p className='text-primary font-bold 
                        md:text-[16px] ss:text-[16px] text-[14px]'>
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
                <h1 className='text-primary font-bold md:text-[55px]
                ss:text-[50px] text-[35px] tracking-tight'>
                    Testimonials
                </h1>
                
                <div className='flex relative'>
                    <div className='bg-secondary md:w-[120px] ss:w-[120px]
                    w-[80px] md:h-[10px] ss:h-[10px] h-[8px]' />
                </div>                  
            </motion.div>

            <div className='flex gap-14 flex-wrap justify-center md:mt-20
            ss:mt-20 mt-10'>
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