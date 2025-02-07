package com.question.pro.grocery.controller;

import com.question.pro.grocery.model.Grocery;
import com.question.pro.grocery.request.OrderDto;
import com.question.pro.grocery.service.GroceryService;
import com.question.pro.grocery.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/order")
public class OrderController {
    @Autowired
    private OrderService orderService;

    @PostMapping("/get-all-available-grocery-items")
    public String orderMultipleGroceryItems(@RequestParam(name = "userId") Integer userId,@RequestBody List<OrderDto> orderDtoList) {
        return orderService.orderMultipleGroceryItems(userId,orderDtoList);
    }
}
