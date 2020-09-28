import React from "react";
import "./Nav.css";
import styled from "styled-components";

const Dl = styled.dl`
  flex-flow: nowrap;

  @media (max-width: 980px) {
    flex-flow: column nowrap;
    background-color: black;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 140px;
    padding-top: 3.5rem;
    a {
      font-size: 30px;
    }
    li {
      display: inline-block;
    }
  }
`;

function Nav() {
  return (
    <div className="nav">
      <img
        className="nav_logo"
        src="https://berndvoss.com/wp-content/uploads/2018/10/spotify-transp-white-1.png"
        alt="spotify logo"
      />

      <Dl className="nav_buttons">
        <a className="nav_button" href="">
          Premium
        </a>
        <a className="nav_button" href="">
          Help
        </a>
        <a className="nav_button" href="">
          Download
        </a>
        <li className="nav_separator" role="separator" />
        <a className="nav_button" href="">
          Sign up
        </a>
        <a className="nav_button" href="">
          Log in
        </a>
      </Dl>
    </div>
  );
}

export default Nav;
