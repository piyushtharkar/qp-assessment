package com.question.pro.grocery.request;

import com.question.pro.grocery.model.Grocery;
import com.question.pro.grocery.model.User;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class OrderDto {

//    private Integer userId;
    private Integer groceryId;
    private Integer quantity;
    private Double price;
    private Double totalPrice;
    private String status;
}
