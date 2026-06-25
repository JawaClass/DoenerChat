package com.doener.doener.features.restaurant.RestaurantFoodMenu;

import com.doener.doener.features.foodMenu.FoodMenu;
import com.doener.doener.features.restaurant.Restaurant;
import com.doener.doener.shared.models.TableDefaultEntity;

import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "food_menu_drinks", uniqueConstraints = @UniqueConstraint(columnNames = { "restaurant_id",
        "food_menu_id" }))
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@EqualsAndHashCode(callSuper = true)
public class RestaurantFoodMenu extends TableDefaultEntity {

    @ManyToOne
    @JoinColumn(name = "restaurant_id")
    private Restaurant restaurant;

    @ManyToOne
    @JoinColumn(name = "food_menu_id")
    private FoodMenu foodMenu;

    private Integer position;
}