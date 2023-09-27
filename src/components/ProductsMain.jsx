import { productsMain } from '../constants';
import { motion } from 'framer-motion';
import { fadeIn, slideIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { useNavigate } from 'react-router-dom';


const Product = ({ index, name, description, image }) => {

    const navigate = useNavigate();

    return (
        <motion.div 
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className='flex '>
            <motion.div 
            variants={slideIn('left', 'tween', 0.2, 0.5)}
            className='md:mt-3 ss:mt-2 mt-1'>
                <img src={image} alt='product'
                className=' md:h-[350px] ss:h-[200px] h-[auto] md:w-auto
                ss:w-auto w-[150px]'
                />
            </motion.div>

            <motion.div variants={textVariant()}
            className='flex-1 md:ml-40 ss:ml-14 ml-5'
            >
                <h1 className='text-primary font-bold md:text-[45px]
                ss:text-[33px] text-[17px] tracking-tight'>
                    {name}
                </h1>
                
                <div className='flex relative'>
                    <div className='bg-secondary md:w-[150px] ss:w-[120px]
                    w-[50px] md:h-[13px] ss:h-[10px] h-[4px]' />
                </div>

                <p className='md:mt-8 ss:mt-3 mt-2 text-primary md:text-[20px] 
                ss:text-[14px] text-[10px] md:max-w-[650px] ss:max-w-[700px]
                tracking-tight md:leading-[28px] ss:leading-[18px]
                leading-[12px]'>
                    {description}
                </p>

                <div className='hidden ss:block md:mt-8 ss:mt-4
                mt-5'>
                    <div className='border-t-[1px] border-t-primary' />
                </div>

                <div className='flex md:mt-8 ss:mt-4 mt-2 md:gap-5 
                ss:gap-2 gap-2'>
                    <button className='bg-primary md:text-[17px] 
                    ss:text-[12px] text-[9px] md:py-2 ss:py-2 py-1 
                    md:px-12 ss:px-8 px-3 text-white tracking-tight
                    rounded-[3px] md:font-medium ss:font-medium font-normal
                    border-none grow2'
                    onClick={() => navigate('/contact')}>
                        Buy Now
                    </button>

                    <button className='border-[1px] border-primary 
                    md:text-[17px] ss:text-[12px] text-[9px] 
                    md:py-2 ss:py-2 py-1 md:px-12 ss:px-8 
                    px-3 text-primary rounded-[3px] font-medium 
                    grow2 tracking-tight'
                    >
                        View Full Gallery
                    </button>
                </div>
            </motion.div>
        </motion.div>
    )
};

const AboutMain = () => {
  return (
    <section className='relative w-full min-h-[700px] mx-auto flex 
    items-center flex flex-col mt-20 justify-center'>
        <div className='relative justify-between w-full md:mb-12 ss:mb-12
        mb-8 max-w-[95rem] mx-auto flex flex-col md:gap-20 ss:gap-20 
        gap-8'>
            {productsMain.map((product, index) => (
                <Product 
                    key={product.name} 
                    index={index} 
                    {...product}
                />
            ))}
        </div>
    </section> 
  )
};

export default SectionWrapper(AboutMain, '');