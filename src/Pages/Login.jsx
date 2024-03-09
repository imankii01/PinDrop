import React from 'react'

import google from '../Assets/img/google_2504739.png'
import twiiter from '../Assets/img/twitter_3670151.png'
import linkedin from '../Assets/img/145807.png'
import facebook from '../Assets/img/facebook_5968764.png'
export const Login =()=>{
    return(
        <section className="vh-100">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="img-fluid"
                alt="Sample image"
              />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form>
                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                  <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                  <button type="button" className="btn btn-primary btn-floating mx-1">
                    <i className="fab fa-facebook-f" ><img src={facebook} style={{width:"22%"}} alt="" /></i>
                  </button>
                  <button type="button" className="btn btn-primary btn-floating mx-1">
                    <i className="fab fa-twitter"><img src={google} style={{width:"22%"}} alt="" /></i>
                  </button>
                
                </div>
                <div className="divider d-flex align-items-center my-4">
                  <p className="text-center fw-bold mx-3 mb-0">Or</p>
                </div>
                {/* Email input */}
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="form3Example3"
                    className="form-control form-control-lg"
                    placeholder="Enter a valid email address"
                  />
                  <label className="form-label" htmlFor="form3Example3">
                    Email address
                  </label>
                </div>
                {/* Password input */}
                <div className="form-outline mb-3">
                  <input
                    type="password"
                    id="form3Example4"
                    className="form-control form-control-lg"
                    placeholder="Enter password"
                  />
                  <label className="form-label" htmlFor="form3Example4">
                    Password
                  </label>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  {/* Checkbox */}
                  <div className="form-check mb-0">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      defaultValue=""
                      id="form2Example3"
                    />
                    <label className="form-check-label" htmlFor="form2Example3">
                      Remember me
                    </label>
                  </div>
                  <a href="#!" className="text-body">
                    Forgot password?
                  </a>
                </div>
                <div className="text-center text-lg-start mt-4 pt-2">
                  <button
                    type="button"
                    className="btn btn-dark btn-lg"
                    style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                  >
                    Login
                  </button>
                  <p className="small fw-bold mt-2 pt-1 mb-0">
                    Don't have an account?{" "}
                    <a href="#!" className="link-danger">
                      Register
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
          {/* Copyright */}
          <div className="text-white mb-3 mb-md-0">
            Copyright © 2020. All rights reserved.
          </div>
          {/* Copyright */}
          {/* Right */}
          <div>
            <a href="#!" className="text-white me-4">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="#!" className="text-white me-4">
              <i className="fab fa-twitter" />
            </a>
            <a href="#!" className="text-white me-4">
              <i className="fab fa-google" />
            </a>
            <a href="#!" className="text-white">
              <i className="fab fa-linkedin-in" />
            </a>
          </div>
          {/* Right */}
        </div>
      </section>
      
       
    )
}
export const Signup = () => {
  return (
    <div className="my-login-page">
    <section className="h-100">
      <div className="container h-100">
        <div className="row justify-content-md-center h-100">
          <div className="card-wrapper">
            <div className="brand">
              <img src="img/logo.jpg" alt="bootstrap 4 login page" />
            </div>
            <div className="card fat">
              <div className="card-body">
                <h4 className="card-title">Register</h4>
                <form method="POST" className="my-login-validation" noValidate="">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      id="name"
                      type="text"
                      className="form-control"
                      name="name"
                      required=""
                      autofocus=""
                    />
                    <div className="invalid-feedback">What's your name?</div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">E-Mail Address</label>
                    <input
                      id="email"
                      type="email"
                      className="form-control"
                      name="email"
                      required=""
                    />
                    <div className="invalid-feedback">Your email is invalid</div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      id="password"
                      type="password"
                      className="form-control"
                      name="password"
                      required=""
                      data-eye=""
                    />
                    <div className="invalid-feedback">Password is required</div>
                  </div>
                  <div className="form-group">
                    <div className="custom-checkbox custom-control">
                      <input
                        type="checkbox"
                        name="agree"
                        id="agree"
                        className="custom-control-input"
                        required=""
                      />
                      <label htmlFor="agree" className="custom-control-label">
                        I agree to the <a href="#">Terms and Conditions</a>
                      </label>
                      <div className="invalid-feedback">
                        You must agree with our Terms and Conditions
                      </div>
                    </div>
                  </div>
                  <div className="form-group m-0">
                    <button type="submit" className="btn btn-primary btn-block">
                      Register
                    </button>
                  </div>
                  <div className="mt-4 text-center">
                    Already have an account? <a href="index.html">Login</a>
                  </div>
                </form>
              </div>
            </div>
            <div className="footer">Copyright © 2017 — Your Company</div>
          </div>
        </div>
      </div>
    </section>
  </div>
  
  
  )
}
export const Forget=()=>{
    return (
        <div className="my-login-page">
  <section className="h-100">
    <div className="container h-100">
      <div className="row justify-content-md-center align-items-center h-100">
        <div className="card-wrapper">
          <div className="brand">
            <img src="img/logo.jpg" alt="bootstrap 4 login page" />
          </div>
          <div className="card fat">
            <div className="card-body">
              <h4 className="card-title">Forgot Password</h4>
              <form method="POST" className="my-login-validation" noValidate="">
                <div className="form-group">
                  <label htmlFor="email">E-Mail Address</label>
                  <input
                    id="email"
                    type="email"
                    className="form-control"
                    name="email"
                    defaultValue=""
                    required=""
                    autofocus=""
                  />
                  <div className="invalid-feedback">Email is invalid</div>
                  <div className="form-text text-muted">
                    By clicking "Reset Password" we will send a password reset
                    link
                  </div>
                </div>
                <div className="form-group m-0">
                  <button type="submit" className="btn btn-primary btn-block">
                    Reset Password
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="footer">Copyright © 2017 — Your Company</div>
        </div>
      </div>
    </div>
  </section>
</div>

    )
}
export const ResetPassword =()=>{
    return(
        <div className="my-login-page">
  <section className="h-100">
    <div className="container h-100">
      <div className="row justify-content-md-center align-items-center h-100">
        <div className="card-wrapper">
          <div className="brand">
            <img src="img/logo.jpg" alt="bootstrap 4 login page" />
          </div>
          <div className="card fat">
            <div className="card-body">
              <h4 className="card-title">Reset Password</h4>
              <form method="POST" className="my-login-validation" noValidate="">
                <div className="form-group">
                  <label htmlFor="new-password">New Password</label>
                  <input
                    id="new-password"
                    type="password"
                    className="form-control"
                    name="password"
                    required=""
                    autofocus=""
                    data-eye=""
                  />
                  <div className="invalid-feedback">Password is required</div>
                  <div className="form-text text-muted">
                    Make sure your password is strong and easy to remember
                  </div>
                </div>
                <div className="form-group m-0">
                  <button type="submit" className="btn btn-primary btn-block">
                    Reset Password
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="footer">Copyright © 2017 — Your Company</div>
        </div>
      </div>
    </div>
  </section>
</div>

    )
}
