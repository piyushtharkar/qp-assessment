package com.question.pro.grocery.service;

import com.question.pro.grocery.model.Grocery;
import com.question.pro.grocery.model.Order;
import com.question.pro.grocery.model.User;
import com.question.pro.grocery.repository.GroceryRepository;
import com.question.pro.grocery.repository.OrderRepository;
import com.question.pro.grocery.repository.UserRepository;
import com.question.pro.grocery.request.OrderDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class OrderServiceImpl implements OrderService{

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private GroceryRepository groceryRepository;

    @Override
    public String orderMultipleGroceryItems(Integer userId, List<OrderDto> orderDtoList) {
        User user=userRepository.findById(userId).orElseThrow(()->new RuntimeException("user not found"));
        List<Order> orderList=new ArrayList<>();
        if(user.getRole().equals("User")){
            for(OrderDto orderDto:orderDtoList){
                Order order=new Order();
                order.setUser(user);
                Grocery grocery= groceryRepository.findById(orderDto.getGroceryId()).orElse(null);
                order.setGrocery(grocery);
                order.setQuantity(orderDto.getQuantity());
                order.setPrice(orderDto.getPrice());
                order.setTotalPrice(orderDto.getTotalPrice());
                order.setStatus(orderDto.getStatus());
                orderList.add(order);
            }
            orderRepository.saveAll(orderList);
            return "Ordered multiple grocery items";
        }
        return "To order the grocery role must be user";
    }
}
