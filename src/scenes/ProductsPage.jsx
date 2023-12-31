import { 
    NavbarAlt3, 
    CTA, 
    Footer, 
    Hero4, 
    ProductsMain, 
    Newsletter } 
    from '../components';
  import { img2 } from '../assets';
  
const AboutPage = () => {
  return (
    <div className='font-instrument-sans'>
      <NavbarAlt3 />
      <div className='relative flex items-center justify-center w-full 
      md:max-h-[450px] ss:max-h-[300px] max-h-[200px] top-20'>
        <img src={img2} alt='product3'
        className='object-cover w-[150rem] md:h-[450px] ss:h-[300px]
        h-[200px]' />
        <div className='absolute w-full'>
          <Hero4 />
        </div>
      </div>
      
      <div className='bg-dimWhite'>
          <ProductsMain />
      </div>
      
      <CTA />

      <div className='bg-dimWhite'>
        <Newsletter />
      </div>

      <Footer />
    </div>
  )
};

export default AboutPage;