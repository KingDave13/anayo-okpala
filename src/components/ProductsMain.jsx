import { img1, img2, img3, img4, cellotapes } from '../assets';
import { layout } from '../styles';
import { motion } from 'framer-motion';
import { slideIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { useNavigate } from 'react-router-dom';

const AboutMain = () => {
    const navigate = useNavigate();

  return (
    <section className='relative w-full min-h-[700px] mx-auto flex 
    items-center flex flex-col mt-20 justify-center gap-20'>
        <div className='relative justify-between w-full
        max-w-[95rem] mx-auto flex md:flex-row ss:flex-row flex-col'
        >
            <motion.div 
                variants={slideIn('left', 'tween', 0.2, 0.5)}
                className='md:mt-4 ss:mt-2 mt-0'>
                <   img src={img1} alt='bed_cover'
                    className=' md:h-[350px] ss:h-[300px] h-[280px] w-auto'
                />
            </motion.div>
            
            <motion.div variants={textVariant()}
            className='flex-1 ml-40'
            >
                <h1 className='text-primary font-bold md:text-[45px]
                ss:text-[40px] text-[40px] tracking-tight'>
                    Clothing Materials
                </h1>
                
                <div className='flex relative'>
                    <div className='bg-secondary md:w-[150px] ss:w-[120px]
                    w-[100px] md:h-[13px] ss:h-[10px] h-[10px]' />
                </div>

                <p className='md:mt-8 ss:mt-8 mt-5 text-primary md:text-[20px] 
                ss:text-[20px] text-[14px] md:max-w-[650px] ss:max-w-[700px]
                tracking-tight'>
                Clothing materials for various industrial and domestic 
                uses. We have over 500 different designs and colours of 
                these clothing materials.
                </p>

                <div className='md:mt-12 ss:mt-8 mt-5'>
                    <div className='border-t-[1px] border-t-primary' />
                </div>

                <div className='flex md:mt-12 ss:mt-8 mt-5 md:gap-5 
                ss:gap-2 gap-2'>
                    <button className='bg-primary md:text-[17px] 
                    ss:text-[17px] text-[12px] md:py-2 ss:py-2 py-1 
                    md:px-12 ss:px-8 px-3 text-white tracking-tight
                    rounded-[3px] font-medium border-none grow2'
                    onClick={() => navigate('/contact')}>
                        Buy Now
                    </button>

                    <button className='border-[1px] border-primary 
                    md:text-[17px] ss:text-[17px] text-[12px] 
                    md:py-2 ss:py-2 py-1 md:px-12 ss:px-8 
                    px-3 text-primary rounded-[3px] font-medium 
                    grow2 tracking-tight'
                    >
                        View Full Gallery
                    </button>
                </div>
            </motion.div>
        </div>

        <div className='relative justify-between w-full
        max-w-[95rem] mx-auto flex md:flex-row ss:flex-row flex-col'
        >
            <motion.div 
                variants={slideIn('left', 'tween', 0.2, 0.5)}
                className='md:mt-4 ss:mt-2 mt-0'>
                <   img src={img2} alt='bed_cover'
                    className=' md:h-[350px] ss:h-[300px] h-[280px] w-auto'
                />
            </motion.div>
            
            <motion.div variants={textVariant()}
            className='flex-1 ml-40'
            >
                <h1 className='text-primary font-bold md:text-[45px]
                ss:text-[40px] text-[40px] tracking-tight'>
                    Tape
                </h1>
                
                <div className='flex relative'>
                    <div className='bg-secondary md:w-[150px] ss:w-[120px]
                    w-[100px] md:h-[13px] ss:h-[10px] h-[10px]' />
                </div>

                <p className='md:mt-8 ss:mt-8 mt-5 text-primary md:text-[20px] 
                ss:text-[20px] text-[14px] md:max-w-[650px] ss:max-w-[700px]
                tracking-tight'>
                Tapes for various industrial and domestic uses. We have 
                these in various patterns, strengths and colours.
                </p>

                <div className='md:mt-12 ss:mt-8 mt-5'>
                    <div className='border-t-[1px] border-t-primary' />
                </div>

                <div className='flex md:mt-12 ss:mt-8 mt-5 md:gap-5 
                ss:gap-2 gap-2'>
                    <button className='bg-primary md:text-[17px] 
                    ss:text-[17px] text-[12px] md:py-2 ss:py-2 py-1 
                    md:px-12 ss:px-8 px-3 text-white tracking-tight
                    rounded-[3px] font-medium border-none grow2'
                    onClick={() => navigate('/contact')}>
                        Buy Now
                    </button>

                    <button className='border-[1px] border-primary 
                    md:text-[17px] ss:text-[17px] text-[12px] 
                    md:py-2 ss:py-2 py-1 md:px-12 ss:px-8 
                    px-3 text-primary rounded-[3px] font-medium 
                    grow2 tracking-tight'
                    >
                        View Full Gallery
                    </button>
                </div>
            </motion.div>
        </div>

        <div className='relative justify-between w-full
        max-w-[95rem] mx-auto flex md:flex-row ss:flex-row flex-col'
        >
            <motion.div 
                variants={slideIn('left', 'tween', 0.2, 0.5)}
                className='md:mt-4 ss:mt-2 mt-0'>
                <   img src={img3} alt='bed_cover'
                    className=' md:h-[350px] ss:h-[300px] h-[280px] w-auto'
                />
            </motion.div>
            
            <motion.div variants={textVariant()}
            className='flex-1 ml-40'
            >
                <h1 className='text-primary font-bold md:text-[45px]
                ss:text-[40px] text-[40px] tracking-tight'>
                    PVC Transparent
                </h1>
                
                <div className='flex relative'>
                    <div className='bg-secondary md:w-[150px] ss:w-[120px]
                    w-[100px] md:h-[13px] ss:h-[10px] h-[10px]' />
                </div>

                <p className='md:mt-8 ss:mt-8 mt-5 text-primary md:text-[20px] 
                ss:text-[20px] text-[14px] md:max-w-[650px] ss:max-w-[700px]
                tracking-tight'>
                PVC Transparent description to be inserted here.
                </p>

                <div className='md:mt-12 ss:mt-8 mt-5'>
                    <div className='border-t-[1px] border-t-primary' />
                </div>

                <div className='flex md:mt-12 ss:mt-8 mt-5 md:gap-5 
                ss:gap-2 gap-2'>
                    <button className='bg-primary md:text-[17px] 
                    ss:text-[17px] text-[12px] md:py-2 ss:py-2 py-1 
                    md:px-12 ss:px-8 px-3 text-white tracking-tight
                    rounded-[3px] font-medium border-none grow2'
                    onClick={() => navigate('/contact')}>
                        Buy Now
                    </button>

                    <button className='border-[1px] border-primary 
                    md:text-[17px] ss:text-[17px] text-[12px] 
                    md:py-2 ss:py-2 py-1 md:px-12 ss:px-8 
                    px-3 text-primary rounded-[3px] font-medium 
                    grow2 tracking-tight'
                    >
                        View Full Gallery
                    </button>
                </div>
            </motion.div>
        </div>

        <div className='relative justify-between w-full
        max-w-[95rem] mx-auto flex md:flex-row ss:flex-row flex-col'
        >
            <motion.div 
                variants={slideIn('left', 'tween', 0.2, 0.5)}
                className='md:mt-4 ss:mt-2 mt-0'>
                <   img src={img4} alt='bed_cover'
                    className=' md:h-[350px] ss:h-[300px] h-[280px] w-auto'
                />
            </motion.div>
            
            <motion.div variants={textVariant()}
            className='flex-1 ml-40'
            >
                <h1 className='text-primary font-bold md:text-[45px]
                ss:text-[40px] text-[40px] tracking-tight'>
                    PVC Leather
                </h1>
                
                <div className='flex relative'>
                    <div className='bg-secondary md:w-[150px] ss:w-[120px]
                    w-[100px] md:h-[13px] ss:h-[10px] h-[10px]' />
                </div>

                <p className='md:mt-8 ss:mt-8 mt-5 text-primary md:text-[20px] 
                ss:text-[20px] text-[14px] md:max-w-[650px] ss:max-w-[700px]
                tracking-tight'>
                PVC Leather description to be inserted here.
                </p>

                <div className='md:mt-12 ss:mt-8 mt-5'>
                    <div className='border-t-[1px] border-t-primary' />
                </div>

                <div className='flex md:mt-12 ss:mt-8 mt-5 md:gap-5 
                ss:gap-2 gap-2'>
                    <button className='bg-primary md:text-[17px] 
                    ss:text-[17px] text-[12px] md:py-2 ss:py-2 py-1 
                    md:px-12 ss:px-8 px-3 text-white tracking-tight
                    rounded-[3px] font-medium border-none grow2'
                    onClick={() => navigate('/contact')}>
                        Buy Now
                    </button>

                    <button className='border-[1px] border-primary 
                    md:text-[17px] ss:text-[17px] text-[12px] 
                    md:py-2 ss:py-2 py-1 md:px-12 ss:px-8 
                    px-3 text-primary rounded-[3px] font-medium 
                    grow2 tracking-tight'
                    >
                        View Full Gallery
                    </button>
                </div>
            </motion.div>
        </div>

        <div className='relative justify-between w-full
        max-w-[95rem] mx-auto flex md:flex-row ss:flex-row flex-col'
        >
            <motion.div 
                variants={slideIn('left', 'tween', 0.2, 0.5)}
                className='md:mt-4 ss:mt-2 mt-0'>
                <   img src={cellotapes} alt='bed_cover'
                    className=' md:h-[350px] ss:h-[300px] h-[280px] w-auto'
                />
            </motion.div>
            
            <motion.div variants={textVariant()}
            className='flex-1 ml-40'
            >
                <h1 className='text-primary font-bold md:text-[45px]
                ss:text-[40px] text-[40px] tracking-tight'>
                    Cellotape
                </h1>
                
                <div className='flex relative'>
                    <div className='bg-secondary md:w-[150px] ss:w-[120px]
                    w-[100px] md:h-[13px] ss:h-[10px] h-[10px]' />
                </div>

                <p className='md:mt-8 ss:mt-8 mt-5 text-primary md:text-[20px] 
                ss:text-[20px] text-[14px] md:max-w-[650px] ss:max-w-[700px]
                tracking-tight'>
                Cellotape description to be inserted here.
                </p>

                <div className='md:mt-12 ss:mt-8 mt-5'>
                    <div className='border-t-[1px] border-t-primary' />
                </div>

                <div className='flex md:mt-12 ss:mt-8 mt-5 md:gap-5 
                ss:gap-2 gap-2'>
                    <button className='bg-primary md:text-[17px] 
                    ss:text-[17px] text-[12px] md:py-2 ss:py-2 py-1 
                    md:px-12 ss:px-8 px-3 text-white tracking-tight
                    rounded-[3px] font-medium border-none grow2'
                    onClick={() => navigate('/contact')}>
                        Buy Now
                    </button>

                    <button className='border-[1px] border-primary 
                    md:text-[17px] ss:text-[17px] text-[12px] 
                    md:py-2 ss:py-2 py-1 md:px-12 ss:px-8 
                    px-3 text-primary rounded-[3px] font-medium 
                    grow2 tracking-tight'
                    >
                        View Full Gallery
                    </button>
                </div>
            </motion.div>
        </div>

    </section> 
  )
};

export default SectionWrapper(AboutMain, '');