package com.project.usermanage.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.project.usermanage.repository.EmployeeRepository;
@Service
public class CustomUserDetailsService implements UserDetailsService{
    @Autowired
    public EmployeeRepository employeeRepository;
     

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
         return employeeRepository.findByEmail(username).orElseThrow(() -> new UsernameNotFoundException("User not found " + username)); 
    }

}
