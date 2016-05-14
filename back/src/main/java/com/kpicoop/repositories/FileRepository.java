package com.kpicoop.repositories;

import com.kpicoop.model.File;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FileRepository extends JpaRepository<File, Integer> {

    @Query("select p.files from Project p where p.id =:project_id")
    List<File> findByProjectId(@Param("project_id") int project_id);

}