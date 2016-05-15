package com.kpicoop.service;

import com.kpicoop.model.User;

import java.util.List;


public interface UserService {

    User findById(int id);
    User addUser(User user);
    void delete(int id);
//    User findByUsername(String name);
    User saveUser(User user);

    List<User> findByProjectId(int projectId);
}
