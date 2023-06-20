package com.example.demo.exception;

public class UserNotFoundException extends RuntimeException {
    public UserNotFoundException(Long id){
        super("The user is not exist");
    }
    public UserNotFoundException(String name){
        super("The user is not exist");
    }
}
