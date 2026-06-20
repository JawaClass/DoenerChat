package com.doener.doener.shared.error;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.ErrorResponse;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.MissingServletRequestParameterException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import lombok.Builder;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @Builder
    private static record ErrorClientResponse(String errorCode, String errorGroup, String message, String where,
            Map<String, Object> body) {
    }

    @ExceptionHandler(NotAuthorizedException.class)
    public ResponseEntity<Void> handleNotAuthorizedException(NotAuthorizedException ex) {
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
    }

    @ExceptionHandler(UserNotFoundException.class)
    public ResponseEntity<ErrorClientResponse> handleUserNotFoundException(UserNotFoundException ex) {
        var err = ErrorClientResponse.builder().errorCode(ex.getErrorCode()).message(ex.getMessage()).build();
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(err);
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ErrorClientResponse> handleValidationException(MethodArgumentNotValidException ex) {
        Map<String, Object> errors = new HashMap<>();
        ex.getBindingResult().getFieldErrors()
                .forEach(error -> errors.put(error.getField(), error.getDefaultMessage()));

        var err = ErrorClientResponse.builder().errorCode("METHOD_ARGUMENT_NOT_VALID").errorGroup("VALIDATION_ERROR")
                .message(ex.getMessage()).where(ex.getClass().getSimpleName()).body(errors).build();
        return ResponseEntity.badRequest().body(err);
    }

    @ExceptionHandler(MissingServletRequestParameterException.class)
    public ResponseEntity<ErrorClientResponse> handleMissingParam(MissingServletRequestParameterException ex) {
        Map<String, Object> errors = new HashMap<>();
        errors.put("Missing paramater", ex.getParameterName());

        var err = ErrorClientResponse.builder().errorCode("MISING_PARAMATER").errorGroup("VALIDATION_ERROR")
                .message(ex.getMessage()).where(ex.getClass().getSimpleName()).body(errors).build();
        return ResponseEntity.badRequest().body(err);
    }

    @ExceptionHandler(DoenerException.class)
    public ResponseEntity<ErrorClientResponse> handleOurExceptions(DoenerException ex) {

        var err = ErrorClientResponse.builder().errorCode(ex.getErrorCode()).errorGroup("APP_ERROR")
                .message(ex.getMessage()).where(ex.getClass().getSimpleName()).body(null).build();
        return ResponseEntity.badRequest().body(err);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ErrorClientResponse> handleGeneral(Exception ex) {
        var err = ErrorClientResponse.builder().errorCode("UNHANDLED_ERROR").errorGroup("UNHANDLED_ERROR")
                .message(ex.getMessage()).where(ex.getClass().getSimpleName()).body(null).build();

        return ResponseEntity.internalServerError().body(err);
    }
}