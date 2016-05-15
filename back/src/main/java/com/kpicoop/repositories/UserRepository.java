package com.kpicoop.repositories;

import com.kpicoop.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Integer>{
    @Query("select p.users from Project p where p.id =:projectId")
    List<User> findByProjectId(@Param("projectId") int projectId);

//    User findByUsername(String name);
}
