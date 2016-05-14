package com.kpicoop.service.Impl;

import com.kpicoop.model.File;
import com.kpicoop.repositories.FileRepository;
import com.kpicoop.service.FileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;

@Service
public class FileServiceImpl implements FileService {

    @Autowired
    private FileRepository fileRepository;

    @Override
    public File findById(int id) {
        File file = fileRepository.findOne(id);
        return file;
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
        return null;
//        return fileRepository.findByPath(path);
    }

    @Override
    public File saveFile(File file) {
        return fileRepository.saveAndFlush(file);
    }

    @Override
    public File updateText(int file_id, String text) {
        File file = fileRepository.getOne(file_id);

        String path = file.getPath();
        try {
            Files.write(Paths.get(path), text.getBytes());
        } catch (IOException e) {
            System.out.println(path);
            System.out.println("Nope:(");
        }
        return file;

    }

}
