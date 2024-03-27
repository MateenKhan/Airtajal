package com.airtajal.controller;

import org.springframework.data.domain.Page;
import org.springframework.lang.NonNull;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.airtajal.model.customer;
import com.airtajal.service.customer_service;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.experimental.FieldDefaults;

@RestController()
@RequestMapping("/customer")
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class customer_controller {

    customer_service service;

    @GetMapping("/{pageNumber}/{pageSize}")
    public Page<customer> findAll(@RequestParam int pageNumber, @RequestParam int pageSize) {
        return service.findall(pageNumber, pageSize);
    }

    @PostMapping("/")
    public customer save(@NonNull @RequestBody customer entity) {
        return service.save(entity);
    }

    @PutMapping("/")
    public customer update(@NonNull @RequestBody customer entity) {
        return service.save(entity);
    }

    @DeleteMapping("/")
    public customer delete(@NonNull @RequestBody customer entity) {
        service.delete(entity);
        return entity;
    }

    @GetMapping("/{id}")
    public customer update(@NonNull @RequestParam Long id) {
        return service.findById(id);
    }
}
