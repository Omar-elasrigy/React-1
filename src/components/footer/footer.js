
import './footer.css'
import github from'./github.png'
import facebook from './facebook.png'
import linkedin from './linkedin.webp'
function Footer() {
    return (
        <>
        <div className='row footer bg-dark mt-1' id="footer">
            <div className='col h-100 d-flex flex-column '>
                <h4 className='text-light text-center mt-2'>Get In Touch</h4>
                <p className='text-center fw-light'> <a href="mailto:omarelasrigy01@gmail.com" class="text-white" >Email: omarelasrigy01@gmail.com</a></p>
                <p className='text-light text-center fw-light'>Phone Number:01017861950</p>
            </div>
            <div className='col h-100 d-flex justify-content-center align-items-center'>
                <button className='btn btn-dark px-5 py-2 border'>Contact Me</button>
            </div>
            <div className='col h-100 d-flex justify-content-center align-items-center links'>
                <a href='https://github.com/'> <img src={github}></img></a>
                <a href='https://facebook.com/'> <img src={facebook}></img></a>
                <a href='https://linkedin.com/'> <img src={linkedin}></img></a>
            </div>
        </div>
        </>
    )
}
export default Footer;