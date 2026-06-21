package com.doener.doener.features.restaurant;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.doener.doener.features.organization.Organization;
import com.doener.doener.features.user.User;
import com.doener.doener.shared.services.BaseCrudService;

@Service
public class RestaurantService extends BaseCrudService<Restaurant, Long, RestaurantRepository> {

    public static record RestaurantCreateRequest(String name) {
    }

    private static final Logger logger = LoggerFactory.getLogger(RestaurantService.class);

    protected RestaurantService(RestaurantRepository repository) {
        super(repository);
    }

    public List<Restaurant> findByOrganizationId(Long organizationId) {
        return repository.findByOrganizationId(organizationId);
    }

    public Restaurant createForOwner(RestaurantCreateRequest request, User owner, Organization organization) {
        Restaurant restaurant = Restaurant.builder().name(request.name()).build();
        restaurant.setOrganization(organization);
        restaurant.setOwner(owner);
        return repository.save(restaurant);
    }

}
