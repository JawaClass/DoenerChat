package com.doener.doener.features.meal;

import java.util.ArrayList;
import java.util.List;

import com.doener.doener.shared.models.MealType;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@Entity
@Table(name = "main_meals")
@NoArgsConstructor
@AllArgsConstructor
@Data
@EqualsAndHashCode(callSuper = true)
@SuperBuilder
public class MainMeal extends BaseMeal {

    @Enumerated(EnumType.STRING) // Store as VARCHAR in DB
    @Column(nullable = false)
    private MealType type;

    @Builder.Default
    @OneToMany(mappedBy = "mainMeal", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<MealExtra> extras = new ArrayList<>();

    public List<MealExtra> addExtra(List<MealExtra> extrasToAdd) {
        if (this.extras == null) {
            this.extras = new ArrayList<>();
        }

        for (MealExtra extra : extrasToAdd) {
            extra.setMainMeal(this); // link child to parent
            this.extras.add(extra);
        }

        return this.extras;
    }
}
