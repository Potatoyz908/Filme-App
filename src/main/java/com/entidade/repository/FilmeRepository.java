package com.entidade.repository;

import com.entidade.model.Filme;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

@Repository
public class FilmeRepository {

    private final JdbcTemplate jdbcTemplate;

    public FilmeRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public int saveFilme(Filme filme) {
        String sql = "INSERT INTO filmes (title, genre, release_year) VALUES (?, ?, ?)";
        return jdbcTemplate.update(sql, filme.getTitle(), filme.getGenre(), filme.getRelease_year());
    }

    public List<Filme> getAllFilmes() {
        String sql = "SELECT * FROM filmes";
        return jdbcTemplate.query(sql, this::mapRowToFilme);
    }

    private Filme mapRowToFilme(ResultSet rs, int rowNum) throws SQLException {
        Filme filme = new Filme();
        filme.setId(rs.getInt("id"));
        filme.setTitle(rs.getString("title"));
        filme.setGenre(rs.getString("genre"));
        filme.setRelease_year(rs.getInt("release_year"));
        return filme;
    }
}
