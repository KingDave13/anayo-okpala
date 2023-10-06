import { 
    NavbarAlt2,  
    Footer, 
    Hero3, 
    Contact, 
    Newsletter } 
    from '../components';
import { product3 } from '../assets';

const ContactPage = () => {
  return (
    <div className='font-instrument-sans'>
      <NavbarAlt2 />
      <div className='relative flex items-center justify-center w-full 
      md:max-h-[450px] ss:max-h-[300px] max-h-[200px] top-20'>
        <img src={product3} alt='product3'
        className='object-cover w-[150rem] md:h-[450px] ss:h-[300px]
        h-[200px]' />
        <div className='absolute w-full'>
          <Hero3 />
        </div>
      </div>
      
      <Contact />

      <div className='bg-dimWhite'>
        <Newsletter />
      </div>

      <Footer />
    </div>
  )
};

export default ContactPage;