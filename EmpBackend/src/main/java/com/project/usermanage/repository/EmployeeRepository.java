package com.project.usermanage.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.project.usermanage.entity.Employee;
import java.util.Optional;


@Repository
public interface EmployeeRepository extends JpaRepository<Employee,Integer> {
    Optional<Employee> findByEmail(String email);
    @Query("SELECT MAX(e.id) FROM Employee e")
    Long findMaxId();
}
