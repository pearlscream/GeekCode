package com.kpicoop.service.Impl;

import com.kpicoop.model.User;
import com.kpicoop.repositories.UserRepository;
import com.kpicoop.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public User findById(int id) {
        return userRepository.getOne(id);
    }

    @Override
    public User addUser(User user) {
        return userRepository.saveAndFlush(user);
    }

    @Override
    public void delete(int id) {
        userRepository.delete(id);
    }

    @Override
    public User findByUsername(String name) {
        return userRepository.findByUsername(name);
    }

    @Override
    public User saveUser(User user) {
        return userRepository.saveAndFlush(user);
    }
}
