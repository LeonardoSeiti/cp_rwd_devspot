
import Buttondevspot from'../app/components/Button_devspot'
import Footer from './components/Footer';
import Navbar from './components/Navbar';

import styles from './page.module.css'
import styled from 'styled-components';

 
export default function Home() {
  return (
    <main>
      
      <Buttondevspot text="Sign in"/>
      <Navbar/>
      <Footer/>
      
    </main>
  )
}