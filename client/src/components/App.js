import { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Auth from "./hoc/auth";
import Footer from "./views/Footer/Footer";
import LandingPage from "./views/LandingPage/LandingPage";
import LoginPage from "./views/LoginPage/LoginPage";
import NavBar from "./views/NavBar/NavBar";
import RegisterPage from "./views/RegisterPage/RegisterPage";
import VideoUploadPage from "./views/VideoUploadPage/VideoUploadPage";

function App() {
    // const AuthLandingPage = Auth(LandingPage, null);
    const AuthLoginPage = Auth(LoginPage, null);
    const AuthRegisterPage = Auth(RegisterPage, false);
    const AuthVideoUploadPage = Auth(VideoUploadPage, true);
    return (
        <Router>
            <Suspense fallback={(<div>Loading...</div>)}>
            <NavBar />
            <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
                <Routes>
                    <Route path="/" element={<LandingPage/>} />
                    <Route path="/login" element={<AuthLoginPage/>} />
                    <Route path="/register" element={<AuthRegisterPage/>} />
                    <Route path="/video/upload" element={<AuthVideoUploadPage/>} />
                </Routes>
            </div>
            <Footer />
            </Suspense>
        </Router>
    );
}
export default App;
