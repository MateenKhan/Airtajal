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

import com.airtajal.model._1d;
import com.airtajal.service._1d_service;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.experimental.FieldDefaults;

@RestController()
@RequestMapping("/_1d")
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class _1d_controller {

    _1d_service service;

    @GetMapping("/{pageNumber}/{pageSize}")
    public Page<_1d> findAll(@RequestParam int pageNumber, @RequestParam int pageSize) {
        return service.findall(pageNumber, pageSize);
    }

    @PostMapping("/")
    public _1d save(@NonNull @RequestBody _1d entity) {
        return service.save(entity);
    }

    @PutMapping("/")
    public _1d update(@NonNull @RequestBody _1d entity) {
        return service.save(entity);
    }

    @DeleteMapping("/")
    public _1d delete(@NonNull @RequestBody _1d entity) {
        service.delete(entity);
        return entity;
    }

    @GetMapping("/{id}")
    public _1d update(@NonNull @RequestParam Long id) {
        return service.findById(id);
    }
}
