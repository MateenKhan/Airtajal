package com.airtajal.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Service;

import com.airtajal.model.customer;
import com.airtajal.repository.customer_repo;

import jakarta.annotation.Nonnull;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.experimental.FieldDefaults;

@Service
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class customer_service {

    customer_repo customer_repo;

    public Page<customer> findall(int pageNumber, int pageSize) {
        return customer_repo.findAll(PageRequest.of(pageNumber, pageSize));
    }

    public customer save(@NonNull customer entity) {
        return customer_repo.save(entity);
    }

    public void delete(@NonNull customer entity) {
        customer_repo.delete(entity);
    }

    public customer findById(@NonNull Long id) {
        return customer_repo.findById(id).orElse(new customer());
    }
}
