import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getEmployee, updateEmployee } from '../services/Employeeservice';

function UpdateEmployee() {
    const { id } = useParams(); // Extract the employee ID from the URL
    const [employee, setEmployee] = useState({});
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const token = localStorage.getItem('token'); // Retrieve the token from localStorage
    useEffect(() => {
        getEmployeeData();
    }, []);
    const getEmployeeData = () => {
        getEmployee(id, token).then((response) => {
            setEmployee(response.data);
        }).catch(error => {
            console.error(error);
            setError('Failed to fetch employee data.');
        });
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee(prevEmployee => ({
            ...prevEmployee,
            [name]: value
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        updateEmployee(id, employee, token).then((response) => {
            console.log('Updated Employee:',response.data);
            navigate('/employee'); // Redirect back to the employee list after successful update
        }).catch(error => {
            console.error(error);
            setError('Failed to update employee.');
        });
    };

  return (
    <div className="container">
    <h2 className="text-center">Update Employee</h2>
    {error && <p className="text-danger">{error}</p>}
    <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label>First Name:</label>
            <input
                type="text"
                className="form-control"
                name="firstName"
                value={employee.firstName}
                onChange={handleChange}
                required
            />
        </div>
        <div className="form-group">
            <label>Last Name:</label>
            <input
                type="text"
                className="form-control"
                name="lastName"
                value={employee.lastName}
                onChange={handleChange}
                required
            />
        </div>
        <div className="form-group">
            <label>Email:</label>
            <input
                type="email"
                className="form-control"
                name="email"
                value={employee.email}
                onChange={handleChange}
                required
            />
        </div>
        <button type="submit" className="btn btn-primary mt-3">Update Employee</button>
    </form>
</div>
  )
}

export default UpdateEmployee