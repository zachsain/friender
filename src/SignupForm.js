import React, { useState } from 'react';
import { auth, db, googleProvider } from './firebase';
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
// import {
//     getDocs,
//     collection,
//     addDoc,
//     deleteDoc,
//     updateDoc,
//     doc,
//   } from "firebase/firestore"; 

import './SignupForm.css';

function SignupForm({loginOrSignup, setLoginOrSignup}) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [error, setError] = useState('');
  const [bio, setBio] = useState('')
  const userCollectionRef = collection(db, 'users');
  
  console.log(auth?.currentUser?.email) // waits to check login

  const handleSignup = async (event) => {
    event.preventDefault();
    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password);

      await addDoc(userCollectionRef, {
        firstName: firstName, 
        lastName: lastName,
        email: email,
        id: user.uid
    })
      
    } catch (error) {
      setError(error.message);
    }
  };

//   const signInWithGoogle = async () => {
//     try {
//       await signInWithPopup(auth, googleProvider);
//     } catch (err) {
//       console.error(err);
//     }
//   };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };


  return (
    <div className="signup-container">
      <form className="signup-form" >
        <h2 className="signup-heading">Sign up</h2>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
          className="signup-input"
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
          className="signup-input"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="signup-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="signup-input"
        />
         <input
          type="bio"
          placeholder="Bio"
          value={bio}
          onChange={(event) => setBio(event.target.value)}
          className="signup-input"
        />
        <button type="submit" className="signup-button" onClick={handleSignup}>
          Sign up
        </button>
        <h4>Already have an account?</h4>
        <button onClick={() => setLoginOrSignup(true)} type="submit" className="signup-button">
          Login
        </button>
        {error && <p className="signup-error">{error}</p>}
      </form>

        
      <button onClick={logout}> Logout </button>
    </div>
  );
};

export default SignupForm;
