package com.kpicoop.service.Impl;

import com.kpicoop.model.Comment;
import com.kpicoop.repositories.CommentRepository;
import com.kpicoop.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CommentServiceImpl implements CommentService {
    @Autowired
    private CommentRepository commentRepository;

    @Override
    public Comment saveComment(Comment comment) {
        return commentRepository.saveAndFlush(comment);
    }
}
