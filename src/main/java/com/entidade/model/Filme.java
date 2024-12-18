package com.entidade.model;

public class Filme {
    private int id;
    private String title;
    private String genre;
    private int release_year;

    public int getId() { return id; }
    public void setId(int id) { this.id = id; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getGenre() { return genre; }
    public void setGenre(String genre) { this.genre = genre; }

    public Integer getRelease_year() { return release_year; }
    public void setRelease_year(Integer release_year) { this.release_year = release_year; }
}
