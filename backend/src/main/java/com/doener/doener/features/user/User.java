package com.doener.doener.features.user.registration;

import java.util.List;

import com.doener.doener.shared.models.TableDefaultEntity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "users")
@Data // Generates getters, setters, toString, equals, hashCode
@NoArgsConstructor // Default constructor required by JPA
@AllArgsConstructor // Constructor with all fields
@Builder // Optional: allows Merchant.builder().name("foo").build()
public class User extends TableDefaultEntity {

    public enum Role {
        USER, MERCHANT, ADMIN
    }

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private Role role;

    @OneToMany
    private List<UserSocialAccount> userSocialAccounts;

}
