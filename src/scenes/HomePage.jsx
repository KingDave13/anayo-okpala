import 
{ Navbar, Hero, About, Products, Values, Location, Testimonials, CTA, Footer } 
from '../components';

const HomePage = () => {
  return (
    <div className='font-instrument-sans'>
        <div className='bg-primary relative overflow-hidden'>
          <Navbar />
          <div className='flex absolute top-40 left-[900px] top-[340px]'>
            <div className='rounded-full bg-darkBlue w-[1400px] h-[1400px] mt-10' />
          </div>
          <Hero />
        </div>

        <About />

        <div className='relative bg-dimWhite'>
          <Products/>
        </div>

        <Values />

        <div className='relative bg-dimWhite'>
          <Location/>
        </div>

        <Testimonials />

        <div className='relative bg-dimWhite'>
          <CTA/>
        </div>

        <Footer />
    </div>
  )
};

export default HomePage;