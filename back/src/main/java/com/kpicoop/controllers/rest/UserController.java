package com.kpicoop.controllers.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

/**
 * author Dima Budko
 * v.0.1
 *
 */
@RestController
@RequestMapping(value = "/rest/api/v1/user/")
public class UserController {


    @ResponseBody
    @RequestMapping(value = "", method = RequestMethod.GET)
    public String editUser() {
        return "test";
    }
}
