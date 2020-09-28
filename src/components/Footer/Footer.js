import React from "react";
import "./Footer.css";
import InstagramImg from "../assets/img/insta-bg.svg";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_main">
        <div className="logo_box">
          <img
            className="footer_logo"
            src="https://berndvoss.com/wp-content/uploads/2018/10/spotify-transp-white-1.png"
            alt="spotify logo"
          />
        </div>

        <div className="top_links_box">
          <dl className="company_links">
            <dt className="company">COMPANY</dt>
            <dd className="about_link">
              <a href="">About</a>

              <a href="">Jobs</a>

              <a href="">For the Records</a>
            </dd>
          </dl>

          <dl className="community_links">
            <dt className="communities">COMMUNITIES</dt>
            <dd className="artists_link">
              <a href="">For Artists</a>

              <a href="">Developers</a>

              <a href="">Advertising</a>

              <a href="">Investors</a>

              <a href="">Vendors</a>
            </dd>
          </dl>

          <dl className="useful_links">
            <dt className="usefull_link">USEFULL LINKS</dt>
            <dd className="help_link">
              <a href="">Help</a>

              <a href="">Web Player</a>

              <a href="">Free Mobile App</a>
            </dd>
          </dl>
        </div>

        <div className="social_icons">
          <ul className="icons">
            <li className="instagram_icon">
              <a href="">
                <span className="instagram_logo">
                  <i className="fab fa-instagram" />
                </span>
              </a>
            </li>

            <li className="twittor_icon">
              <a href="">
                <span className="teittor_logo"></span>
              </a>
            </li>

            <li className="facebook_icon">
              <a href="">
                <span className="facebook_logo"></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* <div className="footer_bottom">
        <dl className="bottom_left">
          <a>Legal</a>
          <a>Privacy Center</a>
          <a>Privacy Policy</a>
          <a>Cookies</a>
          <a>About Ads</a>
        </dl>
      </div> */}
    </div>
  );
}
export default Footer;
