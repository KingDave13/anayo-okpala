import { 
    NavbarAlt3, 
    CTA, 
    Footer, 
    Hero4, 
    ProductsMain } 
    from '../components';
  import { img2 } from '../assets';
  
  const AboutPage = () => {
    return (
      <div className='font-instrument-sans'>
        <NavbarAlt3 />
        <div className='relative flex items-center justify-center w-full 
        max-h-[450px] top-20'>
          <img src={img2} alt='product3'
          className='object-cover w-[150rem] h-[450px]' />
          <div className='absolute w-full'>
            <Hero4 />
          </div>
        </div>
        
        <div className='bg-dimWhite'>
            <ProductsMain />
        </div>
        
        <CTA />
  
        <div className='bg-dimWhite'>
          <Footer />
        </div>
      </div>
    )
  };
  
  export default AboutPage;