import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8080/';

//export const login = (username, password) => axios.post(REST_API_BASE_URL+"authenticate",username,password)
export const login = (username, password) => {
    return axios.post(REST_API_BASE_URL+"authenticate", {
        username,
        password
    }, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
};

export const listEmployees = (token) => {
    return axios.get(`${REST_API_BASE_URL}allUsers`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
};

export const createEmployee = (employee) => {
    return axios.post(`${REST_API_BASE_URL}adduser`, employee, {
        headers: {

            'Content-Type': 'application/json'
        }
    });
};

export const getEmployee = (employeeId, token) => {
    return axios.get(`${REST_API_BASE_URL}userByid/${employeeId}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
};

export const updateEmployee = (employeeId, employee, token) => {
    return axios.put(`${REST_API_BASE_URL}update/${employeeId}`, employee, {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    });
};

export const deleteEmployee = (employeeId, token) => {
    return axios.delete(`${REST_API_BASE_URL}delete/${employeeId}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
};