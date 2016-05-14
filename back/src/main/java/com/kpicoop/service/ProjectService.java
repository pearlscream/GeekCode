package com.kpicoop.service;

import com.kpicoop.model.Project;

import java.util.List;

public interface ProjectService {

    Project findById(int id);
    List<Project> getProjects();
    Project addProject(Project project);
    void delete(int id);
    Project saveProject(Project project);
}
