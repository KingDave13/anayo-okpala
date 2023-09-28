import { useState } from 'react';
import { productsMain } from '../constants';
import { motion } from 'framer-motion';
import { fadeIn, slideIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

function openWhatsApp(link) {
    window.open(link, '_blank');
}

const Product = ({ index, name, description, image, link, images }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const openModal = () => {
        setIsModalOpen(true);
    };
    
    const closeModal = () => {
        setIsModalOpen(false);
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

    return (
        <motion.div 
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className='flex md:flex-row ss:flex-row flex-col'>
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
                    <div className="fixed inset-0 flex items-center 
                    justify-center bg-black bg-opacity-50 z-50">
                        <div className="p-6 rounded-md shadow-xl flex 
                        flex-col items-center justify-center md:w-[70%] 
                        ss:w-[80%] w-[85%] md:h-auto ss:h-auto h-auto 
                        absolute">
                            <img src={images[currentImageIndex]} 
                            alt={name} className='relative object-contain' />

                            <button
                                className="md:w-14 ss:w-14 
                                h-10 rounded-full bg-secondary 
                                bg-opacity-30 p-3 text-primary 
                                hover:bg-opacity-70 prev absolute left-0"
                                onClick={() => navigateImage('prev')}
                            >
                                <HiChevronLeft />
                            </button>

                            <button
                                className="md:w-14 ss:w-14 
                                h-10 rounded-full bg-secondary 
                                bg-opacity-30 p-3 text-primary 
                                hover:bg-opacity-70 next absolute right-0"
                                onClick={() => navigateImage('next')}
                            >
                                <HiChevronRight />
                            </button>

                            <button className="modal-close" 
                                onClick={closeModal}>
                                Close
                            </button>
                        </div>
                    </div>
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