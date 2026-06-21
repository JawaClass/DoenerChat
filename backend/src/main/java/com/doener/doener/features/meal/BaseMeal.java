package com.doener.doener.features.meal;

import java.math.BigDecimal;

import com.doener.doener.shared.models.Currency;
import com.doener.doener.shared.models.TableDefaultEntity;

import jakarta.persistence.Column;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.MappedSuperclass;
import jakarta.persistence.PrePersist;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@MappedSuperclass
@SuperBuilder
@NoArgsConstructor
@Data
@EqualsAndHashCode(callSuper = true)
public abstract class BaseMeal extends TableDefaultEntity {

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private Integer calories;

    @Column(nullable = true)
    private String description;

    @Column(nullable = false, precision = 10, scale = 2)
    private BigDecimal price;

    @Enumerated(EnumType.STRING) // Store as VARCHAR in DB
    @Column(nullable = false)
    @Builder.Default
    private Currency currency = Currency.EUR;

    @PrePersist
    protected void onCreate() {
        System.out.println("PrePersist called in BaseMeal");
        if (this.currency == null)
            this.currency = Currency.EUR;
        super.onCreate();
    }
}
