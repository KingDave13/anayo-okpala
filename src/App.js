import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage, AboutPage } from './scenes';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/AboutPage' element={<AboutPage />} />
        </Routes>
    </BrowserRouter>
  )
};

export default App;
