package com.doener.doener.features.foodMenu;

import java.util.ArrayList;
import java.util.List;

import com.doener.doener.features.foodMenu.foodMenuDrink.FoodMenuDrink;
import com.doener.doener.features.foodMenu.foodMenuMeal.FoodMenuMeal;
import com.doener.doener.features.organization.Organization;
import com.doener.doener.shared.models.TableDefaultEntity;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OrderBy;
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

    @Builder.Default
    @OneToMany(mappedBy = "foodMenu", cascade = CascadeType.ALL, orphanRemoval = true)
    @OrderBy("position ASC")
    private List<FoodMenuMeal> meals = new ArrayList<>();

    @Builder.Default
    @OneToMany(mappedBy = "foodMenu", cascade = CascadeType.ALL, orphanRemoval = true)
    @OrderBy("position ASC")
    private List<FoodMenuDrink> drinks = new ArrayList<>();

}
