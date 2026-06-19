package com.doener.doener.dummyData;

import java.math.BigDecimal;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.doener.doener.features.meal.MainMeal;
import com.doener.doener.features.meal.MainMealRepository;
import com.doener.doener.features.meal.MealExtra;
import com.doener.doener.features.user.registration.IUserRegistrationRequest.UserLocalRegistrationRequest;
import com.doener.doener.features.user.registration.UserRegistrationService;
import com.doener.doener.shared.models.MealType;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@Component
public class DummyDataLoader implements CommandLineRunner {

        private final MainMealRepository mainMealRepo;

        private final UserRegistrationService userRegistrationService;

        private static final Logger logger = LoggerFactory.getLogger(DummyDataLoader.class);

        @Override
        public void run(String... args) throws Exception {
                // Clear existing data if you want
                mainMealRepo.deleteAll();

                // // Add 100 dummy merchants
                // for (int i = 1; i <= 5; i++) {
                // Merchant m = new Merchant();
                // m.setName("Merchant " + i);
                // merchantRepo.save(m);
                // }

                for (int i = 1; i <= 2; i++) {

                        var m = MainMeal.builder()
                                        .description("very delcious meal " + i)
                                        .name("Meal " + i)
                                        .calories(100 + i)
                                        .price(BigDecimal.valueOf(5.99))
                                        .type(MealType.MEAT)
                                        // .extras()
                                        .build();

                        var extras = List.of(
                                        MealExtra.builder().name("Extra Sauce").type(MealType.FISH).calories(1)
                                                        .price(BigDecimal.valueOf(0.50)).build(),
                                        MealExtra.builder().name("Extra Cheese").type(MealType.FISH).calories(2)
                                                        .price(BigDecimal.valueOf(1.00)).build());
                        m.addExtra(extras);
                        mainMealRepo.save(m);
                }

                // userRegistrationService.registerUser(UserLocalRegistrationRequest.builder().email("test@gmail.com")
                // .name("testuser").password("1234aabJJD33837//___ä##").build());

                logger.info("Dummy Data loaded!");
        }
}
