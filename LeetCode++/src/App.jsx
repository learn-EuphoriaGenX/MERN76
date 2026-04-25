import React from 'react'
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Signin from './pages/auth/Signin';
import Signup from './pages/auth/Signup';
import { Route, Routes } from 'react-router-dom';
import PageNotFound from './pages/PageNotFound';

function App() {

  return (
    <div>
      <Navbar />
      <div className='mt-13'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sign-in' element={<Signin />} />
          <Route path='/sign-up' element={<Signup />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </div>

      <Footer />
    </div>
  )
}

export default App