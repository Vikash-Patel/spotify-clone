import React, { useState } from "react";
import "./index.css";

function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="nav">
      <img
        className="logo"
        src="https://berndvoss.com/wp-content/uploads/2018/10/spotify-transp-white-1.png"
        alt="spotify logo"
      />

      <dl className={open ? "nav_links" : "nothing"}>
        <li>
          <a href="/">Premium</a>
        </li>
        <li>
          <a href="/">Help</a>
        </li>
        <li>
          <a href="/">Download</a>
        </li>

        <li className="nav_separator" role="separator" />

        <dt>
          <a className="separator" href="/">
            Sign up
          </a>
        </dt>
        <dt>
          <a className="separator" href="/">
            Log in
          </a>
        </dt>
        <a href="/" className="nav_burger_image">
          <img
            src="https://berndvoss.com/wp-content/uploads/2018/10/spotify-transp-white-1.png"
            alt="..."
          />
        </a>
      </dl>

      <div className="burgerMenu" onClick={() => setOpen(!open)}>
        <span className={open ? "rotateClockwise" : "noRotate"} />
        <span className={open ? "fullTranslate" : "noTranslate"} />
        <span className={open ? "rotateAntiClockwise" : "noRotate"} />
      </div>
    </div>
  );
}

export default Nav;
