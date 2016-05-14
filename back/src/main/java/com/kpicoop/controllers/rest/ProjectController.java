package com.kpicoop.controllers.rest;

import com.kpicoop.model.Project;
import com.kpicoop.model.User;
import com.kpicoop.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.DefaultResourceLoader;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

/**
 * author Dima Budko
 * v.0.1
 *
 */
@RestController
@RequestMapping(value = "/rest/api/v1/project/")
public class ProjectController {

    @Autowired
    private ProjectService projectService;

    @ResponseBody
    @CrossOrigin(origins = "http://localhost:9000")
    @RequestMapping(value = "{projectId}", method = RequestMethod.GET)
    public Project getProject(@PathVariable int projectId) {
        Project project = projectService.findById(projectId);
        return project;
    }

    @ResponseBody
    @CrossOrigin(origins = "http://localhost:9000")
    @RequestMapping(value = "", method = RequestMethod.GET)
    public List<Project> getProjects() {
        List<Project> projects = projectService.getProjects();
        return projects;
    }



}
