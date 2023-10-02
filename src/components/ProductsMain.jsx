import React, { useState, useEffect, useRef } from 'react';
import { productsMain } from '../constants';
import { motion } from 'framer-motion';
import { fadeIn, slideIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { HiChevronLeft, HiChevronRight, HiX } from 'react-icons/hi';
import { useSwipeable } from 'react-swipeable';

function openWhatsApp(link) {
    window.open(link, '_blank');
}

const Product = ({ index, name, description, image, link, images }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [circleIndex, setCircleIndex] = useState(0);

    const openModal = () => {
        setScrollPosition(window.pageYOffset);
        setIsModalOpen(true);
        setCircleIndex(currentImageIndex);
        document.body.style.overflow = 'hidden';
        document.body.style.top = `-${scrollPosition}px`;
    };

    const closeModal = () => {
        setIsModalOpen(false);
        document.body.style.overflow = 'auto';
        document.body.style.top = '0';
    };
    
    const navigateImage = (direction) => {
        if (direction === 'prev') {
          setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
          );
        } else if (direction === 'next') {
          setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
          );
        }
    };

    useEffect(() => {
        setCircleIndex(currentImageIndex);
    }, [currentImageIndex]);

    const handleCircleClick = (index) => {
        setCurrentImageIndex(index);
        setCircleIndex(index);
    };

    const handlers = useSwipeable({
        onSwipedLeft: () => navigateImage('next'),
        onSwipedRight: () => navigateImage('prev'),
    });

    const modalRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                closeModal();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <motion.div 
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className='flex md:flex-row ss:flex-row flex-col'
        {...handlers}>
            <motion.div 
            variants={slideIn('left', 'tween', 0.2, 0.5)}
            className='md:mt-3 ss:mt-2 mt-1'>
                <img src={image} alt='product'
                className=' md:h-[300px] ss:h-[200px] h-[auto] md:w-auto
                ss:w-auto w-full'
                />
            </motion.div>

            <motion.div variants={textVariant()}
            className='flex-1 md:ml-32 ss:ml-14 md:mt-0 ss:mt-0 mt-3'
            >
                <h1 className='text-primary font-bold md:text-[40px]
                ss:text-[33px] text-[25px] tracking-tight'>
                    {name}
                </h1>
                
                <div className='flex relative'>
                    <div className='bg-secondary md:w-[120px] ss:w-[120px]
                    w-[80px] md:h-[10px] ss:h-[10px] h-[6px]' />
                </div>

                <p className='md:mt-5 ss:mt-3 mt-2 text-primary md:text-[18px] 
                ss:text-[14px] text-[12px] md:max-w-[650px] ss:max-w-[700px]
                tracking-tight md:leading-[23px] ss:leading-[18px]
                leading-[16px]'>
                    {description}
                </p>

                <div className='hidden ss:block md:mt-5 ss:mt-4
                mt-5'>
                    <div className='border-t-[1px] border-t-primary' />
                </div>

                <div className='flex md:mt-5 ss:mt-4 mt-2 md:gap-5 
                ss:gap-2 gap-2'>
                    <button className='bg-primary md:text-[16px] 
                    ss:text-[12px] text-[11px] md:py-2 ss:py-2 py-2 
                    md:px-12 ss:px-8 px-5 text-white tracking-tight
                    rounded-[3px] md:font-medium ss:font-medium font-normal
                    border-none grow2'
                    onClick={() => openWhatsApp(link)}>
                        Buy Now
                    </button>

                    <button className='border-[1px] border-primary 
                    md:text-[16px] ss:text-[12px] text-[11px] 
                    md:py-2 ss:py-2 py-2 md:px-12 ss:px-8 
                    px-5 text-primary rounded-[3px] font-medium 
                    grow2 tracking-tight'
                    onClick={openModal}>
                        View Full Gallery
                    </button>
                </div>

                <div className='md:hidden ss:hidden block md:mt-8 ss:mt-4
                mt-5'>
                    <div className='border-t-[1px] border-t-primary' />
                </div>

                {isModalOpen && (
                    <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 flex items-center 
                    justify-center bg-black bg-opacity-80 z-20">
                        <div className="flex flex-col items-center 
                        justify-center md:w-[30%] ss:w-[70%] w-[85%] 
                        md:h-[60%] ss:h-[50%] h-[40%] relative z-50"
                        ref={modalRef}>
                            <div className="absolute inset-0 
                            gradient-overlay rounded-xl" />
                            <img src={images[currentImageIndex]} 
                            alt={name} className='object-fill w-full 
                            h-full rounded-xl shadow-md' />

                            <HiChevronLeft className="md:w-12 ss:w-14 w-10 
                            items-center md:h-12 ss:h-14 h-10 rounded-full
                            bg-white bg-opacity-40 text-primary p-2
                            justify-center hover:bg-opacity-70 prev 
                            absolute md:left-4 ss:left-3 left-2 flex
                            cursor-pointer"
                            onClick={() => navigateImage('prev')}/>

                            <HiChevronRight className="md:w-12 ss:w-14 
                            w-10 md:h-12 ss:h-14 h-10 rounded-full 
                            bg-white items-center bg-opacity-40 p-2 
                            text-primary flex hover:bg-opacity-70 next 
                            absolute md:right-6 ss:right-3 right-2 
                            justify-center cursor-pointer"
                            onClick={() => navigateImage('next')} />

                            <HiX 
                                className='absolute md:w-10 ss:w-12 
                                w-7 md:h-10 ss:h-12 h-7 rounded-full 
                                items-center justify-center bg-opacity-40 
                                text-dimWhite flex hover:bg-opacity-70 
                                md:right-6 ss:right-6 right-4 md:top-6
                                ss:top-6 top-4 md:p-2 ss:p-2 p-1
                                cursor-pointer text-opacity-70 
                                hover:text-opacity-100 ss:flex hidden'
                                onClick={closeModal}
                            />

                            <div className='absolute bottom-0 flex
                            w-full items-center justify-center mb-1'>
                                {images.map((_, index) => (
                                <div
                                    key={index}
                                    className={`rounded-full md:w-2 ss:w-3 
                                    w-2 md:h-2 ss:h-3 h-2 
                                    md:m-[3px] ss:m-[3px] m-[2px] 
                                    bg-primary cursor-pointer
                                    ${circleIndex === index ? 
                                    'bg-secondary' : ''}`}
                                    onClick={() => handleCircleClick(index)}
                                />
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </motion.div>
        </motion.div>
    );
};

const ProductsMain = () => {
  return (
    <section className='relative w-full min-h-[700px] mx-auto flex 
    items-center flex flex-col mt-20 justify-center'>
        <div className='relative justify-between w-full md:mb-12 ss:mb-12
        mb-8 max-w-[95rem] mx-auto flex flex-col md:gap-12 ss:gap-12 
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

export default SectionWrapper(ProductsMain, '');