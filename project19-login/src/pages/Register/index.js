import styles from './Register.module.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

const users = localStorage.getItem("users");
const usersJson = users ? JSON.parse(users) : [];

export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [birthday, setBirthday] = useState('');
    const [cep, setCep] = useState('');
    const [address, setAddress] = useState('');
    const [number, setNumber] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');

    useEffect(() => {
        axios.get(`https://viacep.com.br/ws/${cep}/json`)
        .then((response) => {
            setAddress(response.logradouro);
            setCity(response.localidade);
            setState(response.uf);
        });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        usersJson.push({
            'email': email,
            'password': password,
            'name': name,
            'birthday': birthday
        })

        localStorage.setItem('users', JSON.stringify(usersJson));

        setEmail('');
        setPassword('');
        setName('');
        setBirthday('');

    };

    return (
        <main className={styles.register}>
            <h1 className={styles.title}>Register</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.field}>
                    <label className={styles.label}>Email:</label>
                    <input type='email' className={styles.input} value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className={styles.field}>
                    <label className={styles.label}>Password:</label>
                    <input type='password' className={styles.input} value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>

                <div className={styles.field}>
                    <label className={styles.label}>Name:</label>
                    <input type='text' className={styles.input} value={name} onChange={(e) => setName(e.target.value)} />
                </div>

                <div className={styles.field}>
                    <label className={styles.label}>Birthday:</label>
                    <input type='date' className={styles.input} value={birthday} onChange={(e) => setBirthday(e.target.value)} />
                </div>

                <div className={styles.field}>
                    <label className={styles.label}>CEP:</label>
                    <input type='text' className={styles.input} value={cep} onChange={(e) => setCep(e.target.value)} />
                </div>

                <div className={styles.field}>
                    <label className={styles.label}>Address:</label>
                    <input type='text' className={styles.input} value={address} onChange={(e) => setAddress(e.target.value)} />
                </div>

                <div className={styles.field}>
                    <label className={styles.label}>Number:</label>
                    <input type='text' className={styles.input} value={number} onChange={(e) => setNumber(e.target.value)} />
                </div>

                <div className={styles.field}>
                    <label className={styles.label}>City:</label>
                    <input type='text' className={styles.input} value={city} onChange={(e) => setCity(e.target.value)} />
                </div>

                <div className={styles.field}>
                    <label className={styles.label}>City:</label>
                    <input type='text' className={styles.input} value={state} onChange={(e) => setState(e.target.value)} />
                </div>

                <button type='submit' className={styles.button}>Register</button>
            </form>
        </main>
    )
}