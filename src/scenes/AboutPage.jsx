import { 
  NavbarAlt, 
  CTA, 
  Footer, 
  Hero2, 
  AboutMain, 
  Mission } 
  from '../components';
import { product3 } from '../assets';

const AboutPage = () => {
  return (
    <div className='font-instrument-sans'>
      <NavbarAlt />
      <div className='relative flex items-center justify-center w-full 
      max-h-[450px] top-20'>
        <img src={product3} className='object-cover w-[150rem] h-[450px]' />
        <div className='absolute w-full'>
          <Hero2 />
        </div>
      </div>
      
      <CTA />
      <Footer />
    </div>
  )
};

export default AboutPage;