import React from 'react'
import { Cards } from './Cards'
import './style/Project.css'
import amazon from './img/amazon.png'
import facereco from './img/facereco.jpg'
import lrp2 from './img/lrp2.png'
import chatbot from './img/chabot.png'
import cal from './img/cal.png'
import Typing from './img/Typing.png'
import to_do from './img/to_do.png'
import crime from './img/crime.png'

export const Project = () => {
    return (
        <div id="project" className=" container ">
            <h1 className="text-center project  "> Projects </h1>
            <div className="ml-3">
                <h4 className="text-center text-success pb-4 ">Some of my highlighted projects are </h4>
                <div className="row">
                    <div className="col-10 col-md-12  ">
                        <div className="row " >
                            {/* <Cards name="Amazon-Clone" git_link="https://github.com/Roshanmishra150/Amazon_clone_RM.git" git_link2="https://roshanmishra-amazon-clone.netlify.app" img={amazon} about="React.js , MangoDB , Node.js , Firebase " para="For making this i get to know about Firebase Strip and other things that is new to me and leran many things new "/> */}
                            {/* <Cards name="Major_Crime_Prediction" git_link="https://github.com/Roshanmishra150/Major_Crime_Prediction_With_GUI.git" img={crime} about=" Python , sklearn , pandas , numpy " para=" Actually this is my sem 6 project in this we are 4 members all have contributed equally to make this project" /> */}
                            <Cards name="Typing_speed_checker" git_link="https://github.com/Roshanmishra150/Typing_speed_checker.git" img={Typing} about="Python , tkinter " para=" This is made uing python and tkinter for GUI This project will give you in homuch time you time the given word" />
                            <Cards name="face_recognization" git_link="https://github.com/Roshanmishra150/face_recognization.git" img={facereco} about="Python , OpenCV  " para=" This is not my face .this is just to show home my project is working This is made using python and opencv to use camera  "/>
                            <Cards name="Simple_Login_Registration_form" git_link="https://github.com/Roshanmishra150/wdl-projects.git" img={lrp2} about="Html , css , php" para="This is my sem 5 project in this we have 3 member and we made login and registration form " />
                            {/* <Cards name="Chatbot" git_link="https://github.com/Roshanmishra150/ChatApp_RM.git" img={chatbot} about="Node.js , socket.io , css " para=" I made this to get how the socket.io work and while making this i get to know what are the other things used for chatbot " /> */}
                            <Cards name="Python_calculator" git_link="https://github.com/Roshanmishra150/Python_calculator.git" img={cal} about=" Python (tkinter) " para=" This is very simple Calculator using python at the starting of my python journey i have made this ."/>
                            <Cards name="Python_To_do_List_App" git_link="https://github.com/Roshanmishra150/To_do_List_App" img={to_do} about=" Python (tkinter) " para=" This is very simple To_do_app using python . It will add the iteam in the list and delete that iteam and also hole list can be deleted at one click only ."/>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
    )
}
