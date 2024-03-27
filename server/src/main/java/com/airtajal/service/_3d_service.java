package com.airtajal.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Service;

import com.airtajal.model._3d;
import com.airtajal.repository._3d_repo;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.experimental.FieldDefaults;

@Service
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class _3d_service {

    _3d_repo _3d_repo;

    public Page<_3d> findall(int pageNumber, int pageSize) {
        return _3d_repo.findAll(PageRequest.of(pageNumber, pageSize));
    }

    public _3d save(@NonNull _3d entity) {
        return _3d_repo.save(entity);
    }

    public void delete(@NonNull _3d entity) {
        _3d_repo.delete(entity);
    }

    public _3d findById(@NonNull Long id) {
        return _3d_repo.findById(id).orElse(new _3d());
    }
}
