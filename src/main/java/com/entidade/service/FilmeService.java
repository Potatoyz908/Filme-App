package com.entidade.service;

import com.entidade.exception.InvalidFilmeException;
import com.entidade.model.Filme;
import com.entidade.repository.FilmeRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FilmeService {

    private final FilmeRepository filmeRepository;

    public FilmeService(FilmeRepository filmeRepository) {
        this.filmeRepository = filmeRepository;
    }

    public int saveFilme(Filme filme) {
        validaFilme(filme);
        return filmeRepository.saveFilme(filme);
    }

    public List<Filme> getAllFilmes() {
        return filmeRepository.getAllFilmes();
    }

    public Optional<Filme> getFilmeById(int id) {
        return filmeRepository.getFilmeById(id);
    }

    public Optional<Filme> updateFilme(int id, Filme updatedFilme) {
        Optional<Filme> existingFilme = filmeRepository.getFilmeById(id);
        if (existingFilme.isPresent()) {
            filmeRepository.updateFilme(id, updatedFilme);
            return Optional.of(updatedFilme);
        }
        return Optional.empty();
    }

    public boolean deleteFilme(int id) {
        return filmeRepository.deleteFilme(id);
    }

    private void validaFilme(Filme filme) {
        if (filme.getTitle() == null || filme.getTitle().trim().isEmpty()) {
            throw new InvalidFilmeException("O título do filme é obrigatório.");
        }
        if (filme.getGenre() == null || filme.getGenre().trim().isEmpty()) {
            throw new InvalidFilmeException("O gênero do filme é obrigatório.");
        }
    }
}