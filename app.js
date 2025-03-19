// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let friends = [];
const inputFriend = document.getElementById("amigo");

function sortearAmigo() {}

function agregarAmigo() {
  if (!inputFriend.value) {
    alert("Ingrese el nombre de un amigo");
  } else if (friends.includes(inputFriend.value)) {
    alert("Este amigo ya está en la lista");
  } else {
    friends.push(inputFriend.value);
    showFriendsList();
  }

  console.log(friends);
}

function showFriendsList() {
  const friendsList = document.getElementById("listaAmigos");
  friendsList.innerHTML = "";

  for (let i = 0; i < friends.length; i++) {
    const li = document.createElement("li");
    li.textContent = friends[i];
    friendsList.appendChild(li);
  }

}

function sortearAmigo() {
    if (friends.length === 0) {
        alert("No hay amigos para sortear");
        
        return;
    } 

    const randomIndex = Math.floor(Math.random() * friends.length); 
    const amigoSorteado = friends[randomIndex];
  
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>Amigo sorteado: ${amigoSorteado}</li>`;
}