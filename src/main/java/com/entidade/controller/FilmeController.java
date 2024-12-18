package com.entidade.controller;

import com.entidade.model.Filme;
import com.entidade.service.FilmeService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/filmes")
public class FilmeController {

    private final FilmeService filmeService;

    public FilmeController(FilmeService filmeService) {
        this.filmeService = filmeService;
    }

    @PostMapping
    public ResponseEntity<String> createMovie(@RequestBody Filme filme) {
        int rows = filmeService.saveFilme(filme);
        if (rows > 0) {
            return ResponseEntity.ok("Filme criado com sucesso!");
        } else {
            return ResponseEntity.badRequest().body("Erro ao criar o filme.");
        }
    }

    @GetMapping
    public ResponseEntity<List<Filme>> getAllFilmes() {
        return ResponseEntity.ok(filmeService.getAllFilmes());
    }
}
