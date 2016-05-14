package com.kpicoop.service;

import com.bionic.model.WorkSchedule;

import java.util.List;


public interface WorkScheduleService {

    WorkSchedule addWorkSchedule(WorkSchedule workSchedule);

    void delete(int id);

    void delete(WorkSchedule workSchedule);

    WorkSchedule getById(int id);

    WorkSchedule editWorkSchedule(WorkSchedule workSchedule);

    List<WorkSchedule> getAll();

    WorkSchedule getByUserId(int user_id);

    WorkSchedule saveWorkSchedule(WorkSchedule workSchedule);

    int getContractHours(WorkSchedule workSchedule);
}
