import React from 'react'
import './style/About.css'
import img from'./prof_roshan.jpeg'
import  pdf  from './Download/resume.pdf';

export const About = () => { 
    return (
        <div className="container about" id="about" >
            <h1 className="header">About Me</h1>
            <div className="about_img">
                <img src={img}/>
            </div>
            <div className="about_text">
                <div>
                <button className="btn btn-primary text-center "><a className=" text-white text-decoration-none " href={pdf} target="_blank"> Download Resume </a></button><br></br>
                <br/><h2>Hey there! </h2>
                <h3>I'm Roshan Mishra</h3><br/>
                <p>Love's programming and traveling more intrested in web devlopment and living life is very simple .</p>
                <p>An able, skilled and reliable Computer Engineer seeking a position that reﬂects my technical knowledge and dedication towards work for the growth of the organization. And recently i have started my youtube channel to explore our self and spread some quantity of knowledge to the other pepole's .</p>
                <p> And if you want to get in touch with me feel free to send mail or messages on social media I have provided all the ways to get in touch with me .</p>
                </div>
            </div>
        </div>
    )
}
