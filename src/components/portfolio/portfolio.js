
import './portfolio.css'
function Portfolio() {
    return (
        <>
        <h1 className='fw-bold mb-5 mt-3'>Portfolio</h1>
        <div className='row box'>
            <div className='col bg-secondary d-flex flex-column align-items-center justify-content-center customShadow '>
                <p className='text-center '>Web Design</p>
                <hr></hr>

            </div>
            
            <div className='col bg-dark bg-opacity-50 d-flex flex-column align-items-center justify-content-center customShadow'>
                <p className='text-center text-black'>Mobile Design</p>
                <hr></hr>

            </div>

            <div className='col bg-secondary d-flex flex-column align-items-center justify-content-center customShadow'>
                <p className='text-center text-black'>Logo Design</p>
                <hr></hr>

            </div>

        </div>

        <div className='row box mt-5 '>
            <div className='col bg-secondary d-flex flex-column align-items-center justify-content-center customShadow'>
                <p className='text-center '>Web Application Development</p>
                <hr></hr>

            </div>
            
            <div className='col bg-dark bg-opacity-50 d-flex flex-column align-items-center justify-content-center customShadow '>
                <p className='text-center text-black'>Mobile Application Development</p>
                <hr></hr>

            </div>

            <div className='col bg-secondary d-flex flex-column align-items-center justify-content-center customShadow '>
                <p className='text-center text-black'>PWA  Development</p>
                <hr></hr>

            </div>

        </div>
        </>
    )
}
export default Portfolio;