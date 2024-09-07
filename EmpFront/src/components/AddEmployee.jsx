import React, { useState } from 'react';
import { createEmployee } from '../services/Employeeservice';
import { useNavigate } from 'react-router-dom';
function AddEmployee() {
    const [formData, setFormData] = useState({
        id: '',
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        createEmployee(formData)
        .then(response => {       
             console.log('Success:', response.data); 
             navigate('/employee')
            })
        ;
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }
  return (
    <div className="container">
    <h2 className="text-center">Add new employee Detail</h2>
    <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
            />
        </div>
        <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
            />
        </div>
        <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
            />
        </div>
        <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
            />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
</div>
);
};
export default AddEmployee