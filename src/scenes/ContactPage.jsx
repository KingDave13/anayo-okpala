import { 
    NavbarAlt2,  
    Footer, 
    Hero3, 
    Contact } 
    from '../components';
import { product3 } from '../assets';

  const ContactPage = () => {
    return (
      <div className='font-instrument-sans'>
        <NavbarAlt2 />
        <div className='relative flex items-center justify-center w-full 
        max-h-[450px] top-20 z-10'>
          <img src={product3} alt='product3'
          className='object-cover w-[150rem] h-[450px]' />
          <div className='absolute w-full'>
            <Hero3 />
          </div>
        </div>
        
        <Contact />

        <div className='bg-dimWhite'>
          <Footer />
        </div>
      </div>
    )
  };
  
  export default ContactPage;