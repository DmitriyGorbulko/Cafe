import './App.css';
import {Registration} from './components/Registration/Registration';
import {BrowserRouter as Router, Routes, Route,} from 'react-router-dom'
import { useState } from 'react';
import { AuthContext } from './context/AuthContext';
import { useAuth } from './hooks/useAuth';
import { PublicView } from './PublicView';
import { PrivateView } from './PrivateView';

function App() {
  const { user } = useAuth();
 
  console.log(!user)
  return (
    <AuthContext.Provider value={{ user }}>
    <Router >
      {!user ? <PublicView/> : <PrivateView/>}
    </Router> 
    </AuthContext.Provider>
  );
}

export default App;
