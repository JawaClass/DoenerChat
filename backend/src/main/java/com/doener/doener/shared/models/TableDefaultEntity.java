package com.doener.doener.shared.models;

import java.time.LocalDateTime;
import java.util.UUID;

import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedBy;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

import com.doener.doener.features.user.User;

import jakarta.persistence.Column;
import jakarta.persistence.EntityListeners;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.MappedSuperclass;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.SuperBuilder;

/**
 * EntityListener required for Spring Boot Data Auditing to automatically get
 * and set the current user on any entity that creates or updates thats
 * extending this base class
 */
@EntityListeners(AuditingEntityListener.class)
@SuperBuilder
@NoArgsConstructor
@MappedSuperclass
@Getter
@Setter
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public abstract class TableDefaultEntity {

    /**
     * internal unique identifier
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @EqualsAndHashCode.Include
    private Long id;

    /**
     * external unique identifier
     */
    @Column(nullable = false, unique = true, updatable = false)
    private UUID uuid;

    @Column(nullable = true)
    private Boolean disabled;

    @Column(nullable = true)
    private Boolean deleted;

    @CreatedDate
    @Column(name = "create_date", nullable = false, updatable = false)
    private LocalDateTime createDate;

    @LastModifiedDate
    @Column(name = "last_updated")
    private LocalDateTime lastUpdated;

    @CreatedBy
    @ManyToOne(optional = true, fetch = FetchType.LAZY)
    @JoinColumn(name = "created_by_id", nullable = true, updatable = false)
    private User createdBy;

    @LastModifiedBy
    @ManyToOne(optional = true, fetch = FetchType.LAZY)
    @JoinColumn(name = "updated_by_id", nullable = true, updatable = false)
    private User lastUpdatedBy;

    @PrePersist
    protected void onCreate() {
        // var now = LocalDateTime.now();

        // createDate = now;
        // lastUpdated = now;

        if (uuid == null) {
            uuid = UUID.randomUUID();
        }

    }

    @PreUpdate
    protected void onUpdate() {
        // this.lastUpdated = LocalDateTime.now();
    }
}
