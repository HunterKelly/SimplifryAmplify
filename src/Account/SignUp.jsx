import { useNavigate } from "react-router-dom";
import '../MasterStyles.css';
import PreLoginNav from "../Navigation/PreLoginNav";
import React, { useState } from 'react';
import { generateClient } from 'aws-amplify/data';

const SignUp = () => {
    const navigate = useNavigate();
    const client = generateClient();

    // State to store form input values
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        try {
            await client.models.Users.create({
                ...formData,
                isDone: false
            });

            // Navigate to a success page or login page after creating the user
            navigate('/login'); // Adjust the path as needed
        } catch (error) {
            console.error("Error creating user:", error);
            // You can also display an error message to the user here
        }
    };

    return (
        <>
            <div>
                <PreLoginNav />
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <label>
                                        First Name:
                                    </label>
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        required
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>
                                        Last Name:
                                    </label>
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        required
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>
                                        Email Address:
                                    </label>
                                </td>
                                <td>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>
                                        Password:
                                    </label>
                                </td>
                                <td>
                                    <input
                                        type="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        required
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="2" style={{ textAlign: 'center' }}>
                                    <button type="submit">Submit</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        </>
    );
};

export default SignUp;
