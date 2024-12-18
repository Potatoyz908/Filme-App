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


    @PutMapping("/{id}")
    public ResponseEntity<Filme> updateFilme(@PathVariable("id") int id, @RequestBody Filme updateFilme) {
        return filmeService.updateFilme(id, updateFilme).map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());


    }


    @PutMapping("/editar_filme")
    public ResponseEntity<List<Filme>>
}
