import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface User {
    email: string;
    senha: string;
}

const Cadastro: React.FC = () => {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");
    const [sucess, setSuccess] = useState("");
    const [users, setUsers] = useState<User[]>([]);

    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();
    };

    return (
        <div>
            <h1>Cadastro</h1>
            <form onSubmit={handleRegister}>
                <div>
                    <input
                        placeholder='E-mail'
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <input
                        placeholder='Senha'
                        type="password"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
};

export default Cadastro;
