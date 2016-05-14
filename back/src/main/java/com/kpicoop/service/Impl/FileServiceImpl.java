package com.kpicoop.service.Impl;

import com.kpicoop.model.File;
import com.kpicoop.repositories.FileRepository;
import com.kpicoop.service.FileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FileServiceImpl implements FileService {

    @Autowired
    private FileRepository fileRepository;

    @Override
    public File findById(int id) {
        return null;
    }

    @Override
    public File addFile(File file) {
        return null;
    }

    @Override
    public void delete(int id) {

    }

    @Override
    public File findByPath(String path) {
        return null;
    }

    @Override
    public File saveUser(File file) {
        return null;
    }
}
