import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import LandingPage from "./views/LandingPage/LandingPage";
import LoginPage from "./views/LoginPage/LoginPage";
import RegisterPage from "./views/RegisterPage/RegisterPage";
import Auth from "./hoc/auth";
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer";
import {Suspense} from "react";

function App() {
    // const AuthLandingPage = Auth(LandingPage, null);
    const AuthLoginPage = Auth(LoginPage, null);
    const AuthRegisterPage = Auth(RegisterPage, false);
    return (
        <Router>
            <Suspense fallback={(<div>Loading...</div>)}>
            <NavBar />
            <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
                <Routes>
                    <Route path="/" element={<LandingPage/>} />
                    <Route path="/login" element={<AuthLoginPage/>} />
                    <Route path="/register" element={<AuthRegisterPage/>} />
                </Routes>
            </div>
            <Footer />
            </Suspense>
        </Router>
    );
}
export default App;
