package com.doener.doener;

import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import com.doener.doener.features.user.password.InvalidPasswordError;
import com.doener.doener.features.user.registration.UserRegistrationService;
import com.doener.doener.features.user.registration.IUserRegistrationRequest.UserLocalRegistrationRequest;

@SpringBootTest
@Transactional
class UserRegistrationTest {

	@Autowired
	private UserRegistrationService userRegistrationService;

	@Test
	void registerUser_WithInvalidPassword_ThrowsInvalidPasswordError() {

		var userRegisterRequest = UserLocalRegistrationRequest.builder().email("test@gmail.com").name("test")
				.password("1234").build();

		assertThrows(InvalidPasswordError.class, () -> userRegistrationService.registerUser(userRegisterRequest));

	}

	@Test
	void registerUser_WithValidPassword_ReturnsUser() {

		var userRegisterRequest = UserLocalRegistrationRequest.builder().email("test@gmail.com").name("test")
				.password("123456789GFJDJ#%/(hdh").build();

		var result = userRegistrationService.registerUser(userRegisterRequest);

		assertTrue(result.getId() != null);
		assertTrue(result.getEmail().equals(userRegisterRequest.getEmail()));
		assertTrue(result.getName().equals(userRegisterRequest.getName()));
		assertTrue(result.getUserSocialAccounts().isEmpty());

	}

}
