// Home.jsx

import React, { useEffect, useState } from 'react';
import { Form, Input, Button } from 'antd';
import { auth, firestore } from './firebase-config';
import { addDoc, collection, doc, setDoc } from '@firebase/firestore';
import { GoogleAuthProvider, signInWithPopup, signOut } from '@firebase/auth';

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

  const ref = collection(firestore, 'login');

  const onFinish = async (values) => {
    console.log('Form submitted:', values);

    let data = {
      ...values,
    };

    try {
      const docRef = await addDoc(ref, data);
      console.log('Document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding document to Firestore:', e);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Form submission failed:', errorInfo);
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log('Google sign-in successful:', result.user);

      const userDocRef = doc(firestore, 'users', result.user.uid);
      await setDoc(userDocRef, {
        displayName: result.user.displayName,
        email: result.user.email,
        photoURL: result.user.photoURL,
      });

      // Save user data to localStorage
      localStorage.setItem('userData', JSON.stringify(result.user));
    } catch (error) {
      console.error('Google sign-in failed:', error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      // Clear user data from localStorage
      localStorage.removeItem('userData');
    } catch (error) {
      console.error('Sign-out failed:', error);
    }
  };

  return (
    <div>
      <Form
        name="myForm"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        layout="vertical"
      >
            <Form.Item
        label="Name"
        name="name"
        rules={[
          {
            required: true,
            message: "Please enter your name!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
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
        <Input />
      </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>

      {user ? (
        <div>
          <p>Welcome, {user.displayName}!</p>
          <p>Email: {user.email}</p>
          <img
            src={user.photoURL}
            alt="User profile"
            style={{ width: '50px', borderRadius: '50%' }}
          />
          <Button onClick={handleSignOut}>Sign Out</Button>
        </div>
      ) : (
        <Button onClick={handleGoogleSignIn}>Sign in with Google</Button>
      )}
    </div>
  );
};

export default Home;
