import React from 'react'
import './style/Skills.css'

export const Skills = () => {
    return (
        <div className="container full " id="skills">
            <h1 className="header_name">Skills</h1>
            <div class="row">
                <div class="col-sm pl-5 pt-2">
                    <h4>HTML  90% </h4>
                    <div className="range_box pt-2">
                    <div className="range_fill_html"></div></div><br></br>
                    <br/>

                    <h4>CSS 80% </h4>
                    <div className="range_box pt-2"></div>
                    <div className="range_fill_css"></div><br></br>
                    <br/>

                    <h4>JavaScript  55% </h4>
                    <div className="range_box pt-2"></div>
                    <div className="range_fill_js"></div><br></br>
                    <br/>

                    {/* <h4>React  60% </h4>
                    <div className="range_box pt-2"></div>
                    <div className="range_fill_react"></div><br></br> */}

                </div>
                <div class="col-sm pl-5 pt-2">
                    {/* <h4>MangoDB  30% </h4>
                    <div className="range_box pt-2"></div>
                    <div className="range_fill_mdb"></div><br></br> */}

                    {/* <h4>Php  40% </h4>
                    <div className="range_box" pt-2></div>
                    <div className="range_fill_php"></div><br></br> */}

                    {/* <h4>C  40% </h4>
                    <div className="range_box pt-2"></div>
                    <div className="range_fill_c"></div><br></br> */}

                    <h4>Python  80% </h4>            
                    <div className="range_box pt-2"></div>
                    <div className="range_fill_py"></div><br></br>
                    <br/>

                    <h4>React  60% </h4>
                    <div className="range_box pt-2"></div>
                    <div className="range_fill_react"></div><br></br>

                </div>
            </div>
        </div>
    )
}
