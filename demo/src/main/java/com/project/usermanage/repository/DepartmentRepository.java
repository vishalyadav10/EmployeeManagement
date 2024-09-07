package com.project.usermanage.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.usermanage.entity.Department;

public interface DepartmentRepository extends JpaRepository<Department, Long> {
    
}