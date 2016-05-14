package com.kpicoop.service;

import com.kpicoop.model.Project;

public interface ProjectService {

    Project findById(int id);
    Project addProject(Project project);
    void delete(int id);
    Project saveProject(Project project);
}
