import React, { useState, useEffect } from "react";
import './styles.css'
import Button from "../button";
import axios from "axios";

interface User {
    email: string;
    senha: string;
}


const Login: React.FC = () => {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");
    const [sucess, setSuccess] = useState("");
    const [data, setData] = useState<any>(null);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.get<User[]>('/users.json');
            const users = response.data;

            const user = users.find((user) => user.email === email && user.senha === senha);

            if (user) {
                setError('');
                setSuccess("Login bem-sucedido!");

                const apiResponse = await axios.get('https://jsonplaceholder.typicode.com/users');

                setData(apiResponse.data);
            } else {
                setError("Email ou senha inválidos!");
                setSuccess('');
            }

        } catch (err) {

        }
    }

    return (
        <div className="container">
            <form onSubmit={handleLogin}>
                <h1>Login</h1>
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
                {sucess && <p style={{ color: 'green' }}>{sucess}</p>}
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {sucess &&
                    <div>
                        <h2>Dados da API Externa</h2>
                        {data ? (
                            <div>
                                <pre>{JSON.stringify(data, null, 2)}</pre> {/* Exibindo os dados da API */}
                            </div>
                        ) : (
                            <p>Carregando dados...</p>
                        )}
                    </div>  
                }
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