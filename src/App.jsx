
import { Login } from "./pages/login/Login"
import { Register } from "./pages/signup/Register";
import  Physiotherapy  from "./pages/clinichistory/physiotherapy";
import { Routes, Route, } from "react-router-dom";
import PlayerList from "./pages/playerlist/PlayerList";
import NewPatient from "./pages/newpatient/NewPatient"
import ClinicHistory from "./pages/clinichistory/ClinicHistory";
import Therapy from "./pages/therapy/Therapy";
import PlayerView from "./pages/playerview/PlayerView";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PhysicalExploration from "./pages/clinichistory/physicalExploration";



export function App() {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Login/>}></Route>
                <Route path="/Register" element={<Register/>}></Route>
                <Route path="/PlayerList" element={<PlayerList/>}></Route>
                <Route path="/NewPatient" element={<NewPatient/>}></Route>
                <Route path="/:id/Therapy" element={<Therapy/>}></Route>
                <Route path="/:id/ClinicHistory" element={<ClinicHistory/>}></Route>
                <Route path="/:id/PlayerView" element={<PlayerView/>}></Route>
                <Route path="/:id/Physiotherapy" element={<Physiotherapy/>}></Route>
                <Route path="/:id/PhysicalExploration" element={<PhysicalExploration/>}></Route>
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
  