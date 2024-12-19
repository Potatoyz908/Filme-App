package com.entidade;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class FilmeApp2Application {

    public static void main(String[] args) {
        SpringApplication.run(FilmeApp2Application.class, args);
        System.out.println("\n===================================================================");
        System.out.println("🎬 Filmes Application v9.9.9 está rodando! 😎🍿");
        System.out.println("Acesse: http://localhost:8080");
        System.out.println("Endpoints disponíveis:");
        System.out.println("1. [POST] /filmes/add_filme - Para adicionar um filme.");
        System.out.println("2. [GET]  /filmes/listar_filmes - Para listar todos os filmes.");
        System.out.println("3. [PUT]   /filmes/editar_filme - Para editar um filme.");
        System.out.println("4. [GET]   /filmes/{id} - Para buscar um filme pelo ID.");
        System.out.println("5. [Delete]    /filmes/{id} - Para remover um filme.");
        System.out.println("===================================================================\n");
    }
}
