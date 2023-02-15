import React from 'react'
import "../csscomponent/Herosection.css"
const HeroSection = () => {
  return (
    <div className='site-banner banner-images'>
      <div className='container homecontainer'>
        <div className='row'>
          <div className='col-lg-6 col-sm-12 homecol'>
            <h1>Best Puja Experience with  Verified and  Experienced Pandits</h1>
            <p>Smartpuja is one-stop solution for puja,Homa,Astrology...</p>
            <button>Instabook</button>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <div className='formContainer'>
              <p>Book the Best Pandits for your Puja or Homas in Bangalore</p>
              <form className="formcl">
                <input className="form-control " type="search" placeholder="Location" aria-label="Search" />
                <input className="form-control " type="search" placeholder="Enter a Puja or Homa Name" aria-label="Search" />
                <button className="" type="submit">Book a Service</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection