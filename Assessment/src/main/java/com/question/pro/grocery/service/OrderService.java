package com.question.pro.grocery.service;

import com.question.pro.grocery.request.OrderDto;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface OrderService {
    String orderMultipleGroceryItems(Integer userId, List<OrderDto> orderDtoList);
}
