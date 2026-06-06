package com.doener.doener;

import static org.junit.jupiter.api.Assertions.assertThrows;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;
import com.doener.doener.features.user.registration.UserRegistrationService;
import com.doener.doener.features.user.registration.IUserRegistrationRequest.UserLocalRegistrationRequest;
import com.doener.doener.features.user.registration.InvalidPasswordError;

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

}
