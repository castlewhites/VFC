
import { Login } from "./pages/login/Login"
import { Register } from "./pages/signup/Register";
import { NewPassword } from "./pages/newpassword/NewPassword";
import { Routes, Route, } from "react-router-dom";
import PlayerList from "./pages/playerlist/PlayerList";
import { NewPatient } from "./pages/newpatient/NewPatient"
import { ClinicHistory } from "./pages/clinichistory/ClinicHistory";
import PlayerView from "./pages/playerview/PlayerView";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export function App() {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Login/>}></Route>
                <Route path="/Register" element={<Register/>}></Route>
                <Route path="/NewPassword" element={<NewPassword/>}></Route>
                <Route path="/PlayerList" element={<PlayerList/>}></Route>
                <Route path="/NewPatient" element={<NewPatient/>}></Route>
                <Route path="/ClinicHistory" element={<ClinicHistory/>}></Route>
                <Route path="/:id/PlayerView" element={<PlayerView/>}></Route>
            </Routes>  
            <ToastContainer
                position="top-right"
                autoClose={2500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                />
            <ToastContainer /> 
        </main>
    );
}
  