package com.doener.doener.features.user.registration;

import com.doener.doener.shared.models.TableDefaultEntity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "user_password")
@Data // Generates getters, setters, toString, equals, hashCode
@NoArgsConstructor // Default constructor required by JPA
@AllArgsConstructor // Constructor with all fields
@Builder // Optional: allows Merchant.builder().name("foo").build()
public class UserPassword extends TableDefaultEntity {

    @OneToOne
    private User user;

    @Column(nullable = false)
    private String passwordHashed;

    // @Column(nullable = false)
    // private String passwordSalt;

}
