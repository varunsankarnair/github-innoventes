import './App.css';
import Login from './pages/login';
import Planet from './pages/planet';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    // <div className='container'>
    //   <h1>Star Wars</h1>
    //   <Login />
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/planet" element={<Planet />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
