package com.doener.doener.features.restaurant;

import java.util.List;

import com.doener.doener.shared.services.BaseCrudRepository;

public interface RestaurantRepository extends BaseCrudRepository<Restaurant, Long> {

    List<Restaurant> findByOrganizationId(Long organizationId);


}
