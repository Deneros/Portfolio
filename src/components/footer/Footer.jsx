import React from 'react';
import './footer.css';
import {BsFacebook} from 'react-icons/bs'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'


const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer-logo'>NICOLAS</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Skills</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

      <div className="footer-socials">
        <a href="facebook.com"><BsFacebook/></a>
        <a href="instagram.com"><AiOutlineInstagram/></a>
        <a href="Twitter.com"><AiOutlineTwitter/></a>
      </div>
      <div className="footer-copyright">
        <small>&copy; Estuscode All right reserved</small>
      </div>
    </footer>
  )
}

export default Footer