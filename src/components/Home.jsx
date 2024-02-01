import React from 'react';
import vg from '../assets/img2.jpg';
import {AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram} from "react-icons/ai";

const Home = () => {
  return (
    <>
    <div className='home' id='home'>
    <main>
        <h1>TechStar</h1>
        <p>Solution to all your problems</p>
    </main>
    </div>
    <div className="home2">
        <img src={vg} alt='Graphics' />
        <div>
          <p>
            We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
    </div>
    <div className="home3" id='about'>
      <div>
        <h1>Who We Are?</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis libero doloremque voluptatibus esse beatae in consectetur architecto expedita ipsum dicta iusto asperiores eaque facilis laudantium molestiae perspiciatis voluptatum animi necessitatibus explicabo eligendi adipisci, nisi sit numquam ducimus. Quia minus voluptatibus magnam quasi nobis quas dolore?</p>
      </div>
    </div>
    <div className="home4" id='brands'>
      <div>
        <h1>Brands</h1>
        <article>
        <div style={{animationDelay: "0.3s"}}>
          <AiFillGoogleCircle/>
          <p>Google</p>
        </div>
        <div style={{animationDelay: "0.5s"}}>
          <AiFillAmazonCircle/>
          <p>Amazon </p>
        </div>
        <div style={{animationDelay: "0.7s"}}>
          <AiFillYoutube/>
          <p>Youtube</p>
        </div>
        <div style={{animationDelay: "0.1s"}}>
          <AiFillInstagram/>
          <p>Instagram </p>
        </div>
        </article>
      </div>
    </div>
    </>
  )
}

export default Home