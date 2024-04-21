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
        <a href='#' target='_blank' rel='noopener noreferrer'>Here you can find my CV</a>
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
