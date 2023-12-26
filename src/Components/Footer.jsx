import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div style={{ height: '300px' }} className='container w-100'>
      <div className="footer-content d-flex justify-content-between">
        <div className="title w-25">
          <h5> <i class="fa-solid fa-cloud-arrow-up  me-2"></i>
            Media Player</h5>
          <span>
            Designed and build with all the love in the world by the Bootstrap team with the help of our contributors

          </span><br />
          <span>Code licensed MIT, docs CC BY 3.0</span><br />
          <span>Currently v5.3.2</span><br />
        </div>
        <div className="links d-flex flex-column">
          <h5>Links</h5>
          <a style={{ color: 'white' }} className='text-decoration-none' >
           <Link to={'/'} style={{textDecoration:'none',color:'white'}}> Landing Page</Link>
            </a>
          <a style={{ color: 'white' }} className='text-decoration-none' >
           <Link to={'/home'}style={{textDecoration:'none',color:'white'}}> Home</Link>
            </a>
          <a style={{ color: 'white' }} className='text-decoration-none' >
            <Link to={'/history'}style={{textDecoration:'none',color:'white'}}>Watch History</Link>
            </a>
        </div>
        <div className="guides d-flex flex-column">
          <h5>Guides</h5>
          <a style={{ color: 'white' }} className='text-decoration-none' href="">React</a>
          <a style={{ color: 'white' }} className='text-decoration-none' href="">React Bootstrap</a>
          <a style={{ color: 'white' }} className='text-decoration-none' href="">React Routing</a>

        </div>
        <div className="contact d-flex flex-column">
          <h5>Contact Us</h5>
          <div className='d-flex'>
            <input className='form-control' placeholder='Enter your mail' style={{ height: '40px', }} type="text" />
            <button className='btn btn-info ms-2'>
              <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
          <div style={{ color: 'white', height: '50px' }} className='icons mt-3 d-flex justify-content-between'>
            <i class="fa-solid fa-envelope fa-2x"></i>
            <i class="fa-brands fa-twitter fa-2x"></i>
            <i class="fa-brands fa-github fa-2x"></i>
            <i class="fa-brands fa-facebook fa-2x"></i>
            <i class="fa-brands fa-instagram fa-2x"></i>
            <i class="fa-brands fa-linkedin fa-2x"></i>

          </div>

        </div>

      </div>

      <p className='text-center mt-4'>Copyright &copy;2023 Media Player . Build with React.</p>
    </div>

  )
}

export default Footer