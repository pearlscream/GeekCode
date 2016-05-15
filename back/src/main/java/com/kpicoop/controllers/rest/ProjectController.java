package com.kpicoop.controllers.rest;

import com.kpicoop.model.Project;
import com.kpicoop.model.User;
import com.kpicoop.service.ProjectService;
import com.kpicoop.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * author Dima Budko
 * v.0.1
 *
 */


// project title photo need (active or new) author description
@RestController
@RequestMapping(value = "/rest/api/v1/project/")
public class ProjectController {

    @Autowired
    private ProjectService projectService;

    @Autowired
    private UserService userService;

    @ResponseBody
    @CrossOrigin(origins = "http://localhost:9000")
    @RequestMapping(value = "{projectId}", method = RequestMethod.GET)
    public Project getProject(@PathVariable int projectId) {
        Project project = projectService.findById(projectId);
        System.out.println(project.getUsers());
        System.out.println(project.getComments());
        System.out.println(project.getTasks());
        return project;
    }

    @RequestMapping(value = "{projectId}/users", method = RequestMethod.GET)
    public List<User> getProjectUsers(@PathVariable int projectId) {
        List<User> users = userService.findByProjectId(projectId);
        return users;
    }

    @ResponseBody
    @CrossOrigin(origins = "http://localhost:9000")
    @RequestMapping(value = "", method = RequestMethod.GET)
    public List<Project> getProjects() {
        List<Project> projects = projectService.getProjects();
        for (Project project : projects) {
            System.out.println(project.getComments());
        }
        return projects;
    }

    @ResponseBody
    @CrossOrigin(origins = "http://localhost:9000")
    @RequestMapping(value = "", method = RequestMethod.POST)
    public void addProject(@RequestBody Project project) {
        projectService.addProject(project);
    }
    
}
