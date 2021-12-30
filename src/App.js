import React from 'react';

// import useLocalStorage from 'use-local-storage'

import Footer from './Footer';
import Navbars from './Navbars';
import Top_page from './Top_page';
import { About } from './About';
import { Skills } from './Skills';
import { Project } from './Project';
import { Contact } from './Contact';
import insta from './logo/insta.png'
import github from './logo/github.png'
import fb from './logo/fb.webp'
import tw from './logo/tw.png'
import utube from './logo/utube.png'
import './style/App.css'


const App = () => {
  // const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  // const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  // const switchTheme =() => {
    // const newTheme = theme === 'light' ? 'dark':'light';
    // setTheme(newTheme);
  // }

  return (
    
    <div className="scrol" >
      {/* data-theme = {theme} */}
      <Navbars/>
      
      <Top_page/>
      {/* <button onClick={switchTheme}>
        switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
      </button> */}
      <section className="  social_screen ">
                    <a href="https://www.instagram.com/roshanmishra657/"  className="gap text-white ">
                    <i className="logo_style ml"><img src={insta}/></i><br/>
                    </a><br></br>
                    <a href="https://github.com/Roshanmishra150" className="gap text-white ">
                    <i className="logo_style ml"><img src={github}/></i><br/>
                    </a><br></br>
                    <a href="https://www.facebook.com/profile.php?id=100012582856115" className="gap text-white ">
                    <i className="logo_style ml"><img src={fb}/></i><br/>
                    </a><br></br>
                    <a href="https://twitter.com/Roshanm55820460" className="gap text-white ">
                    <i className="logo_style ml"><img src={tw}/></i><br/>
                    </a><br></br>
                    <a href="https://www.youtube.com/channel/UCXccAK3n1bdNQBw1n1JkH8w" className="gap text-white ">
                    <i className="logo_style ml"><img src={utube}/></i><br/>
                    </a><br></br>
                </section>
      <About/>
      <Skills/>
      <Project/>
      <Contact/>
      <Footer/>
      
    </div>
  );
}

export default App;
