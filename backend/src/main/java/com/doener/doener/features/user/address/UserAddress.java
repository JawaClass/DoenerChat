package com.doener.doener.features.user;

import com.doener.doener.features.address.Address;
import com.doener.doener.shared.models.TableDefaultEntity;

import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.MapsId;
import jakarta.persistence.PrePersist;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;
import lombok.Builder;
import lombok.Data;

@Entity
@Table(uniqueConstraints = {
        @UniqueConstraint(columnNames = { "user_id", "address_id" })
})
@Builder
@Data
public class UserAddress extends TableDefaultEntity {

    @ManyToOne
    private User user;

    @ManyToOne
    private Address address;

    private Integer ordering;

    @PrePersist
    void onSave() {
        var currentAdresses = user.getAddresses();

        if (ordering == null) {
            var maxOrdering = currentAdresses.stream().map(a -> a.getOrdering()).max(Integer::compareTo).orElse(-1);
            ordering = maxOrdering + 1;
        }
    }
}