import { SectionWrapper } from '../hoc';
import { motion } from 'framer-motion';
import { textVariant } from '../utils/motion';
import { BiCopyright } from 'react-icons/bi';
import { footerLinks, socialMedia } from '../constants';
import { logo2 } from '../assets';
import React from 'react';

const Footer = () => {
  return (
    <section className='relative w-full min-h-[400px] mx-auto flex 
    items-center flex-col'>
      <div className='flex max-w-[95rem] mx-auto items-center w-full 
      relative'>
        <motion.div variants={textVariant()} className='flex md:flex-row 
        ss:flex-row flex-col relative w-full'>
          <div className='flex flex-col flex-start relative w-full'>
            <img src={logo2} alt='logo' className='md:w-[200px] 
            ss:w-[180px] w-[150px] h-auto' />
            <p className='text-darkBlue md:text-[21px] ss:text-[18px] 
            text-[14px] md:max-w-[640px] ss:max-w-[350px] max-w-[320px] 
            md:mt-8 ss:mt-8 mt-5 md:leading-[30px] ss:leading-[26px] 
            leading-[20px]'>
              Anayo Okpala Global Concept is a nationally recognized 
              industrial material supplier and retailer registered under 
              the Federal Government of Nigeria with registration number 
              RC-123456.
            </p>
          </div>
          
          <div className='w-full flex flex-row md:justify-end 
          ss:justify-end'>
            {footerLinks.map((footerLink, index) => (
              <div key={index} className='flex flex-col my-4 min-w-[120px]'>
                <h4 className={`font-bold md:text-[21px] ss:text-[21px] 
                text-[16px] text-primary 
                  ${index !== footerLinks.length - 1 ? 'md:mr-20 ss:mr-12' : 'mr-0'}`}>
                  {footerLink.title}
                </h4>
                <ul className='list-none md:mt-4 ss:mt-4 mt-1'>
                  {footerLink.links.map((Link, index) => (
                    <a href={Link.route} key={Link.name}>
                      <li className={`md:text-[20px] ss:text-[19px] 
                      text-[14px] md:leading-[18px] ss:leading-[18px] 
                      text-primary hover:text-secondary cursor-pointer 
                      ${index !== footerLink.links.length - 1 ? 'md:mb-4 ss:mb-4 mb-0' : 'mb-0'}`}>
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

      <motion.div variants={textVariant()} className='relative flex 
      flex-col w-full'>
        <div className='flex md:mt-6 ss:mt-8 mt-1 items-center'>
          {socialMedia.map((social, index) => (
            <a target='_blank' rel="noreferrer" key={index}>
              {React.createElement(social.Icon, {
                className: `md:w-[20px] ss:w-[25px] w-[18px] h-[20px] 
                object-contain cursor-pointer 
                ${index !== socialMedia.length - 1 ? 'mr-3' : 'mr-0' }`,
              })}
            </a>
          ))}
        </div>

        <div className='flex md:mt-6 ss:mt-4 mt-3 items-center'>
          <BiCopyright className='sm:mr-2 mr-1 md:text-[20px] 
          ss:text-[20px] text-[15px]' />
          <p className='md:text-[18px] ss:text-[18px] text-[14px] 
          text-darkBlue mt-1'>
            2023. All Rights Reserved.
          </p>
        </div>
      </motion.div>
    </section>
  )
};

export default SectionWrapper(Footer, '');
