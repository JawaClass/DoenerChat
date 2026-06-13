package com.doener.doener.features.address;

import com.doener.doener.shared.models.TableDefaultEntity;

import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@Data
@Entity
public class Address extends TableDefaultEntity {

    private String country;

    private String state;

    private String city;

    private String zipCode;

    private String streetName;

    private String streetNo;

    private String additionalInfo;
}
