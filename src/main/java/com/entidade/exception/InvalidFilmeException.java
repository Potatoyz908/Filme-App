package com.entidade.exception;

public class InvalidFilmeException extends RuntimeException {
    public InvalidFilmeException(String message) {
        super(message);
    }
}
