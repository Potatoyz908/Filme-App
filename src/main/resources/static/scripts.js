const apiUrl = "http://localhost:8080/filmes";

document.getElementById("add-film-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const title = document.getElementById("title").value;
    const genre = document.getElementById("genre").value;
    const release_year = document.getElementById("release_year").value;

    const response = await fetch(${apiUrl}/add_filme, {
    method: "POST",
        headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, genre, release_year }),
});

if (response.ok) {
    alert("Filme adicionado com sucesso!");
    loadFilms();
} else {
    alert("Erro ao adicionar o filme.");
}
})

async function loadFilms() {
    const response = await fetch(${apiUrl}/listar_filmes);
    const films = await response.json();

    const filmList = document.getElementById("films");
    filmList.innerHTML = "";

    films.forEach((film) => {
        const li = document.createElement("li");
        li.textContent = ${film.title} (${film.genre}, ${film.release_year});
        filmList.appendChild(li);
    });
}

window.onload = loadFilms;