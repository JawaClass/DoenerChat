package com.doener.doener.features.user.registration;

import com.doener.doener.shared.models.TableDefaultEntity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "user_social_account", uniqueConstraints = @UniqueConstraint(columnNames = { "user_id", "provider" }))
@Data // Generates getters, setters, toString, equals, hashCode
@NoArgsConstructor // Default constructor required by JPA
@AllArgsConstructor // Constructor with all fields
@Builder // Optional: allows Merchant.builder().name("foo").build()
public class UserSocialAccount extends TableDefaultEntity {
    public enum AuthProvider {
        LOCAL, GOOGLE, GITHUB
    }

    @ManyToOne
    private User user;

    @Enumerated(EnumType.STRING)
    private AuthProvider provider;

    @Column(nullable = false)
    private String providerUserId;

    @Column
    private String providerEmail;
}
