import { Routes, Route } from 'react-router-dom';
import { Home } from '../Home/Home';
import { Login } from '../Login/Login';
import { Register } from '../Register/Register';
import { Crew } from '../Crew/Crew';
import { Gallery } from '../Gallery/Gallery';

export const Body = () => {
     return (
         <>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/register" element={<Register />}/>
                <Route path="/crew" element={<Crew />}/>
                <Route path="/gallery" element={<Gallery />}/>
            </Routes>
         </>
     )
}