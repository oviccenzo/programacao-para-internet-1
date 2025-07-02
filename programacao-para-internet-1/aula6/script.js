/*Ao clicar em um elemento do menu, o conteudo da area
central sera alterado*/

/**
 * 1)Selecionar o elemento que vai disparar a ação ou evento
*/


/*js com estrutura de re*/
var lista = document.getElementsByTagName('li');

for(let i = 0; i< lista.length; i++){
    lista[i].onmouseover = function(){
        lista[i].style.textDecoration = "underline";
        lista[i].style.cursor = "pointer";
    }

    lista[i].onmouseleave = function(){
        lista[i].style.textDecoration = "none";
    }
}

var conteudo = ["home","contato","cursos","comercial"]

for(let i = 0; i < lista.length; i++){
    lista[i].onclick = function(){
        document.getElementById("content").innerHTML = conteudo[i];
    }
}