package com.doener.doener.features.foodMenu.foodMenuDrink;

import com.doener.doener.features.drinks.Drink;
import com.doener.doener.features.foodMenu.FoodMenu;
import com.doener.doener.shared.models.TableDefaultEntity;

import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.MapsId;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "food_menu_drinks", uniqueConstraints = @UniqueConstraint(columnNames = { "food_menu_id", "drinks_id" }))
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@EqualsAndHashCode(callSuper = true)
public class FoodMenuDrink extends TableDefaultEntity {

    @ManyToOne
    @JoinColumn(name = "food_menu_id")
    private FoodMenu foodMenu;

    @ManyToOne
    @JoinColumn(name = "drinks_id")
    private Drink drink;

    private Integer position;
}
