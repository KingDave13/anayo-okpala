import { SectionWrapper } from '../hoc';
import { motion } from 'framer-motion';
import { textVariant } from '../utils/motion';
import { BiCopyright } from 'react-icons/bi';
import { footerLinks, socialMedia } from '../constants';
import { logo2 } from '../assets';

const Footer = () => {
  return (
    <section className='relative w-full min-h-[400px] mx-auto flex
    items-center'>
        <div className='flex max-w-[95rem] mx-auto 
        items-center w-full relative'>
            <motion.div variants={textVariant()}
            className='flex relative w-full'>
                <div className='flex flex-col flex-start relative w-full'>
                    <img src={logo2} alt='logo'
                    className='w-[200px] h-auto'
                    />
                    
                    <p className='text-darkBlue text-[21px] max-w-[640px]
                    mt-8 leading-[30px]'>
                    Anayo Okpala Global Concept is a nationally recognized 
                    industrial material supplier and retailer registered
                    under the Federal Government of Nigeria with
                     registration number RC-123456.
                    </p>

                    <div className='flex mt-6 items-center'>
                        {socialMedia.map((social, index) => (
                            <a target='_blank' key={social.id}
                            href={social.link}>
                                <social.Icon 
                                className={`w-[20px] h-[20px] 
                                object-contain cursor-pointer 
                                ${index !== socialMedia.length -1 ? 
                                'mr-3' : 'mr-0' }`}
                                />
                            </a>
                        ))}
                    </div>

                    <div className='flex mt-6 items-center'>
                        <BiCopyright className='sm:mr-2 mr-1 text-[20px]'/>
                        <p className='text-[18px] text-darkBlue mt-1'>
                            2023. All Rights Reserved.
                        </p>            
                    </div>
                </div>
                

                <div className='w-full flex flex-row justify-end'>
					{footerLinks.map((footerLink, index) => (
						<div key={footerLink.key} className='flex flex-col
						my-4 min-w-[120px]'>
							<h4 className={`font-bold text-[21px] 
							text-primary ${index !== footerLink.length -1 ? 
                                'mr-20' : 'mr-0' }`}>
								{footerLink.title}
							</h4>
							<ul className='list-none mt-4'>
								{footerLink.links.map((Link, index) => (
									<a target='_blank' href={Link.route}>
									<li
									key={Link.name}
									className={`text-[20px] 
                                    leading-[18px] text-primary 
									hover:text-secondary cursor-pointer
									${index !== footerLink.links.length -1 ? 
									'mb-4' : 'mb-0'}`}
									>
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
    </section>
  )
};

export default SectionWrapper(Footer, '');