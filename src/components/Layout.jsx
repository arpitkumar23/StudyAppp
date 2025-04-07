import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Features from '../pages/Features'
import State from '../pages/State'

const Layout = ({children}) => {
  return (
    <div>
      <Header/>
      <main style={{ minHeight: '95vh',backgroundImage: 'url(  https://t4.ftcdn.net/jpg/05/01/60/37/240_F_501603736_89BeNXA2xt0uJCapX4aXIkKozESrrjMP.jpg )', backgroundSize: 'cover', backgroundPosition: 'center' }}> 
        {children}
      </main>
      <Features/> 
      <State/>
     <Footer/>
      
    </div>
  )
}

export default Layout
