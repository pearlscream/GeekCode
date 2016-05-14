package com.kpicoop.controllers.rest;

import com.kpicoop.model.User;
import com.kpicoop.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/rest/api/v1/users/")
public class UserController {

    @Autowired
    private UserService userService;

    @RequestMapping(value = "{userId}", method = RequestMethod.GET)
    public User getUser(@PathVariable int userId) {
        User user = userService.findById(userId);
        return user;
    }

    @RequestMapping(value = "{userId}", method = RequestMethod.GET)
    public User updateUser(@PathVariable int userId) {
        User user = userService.findById(userId);
        return user;
    }
}
