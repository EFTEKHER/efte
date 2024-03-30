import React,{useRef} from 'react'
import "../styles/home.scss"
import {motion,animate} from "framer-motion"
import Typewriter from "typewriter-effect"
import {BsArrowUpRight,BsChevronBarDown} from "react-icons/bs"
import me from "../assets/logo.png"
import "../styles/mediaquery.scss";
const Home = () => {
    const clientCount=useRef(null);
    const projectCount = useRef(null);
    const animationClientsCount=()=>{
        animate(0,100,{
            duration:1,
            onUpdate:(v)=>(clientCount.current.textContent=v.toFixed()),

        })
    }
    const animationProjectsCount=()=>{
        animate(0,500,{
            duration:1,
            onUpdate:(v)=>(projectCount.current.textContent=v.toFixed()),

        })
    }
   
    const animation={
        h1:{
            initial:{
                x:"-100%",
                opacity:0,
            },
         whileInView:{
            x:0,
            opacity:1,
         }   
        },
       button:{
        initial:{
            y:"-100%",
            opacity:0,
        },
     whileInView:{
        y:0,
        opacity:1,
     }   
    }, 
    }
  return (
    <div id='home'>
      <section>
     <div>
     <motion.h1 {...animation.h1}
     >
     Hi, I Am <br />
     Eftekher Ali Efte
     </motion.h1>
     <Typewriter options={{
        strings:["A FullStack Developer","A Flutter Developer"," A Machine Learning Expert","A Software Engineer","A Python Developer"," A Teacher"],
        autoStart:true,
        loop:true,
        cursor:"",
        wrapperClassName:"typewriterpara"
     }}/>
     <div>
     <a href="mailto:eftekherali2000@gmail.com">Hire Me</a>
     <a href="#work">Projects
     <BsArrowUpRight/>
     </a> 
     </div>

     <article>
     <p>
     +<motion.span ref={clientCount} whileInView={animationClientsCount}></motion.span>

     </p>
     <span>Clients Worldwide</span>

     </article>
     <aside>
     <article>
     <p>
     +<motion.span ref={projectCount} whileInView={animationProjectsCount}></motion.span>

     </p>
     <span>Projects Made</span>

     </article>

     <article data-special>
     <p>
     Contact
     </p>
     <span>Official eftekherali2000@gmail.com</span>

     </article>
     </aside>

          </div>
      </section>

      <section>
      <img src={me} alt="Efte" />
      </section>
<BsChevronBarDown/>
    </div>
  )
}

export default Home
