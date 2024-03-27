package com.airtajal.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Service;

import com.airtajal.model.item;
import com.airtajal.repository.item_repo;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.experimental.FieldDefaults;

@Service
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class item_service {

    item_repo item_repo;

    public Page<item> findall(int pageNumber, int pageSize) {
        return item_repo.findAll(PageRequest.of(pageNumber, pageSize));
    }

    public item save(@NonNull item entity) {
        return item_repo.save(entity);
    }

    public void delete(@NonNull item entity) {
        item_repo.delete(entity);
    }

    public item findById(@NonNull Long id) {
        return item_repo.findById(id).orElse(new item());
    }
}
