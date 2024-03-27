package com.airtajal.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

import com.airtajal.model._3d;

public interface _3d_repo extends CrudRepository<_3d, Long>, PagingAndSortingRepository<_3d, Long> {

}
