import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from '../Home/Home';
import { Login } from '../Login/Login';
import { Register } from '../Register/Register';
import { Crew } from '../Crew/Crew';
import { Gallery } from '../Gallery/Gallery';
import { Profile } from '../Profile/Profile';
import { Appointments } from '../Appointments/Appointments';
import { MyAppointments } from '../MyAppointments/MyAppointments';
import { AdminLogin } from '../AdminLogin/AdminLogin';
import { AdminPanel } from '../AdminPanel/AdminPanel';
import { AllUsers } from '../AllUsers/AllUsers';

export const Body = () => {
    return (
        <>
            <Routes>
                <Route path="*" element={<Navigate to="/" />} />
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/crew" element={<Crew />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/appointments" element={<Appointments />} />
                <Route path="/myappointments" element={<MyAppointments />} />
                <Route path="/admin/login" element={<AdminLogin />} />
                <Route path="/admin/panel" element={<AdminPanel />} />            
                <Route path="/allusers" element={<AllUsers />} />            
            </Routes>
        </>
    )
}