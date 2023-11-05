import React from 'react'
import {AiFillFacebook,AiFillTwitterCircle,AiFillInstagram, AiFillYoutube } from "react-icons/ai"
import "../Style/Footer.scss"

const Footer = () => {
  return (
    <footer>

    <div className='footer'>
      <div className="left-f">
        <h1>usefull-link</h1>
        <div className="info">
        <a href="/#about">about</a>
        <a href="/Contact">contact</a>
        <a href="/#brand">brandd</a>
        <a href="">qury</a>
        </div>
        {/* <p>all <AiOutlineCopyrightCircle/>copyRight reseve fyin-teach</p> */}
      </div>
      <div className="left-m">
        <h1>new Rasister</h1>
        <label htmlFor="input"></label>
        <input type="text" id='input' placeholder='Enter Your Email/ID'  />
        <button>Subscribe Now</button>
        </div>
      <div className="left-r">
        <h1>Contact</h1>
        <p>majalgoan maharastara. dist - beed 431131</p>
        <div className="icon">
          <AiFillFacebook/>
          <AiFillTwitterCircle/>
          <AiFillInstagram/>
          <AiFillYoutube/>
        </div>
      </div>
    </div>
    </footer>
  )
}

export default Footer