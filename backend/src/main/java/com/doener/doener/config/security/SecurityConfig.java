package com.doener.doener.config.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

import com.doener.doener.features.user.UserDetailsServiceImpl;

import jakarta.servlet.http.HttpServletResponse;
import lombok.AllArgsConstructor;

@Configuration
@EnableWebSecurity
@AllArgsConstructor
public class SecurityConfig {

	private final UserDetailsServiceImpl userDetailsServiceImpl;

	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		http
				.formLogin(form -> form
						/**
						 * 
						 * On failed login return HTTP CODE 301
						 * 
						 */
						.failureHandler((request, response, exception) -> {
							response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
						})

						/**
						 * 
						 * On succesful login return HTTP CODE 200
						 * 
						 */
						.successHandler((request, response, authentication) -> {
							response.setStatus(HttpServletResponse.SC_OK);
						}))

				.csrf(x -> x.disable())
				.userDetailsService(userDetailsServiceImpl)
				.authorizeHttpRequests(authorize -> authorize
						.requestMatchers("/login", "/register", "/").permitAll()
						.anyRequest().authenticated());

		return http.build();
	}

}