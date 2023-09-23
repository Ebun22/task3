import logo from './logo.svg';
import './App.css';
import { AiOutlineSearch } from 'react-icons/ai';
import React, { useState, useRef, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Login, Navbar, SignUp, UserAuth } from './components';
import Gallery from './components/Gallery';
import { UseAuthContext } from './Context/AuthContext';
import { useStateContext } from './Context/context';
import { Route, Routes } from "react-router-dom";

function App() {

  const { isLogin } = UseAuthContext();
  const { hasAccount, showAuth, setShowAuth } = useStateContext()
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
