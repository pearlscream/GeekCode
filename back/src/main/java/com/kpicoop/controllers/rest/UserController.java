package com.kpicoop.controllers.rest;

import com.kpicoop.model.User;
import com.kpicoop.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

    @RequestMapping(value = "{userId}", method = RequestMethod.PUT)
    public User updateUser(@PathVariable int userId, @RequestBody User user) {
        User newUser = userService.saveUser(user);
        return newUser;
    }
}
