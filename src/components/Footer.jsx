import { SectionWrapper } from '../hoc';
import { motion } from 'framer-motion';
import { textVariant, fadeIn } from '../utils/motion';
import { BiCopyright } from 'react-icons/bi';
import { footerLinks, socialMedia } from '../constants';
import { logo2 } from '../assets';
import React from 'react';

const Footer = () => {
  return (
    <section className='relative w-full min-h-[360px] mx-auto flex 
    items-center flex-col md:mb-0 ss:mb-0 mb-6'>
      <div className='flex max-w-[95rem] mx-auto items-center w-full 
      relative'>
        <motion.div variants={textVariant()} className='flex md:flex-row 
        ss:flex-row flex-col relative w-full'>
          <div className='flex flex-col flex-start relative w-full'>
            <img src={logo2} alt='logo' className='md:w-[200px] 
            ss:w-[180px] w-[150px] h-auto' />
            <p className='text-darkBlue md:text-[18px] ss:text-[16px] 
            text-[14px] md:max-w-[550px] ss:max-w-[260px] max-w-[320px] 
            md:mt-8 ss:mt-8 mt-5 md:leading-[25px] ss:leading-[23px] 
            leading-[20px]'>
              Anayo Okpala Global Concept is a leading supplier of 
              high-quality foam cloth, bedsheets, tape edge, PVC, sewing thread, 
              cellotape and other foam accessories for various industries.
            </p>
          </div>
          
          <div className='w-full flex flex-row md:justify-end 
          ss:justify-end'>
            {footerLinks.map((footerLink, index) => (
              <div key={index} className='flex flex-col my-4 md:min-w-[150px]
              md:max-w-[200px] w-full'>
                <h4 className={`font-bold md:text-[21px] ss:text-[18px] 
                text-[15px] text-primary 
                  ${index !== footerLinks.length - 1 ? 'md:mr-10 ss:mr-8 mr-8' : 'mr-12'}`}>
                  {footerLink.title}
                </h4>
                <ul className='list-none md:mt-4 ss:mt-3 mt-1 mr-5'>
                  {footerLink.links.map((Link, index) => (
                    <a target='blank' href={Link.route} key={Link.name}>
                      <li className={`md:text-[17px] ss:text-[16px] grow2
                      text-[14px] md:leading-[17px] ss:leading-[17px] leading-[14px]
                      text-primary hover:text-secondary cursor-pointer 
                      ${index !== footerLink.links.length - 1 ? 'md:mb-4 ss:mb-2 mb-2' : 'mb-0'}`}>
                        {Link.name}
                      </li>
                    </a>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div variants={textVariant()} className='md:absolute ss:absolute 
      flex flex-col w-full md:bottom-10 ss:bottom-14 md:max-w-[600px] left-0'>
        <div className='flex md:mt-3 ss:mt-3 mt-2 items-center'>
          {socialMedia.map((social, index) => (
            <a target='_blank' href={social.link} rel="noreferrer" key={index}>
              {React.createElement(social.Icon, {
                className: `md:w-[27px] ss:w-[24px] w-[20px] md:h-[22px] 
                ss:h-[20px] h-[30px] object-contain cursor-pointer grow2
                ${index !== socialMedia.length - 1 ? 'mr-3' : 'mr-0' }`,
              })}
            </a>
          ))}
        </div>

        <div className='flex md:mt-3 ss:mt-2 mt-1 md:mb-8 ss:mb-0 mb-12 
        items-center'>
          <BiCopyright className='sm:mr-2 mr-1 md:text-[20px] 
          ss:text-[18px] text-[15px] md:mt-1 ss:mt-1 mt-[3px]' />
          <p className='md:text-[16px] ss:text-[16px] text-[14px] 
          text-darkBlue mt-1'>
            2023. All Rights Reserved.
          </p>
        </div>
      </motion.div>

      <motion.div variants={fadeIn('down', 'spring', 0.3)}
      className='absolute bottom-0 w-full border-t-[1px] md:pt-2 ss:pt-2
      pt-1'>
        <p className='md:text-[15px] ss:text-[14px] text-[12px]'>
          Designed and developed by
            <span className='text-[#00563B] font-medium cursor-pointer grow3'>
              <a href='https://pluggresources.com/' target='blank'> Plugg Resources
              </a>
            </span>
        </p>
      </motion.div>
    </section>
  )
};

export default SectionWrapper(Footer, '');
