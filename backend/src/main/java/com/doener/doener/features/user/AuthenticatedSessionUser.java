package com.doener.doener.features.user;

import java.io.Serializable;
import java.util.Collection;
import java.util.List;

import org.jspecify.annotations.Nullable;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import com.doener.doener.features.user.User.Role;
import lombok.Data;

@Data
public class AuthenticatedSessionUser implements UserDetails {
    private final Long id;
    private final String email;
    private final Role role;
    private String password;

    public AuthenticatedSessionUser(User user, String password) {
        id = user.getId();
        email = user.getEmail();
        role = user.getRole();
        this.password = password;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority("ROLE_" + role.name()));
    }

    @Override
    public @Nullable String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return email;
    }
}
