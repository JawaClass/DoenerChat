package com.doener.doener.config.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

import com.doener.doener.features.user.UserDetailsServiceImpl;

import lombok.AllArgsConstructor;

@Configuration
@EnableWebSecurity
@AllArgsConstructor
public class SecurityConfig {

	private final UserDetailsServiceImpl userDetailsServiceImpl;

	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		http
				.userDetailsService(userDetailsServiceImpl)
				.authorizeHttpRequests(authorize -> authorize
						.requestMatchers("/api/public/**", "/login", "/register", "/").permitAll()
						.anyRequest().authenticated());

		return http.build();
	}

}