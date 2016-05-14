package com.kpicoop.service.Impl;

import com.kpicoop.model.Project;
import com.kpicoop.repositories.ProjectRepository;
import com.kpicoop.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProjectServiceImpl implements ProjectService {

    @Autowired
    ProjectRepository projectRepository;

    @Override
    public Project findById(int id) {
        return projectRepository.findOne(id);
    }

    @Override
    public Project addProject(Project project) {
        return projectRepository.saveAndFlush(project);
    }

    @Override
    public void delete(int id) {
        projectRepository.delete(id);
    }

    @Override
    public Project saveProject(Project project) {
        return projectRepository.saveAndFlush(project);
    }
}
