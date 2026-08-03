import React, { useEffect, useState } from 'react'
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Signin from './pages/auth/Signin';
import Signup from './pages/auth/Signup';
import { Route, Routes, useNavigate } from 'react-router-dom';
import PageNotFound from './pages/PageNotFound';
import Problems from './pages/Problems';
import Create from './pages/Create';
import Discuss from './pages/Discuss';
import Store from './pages/Store';
import ProtectedRoute from './pages/auth/ProtectedRoute';
import useAuthReload from './hooks/useAuthReload';
import Loading from './pages/Loading';

function App() {

  const loading = useAuthReload();

  if (loading) {
    return (
      <Loading />
    );
  }
  return (
    <div>
      <Navbar />
      <div className='mt-13'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sign-in' element={<Signin />} />
          <Route path='/sign-up' element={<Signup />} />
          <Route path='/problems' element={<ProtectedRoute loading={loading} allowedRoles={['admin', 'user']}><Problems /></ProtectedRoute>} />
          <Route path='/create' element={<ProtectedRoute loading={loading} allowedRoles={['admin']}><Create /></ProtectedRoute>} />
          <Route path='/discuss' element={<ProtectedRoute loading={loading} allowedRoles={['admin', 'user']}><Discuss /></ProtectedRoute>} />
          <Route path='/store' element={<ProtectedRoute loading={loading} allowedRoles={['admin', 'user']}><Store /></ProtectedRoute>} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </div>

      <Footer />
    </div>
  )
}

export default App