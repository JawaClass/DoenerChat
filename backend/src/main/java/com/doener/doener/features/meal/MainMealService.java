package com.doener.doener.features.meal;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.doener.doener.shared.services.BaseCrudService;

@Service
public class MainMealService extends BaseCrudService<MainMeal, Long> {

    protected MainMealService(MainMealRepository repository) {
        super(repository);
    }

    private static final Logger logger = LoggerFactory.getLogger(MainMealService.class);
 
}
