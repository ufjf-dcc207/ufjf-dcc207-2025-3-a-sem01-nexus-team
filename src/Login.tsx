import React,{useState} from "react";
import { Usuario, type InfoUsuario } from "./ProcessadorListas";

import "./estilos/Login.css";

type LoginProps = {
    TemLogin: (usuario: InfoUsuario) => void;
}

type DadosLogin = {
    email: string;
    senha: string;
}

const Login = ({TemLogin}:LoginProps) => {
    const [credencialLogin, setCredencialLogin] = useState<DadosLogin>({email:"", senha:""});
    const [erro, setErro] = useState<string>("");
    
    const inputUsuario = (evento: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = evento.target;
        setCredencialLogin({...credencialLogin, [name]: value});
    }

    const verificarLogin = () => {
        const usuarioEncontrado = Usuario.find(
            (usuario) => usuario.email === credencialLogin.email && usuario.senha === credencialLogin.senha
        );
        if (usuarioEncontrado) {
            TemLogin(usuarioEncontrado);
        } else {
            setErro("Email ou senha incorretos");
            setCredencialLogin({email: "", senha: ""});
        }
    }

   return (
    <div className="container-acesso">
      <form className="caixa-acesso" onSubmit={verificarLogin}>
        <h2> Acesso N. P.D.</h2>
        <p>Insira suas credenciais estáticas.</p>

        <input 
          type="email" 
          name="email" 
          placeholder="Email" 
          value={credencialLogin.email} 
          onChange={inputUsuario} 
          required
        />
        
        <input 
          type="password" 
          name="senha"
          placeholder="Senha" 
          value={credencialLogin.senha} 
          onChange={inputUsuario} 
          required
        />
        
        {erro && <p className="mensagem-erro">{erro}</p>}
        
        <button type="submit">Entrar</button>

        <p className="mensagem-aviso">
            Ex: gabriel@ufjf.com / senha123
        </p>
      </form>
    </div>
  );
};

export default Login;