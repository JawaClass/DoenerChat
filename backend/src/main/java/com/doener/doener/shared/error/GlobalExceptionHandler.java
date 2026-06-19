package com.doener.doener.shared.error;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.ErrorResponse;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.MissingServletRequestParameterException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Map<String, String>> handleValidationException(MethodArgumentNotValidException ex) {
        Map<String, String> errors = new HashMap<>();
        ex.getBindingResult().getFieldErrors().forEach(error ->
            errors.put(error.getField(), error.getDefaultMessage())
        );
        return ResponseEntity.badRequest().body(errors);
    }
    @ExceptionHandler(MissingServletRequestParameterException.class)
    public ResponseEntity<Map<String, String>> handleMissingParam(MissingServletRequestParameterException ex) {
        Map<String, String> errors = new HashMap<>();
        errors.put("Missing paramater", ex.getParameterName());
        return ResponseEntity.badRequest().body(errors);
    }

    @ExceptionHandler(DoenerException.class)
    public ResponseEntity<Map<String, String>> handleOurExceptions(DoenerException ex) {

        Map<String, String> errors = new HashMap<>();
        errors.put("error", ex.getMessage());
        errors.put("where", ex.getClass().getSimpleName());
        return ResponseEntity.badRequest().body(errors);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<Map<String, String>> handleGeneral(Exception ex) {

        Map<String, String> errors = new HashMap<>();
        errors.put("error", ex.getMessage());
        errors.put("where", ex.getClass().getSimpleName());
        return ResponseEntity.internalServerError().body(errors);
    }
}