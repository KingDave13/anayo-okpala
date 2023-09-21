import { 
    NavbarAlt, 
    CTA, 
    Footer, 
    Hero4, 
    ProductsMain } 
    from '../components';
  import { cellotapes } from '../assets';
  
  const AboutPage = () => {
    return (
      <div className='font-instrument-sans'>
        <NavbarAlt />
        <div className='relative flex items-center justify-center w-full 
        max-h-[450px] top-20'>
          <img src={cellotapes} alt='product3'
          className='object-cover w-[150rem] h-[450px]' />
          <div className='absolute w-full'>
            <Hero4 />
          </div>
        </div>
        
        <ProductsMain />
  
        <div className='bg-dimWhite'>
          <CTA />
        </div>
  
        <div className='bg-dimWhite'>
          <Footer />
        </div>
      </div>
    )
  };
  
  export default AboutPage;