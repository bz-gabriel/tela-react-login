import React, { useState } from "react";
import './styles.css'
import Button from "../button";

const Login = () => {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const handleclick = () => {
        console.log(email, senha);
    }
    return (
        <div className="container">
            <form action="">
                <h1>Acesse o sistema</h1>
                <div>
                    <input
                        type="email"
                        placeholder="E-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        type="password"
                        placeholder="Senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                    />
                </div>
                <button
                    type="submit"
                    onClick={handleclick}
                >
                    Login
                </button>
            </form>
        </div>
    );
}

export default Login;