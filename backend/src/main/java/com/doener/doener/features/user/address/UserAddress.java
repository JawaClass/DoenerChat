package com.doener.doener.features.user.address;

import com.doener.doener.features.address.Address;
import com.doener.doener.features.user.User;
import com.doener.doener.shared.models.TableDefaultEntity;

import jakarta.persistence.Entity;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Entity
@Table(uniqueConstraints = {
        @UniqueConstraint(columnNames = { "user_id", "address_id" })
})
@Builder
@EqualsAndHashCode(callSuper = true)
@Data
public class UserAddress extends TableDefaultEntity {

    @ManyToOne
    private User user;

    @OneToOne
    private Address address;

    private Integer ordering;

}