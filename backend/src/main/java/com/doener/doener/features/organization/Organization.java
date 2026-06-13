package com.doener.doener.features.organization;

import java.util.List;

import com.doener.doener.features.address.Address;
import com.doener.doener.features.restaurant.Restaurant;
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
public class Organization extends TableDefaultEntity {

    private String name;

    private Address address;

    private List<Restaurant> restaurants;

}