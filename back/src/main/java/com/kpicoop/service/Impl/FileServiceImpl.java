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
        return fileRepository.getOne(id);
    }

    @Override
    public File addFile(File file) {
        return fileRepository.saveAndFlush(file);
    }

    @Override
    public void delete(int id) {
        fileRepository.delete(id);
    }

    @Override
    public File findByPath(String path) {
        return fileRepository.findByPath(path);
    }

    @Override
    public File saveFile(File file) {
        return fileRepository.saveAndFlush(file);
    }

}
