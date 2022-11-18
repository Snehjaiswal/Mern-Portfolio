import React, { Component } from "react";
import { MenuItems } from "./MenuItems.js";
import { Link } from "react-scroll";
// import { Link } from "react-router-dom";
import "./Navbar.css";

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked
    });
  };
  render() {
    return (
      <>
        <nav className="NavbarItems" id="top">
          <h1 className="navbar-logo">
            <Link to="home" spy={true} smooth={true}>
              <img
                src="images/m.svg"
                alt="logo"
                height="50"
                width="50"
                className="logo"
              />
            </Link>
          </h1>
          <div className="menu-icon" onClick={this.handleClick}>
            <i
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
          <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
            {MenuItems.map((item, index) => {
              return (
                item.url !== "login" ?
                  <Link
                    to={item.url}
                    spy={true}
                    smooth={true}
                    className={item.cName}
                    style={{ textDecoration: "none" }}
                  >
                    <li key={index}>{item.title}</li>
                  </Link>
                  :
                  <>
                  <a
                  className={item.cName}
                  style={{ textDecoration: "none" }}
                  data-toggle="modal" data-target="#modalLoginForm"
                >
                  <li key={index}>{item.title}</li>
                </a>
                <div
                className="modal fade"
                id="modalLoginForm"
                tabIndex={-1}
                role="dialog"
                aria-labelledby="myModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header text-center">
                      <h4 className="modal-title w-100 font-weight-bold">Sign in</h4>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">×</span>
                      </button>
                    </div>
                    <div className="modal-body mx-3">
                      <div className="md-form mb-5">
                        <i className="fas fa-envelope prefix grey-text" />
                        <input
                          type="email"
                          id="defaultForm-email"
                          className="form-control validate"
                        />
                        <label
                          data-error="wrong"
                          data-success="right"
                          htmlFor="defaultForm-email"
                        >
                          Your email
                        </label>
                      </div>
                      <div className="md-form mb-4">
                        <i className="fas fa-lock prefix grey-text" />
                        <input
                          type="password"
                          id="defaultForm-pass"
                          className="form-control validate"
                        />
                        <label
                          data-error="wrong"
                          data-success="right"
                          htmlFor="defaultForm-pass"
                        >
                          Your password
                        </label>
                      </div>
                    </div>
                    <div className="modal-footer d-flex justify-content-center">
                      <button className="btn btn-default">Login</button>
                    </div>
                  </div>
                </div>
              </div>
                  </>
              
              );
            })}
          </ul>
        </nav>
      
      </>

    );
  }
}
export default Navbar;
