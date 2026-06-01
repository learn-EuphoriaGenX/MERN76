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
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import axios from 'axios';
import { removeUser, setUser } from './features/auth/authSlice';
import ProtectedRoute from './pages/auth/ProtectedRoute';

function App() {

  let [loading, setLoading] = useState(false)
  let dispatch = useDispatch()
  let navigate = useNavigate()

  let handleReload = () => {

    return async () => {
      try {
        setLoading(true)

        let response = await axios.get("http://127.0.0.1:5500/api/auth/profile/", {
          headers: {
            Authorization: localStorage.getItem('token')
          }
        })

        dispatch(setUser({
          _id: response.data.user._id,
          token: response.data.token,
          username: response.data.user.username,
          email: response.data.user.email,
          role: response.data.user.role,
          profileImg: response.data.user.profileImg
        }))
        localStorage.setItem('token', response.data.token)
      } catch (error) {
        localStorage.removeItem('token')
        dispatch(removeUser())
        navigate('/sign-in')
      } finally {
        setLoading(false)
      }

    }


  }


  useEffect(handleReload, [])

  if (loading) {
    return <div className='min-h-screen bg-zinc-950 text-white flex items-center justify-center'>
      <h1 className='text-xl text-emerald-500 animate-bounce'>Loading...</h1>
    </div>
  }


  return (
    <div>
      <Navbar />
      <div className='mt-13'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sign-in' element={<Signin />} />
          <Route path='/sign-up' element={<Signup />} />
          <Route path='/problems' element={<Problems />} />
          <Route path='/create' element={<ProtectedRoute allowedRoles={['admin']}><Create /></ProtectedRoute>} />
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