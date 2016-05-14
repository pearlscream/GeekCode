package com.kpicoop.model;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "projects")
public class Project {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "projectId")
    private Integer id;

    private String description;

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "user_project", joinColumns = @JoinColumn(name = "projectId"), inverseJoinColumns = @JoinColumn(name = "userId"))
    private List<User> users = new ArrayList<>();

    @OneToMany(mappedBy = "project")
    private List<File> files = new ArrayList<>();




    public List<User> getUsers() {
        return users;
    }

    public List<File> getFiles() {
        return files;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setUsers(List<User> users) {
        this.users = users;
    }

    public void setFiles(List<File> files) {
        this.files = files;
    }
}
