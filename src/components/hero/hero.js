import joile from './joile2.jpg'
import './hero.css'
import cv from './efada.PNG'
function Hero() {
    return (
        <>
        <div class="">
            <img id="back" src={joile}/>
        <div class=" headerBackground h-100   ">
         
            <h1 class="text-light d" >Omar Elasrigy
            </h1>
            <h2 class="text-light" >Web Developer</h2>
            <div>
                <button class="btn bg-dark text-light"> <a href="#footer" className='text-light'>Contact Me </a></button>
                <button class="btn bg-dark text-light ms-5"><a href={cv} className='text-light' download>Download Resume</a></button>
                
            </div>
        </div>
        
        </div>
        </>
    )
}

export default Hero;