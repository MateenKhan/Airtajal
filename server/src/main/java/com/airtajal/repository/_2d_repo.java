package com.airtajal.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

import com.airtajal.model._2d;

public interface _2d_repo extends CrudRepository<_2d, Long>, PagingAndSortingRepository<_2d, Long> {

}
