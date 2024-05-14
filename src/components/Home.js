import React, {useRef} from 'react'
import CustomHook from './CustomHook'

const Home = () => {
  const refTab =useRef()
  CustomHook(refTab)
  return (
    <section className='home' ref={refTab}>
      <div className='content'>
        <div className='name'>
          MY NAME IS <span>Bogdan</span>
        </div>
          <div className='des'>
          <big>I am a self-taught </big><small>web developer, this passion started when I was in my 2nd year in university because of boredom.</small><br />
          <br />
          <big>Started</big> my journey in the world of web-development with the basics of HTML and CSS where i had a lot of fun seeing how i can create something from scratch and then dove a little deeper and saw how that thing I made was able to do something with the use of JavaScript, those things made me more curios and determined me to purse the path of web development.
          </div>
          <a href="CV Rosca Nicoale-Bogdan.pdf" target='_blank'>
          <button class="animated-button">
            <svg viewBox="0 0 24 24" class="arr-2" xmlns="http://www.w3.org/2000/svg">
              <path
              d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
              ></path>
            </svg>
            <span class="text">Here's my CV</span>
            <span class="circle"></span>
            <svg viewBox="0 0 24 24" class="arr-1" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
              ></path>
            </svg>
          </button>
          </a>
      </div>  
      <div className='avatar'>
        <div className="card">
          <img src="/lifteu.jpg" alt="" />
          <div className="info">
            <div>Web Developer</div>
            <div>Romania</div>
            <div>Tech</div>
            <div>Passion</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
