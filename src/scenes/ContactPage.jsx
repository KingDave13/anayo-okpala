import { 
    NavbarAlt,  
    Footer, 
    Hero3, 
    Contact } 
    from '../components';
import { product3 } from '../assets';

  const ContactPage = () => {
    return (
      <div className='font-instrument-sans'>
        <NavbarAlt />
        <div className='relative flex items-center justify-center w-full 
        max-h-[450px] top-20'>
          <img src={product3} className='object-cover w-[150rem] h-[450px]' />
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