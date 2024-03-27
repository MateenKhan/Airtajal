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

import com.airtajal.model._2d;
import com.airtajal.service._2d_service;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.experimental.FieldDefaults;

@RestController()
@RequestMapping("/_2d")
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class _2d_controller {

    _2d_service service;

    @GetMapping("/{pageNumber}/{pageSize}")
    public Page<_2d> findAll(@RequestParam int pageNumber, @RequestParam int pageSize) {
        return service.findall(pageNumber, pageSize);
    }

    @PostMapping("/")
    public _2d save(@NonNull @RequestBody _2d entity) {
        return service.save(entity);
    }

    @PutMapping("/")
    public _2d update(@NonNull @RequestBody _2d entity) {
        return service.save(entity);
    }

    @DeleteMapping("/")
    public _2d delete(@NonNull @RequestBody _2d entity) {
        service.delete(entity);
        return entity;
    }

    @GetMapping("/{id}")
    public _2d update(@NonNull @RequestParam Long id) {
        return service.findById(id);
    }
}
