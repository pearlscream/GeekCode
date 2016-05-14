package com.kpicoop.controllers;

import org.springframework.core.io.DefaultResourceLoader;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

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


    private ResourceLoader resourceLoader = new DefaultResourceLoader();
    @ResponseBody
    @RequestMapping(value = "/image",  produces = "image/png")
    public Resource texture() {
        return resourceLoader.getResource("classpath:images/Smile.png");
    }
}
