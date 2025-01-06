package com.entidade.controller;

import com.entidade.model.Filme;
import com.entidade.service.FilmeService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/filmes")
public class FilmeController {

    private final FilmeService filmeService;

    public FilmeController(FilmeService filmeService) {
        this.filmeService = filmeService;
    }

    @PostMapping("/add_filme")
    public ResponseEntity<String> createMovie(@RequestBody Filme filme) {
        int rows = filmeService.saveFilme(filme);
        if (rows > 0) {
            return ResponseEntity.ok("Filme adicionado com sucesso!");
        } else {
            return ResponseEntity.badRequest().body("Erro ao adicionar o filme.");
        }
    }

    @GetMapping("/listar_filmes")
    public ResponseEntity<List<Filme>> getAllFilmes() {
        return ResponseEntity.ok(filmeService.getAllFilmes());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Filme> buscarFilmeById(@PathVariable int id) {
        Optional<Filme> filme = filmeService.getFilmeById(id);
        return filme.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<Filme> atualizarFilme(@PathVariable int id, @RequestBody Filme updatedFilme) {
        Optional<Filme> filme = filmeService.updateFilme(id, updatedFilme);
        return filme.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletarFilme(@PathVariable int id) {
        boolean deletado = filmeService.deleteFilme(id);
        if (deletado) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}


