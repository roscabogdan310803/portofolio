import React, {useRef, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPersonCircleQuestion, faEarthAmericas } from '@fortawesome/free-solid-svg-icons'
import CustomHook from './CustomHook'

const Projects = () => {
  const [listProjects] = useState([
    {
      name: 'Sliding Log in/Sign Up',
      des:'This project was one of my first dives into CSS animations and getting the hang of HTML basics.',
      live: 'https://roscabogdan310803.github.io/animated-login/',
      language:'HTML, CSS',
      images:'/loginanimated.png',
      git:'https://github.com/roscabogdan310803/animated-login',
    },
    {
      name: 'sHoop',
      des:'In this project, I just wanted to see how my design skills held up and whether the site would look good on mobile. I kind of went with the flow, let my imagination run wild, and freestyled the page.',
      live: 'https://roscabogdan310803.github.io/shoop/',
      language:'HTML, CSS',
      images:'/shoop.png',
      git:'https://github.com/roscabogdan310803/shoop',
    },
    {
      name: 'QR CODE Generator',
      des:'So, this project was basically my first big leap into web development. I was playing around with creating a QR code generator, you know, those funky little square codes? Anyway, I tinkered a lot with HTML and CSS to make everything look just right, but it was JavaScript that really brought it to life. I learned a ton about how JavaScript can make things happen on a webpage, like generating those QR codes on the fly. Overall, it was a fun and eye-opening experience that got me hooked on web development.',
      live: 'https://roscabogdan310803.github.io/qr-generator/',
      language:'JAVASCRIPT',
      images:'/qrcode.png',
      git:'https://github.com/roscabogdan310803/qr-generator',
    },
    {
      name: 'Ai Image Generator',
      des:'So, I dove into web dev and got my hands dirty with JavaScript and APIs to whip up an AI image generator. With JavaScript wizardry, I hooked into APIs securely, letting users churn out AI-powered images. It was a blast learning to juggle async requests and tame API responses. This journey totally leveled up my JavaScript skills and gave me a solid grasp of how to make cool stuff happen on the web.',
      language:'JAVASCRIPT, API',
      live: 'https://ai-gen-rb.netlify.app/',
      images:'/ai-generator.png',
      git:'https://github.com/roscabogdan310803/ai-image-generator',
    },
    {
      name: 'iPhone 15 Showcase',
      des:'Crafting a website inspired by the iconic design, I employed THREE.js to construct an interactive 3D rendering, allowing users to explore the iPhone 15 in real-time. GSAP was used to infuse the site with dynamic animations, enhancing the user experience. Additionally, Tailwind CSS facilitated a streamlined design process, ensuring a polished and responsive layout that mirrors the sleek aesthetic of the brand.',
      live: 'https://iphone-mockup-rnb.netlify.app/',
      language:'React, TailwindCSS, THREE.js, GSAP',
      images:'/iphone.png',
      git:'https://github.com/roscabogdan310803/shoop',
    },
    {
      name: 'sHoopV2',
      des:'For this project, I wanted to level up and use Next.js to create a more dynamic website with multiple pages. My aim was to recreate a real-life commercial store experience. To achieve this, I integrated Sanity for handling real-time updates of products and tapped into the Stripe API for adding a payment method, making the site feel authentic. Additionally, I sprinkled in some animations using GSAP to add an extra touch of flair to the user experience.',
      live: 'https://s-hoop-v2.vercel.app/',
      language:'Next.Js, Stripe, Sanity, GSAP',
      images:'/sHoopV2.png',
      git:'https://github.com/roscabogdan310803/sHoopV2',
    },
  ]);
  const refTab = useRef();
  const refDivs = useRef([]);
  CustomHook(refTab, refDivs);
  return (
    <section className="projects" ref={refTab}>
      <div className="title" ref={(el) => el && refDivs.current.push(el)}>
        Some projects that i did
      </div>
      <div className="des" ref={(el) => el && refDivs.current.push(el)}>
        
      </div>
      <div className="list">
        {
          listProjects.map((value, key) => (
            <div className='item' key={key} ref={(el) => el && refDivs.current.push(el)}>
              <div className="images">
                <img src={value.images} alt="" />
              </div>
              <div className="content" ref={(el) => el && refDivs.current.push(el)}>
                <h3>{value.name}</h3>
                <div className="des">{value.des}</div>
                <div className="mission">
                    <div><FontAwesomeIcon icon={faPersonCircleQuestion} /></div>
                    <div>
                        <h4>Project</h4>
                        <div className='btn'>
                          <a class="bn31" href={value.live} target='_blank'><span class="bn31span">Live Demo</span></a>
                          {value.git !== '' && (
                          <a href={value.git} target='_blank' className="bn3637 bn38">Code</a>
                          )} 
                        </div>
                    </div>
                </div>
                <div className="mission">
                    <div><FontAwesomeIcon icon={faEarthAmericas} /></div>
                    <div>
                        <h4>Libraries and Frameworks</h4>
                        <div className="des">{value.language}</div>
                    </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Projects
