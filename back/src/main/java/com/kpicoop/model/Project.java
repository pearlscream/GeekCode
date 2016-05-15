package com.kpicoop.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;


// project title photo need (active or new) author description

@Entity
@Table(name = "projects")
public class Project implements java.io.Serializable{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "projectId")
    private Integer id;

    private String title;

    private String description;

    private String gitRepo;

    private byte[] imageFile;


    @ManyToOne(cascade = CascadeType.ALL)
    private User author;

    private boolean isNew;

    @JsonIgnore
    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "user_project", joinColumns = @JoinColumn(name = "projectId"), inverseJoinColumns = @JoinColumn(name = "userId"))
    private List<User> users;

    @JsonIgnore
    @OneToMany(mappedBy = "project")
    private List<File> files;

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

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public byte[] getImageFile() {
        return imageFile;
    }

    public void setImageFile(byte[] imageFile) {
        this.imageFile = imageFile;
    }

    public boolean isNew() {
        return isNew;
    }

    public void setNew(boolean aNew) {
        isNew = aNew;
    }

    public User getAuthor() {
        return author;
    }

    public void setAuthor(User author) {
        this.author = author;
    }

    public String getGitRepo() {
        return gitRepo;
    }

    public void setGitRepo(String gitRepo) {
        this.gitRepo = gitRepo;
    }
}
