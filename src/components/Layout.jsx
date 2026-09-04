import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from './Header'


export function Layout() {
  
  return (
    <>
      <Header />
      <Outlet />
      <footer>&#169; 2026 #VANLIFE</footer>
    </>
  )
}