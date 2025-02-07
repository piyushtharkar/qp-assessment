package com.question.pro.grocery.controller;

import com.question.pro.grocery.model.Grocery;
import com.question.pro.grocery.request.GroceryDto;
import com.question.pro.grocery.service.GroceryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/grocery")
public class GroceryController {

    @Autowired
    private GroceryService groceryService;

    @PostMapping("/add-grocery-item")
    public String addGrocery(@RequestBody GroceryDto groceryDto , @RequestParam(name = "userId") Integer userId) {
        return groceryService.addGrocery(groceryDto,userId);
    }

    @GetMapping("/view-all-grocery-items")
    public List<Grocery> getAllGroceryItems(@RequestParam(name = "userId") Integer userId) {
        return groceryService.getAllExistingGroceryItems(userId);
    }

    @DeleteMapping("/delete-grocery-item")
    public String deleteGroceryItem(@RequestParam(name = "groceryId") Integer groceryId,@RequestParam(name = "userId") Integer userId) {
        return groceryService.deleteGroceryItem(groceryId,userId);
    }

    @PutMapping("/update-grocery-item")
    public String updateGroceryItem(@RequestParam(name = "groceryId") Integer groceryId,@RequestParam(name = "userId") Integer userId,@RequestBody GroceryDto groceryDto ) {
        return groceryService.updateGroceryItem(groceryId,userId,groceryDto);
    }

    @GetMapping("/get-all-available-grocery-items")
    public List<Grocery> getAllAvailableGroceryItems(@RequestParam(name = "userId") Integer userId) {
        return groceryService.getAllAvailableGroceryItems(userId);
    }

  



}
