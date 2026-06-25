package com.doener.doener.features.foodMenu;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.doener.doener.shared.services.BaseCrudService;

@Service
public class FoodMenuService extends BaseCrudService<FoodMenu, Long, FoodMenuRepository> {

    protected FoodMenuService(FoodMenuRepository repository) {
        super(repository);
    }

    private static final Logger logger = LoggerFactory.getLogger(FoodMenuService.class);

}
