package com.doener.doener.features.meal;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.SuperBuilder; 

@Entity
@Table(name = "main_meals") 
@NoArgsConstructor // Default constructor required by JPA 
@AllArgsConstructor // Constructor with all fields
@Data
@SuperBuilder
public class MainMeal extends BaseMeal {

 
    @OneToMany(mappedBy = "mainMeal", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<MealExtra> extras;

    public List<MealExtra> addExtra(MealExtra... extrasToAdd) {
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
