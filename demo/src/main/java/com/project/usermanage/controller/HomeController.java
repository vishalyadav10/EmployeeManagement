package com.project.usermanage.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.project.usermanage.entity.Employee;
import com.project.usermanage.service.EmployeService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;
@CrossOrigin("*")
@RestController
public class HomeController {
    @Autowired
     public EmployeService employeService;
     @PostMapping("/adduser")
     public List<Employee> addUser(@RequestBody Employee ourEmp){
        return employeService.createEmployee(ourEmp);
     }
     @GetMapping("/allUsers") 
     public List<Employee> allUsers (){
        return employeService.getAllEmp();
     }
     @GetMapping("/userByid/{id}")
     public Employee UserById(@PathVariable Integer id){
        return employeService.getEmpById(id);
     }
     @PutMapping("/update/{id}")
     public Employee updateemployee(@PathVariable Integer id, @RequestBody Employee emp) {
       return employeService.updateEmployee(id,emp);
     }
     @DeleteMapping("/delete/{id}")
     public List<Employee> DeleteUserById(@PathVariable Integer id){
      employeService.DeleteUserById(id);
      return allUsers();
   }
     
    
}
