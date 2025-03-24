import React, { useState, useEffect } from "react";

interface SignInFormProps {
    name: string,
}

const SignInForm: React.FC<SignInFormProps> = (props) => {
    const [name, setName] = useState(props.name);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Submitted');
        setSuccess(true)
    }

    const validateEmail = (email: string) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    useEffect(() => {
        const hasError = name.length < 3 || password.length < 6 || !validateEmail(email);
        setError(hasError);
    }, [name, email, password]);

    return (
        <div>
            <h2>Sign in</h2>
            <form onSubmit={submitForm}>
                <label>Nombre:</label>
                <input onChange={(e) => setName(e.target.value)} value={name} type="text" />
                <br/>
                <br/>
                <label>Email:</label>
                <input onChange={(e) => setEmail(e.target.value)} type="email"/>
                <br/>
                <br/>
                <label>Password:</label>
                <input onChange={(e) => setPassword(e.target.value)} type="password"/>
                <br/>
                <br/>
                {error && <p style={{color: 'red'}}>El nombre debe ser mayor a 3, password mayor a 6 y email valido</p>}
                {success && <p style={{color: 'green'}}>Registrado correctamente</p>}
                <button disabled={error} type="submit">Registrarme</button>
            </form>
        </div>
    );
};

export default SignInForm;