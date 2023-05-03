import { useEffect, useState } from "react";
import styles from "./Home.module.css";

export default function Home() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        let usersSaved = JSON.parse(localStorage.getItem("users"));
        if (usersSaved) {
            setUsers(usersSaved);
        };
    }, []);

    return (        
        <div className={styles.container}>           
            <h1>Users</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Birthday</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.email}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.birthday}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}