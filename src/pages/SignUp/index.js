import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Container } from "./style";
import api from "../../services/api";
import Logo from "../../assets/senac.png";
const SignUp = () => {
 const [email, setEmail] = useState("");
 const [senha, setSenha] = useState("");
 const [tipo, setTipo] = useState("");
 const [error, setError] = useState("");
 const navigate = useNavigate();
 const handleSignUp = async e => {
 e.preventDefault();
 if (!email || !senha){
 setError("Preencha todos os dados para se cadastrar");
 } else {
 try {
 await api.post("/signup", {email, senha, tipo});
 navigate("/");
 } catch (err){
 console.log(err);
 setError("Ocorreu um erro ao registrar sua conta.")
 }
 }
 }
return (
 <Container>
 <Form onSubmit={handleSignUp}>
 {error && <p>{error}</p>}
 <img src={Logo} alt="logo_senac"/>
 <input
 type="email"
 placeholder="Endereço de email"
 onChange={e => setEmail(e.target.value)}
 />
 <input
 type="password"
 placeholder="Senha"
 onChange={e => setSenha(e.target.value)}
 />
 <input
 type="number"
 placeholder="Tipo de Acesso"
 onChange={e => setTipo(e.target.value)}
 />
 <button type="submit">Cadastro de Usuário</button>
 <Link to="/">Fazer Login</Link>
 </Form>
 </Container>
)
}
export default SignUp;