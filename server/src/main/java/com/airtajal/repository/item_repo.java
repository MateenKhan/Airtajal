package com.airtajal.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

import com.airtajal.model.item;

public interface item_repo extends CrudRepository<item, Long>, PagingAndSortingRepository<item, Long> {

}
