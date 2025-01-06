package com.entidade.service;

import com.entidade.exception.InvalidFilmeException;
import com.entidade.model.Filme;
import com.entidade.repository.FilmeRepository;
import org.junit.jupiter.api.Test;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

class FilmeServiceTest {

    @Test
    void testSaveFilmeValid() {
        FilmeRepository repository = mock(FilmeRepository.class);
        FilmeService service = new FilmeService(repository);

        // Usando o construtor parametrizado
        Filme filme = new Filme(1, "Inception", "Sci-Fi", 2010);
        when(repository.saveFilme(filme)).thenReturn(1);

        int result = service.saveFilme(filme);
        assertEquals(1, result);
    }

    @Test
    void testSaveFilmeInvalidTitle() {
        FilmeRepository repository = mock(FilmeRepository.class);
        FilmeService service = new FilmeService(repository);

        Filme filme = new Filme(1, "", "Sci-Fi", 2010);
        Exception exception = assertThrows(InvalidFilmeException.class, () -> service.saveFilme(filme));
        assertEquals("O título do filme é obrigatório.", exception.getMessage());
    }

    @Test
    void testGetFilmeById() {
        FilmeRepository repository = mock(FilmeRepository.class);
        FilmeService service = new FilmeService(repository);

        Filme filme = new Filme(1, "Inception", "Sci-Fi", 2010);
        when(repository.getFilmeById(1)).thenReturn(Optional.of(filme));

        Optional<Filme> result = service.getFilmeById(1);
        assertTrue(result.isPresent());
        assertEquals("Inception", result.get().getTitle());
    }

    @Test
    void testDeleteFilme() {
        FilmeRepository repository = mock(FilmeRepository.class);
        FilmeService service = new FilmeService(repository);

        when(repository.deleteFilme(1)).thenReturn(true);

        boolean result = service.deleteFilme(1);
        assertTrue(result);
    }
}
