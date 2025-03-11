//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
function adicionarAmigo() {
    let input = document.getElementById("amigo"); // Obtém o input
    let nome = input.value.trim(); // Remove espaços extras

    if (nome !== "") {
        let lista = document.getElementById("listaAmigos"); // Obtém a lista
        let item = document.createElement("li"); // Cria um novo <li>
        item.textContent = nome; // Adiciona o nome no <li>
        lista.appendChild(item); // Adiciona o <li> na lista
        input.value = ""; // Limpa o input
    } else {
        alert("Digite um nome válido!");
    }
}
function sortearAmigo() {
    let lista = document.getElementById("listaAmigos").getElementsByTagName("li");
    
    if (lista.length === 0) {
        alert("Adicione pelo menos um nome antes de sortear!");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * lista.length);
    let nomeSorteado = lista[indiceSorteado].textContent;

    document.getElementById("resultado").textContent = `🎉 Amigo sorteado: ${nomeSorteado} 🎉`;}