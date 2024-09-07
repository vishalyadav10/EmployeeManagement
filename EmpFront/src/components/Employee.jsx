import React, {useEffect, useState} from 'react'
import { useNavigate } from "react-router-dom";

import { createEmployee, deleteEmployee, listEmployees, updateEmployee } from '../services/Employeeservice'

const Employee = () => {
    const navigate = useNavigate();
const handleClick = () =>{
    navigate('/addemployee');
}
    const [employees, setEmployees] = useState([])
    const token = localStorage.getItem('token'); // Retrieve the token from localStorage
    useEffect(() => {
        getAllEmployees();
    }, [])
    console.log(employees);
    function getAllEmployees(){
        listEmployees(token).then((response) => {
            setEmployees(response.data);
        }).catch(error => {console.error(error);
        })
    }
    const removeEmployee = (id) => {
        deleteEmployee(id,token).then((response) => {
            console.log(response.data);
            getAllEmployees();

        })
    };
    const updatingEmployee = (id) => {
        navigate(`/updateemployee/${id}`);
    };

  return (
    <div className='container'>

        <h2 className='text-center'>List of Employees</h2>
        <button className='btn btn-primary mb-2' onClick={handleClick}>Add Employee</button>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Employee Id</th>
                    <th>Employee First Name</th>
                    <th>Employee Last Name</th>
                    <th>Employee Email Id</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {employees.map(employee => (
                        <tr key = {employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                            <td>
                                <button className='btn btn-info' onClick={() => updatingEmployee(employee.id)}>Update</button>
                                <button className='btn btn-danger' onClick={() => removeEmployee(employee.id)}
                                    style={{marginLeft: '10px'}}
                                >Delete</button>
                            </td>
                        </tr>
                    ))}
              
            </tbody>
        </table>
    </div>
  )
}

export default Employee