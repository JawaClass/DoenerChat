package com.doener.doener.features.organization;

import java.util.ArrayList;
import java.util.List;

import com.doener.doener.features.address.Address;
import com.doener.doener.features.restaurant.Restaurant;
import com.doener.doener.shared.models.TableDefaultEntity;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@Data
@EqualsAndHashCode(callSuper = true)
@Entity
public class Organization extends TableDefaultEntity {

    private String name;

    @OneToOne(cascade = CascadeType.ALL, orphanRemoval = true)
    private Address address;

    @Builder.Default
    @OneToMany
    private List<Restaurant> restaurants = new ArrayList<>();

}