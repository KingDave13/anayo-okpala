import { useState, useEffect } from 'react';
import styles from '../styles';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc'
import { products } from '../constants';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { BsArrowRightShort } from 'react-icons/bs';

const ProductCard = ({ title, description, image }) => {
    return (
        <div className='w-full flex flex-1'>
            <motion.div
                variants={fadeIn('down', 'spring', 0.2, 1)}
                className='w-full flex relative justify-center'
            >
                <div className='flex flex-col items-center w-[70%]
                relative'>
                    <img src={image} alt='product' 
                    className='rounded-[20px] shadow-md'
                    />
                    <div className='absolute bottom-0 left-0 p-8 
                    flex flex-col'>
                        <div className='flex flex-col'>
                            <h1 className='font-bold text-[24px] text-white'>
                                {title}
                            </h1>
                            <p className='max-w-[450px] text-white mt-3'>
                                {description}
                            </p>
                        </div>
                        <div className='flex mt-4 gap-5'>
                            <button className='bg-secondary text-[17px] py-3 
                            px-14 text-primary rounded-[3px] font-medium 
                            border-none hover:text-white grow2'>
                                Order Now
                            </button>

                            <button className='border-[1px] border-secondary 
                            text-[17px] py-3 px-14 text-secondary rounded-[3px] 
                            font-medium hover:text-white grow2'>
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
    <section className='relative w-full min-h-[800px] mx-auto flex 
    justify-center'>
        <div className='absolute w-full max-w-[95rem] mx-auto flex 
        mb-16 justify-center'>
            <motion.div variants={textVariant()}
            className={`${styles.paddingX} flex flex-col justify-center 
            items-center relative`}>
                <h1 className='text-primary font-bold text-[60px]
                tracking-tight'>
                    Our products
                </h1>
                
                <div className='flex relative justify-center'>
                    <div className='bg-secondary w-[150px]
                    h-[13px]' />
                </div>

                <motion.div className='flex mt-16 items-center flex-col
                relative justify-center'>
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

                    <div className='flex absolute left-0'>
                        <motion.div
                            className='cursor-pointer'
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => handleClick(currentIndex === 0 ? 
                                products.length - 1 : currentIndex - 1)}
                            transition={{ ease: 'easeInOut' }} 
                        >
                            <HiChevronLeft className='w-14 h-14 rounded-full
                            bg-secondary bg-opacity-30 p-3 text-primary
                            hover:bg-opacity-70' />
                        </motion.div>
                    </div>

                    <div className='flex absolute right-0'>
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

                <div className='flex flex-row mt-12 justify-center items-center gap-1
                cursor-pointer grow2'>
                    <p className='font-medium text-primary'>
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