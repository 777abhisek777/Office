import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>E-Commerce</h4>
            <h1 className="list-unstyled">
              <li>342-420-6969</li>
              <li>Visakhapatnam, INDIA</li>
              <li>Jayadevi Mansion</li>
            </h1>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>Stuff</h4>
            <ui className="list-unstyled">
              <li></li>
              <li>Contact</li>
              <li>Email</li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>Social Media</h4>
            <ui className="list-unstyled">
              <li>Instagram</li>
              <li>Facebook</li>
              <li>Twitter</li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Instagram
          </p>
        </div>
      </div>
      <center><div className="social-container">
      <h3>@LearnBuildTeach</h3>
      <a
        href="https://www.youtube.com/c/jamesqquick"
        className="youtube social"
      style={{color:'#eb3223'}}>
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>
      <a
        href="https://www.facebook.com/learnbuildteach/"
        className="facebook social"
        style={{color:'#4968ad'}}>
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="https://www.twitter.com/jamesqquick" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x"
        style={{color:'#49a1eb'}} />
      </a>
      <a
        href="https://www.instagram.com/learnbuildteach"
        className="instagram social"
        style={{color:'#d23167'}}>
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      </div></center>
    </div>
  );
}

export default Footer;
