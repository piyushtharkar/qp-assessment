package com.question.pro.grocery.repository;

import com.question.pro.grocery.model.Grocery;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GroceryRepository extends JpaRepository<Grocery,Integer> {
    @Query(value = "select * from grocery where quantity!=0",nativeQuery = true)
    List<Grocery> findAllAvailableGroceryItems();
}
