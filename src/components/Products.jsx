import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc'
import { products } from '../constants';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { BsArrowRightShort } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const navigate = useNavigate();

    return (
        <motion.div
            variants={fadeIn('down', 'spring', 0.2, 1)}
            className='w-full flex justify-center'
        >
            <div className='flex flex-col items-center md:w-[70%] 
            ss:w-[100%] w-[100%] relative'>
                <img src={product.image} alt='product'
                    className='md:rounded-[20px] ss:rounded-[20px] 
                    rounded-[10px] shadow-md'
                />
                <div className='absolute bottom-0 left-0 md:p-8 ss:p-8 
                p-4 flex flex-col'>
                    <div className='flex flex-col'>
                        <h1 className='font-bold md:text-[25px] 
                        ss:text-[24px] text-[20px] text-white'>
                            {product.title}
                        </h1>
                        <p className='md:max-w-[450px] ss:max-w-[350px] 
                        max-w-[230px] text-white md:mt-1 ss:mt-1 mt-1 
                        md:text-[16px] ss:text-[14px] text-[11px]
                        md:leading-[25px] ss:leading-[23px] leading-[14px]'>
                            {product.description}
                        </p>
                    </div>
                    <div className='flex md:mt-4 ss:mt-4 mt-2 md:gap-5 
                    ss:gap-3 gap-2'>
                        <button className='bg-secondary md:text-[16px] 
                        ss:text-[17px] text-[11px] md:py-2 ss:py-2 py-2 
                        md:px-12 ss:px-8 px-5 text-primary rounded-[3px] 
                        font-medium border-none hover:text-white grow2'
                            onClick={() => navigate('/contact')}>
                            Order Now
                        </button>
                        <button className='border-[1px] border-secondary 
                        md:text-[16px] ss:text-[17px] text-[11px] md:py-2 
                        ss:py-2 py-2 md:px-12 ss:px-8 px-5 text-secondary 
                        rounded-[3px] font-medium hover:text-white grow2'
                            onClick={() => navigate('/products')}>
                            View Details
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const Products = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === products.length - 1 ? 0 : prevIndex + 1
            );
        }, 7000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    const navigateLeft = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? products.length - 1 : prevIndex - 1
        );
    };

    const navigateRight = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === products.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <section className='relative w-full md:min-h-[900px] 
        ss:min-h-[700px] min-h-[500px] mx-auto flex justify-center 
        items-center'>
            <div className='absolute w-full max-w-[95rem] mx-auto flex 
            md:mb-5 ss:mb-5 mb-0 justify-center'>
                <motion.div variants={textVariant()} 
                className='flex flex-col justify-center items-center 
                relative md:px-16 ss:px-10 px-1'>
                    <h1 className='text-primary font-bold md:text-[55px] 
                    ss:text-[50px] text-[35px] tracking-tight md:mt-0 
                    ss:mt-10'>
                        Our products
                    </h1>
                    <div className='flex relative justify-center'>
                        <div className='bg-secondary md:w-[120px] 
                        ss:w-[120px] w-[80px] md:h-[10px] ss:h-[10px] 
                        h-[8px]' />
                    </div>
                    <motion.div className='flex md:mt-16 ss:mt-16 mt-10 
                    items-center flex-col relative justify-center'>
                        <div className='relative'>
                            <ProductCard product={products[currentIndex]} />
                        </div>
                        <div className='md:flex hidden absolute left-0'>
                            <motion.div
                                className='cursor-pointer'
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={navigateLeft}
                                transition={{ ease: 'easeInOut' }}
                            >
                                <HiChevronLeft className='md:w-14 ss:w-14 
                                h-14 rounded-full bg-secondary 
                                bg-opacity-30 p-3 text-primary 
                                hover:bg-opacity-70' />
                            </motion.div>
                        </div>
                        <div className='md:flex hidden absolute right-0'>
                            <motion.div
                                className='cursor-pointer'
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={navigateRight}
                                transition={{ ease: 'easeInOut' }}
                            >
                                <HiChevronRight className='w-14 h-14 
                                rounded-full bg-secondary bg-opacity-30 
                                p-3 text-primary hover:bg-opacity-70' />
                            </motion.div>
                        </div>
                    </motion.div>
                    <div className='flex flex-row md:mt-16 ss:mt-10 mt-6 
                    justify-center items-center gap-1 cursor-pointer 
                    grow2 md:mb-0 ss:mb-5 mb-0'>
                        <p className='font-medium text-primary' 
                        onClick={() => navigate('/products')}>
                            View All
                        </p>
                        <BsArrowRightShort className='text-[30px] 
                        text-primary' />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default SectionWrapper(Products, 'products');
