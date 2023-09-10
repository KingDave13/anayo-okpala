import { SectionWrapper } from '../hoc';
import styles from '../styles';
import { motion } from 'framer-motion';
import { textVariant } from '../utils/motion';
import { BiCopyright } from 'react-icons/bi';
import { socialMedia } from '../constants';

const Footer = () => {
  return (
    <section className='relative w-full min-h-[500px] mx-auto flex
    items-center'>
        <div className='flex max-w-[95rem] mx-auto 
        items-center w-full relative'>
            <motion.div variants={textVariant()}
            className='flex flex-start flex-col relative w-full'>
                
                
                <p className='text-darkBlue text-[17px] max-w-[400px]'>
                Anayo Okpala Global Concept is a nationally recognized 
                industrial material supplier and retailer registered
                 under the Federal Government of Nigeria with registration
                  number RC-123456.
                </p>

                <div className='flex mt-5 items-center justify-center'>
                    {socialMedia.map((social, index) => (
                        <a target='_blank' key={social.id}
                         href={social.link}>
                            <social.Icon 
                            className={`w-[21px] h-[21px] object-contain 
                            cursor-pointer 
                            ${index !== socialMedia.length -1 ? 
                            'mr-6' : 'mr-0' }`}
                            />
                        </a>
                    ))}
                </div>

                <div className='flex mt-5 items-center'>
                    <BiCopyright className='sm:mr-2 mr-1 text-[20px]'/>
                    <p className='text-[17px] text-darkBlue'>
                        2023. All Rights Reserved.
                    </p>            
                </div>
            </motion.div>              
        </div>
    </section>
  )
};

export default SectionWrapper(Footer, '');