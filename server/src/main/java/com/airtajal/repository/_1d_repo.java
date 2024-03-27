package com.airtajal.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

import com.airtajal.model._1d;

public interface _1d_repo extends CrudRepository<_1d, Long>, PagingAndSortingRepository<_1d, Long> {

}
