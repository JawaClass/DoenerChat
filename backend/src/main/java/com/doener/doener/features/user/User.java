package com.doener.doener.features.user;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.jspecify.annotations.Nullable;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.doener.doener.features.organization.Organization;
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
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.persistence.Transient;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "users")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class User extends TableDefaultEntity implements UserDetails {

    public enum Role {
        USER, MERCHANT, ADMIN
    }

    @Column(nullable = false, unique = true)
    private String email;

    private Boolean emailConfirmed;

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

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        // return List.of();
        return List.of(new SimpleGrantedAuthority("ROLE_" + role.name()));
    }

    @Transient // not persisted, just held in memory for Spring Security
    private String _password;

    @Override
    public @Nullable String getPassword() {
        return _password;
    }

    @Override
    public String getUsername() {
        return this.email;
    }

}
