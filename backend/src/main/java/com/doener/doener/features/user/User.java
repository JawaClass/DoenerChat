package com.doener.doener.features.user;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import com.doener.doener.features.organization.Organization;
import com.doener.doener.features.user.address.UserAddress;
import com.doener.doener.features.user.social.UserSocialAccount;
import com.doener.doener.shared.models.TableDefaultEntity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "users")
@Data
@EqualsAndHashCode(callSuper = true)
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class User extends TableDefaultEntity {

    public enum Role {
        USER, MERCHANT, ADMIN
    }

    @Column(nullable = false, unique = true)
    private String email;

    private Boolean emailConfirmed;

    private String emailConfirmToken;

    private LocalDateTime emailConfirmTokenCreateTime;

    @Column(nullable = true)
    private String name;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private Role role;

    @ManyToOne
    private Organization organization;

    @OneToMany
    @Builder.Default
    private List<UserSocialAccount> userSocialAccounts = new ArrayList<>();

    @OneToMany
    @Builder.Default
    private List<UserAddress> addresses = new ArrayList<>();

}
