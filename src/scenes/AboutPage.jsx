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
      md:max-h-[450px] ss:max-h-[450px] max-h-[200px] top-20'>
        <img src={product3} alt='product3'
        className='object-cover w-[150rem] md:h-[450px] ss:h-[450px]
        h-[200px]' />
        <div className='absolute w-full'>
          <Hero2 />
        </div>
      </div>
      
      <AboutMain />

      <div className='bg-dimWhite'>
        <Mission />
      </div>

      <CTA />

      <div className='bg-dimWhite'>
        <Footer />
      </div>
    </div>
  )
};

export default AboutPage;