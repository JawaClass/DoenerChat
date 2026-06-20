package com.doener.doener.features.user.password;

import com.doener.doener.features.user.User;
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
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserPassword extends TableDefaultEntity {

    @OneToOne
    private User user;

    @Column(nullable = false)
    private String passwordHashed;

}
