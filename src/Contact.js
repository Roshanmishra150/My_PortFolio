import React from 'react'
import { useState } from 'react';
import { send } from 'emailjs-com';

export const Contact = () => {
    const [Get,setGet] = useState({
        from_name:"",
        // from_name_Error:"",
        phone_number:"",
        // phone_number_Error:"",
        sender_email:"",
        // sender_email_Error:"",
        message:""
    });


const onSubmit = (e) => {
    e.preventDefault();
    send(
        'service_45f2bsp',
      'template_gegy5ic',
      Get,
      'user_T3rPjsLQ0xEzoduhtvJhq'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert("You have successfully submitted the form")
      })
      .catch((err) => {
        console.log('FAILED...', err);
        alert("You have not Entered any thing ")
      });
  };

  const handleChange = (e) => {
    setGet({ ...Get, [e.target.name]: e.target.value });
  };

    return (
    <>
            <h1 className="text-center  font-weight-bold my-5" id="contact" style={{color:'tomato', textDecorationLine:'overline',paddingTop:'5rem'}}>Contact Me </h1>
            <div className=" container pt-4 ">
                <div className="row">
                    <div className=" col-10 mx-auto col-md-6">
                        <form onSubmit={onSubmit}>
                            <div class="mb-4">
                                <label class="form-label">FullName</label>
                                <input type="text" class="form-control" 
                                autoComplete="off"
                                name="from_name"
                                value={Get.from_name}
                                onChange={handleChange}
                                placeholder="Enter Your FullName"/>
                            </div>
                            {/* {Get.from_name_Error ? <div style={{fontSize:12, color:"red"}}>{Get.from_name_Error}</div>:null} */}
                            
                            <div class="mb-4">
                                <label 
                                class="form-label">phone_number</label>
                                <input type="text" 
                                name="phone_number"
                                autoComplete="off"
                                class="form-control"
                                value={Get.phone_number}
                                onChange={handleChange} 
                                 placeholder="Enter Your phone Number"/>
                            </div>
                            {/* {Get.phone_number_Error ? <div style={{fontSize:12, color:"red"}}>{Get.phone_number_Error}</div>:null} */}
                            
                            <div class="mb-4">
                                <label class="form-label">Email address</label>
                                <input type="email"
                                 class="form-control"
                                 autoComplete="off"
                                 onChange={handleChange}
                                 value={Get.sender_email}
                                 name="sender_email"
                                 placeholder="name@example.com"/>
                            </div>
                            {/* {Get.sender_email_Error ? <div style={{fontSize:12, color:"red"}}>{Get.sender_email_Error}</div>:null} */}
                            
                            <div class="mb-5">
                                <label autoComplete="off" class="form-label">Suggestion / Message</label>
                                <textarea 
                                class="form-control"
                                onChange={handleChange}
                                value={Get.message}
                                name="message" 
                                placeholder='Like Awesome projects and website ....'
                                rows="3"></textarea>
                            </div>
                            <div class="col-12">
                                <button class="btn btn-primary"
                                type="submit" >Submit form</button>
                            </div><br/>
                        </form>
                    </div>
                </div>
            </div>    
        </>
    )
}
