import React, { useState } from 'react'
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Signin from './pages/auth/Signin';
import Signup from './pages/auth/Signup';
import { Route, Routes } from 'react-router-dom';
import PageNotFound from './pages/PageNotFound';
import Problems from './pages/Problems';
import Create from './pages/Create';
import Discuss from './pages/Discuss';
import Store from './pages/Store';

function App() {

  let [isAuthenticated, setIsAuthenticated] = useState(false)

  return (
    <div>
      <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
      <div className='mt-13'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sign-in' element={<Signin setIsAuthenticated={setIsAuthenticated} />} />
          <Route path='/sign-up' element={<Signup />} />
          <Route path='/problems' element={<Problems />} />
          <Route path='/create' element={<Create />} />
          <Route path='/discuss' element={<Discuss />} />
          <Route path='/store' element={<Store />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </div>

      <Footer />
    </div>
  )
}

export default App