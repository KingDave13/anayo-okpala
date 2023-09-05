import { BrowserRouter } from 'react-router-dom';
import { Navbar } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <div className='bg-primary'>
        <Navbar />
        </div>
      </div>
    </BrowserRouter>
  )
};

export default App;
