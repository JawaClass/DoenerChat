package com.doener.doener.features.meal;

import java.math.BigDecimal;
import java.time.LocalDateTime;

import com.doener.doener.shared.models.Currency;
import com.doener.doener.shared.models.MealType;
import com.doener.doener.shared.models.TableDefaultEntity;

import jakarta.persistence.Column;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.MappedSuperclass;
import jakarta.persistence.PrePersist;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.SuperBuilder; 

@MappedSuperclass
@SuperBuilder
@NoArgsConstructor
@Getter
@Setter
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
    private Currency currency = Currency.EUR;

    @Enumerated(EnumType.STRING) // Store as VARCHAR in DB
    @Column(nullable = false)
    private MealType type;

    @PrePersist
    protected void onCreate() {
        System.out.println("PrePersist called in BaseMeal");
        if (this.currency == null) this.currency = Currency.EUR;   
        super.onCreate();
    }
}
