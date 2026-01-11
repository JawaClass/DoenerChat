package com.doener.doener.shared.models;
 
import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.MappedSuperclass;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.SuperBuilder;

@SuperBuilder
@NoArgsConstructor
@MappedSuperclass
@Getter
@Setter
public abstract class TableDefaultEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "create_date", nullable = false, updatable = false) 
    private LocalDateTime createDate = LocalDateTime.now();

    @Column(name = "last_updated")
    private LocalDateTime lastUpdated;

 
    @PrePersist
    protected void onCreate() {
        this.createDate = LocalDateTime.now();
        this.lastUpdated = this.createDate; 
    }

    @PreUpdate
    protected void onUpdate() {
        this.lastUpdated = LocalDateTime.now();
    }
}
