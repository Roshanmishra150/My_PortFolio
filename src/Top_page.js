import React from "react"
import './style/Top_page.css'
import Particles from "react-particles-js"

const Top_page = () => {
    return (
        <div className="sizess" id="home">
            <Particles className="particle" 
            params={{
                "particles": {
                    "number": {
                        "value": 50
                    },
                    "size": {
                        "value": 6
                    }
                },
                "interactivity": {
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "repulse"
                        }
                    }
                }
            }}/>
            
            <div className=" container  " >
                <div className="mt-5 content_text">
                    ROSHAN MISHRA
                </div>
                <div className="content_text2">
                    As a .<span className=" animate_knowledge">  </span>
                </div>
            </div>
        </div>
    )
}
export default Top_page
