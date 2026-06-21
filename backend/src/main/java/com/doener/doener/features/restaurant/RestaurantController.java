package com.doener.doener.features.restaurant;

import java.util.List;

import org.apache.tomcat.util.http.parser.Authorization;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.doener.doener.config.auth.CurrentUser;
import com.doener.doener.features.restaurant.RestaurantService.RestaurantCreateRequest;
import com.doener.doener.features.user.User;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/restaurants")
public class RestaurantController {

    private final RestaurantService restaurantService;

    @GetMapping("")
    public ResponseEntity<List<Restaurant>> getAll(@CurrentUser User user) {

        var organizationId = user.getOrganization().getId();
        var restaurants = restaurantService.findByOrganizationId(organizationId);

        return ResponseEntity.ok(restaurants);
    }

    @PostMapping("")
    public ResponseEntity<Restaurant> create(@CurrentUser User user, @RequestBody RestaurantCreateRequest request) {

        var organization = user.getOrganization();
        var restaurants = restaurantService.createForOwner(request, user, organization);

        return ResponseEntity.ok(restaurants);
    }

}
