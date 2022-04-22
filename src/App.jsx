
import { Login } from "./pages/login/Login"
import { Register } from "./pages/signup/Register";
import { NewPassword } from "./pages/newpassword/NewPassword";
import { Routes, Route, Link } from "react-router-dom";
import { PlayerList } from "./pages/playerlist/PlayerList";
import { NewPatient } from "./pages/newpatient/NewPatient"
import { ClinicHistory } from "./pages/clinichistory/ClinicHistory";
import { PlayerView } from "./pages/playerview/PlayerView";


export function App() {
    return (
    <div>
        <main>
            <Routes>
                <Route path="/" element={Login()}></Route>
            </Routes>
            <Routes>
                <Route path="/Register" element={Register()}></Route>
            </Routes>
            <Routes>
                <Route path="/NewPassword" element={NewPassword()}></Route>
            </Routes>
            <Routes>
                <Route path="/PlayerList" element={PlayerList()}></Route>
            </Routes>
            <Routes>
                <Route path="/NewPatient" element={NewPatient()}></Route>
            </Routes>
            <Routes>
                <Route path="/ClinicHistory" element={ClinicHistory()}></Route>
            </Routes>
            <Routes>
                <Route path="/PlayerView" element={PlayerView()}></Route>
            </Routes>   
        </main>
    </div>    
    );
}
  