package com.kpicoop.controllers.rest;

import com.kpicoop.model.Comment;
import com.kpicoop.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/rest/api/v1/comments")
public class CommentController {
    @Autowired
    private CommentService commentService;

    @RequestMapping(method = RequestMethod.GET)
    public Comment getFile(@RequestBody Comment comment) {
        return commentService.saveComment(comment);
    }

}
