import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
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
            // Yahan apna Render ka backend URL dalo (yahi main galti thi)
            const response = await axios.post("https://sourcevault-backend.onrender.com/signup", formData);
            alert("Signup Successful!");
            console.log(response.data);
        } catch (error) {
            console.error("Signup error:", error.response?.data || error.message);
            alert("Signup Failed! Check console for details.");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="username" placeholder="Username" onChange={handleChange} required />
            <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
            <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
            <button type="submit">Sign Up</button>
        </form>
    );
};

export default Signup;
