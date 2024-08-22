
import { useNavigate } from "react-router-dom";
import '../MasterStyles.css';
import PreLoginNav from "../Navigation/PreLoginNav";
import React, { useState } from 'react';

const SignUp = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');    
    const [role, setRole] = useState('customer');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { firstName, lastName, email, password, role };

        fetch("http://localhost:8080/user/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("This is the" +data);
                if (data) {
                    navigate("/"); // redirect to login page
                }
            })
            .catch((error) => console.error(error));
    };


    return (
        <>
            <div>
                <PreLoginNav />
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                <label>
                    First Name:
                    <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    </label>
                    <br></br><br></br>
                <label>
                    Last Name:
                    <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    </label>
                    <br></br><br></br>
                <label>
                    Email:
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </label>
                    <br></br><br></br>
                <label>
                    Password:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                    <br></br><br></br>
                <button type="submit">Submit</button>
            </form>
            </div>
        </>)

}
export default SignUp;