import React, { Fragment } from "react";
import "../Style/Home.scss";
import svg from "../Assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillYoutube,
  AiFillInstagram,
  AiOutlineAmazon,
  AiFillApple,
  AiFillGithub,
} from "react-icons/ai";
import hero from "../assets/hero.jpg";

const Home = () => {
  return (
    <Fragment>
      <div className="home" id="home">
        {/* <div className="cursor"></div> */}
        <main>
          {/* left side */}
          <div className="l-side">
            <div className="title-con">
              <h1>Digital</h1>
              <h2>marketing</h2>
            </div>
            <p>
              Your digital marketing expert Connecting audiences Enjoy the
              business world with us We make your dreams happen Help us to help
              you All you need is a digital push Let the take the advertising
              stuff Inspiring ideas like never before Building the potential
              Ideas that matter Ignite Your Online Presence Digital Marketing
              Redefined Click, Connect, Convert Unleash Digital Success
              Navigating Tomorrow's Markets, Today Digital Domination Pixels to
              Profits Crafting Digital Marketing Excellence Unlocking Growth in
              Bits and Bytes Your Digital Partner
            </p>
            <button>learn more</button>
          </div>
          {/* right side */}
          <div className="r-side">
            <div className="image-con">
              <img src={hero} alt="" width={800} />
            </div>
          </div>
        </main>
      </div>
      <div className="home2">
        <div>
          <img src={svg} alt="vectorGraphic" />
          <p>
            Digital marketing is a powerful tool that can help grow your
            business Digital marketing encompasses a wide range of strategies
            and channels aimed at promoting businesses, products, or services in
            the digital space. Search Engine Optimization (SEO) focuses on
            optimizing a website's visibility on search engine results pages,
            driving organic traffic. Content marketing involves creating
            valuable and relevant content to engage and attract a specific
            audience. Social media marketing leverages platforms like Facebook,
            Instagram, Twitter, and LinkedIn to connect with and influence
            potential customers. Pay-Per-Click (PPC) advertising allows
            businesses to place targeted ads on search engines or social media,
            paying only when a user clicks on the ad. Email marketing involves
            sending tailored messages to a list of subscribers, nurturing leads
            and retaining customers. Influencer marketing partners with
            influential individuals in a specific niche to promote products or
            services. Video marketing utilizes the power of video content on
            platforms like YouTube, TikTok, and social media stories.
            Additionally, mobile marketing targets users on their mobile
            devices, recognizing the importance of this platform. These
            strategies work in tandem, each offering unique advantages to create
            a comprehensive digital marketing approach.
          </p>
        </div>
      </div>
      <div className="home3" id="about">
        <div className="box">
          <div className="contain">
            <h1>Who we Are?</h1>
            <h2>*umar khan*</h2>
            <p>
              {" "}
              to perfect content marketing and web devlepment for digital
              marketing Content marketing and web development are two pillars of
              a successful digital marketing strategy. Content marketing
              involves creating valuable, relevant content that resonates with
              your target audience. This content not only informs and engages,
              but also establishes your authority in your industry. A
              well-structured website is crucial for effective content delivery.
              Web development ensures that your site is not only visually
              appealing, but also user-friendly and optimized for search
              engines. A seamless user experience, fast load times, and mobile
              responsiveness are key factors. By integrating compelling content
              with a well-designed website, you create a powerful digital
              marketing platform that captures and retains the attention of your
              audience, ultimately driving conversions and business growth
            </p>
          </div>
        </div>
      </div>
      <div className="home4" id="brand">
        <div className="box">
          <h1>Brands</h1>
          <article>
            <div className="google">
              <a href="http://www.google.com" target="_blank">
                <AiFillGoogleCircle />
                <p>google</p>
              </a>
            </div>
            <div className="youtube">
              <a href="http://www.youtube.com" target="_blank">
                <AiFillYoutube />
                <p>Youtube</p>
              </a>
            </div>
            <div className="instagram">
              <a href="http://www.instagram.com" target="_blank">
                <AiFillInstagram />
                <p>instagram</p>
              </a>
            </div>
            <div className="amazon">
              <a href="http://www.amazon.com" target="_blank">
                <AiOutlineAmazon />
                <p>amazon</p>
              </a>
            </div>
            <div className="github">
              <a
                href="http://https://github.com/umarkhan-1007.com"
                target="blank"
              >
                <AiFillGithub />
                <p>GitHub</p>
              </a>
            </div>
          </article>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
