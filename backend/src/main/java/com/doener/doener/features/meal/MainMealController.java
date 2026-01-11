package com.doener.doener.features.meal;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.doener.doener.shared.services.BaseCrudController;
import com.doener.doener.shared.services.BaseCrudService;

@RestController
@RequestMapping("/main-meals")
public class MainMealController extends BaseCrudController<MainMeal> {

    public MainMealController(BaseCrudService<MainMeal, Long> service) {
        super(service); 
    }
 
}
