package com.bolinhx.APIJavaRailway.domain.repository;

import com.bolinhx.APIJavaRailway.domain.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    boolean existsByAccountNumber(String accountNumber);

}
