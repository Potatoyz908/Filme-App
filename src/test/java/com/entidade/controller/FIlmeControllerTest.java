package com.entidade.controller;

import com.entidade.model.Filme;
import com.entidade.service.FilmeService;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.http.ResponseEntity;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

class FilmeControllerTest {

    @Test
    void testGetAllFilmes() {
        FilmeService filmeService = mock(FilmeService.class);
        FilmeController controller = new FilmeController(filmeService);

        List<Filme> filmes = Arrays.asList(new Filme(1, "Inception", "Sci-Fi", 2010));
        when(filmeService.getAllFilmes()).thenReturn(filmes);

        ResponseEntity<List<Filme>> response = controller.getAllFilmes();
        assertEquals(200, response.getStatusCodeValue());
        assertEquals(1, response.getBody().size());
    }

    @Test
    void testBuscarFilmeById() {
        FilmeService filmeService = mock(FilmeService.class);
        FilmeController controller = new FilmeController(filmeService);

        Filme filme = new Filme(1, "Inception", "Sci-Fi", 2010);
        when(filmeService.getFilmeById(1)).thenReturn(Optional.of(filme));

        ResponseEntity<Filme> response = controller.buscarFilmeById(1);
        assertEquals(200, response.getStatusCodeValue());
        assertEquals("Inception", response.getBody().getTitle());
    }

    @Test
    void testCreateMovie() {
        FilmeService filmeService = mock(FilmeService.class);
        FilmeController controller = new FilmeController(filmeService);

        Filme filme = new Filme(1, "Inception", "Sci-Fi", 2010);
        when(filmeService.saveFilme(filme)).thenReturn(1);

        ResponseEntity<String> response = controller.createMovie(filme);
        assertEquals(200, response.getStatusCodeValue());
        assertEquals("Filme adicionado com sucesso!", response.getBody());
    }

    @Test
    void testDeleteFilme() {
        FilmeService filmeService = mock(FilmeService.class);
        FilmeController controller = new FilmeController(filmeService);

        when(filmeService.deleteFilme(1)).thenReturn(true);

        ResponseEntity<Void> response = controller.deletarFilme(1);
        assertEquals(204, response.getStatusCodeValue());
    }
}
