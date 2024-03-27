package com.airtajal.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

import com.airtajal.model.customer;

public interface customer_repo extends PagingAndSortingRepository<customer, Long>, CrudRepository<customer, Long> {

}
