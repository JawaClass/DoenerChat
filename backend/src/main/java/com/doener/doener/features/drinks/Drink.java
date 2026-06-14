package com.doener.doener.features.drinks;

import com.doener.doener.shared.models.TableDefaultEntity;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "drinks")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Drink extends TableDefaultEntity {

    private String sizeInMilliLiter;

}
