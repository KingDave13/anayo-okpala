import { BrowserRouter } from 'react-router-dom';
import { Navbar, Hero } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <div className='bg-primary relative'>
          <Navbar />
          <Hero />
        </div>
      </div>
    </BrowserRouter>
  )
};

export default App;
