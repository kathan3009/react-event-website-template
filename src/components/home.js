import React from 'react';
import '../css/main.css';
import Logo from '../images/X.png'
import Intro from '../images/intro.svg'
const Home = () => {

    return (
        <div>
            <section>
            <div className="home-top">
                <img src={Logo} className="logo" />
                <h3>Choose Nirvana</h3>
                <h4>Coming Soon!!!</h4>
                <button className="top-button">Home</button>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="secImage"><path fill="#f8fafc" fill-opacity="1" d="M0,64L24,101.3C48,139,96,213,144,245.3C192,277,240,267,288,240C336,213,384,171,432,176C480,181,528,235,576,245.3C624,256,672,224,720,192C768,160,816,128,864,122.7C912,117,960,139,1008,144C1056,149,1104,139,1152,160C1200,181,1248,235,1296,229.3C1344,224,1392,160,1416,128L1440,96L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path></svg>
            </div>
            </section>
           <section className="grey"> 
           <div className="container">
                    <h1 className="heading">What is X ?</h1>
                    <div className="introText"> 
                          <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                              Augue ut lectus arcu bibendum at varius vel. 
                              Egetest lorem ipsum dolor sit amet consectetur. 
                              Ac placerat vestibulum lectus mauris.
                              Feugiat pretium nibh ipsum consequat nisl vel pretium lectus quam. 
                          </p>
                    </div>
                     
                </div>
           </section>
               
        </div>
    )
}
export default Home