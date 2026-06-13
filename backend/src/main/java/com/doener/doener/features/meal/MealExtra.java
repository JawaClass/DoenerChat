package com.doener.doener.features.meal;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Entity;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@Entity
@Table(name = "addon_meals")
@Data // Generates getters, setters, toString, equals, hashCode
@NoArgsConstructor // Default constructor required by JPA
@SuperBuilder
public class MealExtra extends BaseMeal {

    @JsonBackReference
    @ManyToOne
    private MainMeal mainMeal;

}
