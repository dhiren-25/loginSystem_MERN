import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import styles from "./styles2.module.css";

const Logout = () => {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem("token");
                const response = await axios.get("http://localhost:3001/api/users", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setUserData(response.data.data);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchData();
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.reload();
    };

    return (
        <>
            <div className={styles.main_container}>
                <nav className={styles.navbar}>
                    <h1>Dashboard</h1>
                    <button className={styles.white_btn} onClick={handleLogout}>
                        Logout
                    </button>
                </nav>
            </div>

            <Table striped bordered hover variant="dark" className={styles.custom_table}>
                <thead>
                    <tr>
                        <th>No</th>
                        
                        <th>Name</th>
                        <th>Date of Birth</th>
                        <th>Email</th>
                        <th>Password</th>
                    </tr>
                </thead>
                <tbody>
                    {userData.map((user, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{user.name}</td>
                            <td>{user.dob}</td>
                            <td>{user.email}</td>
                            <td>{user.password}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    );
};

export default Logout;
