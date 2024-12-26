import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router";
import Header from './components/Header';
import Home from './components/Home';

import Login from './auth/login/login';
import Register from './auth/register/register';
import Student from './components/Trainers';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import Courses from './components/Courses';
import Students from './components/Students';
import Trainers from './components/Trainers';
function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='/trainers' element={<Trainers />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/student' element={<Students />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
