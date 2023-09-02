import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
  return (
    <div className='footer-div'>
      <div className='foot'>

        <div>
          <p>About Us</p>
          <ul>
            <li>Cut Edge</li>
            <li>Easy Remove</li>
            <li>Try Now</li>
          </ul>
        </div>

        <div>
          <p>Contact</p>
          <ul>
            <li>test@123.com</li>
            <li>Phone:123-456-789</li>
            <li>Address:123 St,City,State,Zip</li>
          </ul>
        </div>

        <div>
          <p>Links</p>
          <ul>
            <li>How to Use</li>
            <li>Demo</li>
            <li>Get Started</li>
          </ul>
        </div>

        <div>
          <p>Follow Us</p>
          <div>
            <FontAwesomeIcon className="logos" icon={faFacebook} />
            <FontAwesomeIcon className="logos" icon={faTwitter} />
            <FontAwesomeIcon className="logos" icon={faLinkedin} />
            <FontAwesomeIcon className="logos" icon={faInstagram} />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Footer