package com.kpicoop.service;

import com.kpicoop.model.File;

import java.util.List;

public interface FileService {

    File findById(int id);
    File addFile(File file);
    void delete(int id);
    File findByPath(String path);
    File saveFile(File file);

    File updateText(int file_id, String text);

    List<File> findByProjectId(int project_id);
}
