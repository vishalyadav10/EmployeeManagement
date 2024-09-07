package com.project.usermanage.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.usermanage.entity.Employee;
import com.project.usermanage.repository.EmployeeRepository;

import org.springframework.security.crypto.password.PasswordEncoder;


@Service
public class EmployeService {

    @Autowired
    public EmployeeRepository employeeRepository;

   
    @Autowired
    PasswordEncoder passwordEncoder;

    public List<Employee> getAllEmp() {
		return employeeRepository.findAll();
	}
    
    public List<Employee> createEmployee(Employee ouremp){
        Long maxId = employeeRepository.findMaxId();
        System.out.println("Max ID: " + maxId);

        if (maxId == null) {
            maxId = 0L;
        }
        ouremp.setId(maxId+1);
        ouremp.setPassword(passwordEncoder.encode(ouremp.getPassword())); 
		employeeRepository.save(ouremp);
		return getAllEmp();
	}

    public Employee getEmpById(Integer id) {
        return employeeRepository.findById(id).get();
    }

    public Employee updateEmployee(Integer id, Employee user) {
        Employee empold= getEmpById(id);

        empold.setId(user.getId());
        empold.setFirstName(user.getFirstName());
        empold.setLastName(user.getLastName());
        empold.setEmail(user.getEmail());
        employeeRepository.save(empold);
        return getEmpById(id);
    }

    public void DeleteUserById(Integer id) {
        employeeRepository.deleteById(id);
    }
}
