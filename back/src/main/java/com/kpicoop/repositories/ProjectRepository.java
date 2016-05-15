package com.kpicoop.repositories;

import com.kpicoop.model.File;
import com.kpicoop.model.Project;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProjectRepository extends JpaRepository<Project, Integer> {
    @Query("select u.projects from User u where u.id =:user_id")
    List<Project> findByUserId(@Param("user_id") int user_id);
}