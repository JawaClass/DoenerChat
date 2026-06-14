package com.doener.doener.shared.http;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
public class HttpResponseFilter extends OncePerRequestFilter {

    private static final Logger logger = LoggerFactory.getLogger(HttpResponseFilter.class);

    @Override
    protected void doFilterInternal(HttpServletRequest request,
            HttpServletResponse response,
            FilterChain filterChain)
            throws ServletException, IOException {

        logger.info("Filtering response for request: {}", request.getRequestURI());

        // Add a custom header
        response.addHeader("X-Custom-Header", "MyHeaderValue");

        // Add a cookie
        Cookie cookie = new Cookie("myCookie", "cookieValue");
        cookie.setHttpOnly(true);
        cookie.setPath("/");
        cookie.setMaxAge(3600); // 1 hour
        response.addCookie(cookie);

        // Continue filter chain
        filterChain.doFilter(request, response);
    }
}
