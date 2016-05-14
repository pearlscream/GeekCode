package com.kpicoop.service;

import com.kpicoop.model.User;


public interface UserService {

    User findById(int id);
    User addUser(User user);
    void delete(int id);
//    User findByUsername(String name);
    User saveUser(User user);

}
