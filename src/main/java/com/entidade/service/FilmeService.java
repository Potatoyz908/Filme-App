package com.entidade.service;

import com.entidade.model.Filme;
import com.entidade.repository.FilmeRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FilmeService{

    private final FilmeRepository filmeRepository;

    public FilmeService(FilmeRepository filmeRepository) {
        this.filmeRepository = filmeRepository;
    }

    public int saveFilme(Filme filme) {
        return filmeRepository.saveFilme(filme);
    }

    public List<Filme> getAllFilmes() {
        return filmeRepository.getAllFilmes();
    }
}
