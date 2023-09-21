import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage, AboutPage, ContactPage, ProductsPage } from './scenes';

const App = () => {
  return (
    <BrowserRouter>
      <Routes >
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/products' element={<ProductsPage />} />
        </Routes>
    </BrowserRouter>
  )
};

export default App;