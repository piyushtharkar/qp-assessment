package com.question.pro.grocery.repository;

import com.question.pro.grocery.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User,Integer> {
    boolean existsByEmail(String email);
    @Query(value = "select * from users where email=:email and password=:password",nativeQuery = true)
    User findByEmailAndPassword(String email,String password);

}
