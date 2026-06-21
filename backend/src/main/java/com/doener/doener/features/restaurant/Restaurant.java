package com.doener.doener.features.restaurant;

import com.doener.doener.features.address.Address;
import com.doener.doener.features.organization.Organization;
import com.doener.doener.features.user.User;
import com.doener.doener.shared.models.TableDefaultEntity;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
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
public class Restaurant extends TableDefaultEntity {

    private String name;

    private String description;

    @ManyToOne(optional = false)
    @JoinColumn(nullable = false)
    private User owner;

    @OneToOne(cascade = CascadeType.ALL, orphanRemoval = true)
    private Address address;

    @ManyToOne
    private Organization organization;

}
