import React, { useState } from "react";
import './styles.css'
import Button from "../button";
import axios from "axios";

interface User {
    email: string;
    senha: string
}

const Login: React.FC = () => {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');


    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.get<User[]>('/users.json');
            const users = response.data;

            const user = users.find((user) => user.email === email && user.senha === senha);

            if (user) {
                setError('');
                setSuccess('Login bem-sucedido!');
            } else {
                setError('Usuário ou senha inválidos');
                setSuccess('');
            }
        } catch (err) {
            setError('Erro ao fazer login');
            setSuccess('');
        }
    };

    return (
        <div className="container">
            <form onSubmit={handleLogin}>
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
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {success && <p style={{ color: 'green' }}>{success}</p>}
                <button
                    type="submit"
                >
                    Login
                </button>
            </form>
        </div>
    );
}

export default Login;