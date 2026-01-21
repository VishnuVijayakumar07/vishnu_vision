import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Greet from './components/Greet';
import About from './components/About';


const App = () => {
  return (
    <main className="bg-black">

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={
            <>
              <Greet />
              <About />
            </>
          } />
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
