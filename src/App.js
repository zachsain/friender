import React from 'react';
import './App.css';
import Header from './Header';
import ReactDOM from "react-dom/client";
import { Switch, Route } from "react-router-dom";
import Card from './Card';
import SwipeButtons from './SwipeButtons';
import Chats from './Chats';
import ChatScreen from './ChatScreen';
import Signup from './Signup';
import CreateProfile from './CreateProfile';
function App() {
  return (
    <div className="App">
      {/* <Header/> */}
      <Signup />
      <CreateProfile />
      {/* <Switch>
      <Route path = "/chat/:person">
          <Header backButton="/chat" /> 
          <ChatScreen />
        </Route>
        <Route path = "/chat">
          <Header backButton="/" /> 
          <Chats />
        </Route>
        <Route exact path = "/">
          <Header />
          <Card />
          <SwipeButtons />
        </Route>
      </Switch> */}
      
    </div>
  );
}


export default App;

