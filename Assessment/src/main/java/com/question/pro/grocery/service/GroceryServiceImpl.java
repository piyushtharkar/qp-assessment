package com.question.pro.grocery.service;

import com.question.pro.grocery.model.Grocery;
import com.question.pro.grocery.model.User;
import com.question.pro.grocery.repository.GroceryRepository;
import com.question.pro.grocery.repository.UserRepository;
import com.question.pro.grocery.request.GroceryDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class GroceryServiceImpl implements GroceryService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private GroceryRepository groceryRepository;

    @Override
    public String addGrocery(GroceryDto groceryDto, Integer userId) {
        User user=userRepository.findById(userId).orElseThrow(()->new RuntimeException("user not found"));
        if(user.getRole().equals("Admin")){
                Grocery grocery=new Grocery();
                grocery.setName(groceryDto.getName());
                grocery.setPrice(groceryDto.getPrice());
                grocery.setQuantity(groceryDto.getQuantity());
                groceryRepository.save(grocery);

            return "Groceries Saved Successfully";
        }
        return "Only admin can add Groceries";
    }

    @Override
    public List<Grocery> getAllExistingGroceryItems(Integer userId) {

        List<Grocery>groceryList=new ArrayList<>();
        User user=userRepository.findById(userId).orElseThrow(()->new RuntimeException("user not found"));
        if(user.getRole().equals("Admin")){
            groceryList= groceryRepository.findAll();
            return groceryList;
        }
        return groceryList;
    }

    @Override
    public String deleteGroceryItem(Integer groceryId,Integer userId) {
        User user=userRepository.findById(userId).orElseThrow(()->new RuntimeException("user not found"));
        if(user.getRole().equals("Admin")){
            Grocery grocery= groceryRepository.findById(groceryId).orElse(null);
            if(grocery!=null){
                groceryRepository.deleteById(groceryId);
                return "Grocery item successfully deleted";
            }else {
                return "Grocery item not found";
            }
        }
        return " Only admin can delete Groceries";
    }

    @Override
    public String updateGroceryItem(Integer groceryId, Integer userId, GroceryDto groceryDto) {
        User user=userRepository.findById(userId).orElseThrow(()->new RuntimeException("user not found"));
        if(user.getRole().equals("Admin")){
            Grocery grocery= groceryRepository.findById(groceryId).orElse(null);
            if(grocery!=null){
                grocery.setName(groceryDto.getName());
                grocery.setPrice(groceryDto.getPrice());
                grocery.setQuantity(groceryDto.getQuantity());
                groceryRepository.save(grocery);
                return "Grocery item updated successfully";
            }else {
                return "Grocery item not found";
            }
        }
        return " Only admin can update Groceries";
    }

    @Override
    public List<Grocery> getAllAvailableGroceryItems(Integer userId) {
        User user=userRepository.findById(userId).orElseThrow(()->new RuntimeException("user not found"));
        List<Grocery>groceryList=new ArrayList<>();
        if(user.getRole().equals("User")){
            groceryList=groceryRepository.findAllAvailableGroceryItems();
            return groceryList;
        }
        return groceryList;
    }
}
