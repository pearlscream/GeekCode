package com.kpicoop.service.Impl;

import com.kpicoop.model.Project;
import com.kpicoop.repositories.ProjectRepository;
import com.kpicoop.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.List;

@Service
public class ProjectServiceImpl implements ProjectService {

    @Autowired
    ProjectRepository projectRepository;

    @Override
    public Project findById(int id) {
        return projectRepository.findOne(id);
    }

    @Override
    public List<Project> getProjects() {
        List<Project> projects = projectRepository.findAll();
        projects.sort(new Comparator<Project>() {
            @Override
            public int compare(Project o1, Project o2) {
                if (o1.getViews() > o2.getViews())
                    return -1;
                else if (o1.getViews() == o2.getViews())
                    return 0;
                else return +1;
            }
        });
        return projects;
    }

    @Override
    public Project addProject(Project project) {
        project.setViews(1);
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

    @Override
    public List<Project> findByUserId(int user_id) {
        return projectRepository.findByUserId(user_id);
    }


}
