import React, { useRef , useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faHtml5, faCss3, faJs} from '@fortawesome/free-brands-svg-icons'
import CustomHook from './CustomHook'

const Skills = () => {
  const [listSkills] = useState([
    {
      name: 'HTML',
      des: "HTML was confusing for me in high school, and I didn't think about coding at all. But thanks to FreeCodeCamp, I learned the basics and even got a certificate in HTML.",
    },
    {
      name: 'CSS',
      des: "At first, I didn't know anything about CSS, but now I'm into it! I learned it from FreeCodeCamp and YouTube because I wanted to make cool websites, so I did some digging and figured it out.",
    },
    {
      name: 'JavaScript',
      des: 
      "JavaScript was hard to understand at first, but I knew it was important. I used it to add interactive features to my site and handle APIs, making things more dynamic and engaging.",
      
    },
    {
      name: 'React',
      des: 
      "React was my introduction to using libraries, and it was a wild ride! I created lots of new apps because I wanted to be my own teacher. From where I'm standing, React was a big step forward in my learning journey. It taught me how to manage websites and focus on one thing at a time to improve them.",
    },
    {
      name:'TypeScript',
      des: 
      "TypeScript is my newest coding interest. Even though I've only used it once, I'm already into it! It's a strong tool for enhancing JavaScript with strong typing, and I'm eager to explore it more. It feels like discovering a whole new way of writing code, and I'm excited to see where it takes me.",
    },
    {
      name: 'TailwindCSS',
      des: 
      "Tailwind CSS is one of my go to's for web design. It's a great toolbox that makes building modern websites easy. With Tailwind, I can create layouts and styles easily by adding pre-built classes directly into my HTML.",
    },
    {
      name: 'GSAP',
      des: 
      "GSAP is my secret for web animation. It brings websites to life with motion effects. With GSAP, I create animations that capture users' attention, adding that extra touch to web design and making experiences memorable.",
    },
    {
      name: 'Next.js',
      des: 
      "Next.js was my next step after React, and it was amazing! It's like a more powerful version of React, with server-side rendering and other cool features built-in. Exploring Next.js was a game-changer for me, taking my web projects to new levels easily."
    },
    {
      name:'Git',
      des:
      "Git is my coding safety net. It tracks changes, simplifies collaboration, and gives me confidence knowing I can revert if needed. It's essential for staying organized and collaborating effectively on my coding journey."
    }
    
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
