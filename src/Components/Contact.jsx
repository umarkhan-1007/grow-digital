import React from 'react'
import "../Style/Contact.scss"
import {GoMail,GoDeviceMobile} from "react-icons/go"


const Contact = () => {
  return (
    <>
    <div className='contact-main-box'>
      <div className="contact-left-box">
        <h1>Get in to tuch</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum animi necessitatibus ratione sunt, et quaerat tempore repellendus culpa! Voluptatibus, ipsum.</p>
        <div>
        <h4>431131 dharur rode majalgoan </h4>
        <h4>Dist-Beed Maharastrar </h4>
        </div>
        <div>
        <h4><GoDeviceMobile /> +91 9975102049</h4>
        <h4><GoMail/> umarkhan71711@gmail.com</h4>
        </div>

      </div>
      <div className="contact-right-box">
        <form>
          <input className='input'  type="text"  placeholder='Enter Full Name'/>
          <input className='input' type="number"  placeholder='enter mobile number'/>
          <input className='input' type="email"  placeholder='enter email address'/>
          <input className='input' type="text"  placeholder='enter subject'/>
          <textarea name="textarea"  placeholder="enter your massage" cols="82" rows="4"></textarea>
          <button>Submit</button>
        </form>
      </div>
    </div>
    </>
  )
}

export default Contact