import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
    // 1. Form dikhana hai ya nahi, iske liye state
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("https://sourcevault-backend.onrender.com/signup", formData);
            alert("Account created successfully!");
        } catch (error) {
            console.error(error);
            alert("Error creating account.");
        }
    };

    return (
        <div className="signup-container">
            {/* Yahan tumhari original styling/content rahega */}
            <h2>Welcome to SourceVault</h2>

            {/* 2. Agar showForm 'false' hai, toh button dikhao */}
            {!showForm && (
                <button onClick={() => setShowForm(true)}>
                    Create New Account
                </button>
            )}

            {/* 3. Agar showForm 'true' hai, tabhi form dikhao */}
            {showForm && (
                <form onSubmit={handleSubmit}>
                    <input name="username" placeholder="Username" onChange={handleChange} required />
                    <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
                    <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
                    <button type="submit">Submit Details</button>
                </form>
            )}
        </div>
    );
};

export default Signup;
