package com.entidade.service;

import com.entidade.exception.InvalidFilmeException;
import com.entidade.model.Filme;
import com.entidade.repository.FilmeRepository;
import org.springframework.stereotype.Service;

import java.util.List;

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

    private void validaFilme(Filme filme) {
        if (filme.getTitle() == null || filme.getTitle().trim().isEmpty()) {
            throw new InvalidFilmeException("O título do filme é obrigatório.");
        }
        if (filme.getGenre() == null || filme.getGenre().trim().isEmpty()) {
            throw new InvalidFilmeException("O gênero do filme é obrigatório.");
        }

    }
}
