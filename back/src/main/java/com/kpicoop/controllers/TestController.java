package com.kpicoop.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

/**
 * author Dima Budko
 * v.0.1
 */

@Controller
public class TestController {

    @RequestMapping(value = "test", method = RequestMethod.GET)
    public String verifyUser() {
        return "index";
    }

}
