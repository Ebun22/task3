import logo from './logo.svg';
import './App.css';
import { AiOutlineSearch } from 'react-icons/ai';
import React, { useState, useRef, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Navbar, UserAuth } from './components';
import Gallery from './components/Gallery';
import { UseAuthContext } from './Context/AuthContext';
import { useStateContext } from './Context/context';

function App() {

  const { isLogin } = UseAuthContext();
  const { hasAccount } = useStateContext()
  return (
    <div className="App">
   
        <>
          <Navbar />
          <Gallery />
        </>

    </div>
  );
}

export default App;
