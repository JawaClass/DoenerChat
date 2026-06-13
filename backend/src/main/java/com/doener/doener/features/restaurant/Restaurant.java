package com.doener.doener.features.restaurant;

import com.doener.doener.features.address.Address;
import com.doener.doener.features.user.User;
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
public class Restaurant extends TableDefaultEntity {

    private String name;

    private String description;

    private User owner;

    private Address address;

}
