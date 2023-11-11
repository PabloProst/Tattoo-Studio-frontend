import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home/Home';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </>
  )
}

export default App
