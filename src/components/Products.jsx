import { useState } from 'react';
import styles, { layout } from '../styles';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc'
import { products } from '../constants';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

const ProductCard = ({ title, description, image }) => {
    return (
        <div className='w-full flex flex-1'>
            <motion.div
                variants={fadeIn('right', 'spring', 0.75)}
                className='w-full flex'
            >
                <div className='flex flex-col rounded-[20px]
                shadow-card'>
                    <img src={image} alt='product' className='w-full'/>
                    <div className='absolute flex flex-col bottom-14
                    left-26'>
                        <div className='flex flex-col'>
                            <h1 className='font-bold text-[24px] text-white'>
                                {title}
                            </h1>
                            <p className='max-w-[500px] text-white'>
                                {description}
                            </p>
                        </div>
                        <div className='flex mt-8 gap-5'>
                            <button className='bg-secondary text-[17px] py-3 
                            px-14 text-primary rounded-[3px] font-medium 
                            border-none hover:text-white'>
                                Order Now
                            </button>

                            <button className='border-[1px] border-secondary 
                            text-[17px] py-3 px-14 text-secondary rounded-[3px] 
                            font-medium hover:text-white'>
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

    const handleClick = (index) => {
        setCurrentIndex(index);
    }

  return (
    <section className='relative w-full min-h-[800px] mx-auto flex 
    justify-center'>
        <div className='absolute w-full max-w-[95rem] mx-auto flex 
        mb-16 justify-center'>
            <motion.div variants={textVariant()}
            className={`${styles.paddingX} flex flex-col justify-center`}>
                <h1 className='text-primary font-bold text-[65px]
                tracking-tight'>
                    Our products
                </h1>
                
                <div className='flex relative justify-center'>
                    <div className='bg-secondary w-[150px]
                    h-[13px]' />
                </div>

                <motion.div className='flex'>
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
                </motion.div>

                <div className='flex'>
                    <div className='flex' 
                        onClick={() => handleClick(currentIndex === 0 ? 
                        products.length - 1 : currentIndex - 1)}>
                        <HiChevronLeft />
                    </div>

                    <div className='flex'
                        onClick={() => handleClick(currentIndex === 
                        products.length - 1 ? 0 : currentIndex + 1)}>
                        <HiChevronRight />
                    </div>
                </div>
            </motion.div>          
        </div>
    </section> 
  )
};

export default SectionWrapper(Products, 'products');