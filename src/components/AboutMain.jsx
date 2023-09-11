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
        max-w-[95rem] mx-auto flex flex-row items-start gap-5'
        >
            <motion.div variants={textVariant()}
            className={`${layout.sectionInfo} mt-8`}
            >
                <h1 className='text-primary font-bold text-[60px]
                tracking-tight'>
                    Who we are
                </h1>
                
                <div className='flex relative'>
                    <div className='bg-secondary w-[150px]
                    h-[13px]' />
                </div>

                <p className='mt-8 text-primary text-[20px] max-w-[620px]
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
            className='mt-10'>
                <img src={frame} alt='cloth'
                className=' h-[500px] w-auto'
                />
            </motion.div>
        </div>

        <motion.div 
            variants={textVariant()}
            className='relative mt-6 text-primary text-[20px] tracking-tight'>
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