package com.kpicoop.controllers.rest;

import com.kpicoop.model.File;
import com.kpicoop.service.FileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/rest/api/v1/projects/{project_id}/files")
public class FileContoller {
    @Autowired
    private FileService fileService;

    @RequestMapping(value = "/{file_id}", method = RequestMethod.GET)
    public File getFile(@PathVariable("file_id") final int file_id) {
        return fileService.findById(file_id);
    }

    @RequestMapping(value = "/{file_id}", method = RequestMethod.PUT)
    public File updateFile(@PathVariable("file_id") final int file_id, @RequestBody Map<String, Object> text) {
        File file = fileService.updateText(file_id, (String) text.get("text"));
        return file;
    }


}
