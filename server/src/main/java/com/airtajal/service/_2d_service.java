package com.airtajal.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Service;

import com.airtajal.model._2d;
import com.airtajal.repository._2d_repo;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.experimental.FieldDefaults;

@Service
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class _2d_service {

    _2d_repo _2d_repo;

    public Page<_2d> findall(int pageNumber, int pageSize) {
        return _2d_repo.findAll(PageRequest.of(pageNumber, pageSize));
    }

    public _2d save(@NonNull _2d entity) {
        return _2d_repo.save(entity);
    }

    public void delete(@NonNull _2d entity) {
        _2d_repo.delete(entity);
    }

    public _2d findById(@NonNull Long id) {
        return _2d_repo.findById(id).orElse(new _2d());
    }
}
