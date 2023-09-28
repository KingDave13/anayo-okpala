import { frame } from '../assets';
import { layout } from '../styles';
import { motion } from 'framer-motion';
import { slideIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const AboutMain = () => {
  return (
    <section className='relative w-full min-h-[700px] mx-auto flex 
    items-center flex flex-col mt-10'>
        <div className='relative justify-between w-full items-center
        max-w-[95rem] mx-auto flex md:flex-row ss:flex-wrap flex-col 
        items-start gap-5'
        >
            <motion.div variants={textVariant()}
            className={`${layout.sectionInfo} mt-8`}
            >
                <h1 className='text-primary font-bold md:text-[55px]
                ss:text-[45px] text-[35px] tracking-tight'>
                    Who we are
                </h1>
                
                <div className='flex relative'>
                    <div className='bg-secondary md:w-[120px] ss:w-[120px]
                    w-[80px] md:h-[10px] ss:h-[10px] h-[8px]' />
                </div>

                <p className='md:mt-8 ss:mt-8 mt-5 text-primary md:text-[20px] 
                ss:text-[18px] text-[14px] md:max-w-[620px] ss:max-w-[700px]
                tracking-tight'>
                Anayo Okpala Global Concept is a leading supplier of 
                high-quality foam cloth, tape edge, PVC, sewing thread, 
                cellotape, and other foam accessories for various 
                industries. With a commitment to providing top-notch 
                products, we have built a solid reputation for delivering 
                innovative solutions that meet the diverse needs of our 
                clients.
                <br></br><br></br>
                Our foam cloth is made from premium materials, 
                ensuring durability, comfort, and excellent insulation. 
                The tape edge we offer is meticulously crafted, providing 
                a clean and professional finish to foam products. Our PVC
                 materials are known for their flexibility and resistance 
                 to wear and tear. 
                </p>          
            </motion.div>

            <motion.div 
            variants={slideIn('right', 'tween', 0.2, 0.5)}
            className='md:mt-10 ss:mt-6 mt-0'>
                <img src={frame} alt='cloth'
                className=' md:h-[500px] ss:h-[500px] h-[280px] w-auto'
                />
            </motion.div>
        </div>

        <motion.div 
            variants={textVariant()}
            className='relative md:mt-6 ss:mt-10 mt-6 text-primary 
            md:text-[20px] ss:text-[18px] text-[14px] tracking-tight'>
              We also provide a wide range of sewing threads in different 
              colors and strengths to cater to the unique requirements of 
              our customers. Lastly, our cellotape is of superior quality, 
              offering exceptional adhesion and easy application. At Anayo 
              Okpala Global Concept, we strive to exceed expectations 
              through our exceptional products and unmatched customer 
              service.
        </motion.div>
    </section> 
  )
};

export default SectionWrapper(AboutMain, '');