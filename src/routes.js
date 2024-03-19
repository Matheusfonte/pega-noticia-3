import React from "react";
import {
 BrowserRouter as Router,
 Routes,
 Route,
 Navigate,
} from "react-router-dom";
import { isAuthenticated } from "./services/auth";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Usuarios from "./pages/Usuarios";
import Logout from "./pages/Logout";
import MainPage from "./pages/MainPage";
const LoginPage = () => <Login />;
const SignUpPage = () => <SignUp />;
const UsuariosPage = () => <Usuarios />;
const LogOutPage = () => <Logout />;
const NotFoundPage = () => <h1>Página não encontrada.</h1>;
const AppPage = () => {
 if (!isAuthenticated()) {
 return <Navigate to="/" replace />;
 }
 return <MainPage />;
};
const Rotas = () => (
 <Router>
 <Routes>
 <Route path="/" element={<LoginPage />} />
 <Route path="/signup" element={<SignUpPage />} />
 <Route path="/logout" element={<LogOutPage />} />
 <Route path="/app" element={<AppPage />} />
 <Route path="/usuarios" element={<UsuariosPage />} />
 <Route path="*" element={<NotFoundPage />} />
 </Routes>
 </Router>
);
export default Rotas;