import React from 'react'
import {Link} from "react-router-dom";

export default function Navbar({mode,toggleMode}) {
  return (
    <div>
     <nav className={`navbar navbar-expand-lg navbar-${mode==='light'?'dark':'light'} bg-${mode==='dark'?'light':'dark'}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">TextUtils</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
      </ul>
    </div>
  </div>
  <div className={`form-check form-switch text-${mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" type="checkbox" onClick={toggleMode} role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enabled Mode</label>
</div>
</nav>
    </div>
  )
}
// Navbar.propTypes={title:PropTypes.string.isRequired};
// Navbar.defaultProps={
//     title:'TextUtils'
// };
