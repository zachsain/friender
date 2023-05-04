import React, { useState } from 'react';
import { auth, db, createUserWithEmailAndPassword } from './firebase';
// import { auth, db, createUser } from './fb';
import { collection, addDoc } from "firebase/firestore"; 
import './Signup.css';

function Signup() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [error, setError] = useState('');
  
  const handleSignup = async (event) => {
    event.preventDefault();
    try {
    // Create new user with email and password
    //   const { user } = await auth.createUserWithEmailAndPassword(email, password);
      const { user } = await createUserWithEmailAndPassword(email, password);
      
      // Add user to "users" collection with user's information

    //   await db.collection("users").doc(user.uid).set({
    //     email: user.email,
    //     firstName: firstName,
    //     lastName: lastName,
    //     createdAt: new Date(),
    //   });
      
      await addDoc(collection(db, "users"), {
        email: user.email,
        firstName: firstName,
        lastName: lastName,
        password: password,
        createdAt: new Date(),
      }).then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })

    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSignup}>
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
        <button type="submit" className="signup-button">
          Sign up
        </button>
        {error && <p className="signup-error">{error}</p>}
      </form>
    </div>
  );
};

export default Signup;
