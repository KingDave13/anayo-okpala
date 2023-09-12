import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage, AboutPage, ContactPage } from './scenes';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/About' element={<AboutPage />} />
          <Route path='/Contact' element={<ContactPage />} />
        </Routes>
    </BrowserRouter>
  )
};

export default App;
