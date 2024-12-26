package com.entidade;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class FilmeApp2Application {

    public static void main(String[] args) {
        SpringApplication.run(FilmeApp2Application.class, args);
        System.out.println("\n===================================================================");
        System.out.println("🎬 Filmes Application v9.9.9 está rodando! 😎🍿");
        System.out.println("Acesse o front-end da aplicação em: http://localhost:3000");
        System.out.println("🚀 Como iniciar o front-end:");
        System.out.println("1. Navegue até o diretório do projeto do front-end.");
        System.out.println("2. Execute o comando 'npm install' para instalar as dependências.");
        System.out.println("3. Execute o comando 'npm start' para iniciar o front-end.");
        System.out.println("===================================================================\n");
    }
}
