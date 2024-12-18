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
        System.out.println("1. [POST] /movies - Para adicionar um filme.");
        System.out.println("2. [GET]  /movies - Para listar todos os filmes.");
        System.out.println("\nObservacao: Só consegui tocar no projeto bem tarde\ne não implementei ainda algumas funcionalidades tais como:\nseparar os endpoints para add(/add_filme e listar(/listar_filmes)");
        System.out.println("===================================================================\n");
    }
}
