package com.question.pro.grocery.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;
    @Column(name = "name",nullable=false)
    private String name;
    @Column(name = "email",nullable=false, unique=true)
    private String email;
    @Column(name = "password",nullable=false)
    private String password;
    @Column(name = "role",nullable=false, unique=true)
    private String role;


}
