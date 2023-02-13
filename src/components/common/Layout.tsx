import React, { useEffect } from 'react'

import { checkAuth } from 'redux/auth/asyncActions'
import { useAppDispatch } from 'redux/store'

import { Outlet } from 'react-router-dom'
import { Footer } from './footer/Footer'
import { Header } from './header/Header'

export const Layout: React.FC = () => {

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(checkAuth())
    }
  }, [])
  
  return(
    <>
      <Header />
      <div className='outlet'>
        <Outlet/>
      </div>
      <Footer/>
    </>
  )
}