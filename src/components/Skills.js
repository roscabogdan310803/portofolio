import React, { useRef , useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faHtml5, faCss3, faJs} from '@fortawesome/free-brands-svg-icons'
import CustomHook from './CustomHook'

const Skills = () => {
  const [listSkills] = useState([
    {
      name: 'HTML',
      des: "HTML was a head-scratcher back in high school, and coding wasn't something I thought about. But thanks to FreeCodeCamp, I got the basics down and even earned a certificate in HTML.",
    },
    {
      name: 'CSS',
      des: 'I had no clue about CSS before, but now I am all about it! I learned it from FreeCodeCamp and YouTube, fueled by my curiosity to make cool websites. So, I did some digging and figured it out.',
    },
    {
      name: 'JavaScript',
      des: 
      "JavaScript was a challenge to grasp at first, but it was too crucial to overlook. I dove into JavaScript to jazz up my site with interactive features and to handle APIs, making things more dynamic and engaging.",
      
    },
    {
      name: 'React',
      des: 
      "React was my first dive into using libraries, and wow, it was a wild ride! I churned out loads of new apps, purely because I wanted to be my own teacher. From my perspective, React was a major milestone in my learning journey, teaching me how to manage websites and focus on one thing at a time to revamp them.",
    },
    {
      name: 'TailwindCSS',
      des: 
      "Tailwind CSS is my go-to for web design magic. It's a supercharged toolbox that makes building sleek, modern websites a breeze. With Tailwind, I can create stunning layouts and styles effortlessly by adding pre-built classes directly into my HTML.",
    },
    {
      name: 'GSAP',
      des: 
      "GSAP is my secret weapon for web animation. It's a powerhouse tool that brings websites to life with stunning motion effects. With GSAP, I create eye-catching animations that captivate users, adding that extra spark to web design and making experiences unforgettable.",
    },
    {
      name: 'Next.js',
      des: 
      "Next.js was my next step after React, and it blew my mind! It's React but supercharged, with server-side rendering and other cool features built-in. Exploring Next.js was a game-changer for me, taking my web projects to new heights effortlessly. It felt like a natural progression, empowering me to build faster, more dynamic sites with confidence."
    },
    {
      name:'Git',
      des:
      "Git is my coding safety net. It tracks changes, simplifies collaboration, and gives me confidence knowing I can revert if needed. It's essential for staying organized and collaborating effectively on my coding journey."
    },
    {
      name:'THREE.js',
      des: 
      "Three.js is my latest coding fascination. Though I've only tried it once, I'm already hooked! It's a robust tool for crafting stunning 3D graphics in the browser, and I'm eager to explore it further. It feels like uncovering a whole new realm of creativity, and I'm excited to see where it leads me.",
    },
    
  ]);
  const refTab = useRef();
  const refDivs = useRef([]);
  CustomHook(refTab, refDivs);
  return (
    <section className="skills" ref={refTab}>
      <div className="title" ref={(el) => el && refDivs.current.push(el)}>
       Skills
      </div>
      <div className="des" ref={(el) => el && refDivs.current.push(el)}>
        Through out my journey I learned from various sources like freecodecamp, Youtube, GitHub and some books like JavaScript and JQuery by Jon Duckett
      </div>
      <div className="list">
        {
          listSkills.map((value, key) => (
            <div key={key} className="item" ref={(el) => el && refDivs.current.push(el)}>
              <h3>{value.name}</h3>
              <div className="des">{value.des}</div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Skills
