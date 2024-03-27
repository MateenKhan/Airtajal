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

import com.airtajal.model.item;
import com.airtajal.service.item_service;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.experimental.FieldDefaults;

@RestController()
@RequestMapping("/item")
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class item_controller {

    item_service service;

    @GetMapping("/{pageNumber}/{pageSize}")
    public Page<item> findAll(@RequestParam int pageNumber, @RequestParam int pageSize) {
        return service.findall(pageNumber, pageSize);
    }

    @PostMapping("/")
    public item save(@NonNull @RequestBody item entity) {
        return service.save(entity);
    }

    @PutMapping("/")
    public item update(@NonNull @RequestBody item entity) {
        return service.save(entity);
    }

    @DeleteMapping("/")
    public item delete(@NonNull @RequestBody item entity) {
        service.delete(entity);
        return entity;
    }

    @GetMapping("/{id}")
    public item update(@NonNull @RequestParam Long id) {
        return service.findById(id);
    }
}
