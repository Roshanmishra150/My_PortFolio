import React from 'react'
import { Button } from 'react-bootstrap'
import insta from './logo/insta.png'
import github from './logo/github.png'
import fb from './logo/fb.webp'
import tw from './logo/tw.png'
import utube from './logo/utube.png'
import './style/Footer.css'

const Footer = props => {

const componentDidMount=() =>{
    window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
    return (
        <div>
            <div className=" container my-">
            <footer className="text-center text-white" style={{backgroundColor: "#3f51b5"}} >
                <div className="tex">
                <hr className="my-5" />
                <section className="mb-5 " style={{fontSize:'18px'}}>
                    <div className="row d-flex justify-content-center">
                    <div className="col-lg-8">
                        <p>
                            Thanks to visit my portfolio i hope you fine some thing important or new about me , And my remaining projects you will fine on <a href="https://github.com/Roshanmishra150" target="_blank" style={{ color:"yellow"}} > Here </a>
                        </p>
                    </div>
                    </div>
                </section>

                {/* <section className="text-center mb-5 image">
                    <a href="https://www.instagram.com/roshanmishra657/" className="text-white ">
                    <i className="logo_style"><img src={insta}/></i>
                    </a>
                    <a href="https://github.com/Roshanmishra150" className="text-white me-4">
                    <i className="logo_style ml"><img src={github}/></i>
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=100012582856115" className="text-white me-4">
                    <i className="logo_style ml"><img src={fb}/></i>
                    </a>
                    <a href="https://twitter.com/Roshanm55820460" className="text-white me-4">
                    <i className="logo_style ml"><img src={tw}/></i>
                    </a>
                    <a href="https://www.youtube.com/channel/UCXccAK3n1bdNQBw1n1JkH8w" className="text-white me-4">
                    <i className="logo_style ml"><img src={utube}/></i>
                    </a>
                </section> */}
                </div>

                <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}} >
                © 2021 Copyright :
                <a className="text-white" href="#home" > Roshan Mishra</a>
                </div>
                
            </footer>
            </div>
            <Button onClick={componentDidMount} className="scoltop mb-5"> ^ </Button>
        </div>
    )
}
export default Footer
