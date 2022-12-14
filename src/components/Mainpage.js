import { useContext, useState, useEffect } from 'react'

import { Langcontext } from './context/Langcontext';
import {useParams} from 'react-router-dom'
import './Mainpage.css'
import { render } from '@testing-library/react';
import Header from './includes/Header';
import Banner from './includes/Banner';
import Mainpagetext from './includes/Mainpagetext';
import Bestseller from './includes/Bestseller';
import Footer from './includes/Footer';


function Mainpage(props) {
    let [lang, setlang] = useState()
    const params =  useParams()
    
    useEffect(()=>{
        setlang(localStorage.getItem("Lang"))
 
    }, [lang])

    const langset = (message) => {
        setlang(message);
        props.lang(message)
      };
    
  return (
  <>
    <Header lang={langset}></Header>
    <div className='page'>
    <div className='BannerWarp'>
    <Banner></Banner>
    </div>
    <div className='page-wrap'>
    <Mainpagetext lang={lang}></Mainpagetext>
    <Bestseller lang={lang}></Bestseller>
  </div>  
  </div>
  <Footer></Footer>
  </>
    
  )
}

export default Mainpage