import React from 'react'
import './adminHome.css'


function AdHome() {
  return (
  <>

  <div className="form-bg">
  <div className="container">
    <div className="row">
      <div className="col-md-offset-4 col-md-4 col-sm-offset-3 col-sm-6">
        <div className="form-container">
          <form className="form-horizontal">
            <h3 className="title">User Login</h3>
            <div className="form-group">
              <span className="input-icon">
                <i className="fa fa-user" />
              </span>
              <input
                className="form-control"
                type="email"
                placeholder="Username"
                autoComplete='off'
              />
            </div>
            <div className="form-group">
              <span className="input-icon">
                <i className="fa fa-lock" />
              </span>
              <input
                className="form-control"
                type="password"
                placeholder="Password"
              />
            </div>
            <span className="forgot-pass">
              <a href="#">Lost password?</a>
            </span>
            <button className="btn signin">Login</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

  
  
  
  </>
  )
}

export default AdHome