// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router";
import Header from './components/Header';
import Home from './components/Home';
import AssignmentData from './Assignment/AssignmentData';
import CreateAssignment from './Assignment/CreateAssignment';

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path='/assignment' element={<AssignmentData/>}/>
          <Route path="/create-assignment" element={<CreateAssignment />} />
          
          {/* <Route path="student" element={<Student/>}></Route> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
