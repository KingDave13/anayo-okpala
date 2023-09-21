import { useState, useEffect } from 'react';
import styles from '../styles';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc'
import { products } from '../constants';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { BsArrowRightShort } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ title, description, image }) => {
    const navigate = useNavigate();

    return (
        <div className='w-full flex'>
            <motion.div
                variants={fadeIn('down', 'spring', 0.2, 1)}
                className='w-full flex relative justify-center'
            >
                <div className='flex flex-col items-center md:w-[70%]
                ss:w-[100%] w-[100%] relative'>
                    <img src={image} alt='product' 
                    className='md:rounded-[20px] ss:rounded-[20px] 
                    rounded-[10px] shadow-md'
                    />
                    <div className='absolute bottom-0 left-0 md:p-8 ss:p-8 
                    p-4 flex flex-col'>
                        <div className='flex flex-col'>
                            <h1 className='font-bold md:text-[24px] 
                            ss:text-[24px] text-[20px] text-white'>
                                {title}
                            </h1>
                            <p className='md:max-w-[450px] ss:max-w-[350px]
                            max-w-[200px] text-white md:mt-3 ss:mt-1 mt-1
                            md:text-[20px] ss:text-[15px] text-[11px]'>
                                {description}
                            </p>
                        </div>
                        <div className='flex md:mt-4 ss:mt-4 mt-2 md:gap-5 
                        ss:gap-3 gap-2'>
                            <button className='bg-secondary md:text-[17px] 
                            ss:text-[17px] text-[12px] md:py-3 ss:py-2 py-1 
                            md:px-14 ss:px-8 px-3 text-primary 
                            rounded-[3px] font-medium border-none 
                            hover:text-white grow2'
                            onClick={() => navigate('/contact')}>
                                Order Now
                            </button>

                            <button className='border-[1px] border-secondary 
                            md:text-[17px] ss:text-[17px] text-[12px] 
                            md:py-3 ss:py-2 py-1 md:px-14 ss:px-8 
                            px-3 text-secondary rounded-[3px] font-medium 
                            hover:text-white grow2'
                            onClick={() => navigate('/products')}>
                                View Details
                            </button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
};

const Products = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === products.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    const handleClick = (index) => {
        setCurrentIndex(index);
    }

  return (
    <section className='relative w-full md:min-h-[800px] ss:min-h-[700px] 
    min-h-[500px] mx-auto flex justify-center items-center'>
        <div className='absolute w-full max-w-[95rem] mx-auto flex 
        md:mb-16 ss:mb-16 mb-0 justify-center'>
            <motion.div variants={textVariant()}
            className={`${styles.paddingX} flex flex-col justify-center 
            items-center relative`}>
                <h1 className='text-primary font-bold md:text-[60px]
                ss:text-[50px] text-[40px] tracking-tight md:mt-0 ss:mt-10'>
                    Our products
                </h1>
                
                <div className='flex relative justify-center'>
                    <div className='bg-secondary md:w-[150px] ss:w-[150px]
                    w-[100px] h-[13px]' />
                </div>

                <motion.div className='flex md:mt-16 ss:mt-16 mt-10 
                items-center flex-col relative justify-center'>
                    <div className='relative'>
                        {products.map((product, index) => (
                            index === currentIndex && (
                                <ProductCard 
                                    key={product.title} 
                                    index={index} 
                                    title={product.title} 
                                    description={product.description} 
                                    image={product.image} 
                                />
                            )
                        ))}
                    </div>

                    <div className='md:flex hidden absolute left-0'>
                        <motion.div
                            className='cursor-pointer'
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => handleClick(currentIndex === 0 ? 
                                products.length - 1 : currentIndex - 1)}
                            transition={{ ease: 'easeInOut' }} 
                        >
                            <HiChevronLeft className='md:w-14 ss:w-14 h-14 
                            rounded-full bg-secondary bg-opacity-30 p-3 
                            text-primary
                            hover:bg-opacity-70' />
                        </motion.div>
                    </div>

                    <div className='md:flex hidden absolute right-0'>
                        <motion.div
                            className='cursor-pointer'
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => handleClick(currentIndex ===
                                products.length - 1 ? 0 : currentIndex + 1)}
                            transition={{ ease: 'easeInOut' }}
                        >
                            <HiChevronRight className='w-14 h-14 rounded-full
                            bg-secondary bg-opacity-30 p-3 text-primary
                            hover:bg-opacity-70' />
                        </motion.div>
                    </div>
                </motion.div>

                <div className='flex flex-row md:mt-16 ss:mt-16 mt-10 
                justify-center items-center gap-1 cursor-pointer grow2'>
                    <p className='font-medium text-primary'
                    onClick={() => navigate('/products')}>
                        View All
                    </p>
                    
                    <BsArrowRightShort className='text-[30px] text-primary'/>
                </div>      
            </motion.div>          
        </div>
    </section> 
  )
};

export default SectionWrapper(Products, 'products');