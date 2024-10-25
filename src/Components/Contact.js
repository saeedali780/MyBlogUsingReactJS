import React from "react";
import { useState } from "react";
import EmailJS from "@emailjs/browser";

export default function Contact() {

    const [name,setName] = useState('');
    const [email, setEmail] = useState('');
    const [number,setNumber] = useState('');
    const [message,setMessage] = useState('');

const emailSubmitHanldler = (e)=>{
    e.preventDefault();
    // Your EmailJS service ID, templete ID , and Public Key

    const serviceId = "service_ba95cxy";
    const templeteId = "template_1b618q9";
    const publicKey = "vwh6QuICzJbDZjhTz";

    //Create a new Object that contains dynamic template

    const templateParams = {
        from_name: name,
        from_email: email,
        from_number: number,
        to_name: "Saeed Ali",
        message: message,
    };

    //Send Email using EmailJs

    EmailJS.send(serviceId, templeteId, templateParams, publicKey)
    .then((response)=>{
        if (response.status == 200) {
            document.getElementById("status").innerHTML = "Your Email sent Successfully!"
        }else{
             document.getElementById("status").innerHTML = "Error Occured Could not sent Email !"
        }
        console.log("Email sent to Successfully",response);
        setName('');
        setEmail('');
        setNumber('');
        setMessage('');
        
    })
    .catch((error)=>{
        console.log("Error sending Email",error);
        
    })



}

  return (  
    <div>
      {/* <!-- Main Content --> */}
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
            <p>
              Want to get in touch with me? Fill out the form below to send me a
              message and I will try to get back to you within 24 hours!
            </p>
            <p id="status" className="text-center text-success" ></p>
            {/* <!-- Contact Form - Enter your email address on line 19 of the mail/contact_me.php file to make this form work. -->
                <!-- WARNING: Some web hosts do not allow emails to be sent through forms to common mail hosts like Gmail or Yahoo. It's recommended that you use a private domain email address! -->
                <!-- NOTE: To use the contact form, your site must be on a live web host with PHP! The form will not work locally! --> */}
            <form name="sentMessage" id="contactForm" onSubmit={emailSubmitHanldler} noValidate>
              <div className="row control-group">
                <div className="form-group col-xs-12 floating-label-form-group controls">
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    id="name"
                    required
                    value={name}
                    data-validation-required-message="Please enter your name."
                    onChange={(e)=> setName(e.target.value)}
                  />
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="row control-group">
                <div className="form-group col-xs-12 floating-label-form-group controls">
                  <label>Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email Address"
                    id="email"
                    value={email}
                    required
                    data-validation-required-message="Please enter your email address."

                    onChange={(e)=> setEmail(e.target.value)}
                  />
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="row control-group">
                <div className="form-group col-xs-12 floating-label-form-group controls">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Phone Number"
                    value={number}
                    
                    id="phone"
                    required
                    data-validation-required-message="Please enter your phone number."
                    onChange={(e)=> setNumber(e.target.value)}
                  />
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="row control-group">
                <div className="form-group col-xs-12 floating-label-form-group controls">
                  <label>Message</label>
                  <textarea
                    rows="5"
                    className="form-control"
                    placeholder="Message"
                    id="message"
                    required
                    value={message}
                    data-validation-required-message="Please enter a message."
                    onChange={(e)=> setMessage(e.target.value)}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <br />
              <div id="success"></div>
              <div className="row">
                <div className="form-group col-xs-12">
                  <button type="submit" className="btn btn-default">
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <hr />
    </div>
  );
}
