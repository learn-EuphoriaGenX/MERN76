import React from 'react'
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Signin from './pages/auth/Signin';
import Signup from './pages/auth/Signup';
import { Route, Routes } from 'react-router-dom';
import PageNotFound from './pages/PageNotFound';
import Test from './pages/Test';
import Problems from './pages/Problems';
import Create from './pages/Create';

function App() {

  return (
    <div>
      <Navbar />
      <div className='mt-13'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/test' element={<Test />} />
          <Route path='/sign-in' element={<Signin />} />
          <Route path='/sign-up' element={<Signup />} />
          <Route path='/problems' element={<Problems />} />
          <Route path='/create' element={<Create />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </div>

      <Footer />
    </div>
  )
}

export default App