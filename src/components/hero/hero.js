import joile from './joile.jpg'
import './hero.css'
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
                <button class="btn bg-dark text-light">Contact Me</button>
                <button class="btn bg-dark text-light ms-5">Download Resume</button>
            </div>
        </div>
        
        </div>
        </>
    )
}

export default Hero;