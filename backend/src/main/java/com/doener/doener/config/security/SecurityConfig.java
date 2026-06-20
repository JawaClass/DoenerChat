package com.doener.doener.config.security;

import java.util.List;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

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
				.cors(Customizer.withDefaults())
				.csrf(x -> x.disable())
				.userDetailsService(userDetailsServiceImpl)
				.authorizeHttpRequests(authorize -> authorize
						.requestMatchers("/", "/api/auth/login", "/api/auth/register", "/api/auth/status",
								"/api/auth/password/reset/**")
						.permitAll()
						.anyRequest().authenticated());

		return http.build();
	}

	@Bean
	public CorsConfigurationSource corsConfigurationSource() {
		CorsConfiguration config = new CorsConfiguration();

		config.setAllowedOrigins(List.of("http://localhost:4200"));
		config.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "OPTIONS"));
		config.setAllowedHeaders(List.of("*"));

		// IMPORTANT for sessions (Spring Security login)
		config.setAllowCredentials(true);

		UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
		source.registerCorsConfiguration("/**", config);

		return source;
	}
}

// .formLogin(form -> form
// /**
// *
// * On failed login return HTTP CODE 301
// *
// */
// .failureHandler((request, response, exception) -> {
// response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
// })

// /**
// *
// * On succesful login return HTTP CODE 200
// *
// */
// .successHandler((request, response, authentication) -> {
// response.setStatus(HttpServletResponse.SC_OK);
// }))