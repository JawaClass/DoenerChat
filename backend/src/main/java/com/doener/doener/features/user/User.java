package com.doener.doener.features.user;

import java.util.ArrayList;
import java.util.List;

import com.doener.doener.features.user.address.UserAddress;
import com.doener.doener.features.user.social.UserSocialAccount;
import com.doener.doener.shared.models.TableDefaultEntity;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
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
    @Enumerated(EnumType.STRING)
    private Role role;

    @OneToMany
    private List<UserSocialAccount> userSocialAccounts;

    @ManyToMany(cascade = { CascadeType.PERSIST, CascadeType.MERGE })
    @JoinTable(name = "user_address", joinColumns = @JoinColumn(name = "user_id"), inverseJoinColumns = @JoinColumn(name = "address_id"))
    @Builder.Default
    private List<UserAddress> addresses = new ArrayList<>();

}
