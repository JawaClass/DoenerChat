package com.doener.doener.features.foodMenu;

import java.util.ArrayList;
import java.util.List;

import com.doener.doener.features.drinks.Drink;
import com.doener.doener.features.meal.MainMeal;
import com.doener.doener.features.organization.Organization;
import com.doener.doener.features.user.User;
import com.doener.doener.shared.models.TableDefaultEntity;

import jakarta.persistence.Entity;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "food_menu")
@Data
@EqualsAndHashCode(callSuper = true)
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class FoodMenu extends TableDefaultEntity {

    private String name;

    @ManyToOne
    private Organization organization;

    @ManyToOne
    private User createdBy;

    @Builder.Default
    @OneToMany
    private List<MainMeal> meals = new ArrayList<>();

    @Builder.Default
    @OneToMany
    private List<Drink> drinks = new ArrayList<>();

}
