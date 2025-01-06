package com.entidade.model;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;

public class Filme {
    private int id;

    @NotBlank(message = "O título do filme é obrigatório.")
    private String title;

    @NotBlank(message = "O gênero do filme é obrigatório.")
    private String genre;

    @NotNull(message = "O ano de lançamento do filme é obrigatório.")
    @Positive(message = "O ano de lançamento do filme deve ser um número positivo.")
    private int release_year;

    public Filme() {}

    public Filme(int id, String title, String genre, int release_year) {
        this.id = id;
        this.title = title;
        this.genre = genre;
        this.release_year = release_year;
    }

    public int getId() { return id; }
    public void setId(int id) { this.id = id; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getGenre() { return genre; }
    public void setGenre(String genre) { this.genre = genre; }

    public Integer getRelease_year() { return release_year; }
    public void setRelease_year(Integer release_year) { this.release_year = release_year; }
}
