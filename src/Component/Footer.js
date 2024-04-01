import React from "react";
import img5 from '../assets/19862.jpg'

function Footer() {
  return <>
       
<footer>
    <img src={img5}></img>
    <div className="footer-main">
        <div className="footer-about">
            <h3>About Us</h3>
        </div>
        <div className="footer-services">
            <h3>Services</h3>
        </div>
        <div className="footer-contact">
            <h3>Contact Us</h3>
        </div>
        <div className="footer-follow">
            <h3>Follow Us</h3>
        </div>
    </div>
</footer>
 
  </>
}

export default Footer;