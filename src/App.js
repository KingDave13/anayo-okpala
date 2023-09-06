import { BrowserRouter } from 'react-router-dom';
import { Navbar, Hero, About } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className='font-instrument-sans'>

        <div className='bg-primary relative overflow-hidden'>
          <Navbar />
          <div className='flex absolute top-40 left-[900px] 
          top-[340px]'>
            <div className='rounded-full bg-darkBlue w-[1400px]
              h-[1400px] mt-10' />
          </div>
          <Hero />
        </div>

        <About />

      </div>
    </BrowserRouter>
  )
};

export default App;
