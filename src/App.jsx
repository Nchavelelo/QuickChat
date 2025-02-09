import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/login/login.jsx';
import Chat from './pages/Chat/chat.jsx';
import ProfileUpdate from './pages/ProfileUpdate/profileUpdate.jsx';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/profile" element={<ProfileUpdate />} />
    </Routes>
  );
};

export default App;
