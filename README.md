## 🎬 **Filmes Application v9.9.9**

Esta é uma aplicação completa de gestão de filmes, composta por um **backend RESTful** desenvolvido com **Spring Boot** e **MySQL**, e um **frontend em React**. Inclui funcionalidades para adicionar, editar, listar, e remover filmes.

---

### 📋 **Pré-requisitos**

Certifique-se de que as ferramentas abaixo estão instaladas no sistema:

1. **Java JDK 21** ou superior:  
   - Verifique a instalação com:
     ```bash
     java -version
     ```
   - Baixe e instale: [Java JDK](https://www.oracle.com/java/technologies/javase-jdk21-downloads.html).

2. **MySQL**:  
   - Configure o banco de dados conforme as instruções no tópico **Configuração do Banco de Dados**.

3. **Node.js e npm** (para rodar o frontend):
   - Verifique a instalação com:
     ```bash
     node -v
     npm -v
     ```
   - Baixe e instale: [Node.js](https://nodejs.org/).

---

### ⚙️ **Configuração do Banco de Dados**

1. Crie o banco de dados e a tabela no MySQL:
   ```sql
   CREATE DATABASE filmes_db;

   USE filmes_db;

   CREATE TABLE filmes (
       id BIGINT AUTO_INCREMENT PRIMARY KEY,
       title VARCHAR(255) NOT NULL,
       genre VARCHAR(100) NOT NULL,
       release_year INT
   );
   ```

2. Configure o arquivo **`application.properties`** (em `src/main/resources`) com as credenciais do banco de dados:

   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/filmes_db
   spring.datasource.username=root
   spring.datasource.password=admin
   spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

   spring.jpa.hibernate.ddl-auto=update
   ```

---

### 🛠️ **Como Rodar o Projeto**

#### **1. Backend (Spring Boot)**

##### 1.1 **Usando o Maven Wrapper**
Se o Maven não estiver instalado globalmente no sistema, use o Maven Wrapper incluído no projeto.  

- **Para compilar o projeto**:
  ```bash
  ./mvnw clean install
  ```

  No **Windows**, use:
  ```bash
  mvnw.cmd clean install
  ```

- **Para rodar o projeto**:
  ```bash
  ./mvnw spring-boot:run
  ```

  No **Windows**, use:
  ```bash
  mvnw.cmd spring-boot:run
  ```

##### 1.2 **Rodando Diretamente na IDE**
Se estiver utilizando uma IDE como **IntelliJ IDEA** ou **Eclipse**, você pode rodar o projeto diretamente:

1. Localize a classe `FilmeApp2Application` no pacote `com.entidade`.
2. Clique com o botão direito na classe e selecione **Run `FilmeApp2Application.main()`**.

---

#### **2. Frontend (React)**

##### 2.1 **Configuração Inicial**
Navegue até a pasta do frontend e instale as dependências:
```bash
cd frontend
npm install
```

##### 2.2 **Rodar o Frontend**
Para iniciar o servidor de desenvolvimento do React:
```bash
npm start
```

O frontend estará disponível em:  
`http://localhost:3000`

---

### 🌐 **Principais Funcionalidades**

#### **Frontend**
- **Home**: Página inicial com atalhos para todas as funcionalidades.
- **Adicionar Filme**: Interface para cadastrar novos filmes.
- **Gerenciar Filmes**: Lista de filmes com opções para editar e excluir.
- **Sobre**: Página com informações sobre a aplicação.
- **Sair**: Página de logout que redireciona para a página inicial.

#### **Backend**
- Endpoints para criar, listar, buscar, atualizar e excluir filmes.
- Integração com o banco de dados MySQL.

---

### 🌐 **Endpoints da API**

#### **1. Criar Filme**
- **Método:** POST  
- **URL:** `/filmes`  
- **Body JSON:**
   ```json
   {
       "title": "Donnie Darko",
       "genre": "Sci-Fi",
       "releaseYear": 2003
   }
   ```

- **Resposta de Sucesso (200 OK):**
   ```json
   "Filme adicionado com sucesso!"
   ```

#### **2. Listar Todos os Filmes**
- **Método:** GET  
- **URL:** `/filmes`  

- **Resposta de Sucesso (200 OK):**
   ```json
   [
       {
           "id": 1,
           "title": "Donnie Darko",
           "genre": "Sci-Fi",
           "releaseYear": 2003
       }
   ]
   ```

#### **3. Buscar Filme por ID**
- **Método:** GET  
- **URL:** `/filmes/{id}`  

- **Resposta de Sucesso (200 OK):**
   ```json
   {
       "id": 1,
       "title": "Donnie Darko",
       "genre": "Sci-Fi",
       "releaseYear": 2003
   }
   ```

#### **4. Atualizar Filme**
- **Método:** PUT  
- **URL:** `/filmes/{id}`  
- **Body JSON:**
   ```json
   {
       "title": "Donnie Darko - Updated",
       "genre": "Drama",
       "releaseYear": 2004
   }
   ```

- **Resposta de Sucesso (200 OK):**
   ```json
   {
       "id": 1,
       "title": "Donnie Darko - Updated",
       "genre": "Drama",
       "releaseYear": 2004
   }
   ```

#### **5. Deletar Filme**
- **Método:** DELETE  
- **URL:** `/filmes/{id}`  

- **Resposta de Sucesso (204 No Content):**
   ```json
   204 No Content
   ```

---

### 📚 **Tecnologias Utilizadas**

#### **Backend**
- **Java 21**
- **Spring Boot**
- **Spring JDBC**
- **MySQL**
- **Maven Wrapper**

#### **Frontend**
- **React**
- **Bootstrap**
- **React Router**
- **Font Awesome**
