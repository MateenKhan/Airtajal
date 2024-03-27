package com.airtajal.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Service;

import com.airtajal.model._1d;
import com.airtajal.repository._1d_repo;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.experimental.FieldDefaults;

@Service
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class _1d_service {

    _1d_repo _1d_repo;

    public Page<_1d> findall(int pageNumber, int pageSize) {
        return _1d_repo.findAll(PageRequest.of(pageNumber, pageSize));
    }

    public _1d save(@NonNull _1d entity) {
        return _1d_repo.save(entity);
    }

    public void delete(@NonNull _1d entity) {
        _1d_repo.delete(entity);
    }

    public _1d findById(@NonNull Long id) {
        return _1d_repo.findById(id).orElse(new _1d());
    }
}
