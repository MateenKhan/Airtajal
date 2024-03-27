package com.airtajal.model;

import java.util.Set;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AccessLevel;
import lombok.Data;
import lombok.experimental.FieldDefaults;
import java.io.Serializable;

@Data
@FieldDefaults(level = AccessLevel.PRIVATE)
@Entity
public class customer implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    Long id;

    String name, phone;
    Integer area, area_price, total_plywood_sheets, plywood_sheet_wastage;
    Long start_date, end_date;
    Set<item> items;
    Set<_3d> _3d_arr;

}
