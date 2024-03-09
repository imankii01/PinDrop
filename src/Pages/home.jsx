// Home.jsx

import React, { useEffect, useState } from "react";
import { Form, Input, Button } from "antd";
import { auth, firestore } from "./firebase-config";
import { addDoc, collection, doc, setDoc } from "@firebase/firestore";
import { GoogleAuthProvider, signInWithPopup, signOut } from "@firebase/auth";
import google from "../Assets/img/google_2504739.png";
import twiiter from "../Assets/img/twitter_3670151.png";
import linkedin from "../Assets/img/145807.png";
import facebook from "../Assets/img/facebook_5968764.png";
import Dashboard from "./Dashboard";
const Home = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const ref = collection(firestore, "login");

  const onFinish = async (values) => {
    console.log("Form submitted:", values);

    let data = {
      ...values,
    };

    try {
      const docRef = await addDoc(ref, data);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document to Firestore:", e);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Form submission failed:", errorInfo);
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("Google sign-in successful:", result.user);

      const userDocRef = doc(firestore, "users", result.user.uid);
      await setDoc(userDocRef, {
        displayName: result.user.displayName,
        email: result.user.email,
        photoURL: result.user.photoURL,
      });

      // Save user data to localStorage
      localStorage.setItem("userData", JSON.stringify(result.user));
    } catch (error) {
      console.error("Google sign-in failed:", error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      // Clear user data from localStorage
      localStorage.removeItem("userData");
    } catch (error) {
      console.error("Sign-out failed:", error);
    }
  };

  return (
    <>
 

      {user ? (
        <Dashboard handleSignOut={handleSignOut} user={user}/>
      ) : (
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
              <Form
                name="myForm"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                layout="vertical"
              >
                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                  <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                  <button
                    type="button"
                    className="btn btn-primary btn-floating mx-1"
                  >
                    <i className="fab fa-facebook-f"  onClick={handleGoogleSignIn}>
                      <img src={facebook} style={{ width: "22%" }} alt="" />
                    </i>
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary btn-floating mx-1"
                  >
                    <i className="fab fa-twitter"  onClick={handleGoogleSignIn}>
                      <img src={google} style={{ width: "22%" }} alt="" />
                    </i>
                  </button>
                </div>
                <div className="divider d-flex align-items-center my-4">
                  <p className="text-center fw-bold mx-3 mb-0">Or</p>
                </div>
                <Form.Item
                  className="form-outline mb-4"
                  label="Name"
                  name="name"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your name!",
                    },
                  ]}
                >
                  <Input className="form-control form-control-lg" />
                </Form.Item>

                <Form.Item
                  className="form-outline mb-3"
                  label="Email"
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your email!",
                    },
                    {
                      type: "email",
                      message: "Please enter a valid email address!",
                    },
                  ]}
                >
                  <Input className="form-control form-control-lg" />
                </Form.Item>
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
                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="btn btn-dark btn-lg"
                      style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                    >
                      Login
                    </Button>
                  </Form.Item>
                  <p className="small fw-bold mt-2 pt-1 mb-0">
                    Don't have an account?{" "}
                    <a href="#!" className="link-danger">
                      Register
                    </a>
                  </p>
                </div>
                
              </Form>
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
      </section>      )}

      </>
  );
};

export default Home;
