package com.question.pro.grocery.service;

import com.question.pro.grocery.model.Grocery;
import com.question.pro.grocery.request.GroceryDto;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface GroceryService {
    String addGrocery(GroceryDto groceryDto, Integer userId);

    List<Grocery> getAllExistingGroceryItems(Integer userId);

    String deleteGroceryItem(Integer groceryId,Integer userId);

    String updateGroceryItem(Integer groceryId, Integer userId,GroceryDto groceryDto);

    List<Grocery> getAllAvailableGroceryItems(Integer userId);
}
